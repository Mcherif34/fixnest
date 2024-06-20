import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function RightSlide() {
  return (
    <div className="hidden max-w-screen-2xl gap-2 xl:grid grid-cols-12 grid-rows-2 pr-8 mt-5">
    {/* <Card className="col-span-12 sm:col-span-4 h-[300px] animate-bounce">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white uppercase font-bold">Issue</p>
        <h4 className="text-black font-medium text-large">Gestion des problèmes simplifiée</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/issue-management.svg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] animate-bounce-8s">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white uppercase font-bold">Team</p>
        <h4 className="text-black font-medium text-large">Collaboration facilitée</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/collab-management.svg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] animate-bounce-10s">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white uppercase font-bold">Project</p>
        <h4 className="text-black font-medium text-large">Suivi des Projets en Temps Réel</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/project-management.svg"
      />
    </Card> */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 animate-bounce-10s">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white uppercase font-bold">Notification</p> */}
        {/* <h4 className="text-black font-medium text-2xl">Soyez à l'écoute de votre équipe</h4> */}
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/images/bg-one.svg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">En un clique.</p>
          <p className="text-black text-tiny"></p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Contactez-nous
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 animate-bounce-8s">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4> */}
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/images/bg-two.svg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {/* <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/bg-two.svg"
          /> */}
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Pour plus d'informations</p>
            <p className="text-tiny text-white/60">Essayer la démo</p>
          </div>
        </div>
        <Button radius="full" size="sm">S'inscrire</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
