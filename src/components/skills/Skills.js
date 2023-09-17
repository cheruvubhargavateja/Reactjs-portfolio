import React from 'react'
import './skills.css'
import { skillsData } from './skillsData'

const Skills = () => {
  return (
    <div>
    <main className='skills-item'>
        {skillsData.map((item)=>(
            <article key={item.id} className='skill-item'>
                <h3>{item.name}</h3>
                <img className='skill-img' src={item.imageSrc} alt={item.name} width='100%'  />
                <section>
                    <p>{item.content}</p>
                </section>
            </article>
        ))}
    </main>
    </div>
  )
}

export default Skills