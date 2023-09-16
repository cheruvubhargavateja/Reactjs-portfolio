import React from 'react'
import './footer.css'

const socialMedia = [
  {
    title: "facebook",
    icon: "fa fa-facebook-square",
    id: 1,
    refLink: ""
  },
  {
    title: "github",
    icon: "fa fa-github-square",
    id: 2,
    refLink: ""
  },
  {
    title: "twitter",
    icon: "fa fa-twitter-square",
    id: 3,
    refLink: ""
  },
  {
    title: "E-mail",
    icon: "fa fa-envelope",
    id: 4,
    refLink: ""
  }
]

console.log(socialMedia)

const Footer = () => {
  return (
    <>
      <main className='footer'>
        <article>
          <h4>Social Media Contacts</h4>
          {socialMedia && socialMedia.map((item)=>(
            <li key={item.id}>
              <a href={item.refLink}>
              <i className={item.icon + ' icons'}></i>
                {item.title}
              </a>
            </li>
          ))}        
        </article>
        <article>
          <h4>Contact details</h4>
          <li>
            <span>
              <i className='fa fa-phone-square icons'></i>
              Phone - +91 9347116847
            </span>
          </li>    
        </article>
        </main>
        <footer>
          <small>
            @bhargavatejacheruvu.com
          </small>
        </footer>
    </>
  )
}

export default Footer