import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';

const navbarContents = [
  {
    id: 1,
    name: 'Home',
    icon: 'fa fa-home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    icon: 'fa fa-user',
    path: '/about'
  },
  {
    id: 3,
    name: 'Projects',
    icon: 'fa fa-folder',
    path: '/projects'
  },
  {
    id: 4,
    name: 'Contact',
    icon: 'fa fa-envelope',
    path: '/contact'
  }
]

const Navbar = () => {

  return (
    <nav className='nav-main'>
      <h1 className='navbar-logo'>
        <i class="fa fa-btc brand"></i>
        hargava
      </h1>
      <ul className='navbar-links'>
          {navbarContents.map((item) => { 
            return(
              <li key={item.id}>
                <NavLink
                to={item.path}
                className='nav-link'
                activeClassName='active'
                >
                  <i className={item.icon + ' icons'}></i>
                  {item.name}
                </NavLink>
              </li>
            )
           })}
          {/* <button className='signup-btn'>Sign Up</button> */}
      </ul>
    </nav>
  )
}

export default Navbar