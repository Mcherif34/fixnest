"use client";

import { ChipProps } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { Project, getAllProject } from "@/services/projectServices";
import ProjectList from "./_components/list";


const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  InProgress: "warning",
};




const ProjectPage = () => {

  const [projects, setProjects] = useState<Project[]>();

  

  useEffect(()=>{

    async function fetchProjects() {
    
        const data: Project[] = await getAllProject();
        console.log(data);
        setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className='px-8 py-3'>
      <div className='mt-10 px-10 space-y-10'>
        <div className="">
          <p className="text-3xl font-medium">Gestion des projets</p>
        </div>
        <ProjectList />
      </div>
    </div>
  )
};

export default ProjectPage