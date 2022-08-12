import React from 'react';
import './Projects.css';
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: img1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
  {
    id: 2,
    image: img2,
    title: 'Charts templates & integrate infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
  {
    id: 3,
    image: img3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
  {
    id: 4,
    image: img4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
  {
    id: 5,
    image: img5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
  {
    id: 6,
    image: img6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com/naiozin'
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Los mas recientes</h5>
      <h2>Proyecto</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='projects__item'>
              <div className="project__item-img">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects