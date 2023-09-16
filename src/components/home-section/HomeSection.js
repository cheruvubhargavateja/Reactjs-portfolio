import React from 'react';
import './homeSection.css';
import images from './images.json';

const HomeSection = () => {
  return (
    <div className='homesection'>
        <section>
          <img
            src={images.image1}
            alt='laptop'
            width='450px'
            height='400px'
          />
        </section>
        <section>
            <h3>Hey there!!</h3>
            <h1>CHECKOUT MY WORK</h1>

            <main className='btns-group'>
                <button className='btn outlined'>
                  Skills
                </button>
                <button className='btn covered'>
                  Projects
                </button>
            </main>
        </section>
    </div>
  )
}

export default HomeSection