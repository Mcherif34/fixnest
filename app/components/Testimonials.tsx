"use client";

import React, { useState } from 'react';
import {Pagination, PaginationItemType, PaginationItemRenderProps} from "@nextui-org/react";
import { cn } from '@/lib/utils';
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import Image from 'next/image';
import classnames from "classnames";

const testimonials = [
  {
    id: 1,
    nom: "Jennifer Smith",
    entreprise: "TechNova Solutions",
    message: "J'adore cette application ! Elle a grandement amélioré notre gestion de projets. La facilité d'utilisation, les fonctionnalités avancées et le support exceptionnel ont contribué à une efficacité accrue de notre équipe. Nous ne pourrions plus nous en passer !",
    image: "/images/avatar4.jpg"
},
  {
    id: 2,
    nom: "John Doe",
    entreprise: "InnovateX Group",
    message: "La facilité d'utilisation de cette application est incroyable. Elle a simplifié notre travail au quotidien. Les rapports détaillés, la personnalisation de l'interface et la collaboration en temps réel sont des atouts majeurs pour notre entreprise.",
    image: "/images/avatar3.jpg"
},
  {
    id: 3,
    nom: "Emily Johnson",
    entreprise: "OptiSolutions Inc.",
    message: "Grâce à cette application, nous avons réussi à gagner du temps et à rester organisés. Je la recommande vivement. L'intégration fluide avec nos outils existants, la gestion de tâches intuitive et les notifications en temps réel ont considérablement amélioré notre productivité.",
    image: "/images/avatar2.jpg"
},
  {
    id: 4,
    nom: "Michael Williams",
    entreprise: "ProSync Technologies",
    message: "Les fonctionnalités avancées de cette application nous ont permis d'optimiser notre gestion de projets de manière significative. Les capacités de personnalisation, les analyses approfondies et le support 24/7 dédié ont été cruciaux pour notre succès.",
    image: "/images/avatar1.jpg"
  },
];


const Testimonials = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 1; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonial = testimonials.slice(indexOfFirstItem, indexOfLastItem);

  const onNext = () => {
    if (currentPage < Math.ceil(testimonials.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-center space-x-20 mt-8'>
      {currentTestimonial.map((testimonial, index) => (
        <div  key={index}>
            <div className='xl:w-[80%] w-full border-b border-gray-300 pb-10'>
                <div className='text-lg'>{testimonial.message}</div>
            </div>
            <div className='flex items-center justify-start space-x-10 mt-5'>
                <Image className='border-4 border-primary rounded-full' src={testimonial.image} width={100} height={100} alt={testimonial.nom} />
                <div className='flex-col items-start space-y-2'>
                    <div className='text-xl font-semibold text-black'>{testimonial.nom}</div>
                    <div className='text-base font-light text-gray-400 text-uppercase'>{testimonial.entreprise}</div>
                </div>
            </div>
        </div>
      ))}
      <div className='flex items-center justify-center space-x-4 mt-5 xl:mt-0'>
        <button className="bg-default-200/50 min-w-8 w-16 h-16 flex items-center justify-center rounded-full" onClick={onPrevious}>
          <BiChevronLeft size={24} />
        </button>
        <button className={classnames({
            "bg-gradient-to-br from bg-slate-300 to-slate-100": currentPage-1 === testimonials.length,
            "bg-gradient-to-br from-indigo-500 to-pink-500" : currentPage-1 !== indexOfLastItem,
            " min-w-8 w-16 h-16 flex items-center justify-center rounded-full": true
        })} onClick={onNext}>
          <BiChevronRight size={24} color="white" />
        </button>
      </div>
      
    </div>
  );
};


export default Testimonials