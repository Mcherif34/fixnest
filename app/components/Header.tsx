import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
import { FaUserLock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdNightlight } from 'react-icons/md';

const Header = () => {
  return (
    <div className='fixed top-0 flex z-50 items-center justify-between w-full p-10 h-16 backdrop-blur-xl backdrop-opacity-100 backdrop-saturate-100 bg-gradient-to-t from-primary/10 to-primary/5'>
        <div className=''>
          <Image alt="logo" width={170} height={100} src="/fixnest-logo-black.png" />
        </div>
        <div className='hidden xl:block'>
          <ul className='flex items-start justify-start space-x-7 text-gray-600 text-xl font-bold leading-loose'>
            <li className='font-medium cursor-pointer'><Link href="#decouverte">Découverte</Link></li>
            <li className='font-medium cursor-pointer'>Nos offres</li>
            <li className='font-medium cursor-pointer'>Plateforme</li>
            <li className='font-medium cursor-pointer'>Contact</li>
            <li>
              <Button variant='faded'>
                Nouveautés 🎉
              </Button>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-end space-x-8 '>
          <div className='hidden lg:flex items-center space-x-3 '>
            <FaXTwitter size={20} />
            <FcGoogle size={20} />
            <AiFillGithub size={20} />
            <MdNightlight size={20} />
          </div>
          <div className='hidden lg:flex items-center space-x-3 '>
            <Link href="/freetrial"><Button color="primary" variant='shadow' radius='full' className='text-white text-base font-normal' >Démarrer</Button></Link>
            <Link href="/dashboard"><Button color="primary" variant='bordered' radius='full' className='text-primary text-base font-normal' endContent={(<FaUserLock />)} >Connexion</Button></Link>
          </div>
          <div className='xl:hidden flex items-center justify-between'>
          <Sheet>
          <SheetTrigger>
            <AiOutlineMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <ul className='flex-col items-center justify-center space-y-4 text-gray-600 text-lg font-normal leading-loose'>
                  <li className=''>Découverte</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>
                    <Button color="primary" variant='shadow' radius='full' className='text-white text-base font-normal'>Démarrer</Button>
                  </li>
                  <li>
                    <Button color="primary" variant='bordered' radius='full' className='text-primary text-base font-normal' endContent={(<FaUserLock />)} >Connexion</Button>
                  </li>
              </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
        </div>
        
      </div>
  )
}

export default Header