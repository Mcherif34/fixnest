import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { AiFillBug } from 'react-icons/ai';
import { BiCog, BiSolidCustomize } from 'react-icons/bi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { IoMdNotifications } from 'react-icons/io';
import { MdPriorityHigh } from 'react-icons/md';
import { PiTargetBold } from 'react-icons/pi';

const Services = () => {
  return (
    <div className='w-full pt-10 px-20' id='decouverte'>
        <div className='grid grid-cols-4 gap-4'>
        <Card className="col-span-12 md:col-span-2 lg:col-span-1 bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <AiFillBug />
            </div>
            <h4 className="text-black font-medium text-base">Optimiser la gestion des bugs</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Notre plateforme simplifie le suivi, la résolution et la communication autour des problèmes de projet, éliminant les obstacles sur la voie de la réussite.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1 bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <FaPeopleGroup />
            </div>
            <h4 className="text-black font-medium text-base">Collaborer en toute simplicité</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Faciliter la collaboration d&apos;équipe en permettant aux membres de signaler et de résoudre les bugs rapidement et en toute transparence.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12  md:col-span-2 lg:col-span-1   bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <GrProjects />
            </div>
            <h4 className="text-black font-medium text-base">Garder un Œil sur vos projets</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Surveiller en temps réel l&apos;état de vos projets, avec des mises à jour instantanées sur les bugs et les progrès, pour rester toujours informé.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1   bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <MdPriorityHigh />
            </div>
            <h4 className="text-black font-medium text-base">Prioriser les bugs importants</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Prioriser les bugs en fonction de leur impact et de leur urgence, en vous concentrant sur ce qui compte le plus pour vos projets.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1 bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <BiSolidCustomize />
            </div>
            <h4 className="text-black font-medium text-base">Personnalisation à votre image</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Personnaliser l&apos;apparence de votre espace de travail, adaptez-le à l&apos;image de votre organisation et créez une expérience unique.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1   bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <BiCog />
            </div>
            <h4 className="text-black font-medium text-base">Connecter vos outils Essentiels</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Intégrer notre plateforme à d&apos;autres outils essentiels pour améliorer votre flux de travail et optimiser la gestion de projets.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1   bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <IoMdNotifications />
            </div>
            <h4 className="text-black font-medium text-base">Rester toujours informé</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Restez informé grâce à des notifications en temps réel, vous alertant sur les problèmes critiques et les mises à jour importantes.</p>
          </CardBody>
        </Card>
        <Card className="w-full col-span-12 md:col-span-2  lg:col-span-1   bg-primary/5">
          <CardHeader className="absolute z-10 top-1 flex items-center space-x-5">
            <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
              <PiTargetBold />
            </div>
            <h4 className="text-black font-medium text-base">Comprener vos projets en profondeur</h4>
          </CardHeader>
          <CardBody className='mt-14'>
            <p>Analyser les tendances, générer des rapports détaillés et tirez des insights pour améliorer vos processus de gestion de projets.</p>
          </CardBody>
        </Card>
       
      </div>
      </div>
  )
}

export default Services