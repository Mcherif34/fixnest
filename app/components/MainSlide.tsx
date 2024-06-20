import RightSlide from '@/components/main-slide';
import { Button } from '@nextui-org/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const MainSlide = () => {
  return (
    <div className='pt-44 items-center justify-center w-screen'>
        <div className="xl:flex items-start justify-between bg-hero-pattern h-[300px] w-full">
          <div className='xl:w-[50%] w-full px-10 space-y-5'>
            <h3 className='font-semibold md:text-5xl text-4xl leading-tight'><span className=' text-primary'>Solutionner</span> les problèmes avant qu&apos;ils ne deviennent des obstacles insurmontables.</h3>
            <div className='font-normal xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs'>Découvrez comment notre plateforme simplifie le processus pour vous.</div>
            <div className='flex items-cent space-x-4 mt-5'>
              <Button color="primary" variant='solid' radius='full' className='text-white text-base font-normal' endContent={(<BsArrowRightShort />)}>Voir la démo</Button>
              <Button color="primary" variant='bordered' radius='full' className='text-primary text-base font-normal' endContent={(<AiOutlineMail />)} >Nous contacter</Button>
            </div>
          </div>
         <div className="xl:w-[50%]">
          <RightSlide />
         </div>
        </div>
      </div>
  )
}

export default MainSlide