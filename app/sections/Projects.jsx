"use client"

import {useEffect, useState} from 'react'
import Button from '../components/Button'
import { exploremore } from '../asset/icon'
import ProjectCard from '../components/ProjectCard'
// import {projectlist} from '../constants'

const Projects = () => {
    const [projectlist, setprojectlist] = useState([])
    useEffect(() => {
        const getporjectlist = async()=>{
          let res = await fetch('api/projects',{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          let data = await res.json();
          setprojectlist(data.allPosts)
    
        }
        getporjectlist();
      } , [])
    
  return (
    <section>
        <div className='flex justify-between w-full items-center'>
            <h1 className='font-montserrat text-2xl md:text-4xl font-bold '>
                <span className='text-blue-3'>
                    Project's
                </span>
            </h1>
            <Button label="Explore All" url="Projects" imgURL={exploremore} />
        </div>
        <div>
            {projectlist?.map((project, index)=>(
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    </section>
  )
}

export default Projects
