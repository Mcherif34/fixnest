import Image from 'next/image'
import {Button} from '@nextui-org/button';
import {FaUserLock} from 'react-icons/fa';
import {FaPeopleGroup} from 'react-icons/fa6';
import {FaXTwitter} from 'react-icons/fa6';
import {AiFillGithub, AiOutlineMenu, AiOutlineMail, AiFillBug} from 'react-icons/ai';
import {MdNightlight, MdPriorityHigh} from 'react-icons/md';
import {FcGoogle} from 'react-icons/fc';
import {BsArrowRightShort} from 'react-icons/bs';
import {BiCog, BiSolidCustomize} from 'react-icons/bi';
import {GrProjects} from 'react-icons/gr';
import {IoMdNotifications} from 'react-icons/io';
import {PiTargetBold} from 'react-icons/pi';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import RightSlide from '@/components/main-slide';
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Header from './components/Header';
import MainSlide from './components/MainSlide';
import SectionTitle from './components/SectionTitle';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Plateforme from './components/Plateforme';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden h-[100%]">
      {/* Header */}
      <Header />
      {/* Body */}
      <MainSlide />
      <SectionTitle 
        title='Nos services pour une Gestion Efficace' 
        description='Découvrez comment notre plateforme vous simplifie la vie en simplifiant vos tâches de gestion de projets et en éliminant les obstacles, vous permettant de vous concentrer sur ce qui compte le plus.' />
      {/* Card services */}
      <Services />
      <div className='w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 mt-10 flex-col pb-10'>
        <SectionTitle 
          title='Choisissez votre plan idéal sur Mesure!' 
          description="Découvrez nos plans d'abonnement flexibles pour trouver la solution qui correspond le mieux à vos besoins. De l'essentiel au premium, nous avons ce qu'il vous faut pour réussir." />
        <Pricing />
      </div>
      <div>
        <SectionTitle
          title='Explorez notre Plateforme'
          description="Découvrez un aperçu visuel de notre plateforme de gestion de projets. Explorez des captures d'écran et des fonctionnalités clés pour voir comment nous simplifions la gestion de projets pour vous."
        />
        <Plateforme />
      </div>
      <div className='w-full px-10 xl:px-28'>
        <SectionTitle
          title='Ce que disent nos clients'
          // description="Découvrez un aperçu visuel de notre plateforme de gestion de projets. Explorez des captures d'écran et des fonctionnalités clés pour voir comment nous simplifions la gestion de projets pour vous."
        />
        <Testimonials />
      </div>
      <div className='pb-44 w-full px-10 xl:px-28 mt-32'>
        <Contact />
      </div>
      <footer className='mt-[130%] xl:mt-72'>
        <Footer />
      </footer>
    </main>
  )
}
