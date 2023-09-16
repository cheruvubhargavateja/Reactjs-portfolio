import React from 'react'
import './about.css'
import images from './images.json'

const About = (props) => {
  return (
    <main className='about'>
            <section className={props.isLink ? 'hero-sections' : 'about-section'}>
            <h1>Hey there!! Do you want to know me?</h1>
            <p>
            Hi, I'm Bhargava Teja C., a passionate Software Engineer hailing from Anantapur, Andhra Pradesh, India. With 1.5 years of hands-on experience, I specialize in building dynamic web applications using cutting-edge technologies.
            </p>
            <p>
            My primary expertise lies in React.js and TypeScript, where I excel in crafting user-friendly and efficient user interfaces. Additionally, I'm well-versed in Node.js, Nest.js, and have experience working with various databases like MongoDB, DynamoDB, and MySQL.
            </p>
            <p>
            I take pride in my ability to transform ideas into reality by leveraging my skills and knowledge in the world of web development. Whether it's creating responsive front-end designs or designing robust back-end systems, I'm always up for a challenge.
            </p>
            <p>
            Let's connect and explore the exciting possibilities of software engineering together!
            </p>
        </section>
        <main>
        <img
            src={images.image1}
            alt='laptop'
            width='550px'
            height='440px'
          />
        </main>
    </main>
  )
}

export default About