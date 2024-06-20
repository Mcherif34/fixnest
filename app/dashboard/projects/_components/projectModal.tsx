import { projectSchema } from "@/app/validationSchema";
import ErrorMessage from "@/components/errorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Spinner, Textarea, Tooltip} from "@nextui-org/react";
import { Project } from "@prisma/client";
import axios from "axios";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {AiOutlinePlus, AiOutlineCheck} from "react-icons/ai";
import {RxCross2} from 'react-icons/rx';
import {FiEdit2} from 'react-icons/fi';
import { z } from "zod";


type projectForm = z.infer<typeof projectSchema>;

interface AddProjectProps {
  project?: Project 
  onSuccess: () => void; // Définir le type de la fonction de rappel
}

const AddProject = ({ onSuccess, project }: AddProjectProps) => {

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [isAddSubmitting, setIsAddSubmitting]= useState(false);
    const [addSuccess, setAddSuccess] = useState("");
    const [addError, setAddError] = useState("");

    const {register, control, handleSubmit, formState: {errors}} = useForm<projectForm>({
        resolver: zodResolver(projectSchema)
    });

    const registerProject = handleSubmit(async (data) => {
      setIsAddSubmitting(true);
     
      if(project){
        await axios.patch('/api/projects/'+ project.id, data).then((result) => {
          if(result.status === 201){
            setAddError("");
            setAddSuccess("Opération effectuée.");
            setTimeout(()=>{
                onClose();
                onSuccess();
            }, 2000)
          }

        }).catch((err) => {
         
          if(err.response.status === 500) {
            setIsAddSubmitting(false);
            setAddError("Une erreur s'est produite lors de l'ajout'. Veuillez ressayer");
          }
      });
    }
      else{
        await axios.post("/api/projects", data).then((result) => {

          if(result.status === 201){
            setAddError("");
            setAddSuccess("Opération effectuée.");
            setTimeout(()=>{
                onClose();
                onSuccess();
            }, 2000)
          }

        }).catch((err) => {
         
          if(err.response.status === 500) {
            setIsAddSubmitting(false);
            setAddError("Une erreur s'est produite lors de l'ajout'. Veuillez ressayer");
          }
        });
      }
    });

  return (
    <>
    {project? 
      <Tooltip content="Modifier le projet">
        <span onClick={onOpen} className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <FiEdit2 />
        </span>
      </Tooltip> : 
      <Button onPress={onOpen} color="primary" endContent={<AiOutlinePlus />}>
          Nouveau projet
      </Button> 
    }
    <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className='space-y-1'>
                    <p className='text-xl font-medium text-black'>Formulaire d&apos;ajout de projet</p>
                    <p className='text-gray-400 text-sm font-normal'>Remplissez le formulaire ci-dessous pour ajouter un nouveau projet.</p>
                </div>
              </ModalHeader>
              <form onSubmit={registerProject}>
              <ModalBody>
              {addError && 
                <div className='bg-red-100 rounded-lg flex items-center space-x-3 px-3 py-2 mb-4'>
                  <RxCross2 color="red" />
                  <p className='text-red-400'>{addError}</p>
                </div>
              }
              {addSuccess && 
                <div className='bg-green-100 rounded-lg flex items-center space-x-3 px-3 py-2 mb-4'>
                  <AiOutlineCheck color="green" />
                  <p className='text-green-400'>{addSuccess}</p>
                </div>
              }
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <div className='w-full xl:w-[50%] space-y-1'>
                    <p className="text-sm">Intitulé du projet <small className='text-red-500'>*</small></p>
                    <Input type="text" color={errors.title?.message? 'danger' : 'default'} defaultValue={project?.title}  {...register("title")} labelPlacement='inside' />
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                  </div>
                  <div className='w-full xl:w-[50%] space-y-1'>
                    <p className="text-sm">Budget </p>
                    <Input type="number" color={errors.budget?.message? 'danger' : 'default'} defaultValue={project?.budget!} {...register("budget")} labelPlacement="inside" />
                    <ErrorMessage>{errors.budget?.message}</ErrorMessage>
                  </div>
                </div>
                <div className="w-full flex-wrap md:flex-nowrap gap-4 mt-2 space-y-1">
                  <p className="text-sm">Description</p>
                    <Textarea
                        color={errors.description?.message? 'danger' : 'default'} 
                       
                        {...register("description")}
                        labelPlacement='inside'
                        className="max-w-2xl"
                        defaultValue={project?.description!}
                    />
                    <ErrorMessage>{errors.description?.message}</ErrorMessage> 
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2">
                  <div className='w-full xl:w-[50%] space-y-1'>
                    <p className="text-sm">Date de début <small className='text-red-500'>*</small></p>
                    <Input type="date" color={errors.startDate?.message? 'danger' : 'default'} defaultValue={project?.startDate} {...register("startDate")}  />
                    <ErrorMessage>{errors.startDate?.message}</ErrorMessage>
                  </div>
                  <div className='w-full xl:w-[50%] space-y-1'>
                    <p className="text-sm">Date de fin</p>
                    <Input type="date" color={errors.endDate?.message? 'danger' : 'default'} defaultValue={project?.endDate!} {...register("endDate")} />
                    <ErrorMessage>{errors.endDate?.message}</ErrorMessage>
                  </div>
                </div>

              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="bordered" onPress={onClose}>
                  Retour
                </Button>
                <Button color={isAddSubmitting ? "secondary" : "primary"} type='submit' disabled={isAddSubmitting}>
                    Enregistrer {isAddSubmitting && <Spinner color='primary' />}
                  </Button> 
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default AddProject