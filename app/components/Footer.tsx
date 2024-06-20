import { Button, Input } from '@nextui-org/react';
import React from 'react';
import {FaFacebookF, FaXTwitter} from 'react-icons/fa6';
import {FaLinkedinIn} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='absolute min-h-[400px] bottom-0 right-0 left-0 bg-[#170B30]'>
        <div className=' h-[90px] xl:h-[70px] border-b border-gray-600 flex flex-col xl:flex-row items-center space-y-2 xl:space-y-0 pb-2 xl:pb:0 justify-between py-3 xl:py-0 px-10 xl:px-32'>
            <div className='flex flex-row items-center space-x-3 w-ful xl:w-[50%]'>
                <Input type="text" radius='full' className='w-80' placeholder="Recevez des mises à jour régulières"/>
                <Button variant='bordered' radius='full' color='secondary' className='px-10'>S&apos;inscrire</Button>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-white text-sm'>Connectez-vous avec nous :</p>
                <div className='flex items-center space-x-3 text-white'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaXTwitter />
                </div>
            </div>
        </div>

        <div className='flex flex-col xl:flex-row space-y-5 xl:space-y-0 items-start w-full justify-center xl:items-start xl:justify-between px-1 xl:px-32 mt-10'>
            <div className='flex flex-col items-center px-5 xl:px-0 justify-center xl:items-start xl:justify-between w-full xl:w-[60%]'>
                <p className='text-lg font-medium text-white'>Une solution conçue par des ingénieurs, pour des ingénieurs.</p>
                <p className='text-sm text-gray-400 mt-2'>Notre plateforme offre des outils puissants et des fonctionnalités adaptées aux défis spécifiques que rencontrent les professionnels de l'ingénierie. Simplifiez la gestion de projets, optimisez les processus, et collaborez efficacement au sein de votre équipe technique.</p>
                <Button variant='bordered' color='secondary' radius='full' className='mt-4'>Nous contacter</Button>
            </div>
            <div className='flex items-center justify-center space-x-10 xl:space-x-36 w-full'>
                <div>
                    <p className='text-md font-medium text-white'>Contact</p>
                    <ul>
                        <li className='text-gray-400 font-normal'>Support en ligne</li>
                        <li className='text-gray-400 font-normal'>Foire aux Questions (FAQ)</li>
                        <li className='text-gray-400 font-normal'>Assistance Client</li>
                    </ul>
                </div>
            <div>
                <p className='text-md font-medium text-white'>Plus d&apos;information</p>
                <ul>
                    <li className='text-gray-400 font-normal'>Partenaires</li>
                    <li className='text-gray-400 font-normal'>Politique de Confidentialité</li>
                    <li className='text-gray-400 font-normal'>Conditions d&apos;Utilisation</li>
                </ul>
            </div>
            </div>
            
            <div className=' hidden xl:flex items-center justify-center'>
                <Image alt='logo' src="/images/logo.png" width={140} height={140} />
            </div>
        </div>

        <div className='relative w-full pt-20'>
            <div className='border-t border-gray-500 bottom-0 text-center text-white pt-1'>
               FixNest © 2023, Tous droits réservés.
            </div>
        </div>
    </div>
  )
};

export default Footer;