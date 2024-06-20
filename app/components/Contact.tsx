import React from 'react';
import {Input, Textarea, Button} from "@nextui-org/react";
import {BiTime} from 'react-icons/bi';
import {AiOutlinePhone} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='flex flex-col xl:flex-row items-start justify-between'>
        <div className='space-y-3 xl:w-[50%]'>
            <p className='text-black text-5xl font-medium'>Contactez-nous</p>
            <p className='text-gray-500 text-base font-normal'>Contactez-nous pour toutes vos questions, besoins ou préoccupations. Notre équipe dévouée est prête à vous offrir une assistance exceptionnelle et des réponses rapides.</p>
            <div className='mt-2'>
              <div className='flex items-center space-x-3'>
                <AiOutlinePhone size={20} />
                <p className='text-base text-gray-500'>+212 680 162 664</p>
              </div>
              <div className='flex items-center space-x-3'>
                <BiTime size={20} />
                <p className='text-base text-gray-500'>Lun - Ven | 08:00 - 18:00</p>
              </div>
            </div>
        </div>
        <div className='xl:w-[50%] mt-3 xl:mt-0'>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="text" label="Nom Complet" placeholder="Votre nom et prénom"/>
                <Input type="email" label="Email" placeholder="Entrer votre mail" />
            </div>
            <div className='mt-4'>
                <Textarea
                    label="Message"
                    labelPlacement="inside"
                    placeholder="Entrer votre message"
                    className=""
                />
            </div>
            <div className='mt-3'>
                <Button color='primary' variant='solid' size='lg' radius='full' className='text-xl' >Envoyer</Button>
            </div>
        </div>        
    </div>
  )
}

export default Contact