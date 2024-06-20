import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import {MdNotificationsActive} from 'react-icons/md';
import {LiaToggleOnSolid} from 'react-icons/lia';
import {BsCheckAll, BsExclamationTriangle} from 'react-icons/bs';
import {CircularProgress} from "@nextui-org/react";


const notifications = [
  {
    title: "Le projet a été assigné.",
    description: "Il y a 1 heure",
  },
  {
    title: "Vous avez un nouveau message!",
    description: "Il y a 1 heure",
  },
  {
    title: "Votre abonnement expire bientôt!",
    description: "Il y a 2 heures",
  },
];


const Plateforme = () => {
  return (
    <div className="max-w-screen-2xl gap-2 grid grid-cols-12 grid-rows-2 mt-5 xl:px-52 px-10">
    <Card className="col-span-12 sm:col-span-4 h-[400px] bg-gradient-to-r from-sky-100 to-sky-50">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-black font-medium text-lg">Notification</h4>
        <p className="text-tiny text-gray-500 uppercase font-bold">Vous avez 3 messages non lus.</p>
      </CardHeader>
      <CardBody className='pt-20'>
        <div className=" flex items-center space-x-4 bg-white rounded-xl border border-gray-200 p-2">
          <MdNotificationsActive size={28} />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Envoyez des notifications sur l&apos;appareil.
            </p>
          </div>
          <LiaToggleOnSolid size={28} />
        </div>

        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0 mt-3"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Button className="w-full bg-sky-500" radius='full'>
          <BsCheckAll className="mr-2" size={24} /> Marquer tout comme lu
        </Button>
      </CardFooter>
    </Card>

    <Card className="col-span-12 sm:col-span-4 h-[400px] bg-gradient-to-r from-green-100 to-green-50">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-black font-medium text-large">Projets</h4>
        <p className="text-sm text-muted-foreground">Explorez votre projet de manière détaillée grâce à notre fonction de visualisation, offrant une vue complète et approfondie de chaque aspect de votre travail.</p>
      </CardHeader>
      
    <CardBody className='pt-0 flex-row items-end space-x-4'>
        <CircularProgress
          label="Progression"
          size="lg"
          value={70}
          color="success"
          // formatOptions={{ style: "text", unit: "statut" }}
          showValueLabel={true}
          classNames={{
            svg: "w-32 h-32 drop-shadow-md",
            indicator: "stroke-green-500",
            track: "stroke-green-500/10",
            value: "text-3xl font-semibold text-black",
          }}
        />
        <div className='flex-col items-center justify-end'>
          {/* <BsExclamationTriangle size={24} /> */}
          <p className='text-5xl text-green-300 font-bold'>+ 32%</p>
          <p className="text-sm text-muted-foreground">d'amélioration par rapport au mois dernier</p>
        </div>
      </CardBody>
      <CardFooter>
        <Button color='success' radius='full' className="w-full">
          Voir plus de détails
        </Button>
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[400px] bg-gradient-to-r from-orange-100 to-orange-50">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-black font-medium text-large">Tâches</h4>
        <p className="text-sm text-muted-foreground">Gérez vos tâches en toute simplicité grâce à une interface conviviale et des outils de suivi performants.</p>
      </CardHeader>
      <CardBody className='pt-0 flex-row items-end space-x-4'>
        <CircularProgress
          label="Performance"
          size="lg"
          value={60}
          color="warning"
          // formatOptions={{ style: "text", unit: "statut" }}
          showValueLabel={true}
          classNames={{
            svg: "w-32 h-32 drop-shadow-md",
            indicator: "stroke-orange-500",
            track: "stroke-orange-500/10",
            value: "text-3xl font-semibold text-black",
          }}
        />
        <div className='flex-col items-center justify-end'>
          {/* <BsExclamationTriangle size={24} /> */}
          <p className='text-5xl text-orange-300 font-bold'>+ 11%</p>
          <p className="text-sm text-muted-foreground">d&apos;amélioration par rapport à la semaine dernière.</p>
        </div>
        
      </CardBody>
      <CardFooter>
        <Button color='warning' radius='full' className="w-full">
          Explorer en détail
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white uppercase font-bold">Notification</p> */}
        {/* <h4 className="text-black font-medium text-2xl">Soyez à l'écoute de votre équipe</h4> */}
      </CardHeader>
      {/* <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-top"
        src="/images/graph.png"
      /> */}
      {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">En un clique.</p>
          <p className="text-black text-tiny"></p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Contactez-nous
        </Button>
      </CardFooter> */}
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 ">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4> */}
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/images/dashboard.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {/* <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/dashboard.png"
          /> */}
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Le tableau de bord</p>
            <p className="text-tiny text-white/60">Essayer la démo</p>
          </div>
        </div>
        <Button radius="full" size="sm">contactez-nous</Button>
      </CardFooter>
    </Card>
  </div>
  )
}

export default Plateforme