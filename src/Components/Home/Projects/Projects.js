import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects,setProjects]=useState([]);
    fetch("project.json")
    .then(res=>res.json())
    .then(data=>{
        setProjects(data);
    })
    return (
        <div className='mb-10 max-w-screen-xl mx-auto' id='projects'>
            <h3 className='text-3xl text-center bg-base-300 py-4'>Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {
                projects.map(project => <div key={project.id} className="card glass">
                    <figure><img src={project.images[0]} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title grow items-end">{project.name}</h2>
                            <ul className='flex justify-around my-4 text-info'>
                                <li><Link to={project.live}>Live</Link></li>
                                <li><Link to={project.client}>Client</Link></li>
                                <li><Link to={project.Server}>Server</Link></li>
                            </ul>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${project.id}`} state={{ project: project}} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Projects;