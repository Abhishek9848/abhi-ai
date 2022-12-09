import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is Project?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links-container'>
          <Menu />
        </div>
        <div className='navbar-sign' >
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
      </div>
      <div className="navbar-menu">
        {toggle ? <RiCloseLine color="#fff" size={27} onClick={() => setToggle(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        }
        {toggle && (
          <div className='navbar-menu-container scale-up-center'>
            <div className="navbar-menu-container-links">
              <Menu />
              <div className='navbar-menu-container-links-sign' >
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
