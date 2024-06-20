"use client";

import React, { useState } from 'react';
import classnames from 'classnames';
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import {BiCheck} from 'react-icons/bi';
import { CardFooter } from '@/components/ui/card';

const Pricing = () => {
  const [status, setStatus] = useState("monthly");

  return (
    <div>
      <div className='px-10 pt-8 flex items-center justify-center'>
      <div className='xl:w-[45%] md:w-[50%] w-full rounded-full flex items-center justify-between px-2 py-2 bg-white'>
        <div 
          onClick={()=>setStatus('monthly')}
          className={classnames({
            'bg-primary text-white' : status === 'monthly',
            'bg-white text-primary': status !== 'monthly',
            'cursor-pointer px-5 py-1 xl:px-20 xl:py-2 font-medium text-lg rounded-full transition-all duration-200': true
          })}>
          Mensuel
        </div>
        <div 
          onClick={()=>setStatus('annualy')}
          className={classnames({
            'bg-primary text-white' : status === 'annualy',
            'bg-white text-primary': status !== 'annualy',
            'cursor-pointer px-5 py-1 xl:px-20 xl:py-2 font-medium text-lg rounded-full transition-all duration-200': true
          })}>
            Annuel (économisez 10%)
          </div>
      </div>
    </div>
    <div className='grid xl:grid-cols-3 grid-cols-2 grid-rows-1  gap-4 mt-10 xl:px-32 px-10'>
        <Card className="col-span-12 md:col-span-2 lg:col-span-1 bg-white h-[600px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start space-y-3 pl-5">
            <div className='flex items-center justify-center bg-primary px-3 py-1 rounded-full text-white text-base'>
              Essentiel
            </div>
            <p className="text-gray-500 font-normal text-sm w-[90%]">Le plan Essentiel est conçu pour les utilisateurs individuels et les petites équipes qui cherchent à démarrer leur gestion de projets de manière efficace.</p>
          </CardHeader>
          <CardBody className='top-36'>
            <div>
              {/* price */}
              <div className='pb-6 border-b border-gray-300'>
                <h2 className='text-5xl font-bold text-black flex items-end'>{status==='monthly' ? '29,99 €':'323,89 €'}<p className='text-gray-500 text-lg items-end ml-3'>{status==='monthly' ? '/mois':'/an'}</p></h2>
              </div>      
              {/* checklist */}
              <div className='mt-8 pb-10 border-b border-gray-300'>
                <ul className='space-y-3'>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Gestion de projets de base</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Collaboration en équipe</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Suivi du temps et des tâches</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Tableau de bord personnalisable</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Support par e-mail</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <CardFooter className="absolute bottom-0 flex items-center justify-center w-full pt-0">
            <Button className="w-[100%]" color="primary" variant='bordered' radius="full" size='lg'>
              Commencer
            </Button>
        </CardFooter>
        </Card>
        <Card className="col-span-12 md:col-span-2 lg:col-span-1 bg-white h-[600px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start space-y-3 pl-5">
            <div className='flex items-center justify-center bg-primary px-3 py-1 rounded-full text-white text-base'>
              Plan Pro
            </div>
            <p className="text-gray-500 font-normal text-sm w-[90%]">Le plan Pro offre des fonctionnalités avancées pour les petites entreprises et les équipes qui souhaitent un meilleur contrôle de leurs projets.</p>
          </CardHeader>
          <CardBody className='top-36'>
            <div>
              {/* price */}
              <div className='pb-6 border-b border-gray-300'>
                <h2 className='text-5xl font-bold text-black flex items-end'>{status==='monthly' ? '49,99 €':'539,89 €'}<p className='text-gray-500 text-lg items-end ml-3'>{status==='monthly' ? '/mois':'/an'}</p></h2>
              </div>      
              {/* checklist */}
              <div className='mt-8 pb-10 border-b border-gray-300'>
                <ul className='space-y-3'>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Gestion avancée de projets</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Collaboration en temps réel</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Rapports personnalisés</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Intégrations avec d&apos;autres outils</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Support prioritaire</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <CardFooter className="absolute bottom-0 flex items-center justify-center w-full">
            <Button className="w-[100%]" color="primary" variant='bordered' radius="full" size='lg'>
              Commencer
            </Button>
        </CardFooter>
        </Card>
        <Card className="col-span-12 md:col-span-2 lg:col-span-1 bg-white h-[600px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start space-y-3 pl-5">
            <div className='flex items-center justify-center bg-primary px-3 py-1 rounded-full text-white text-base'>
              Master +
            </div>
            <p className="text-gray-500 font-normal text-sm w-[90%]">Le plan Master + est la quintessence de la personnalisation. Avec ce plan, c&apos;est vous qui décidez de chaque aspect de votre abonnement.</p>
          </CardHeader>
          <CardBody className='top-36'>
            <div>
              {/* price */}
              <div className='pb-6 border-b border-gray-300'>
                <h2 className='text-5xl font-bold text-black flex items-end'>Discutons-en!</h2>
              </div>      
              {/* checklist */}
              <div className='mt-8 pb-10 border-b border-gray-300'>
                <ul className='space-y-3'>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Personnalisez votre gestion de projets à partir 0</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Créez des processus de collaboration sur mesure</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Concevez des rapports et des analyses avancés</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Personnalisez chaque aspect de l&apos;interface</p>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <BiCheck size={28} />
                    <p className='text-sm text-gray-700 font-normal'>Bénéficiez d&apos;un support dédié</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <CardFooter className="absolute bottom-0 flex items-center justify-center w-full pt-0">
            <Button className="w-[100%]" color="primary" radius="full" size='lg'>
              Contactez-nous
            </Button>
        </CardFooter>
        </Card>
      </div>
    </div>
    
  )
}

export default Pricing