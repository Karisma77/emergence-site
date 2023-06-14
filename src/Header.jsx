import React, { useState } from 'react'
import colorBand from './assets/color-band.png'
import logo from './assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const [nav, setNav] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white'>
        <div className='w-full flex flex-col mx-auto '>
            <img src={colorBand} alt="top-band" className='h-[19px]' />
        </div>
            <div className='max-w-7xl mx-auto pt-[10px] pb-2 px-[10px] flex justify-between items-center'>
                <Link to="/"><img src={logo} alt="logo" className='h-[43px]' /></Link>
                {/**Menu icon */}
                <span className='cursor-pointer flex xl:hidden' onClick={()=> setNav(!nav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </span>
                {/**Desktop sub menu */}
                <div className='hidden xl:flex gap-7 items-center text-[14px] font-medium px-12'>
                    <Link to="/contact" className='hover:text-secondary'>Contact</Link>
                    <Link to="/inscription" className='hover:text-secondary'>Inscription</Link>
                    <select class="rounded-md shadow-sm border-none cursor-pointer focus:outline-none px-[16px] py-[6px]">
                        <option value="FR">FR</option>
                        <option value="EN">EN</option>
                    </select>
                    <button className='rounded-lg'><Link to="/inscription">Inscris-toi</Link></button>
                </div>

            </div>
            {/**Desktop menu */}
            <nav className='hidden  lg:flex gap-12 bg-secondary justify-center' id='menu'>
                <NavLink to="/parcours" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>Nos Parcours</NavLink>
                <NavLink to="/filieres" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>Nos filières</NavLink>
                <NavLink to="/campus" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>Notre campus</NavLink>
                <NavLink to="/admission" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>admission</NavLink>
                <NavLink to="/carriere" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>carrière</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? 'main-menu-active' : 'main-menu'}>actualités</NavLink>
            </nav>
        
        {/**Overlay*/}
        { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=> setNav(!nav)}></div> : ''}

        {/**Mobile menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen pt-2 bg-white z-10 duration-300 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000 ease-in'}>
            <div className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(!nav)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <Link to="/"><img src={logo} alt="logo" className='h-[43px]' /></Link>
            <nav className='flex lg:hidden flex-col mt-4'>
              <NavLink to="/parcours" className='menu-link'>Nos Parcours</NavLink>
              <NavLink to="/filieres" className='menu-link'>Nos Filières</NavLink>
              <NavLink to="/campus" className='menu-link'>Notre campus</NavLink>
              <NavLink to="/admission" className='menu-link'>Admission</NavLink>
              <NavLink to="/carriere" className='menu-link'>Carrière</NavLink>
              <NavLink to="/blog" className='menu-link'>actualités</NavLink>
            </nav>
                <div className='mt-3 flex flex-col'>
                <Link to="/contact" className='sub-menu-link'>Contact</Link>
                <Link to="/inscription" className='sub-menu-link'>Inscription</Link>
                <Link to="#" className='sub-menu-link'>English</Link>
                <button className='flex text-[14px] font-medium py-3 px-5 bg-primary grow-0 hover:bg-[#C1C513]'><Link to="/inscription">Inscris-toi</Link></button>
                </div>
        </div>
    </div>
  )
}

export default Header