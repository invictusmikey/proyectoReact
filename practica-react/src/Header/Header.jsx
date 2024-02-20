import React from 'react'
import { Logo } from '../Logo/Logo'
import {Navbar} from '../Navbar/Navbar'
import './Header.css'


export const Header = () => {
  return (
    <div>
      <Logo/>
     <Navbar/>
    </div>
  )
}
