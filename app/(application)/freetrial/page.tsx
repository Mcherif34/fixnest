"use client";
import Header from '@/app/components/Header';
import { Button, Input, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Organization } from '@prisma/client';
import axios from 'axios';
import { organizationSchema } from '@/app/validationSchema';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/components/errorMessage';
import {RxCross2} from 'react-icons/rx';
import {AiOutlineCheck} from 'react-icons/ai';

type organizationForm = z.infer<typeof organizationSchema>;

const RegisterPage = () => {
  const {register, control, handleSubmit, formState: {errors}} = useForm<organizationForm>({
        resolver: zodResolver(organizationSchema)
    });

    const router = useRouter();
    const [isSubmitting, setIsSubmitting]= useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const registerOrganization = handleSubmit(async (data) => {
      setIsSubmitting(true);
     
        await axios.post("/api/organization", data).then((result) => {

          if(result.status === 201){
            setError("");
            setSuccess("Votre inscription à été effectué avec succès.")
            router.push('/');
          }

        }).catch((err) => {
         
          if(err.response.status === 500) {
            setIsSubmitting(false);
            setError("Une erreur s'est produite lors de la création de l'entreprise. Veuillez ressayer");
          }
        });

    });

    
  return (
    <main className='wh-screen h-screen flex flex-col xl:flex-row items-start'>
        <div className=' w-full xl:w-[50%] h-full p-10'>
            <div className='mb-4'>
                <Image src="/logo-white.png" width={200} height={150} alt="logo" />
            </div>
            <div className='space-y-2'>
                <p className='text-4xl font-medium text-black'>Créer votre compte</p>
                <p className='text-base text-gray-400 font-normal'>Remplissez le formulaire pour accéder à notre plateforme et bénéficier de fonctionnalités personnalisées. Votre voyage vers une gestion plus efficace et transparente des projets commence ici.</p>
            </div>
            <div className='mt-10'>
              {error && 
                <div className='bg-red-100 rounded-lg flex items-center space-x-3 px-3 py-2 mb-4'>
                  <RxCross2 color="red" />
                  <p className='text-red-400'>{error}</p>
                </div>
              }
              {success && 
                <div className='bg-green-100 rounded-lg flex items-center space-x-3 px-3 py-2 mb-4'>
                  <AiOutlineCheck color="green" />
                  <p className='text-green-400'>{success}</p>
                </div>
              }
              <form onSubmit={registerOrganization}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <div className='w-full xl:w-[50%]'>
                    <Input type="text" color={errors.name?.message? 'danger' : 'default'} label={(<p>Raison social <small className='text-red-500'>*</small></p>)} {...register("name")} labelPlacement='inside' />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                  </div>
                  <div className='w-full xl:w-[50%]'>
                    <Input type="text" color={errors.responsable?.message? 'danger' : 'default'} label={(<p>Responsable <small className='text-red-500'>*</small></p>)} {...register("responsable")} labelPlacement="inside" />
                    <ErrorMessage>{errors.responsable?.message}</ErrorMessage>
                  </div>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
                  <div className='w-full xl:w-[50%]'>
                    <Input type="email" color={errors.email?.message? 'danger' : 'default'} label={(<p>Adresse email <small className='text-red-500'>*</small></p>)} {...register("email")} labelPlacement='inside' />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  </div>
                  <div className='w-full xl:w-[50%]'>
                    <Input type="number" color={errors.phone?.message? 'danger' : 'default'} label={(<p>Téléphone <small className='text-red-500'>*</small></p>)} {...register("phone")} labelPlacement="inside" />
                    <ErrorMessage>{errors.phone?.message}</ErrorMessage>
                  </div>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
                  <div className='w-full xl:w-[50%]'>
                    <Input type="text" color={errors.address?.message? 'danger' : 'default'} label="Adresse" {...register("address")} labelPlacement='inside' />
                    <ErrorMessage>{errors.address?.message}</ErrorMessage>
                  </div>
                  <div className='w-full xl:w-[50%]'>
                    <Input type="text" color={errors.website?.message? 'danger' : 'default'} label="site web" {...register("website")} labelPlacement="inside" />
                    <ErrorMessage>{errors.website?.message}</ErrorMessage>
                  </div>
                </div>
                <div className='mt-4 mb-4 text-center xl:text-start'>
                  <p className='text-sm'>En cliquant sur <strong>S&apos;inscrire</strong>, vous acceptez nos <small className='text-primary text-sm'>Conditions d'Utilisation</small> et notre <small className='text-primary text-sm'>Politique de Confidentialité</small>.</p>
                </div>
                <div className='flex xl:flex-col items-center xl:items-start justify-center'>
                  <Button color={isSubmitting ? "secondary" : "primary"} type='submit' size='lg' disabled={isSubmitting}>
                    S&apos;inscrire {isSubmitting && <Spinner color='primary' />}
                  </Button> 
                </div>
                 
              </form>

              <div className='mt-7 flex flex-col items-center xl:items-start justify-center'>
                <p className='text-base text-gray-400'>Avez-vous déjà un compte ? <small className='text-primary text-base'>Se connecter</small></p>
                <p className='text-base text-gray-400'>Ou bien êtes vous un entrepreneur ? <small className='text-primary text-base'>Créer votre compte</small></p>
              </div>
            </div>
        </div>
        <div className='hidden xl:flex xl:w-[50%] bg-[#301b5e] h-full'>

        </div>
    </main>
  )
}

export default RegisterPage;