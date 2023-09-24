"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import { headerIcons, navlink } from "@/constants";
import { TfiWorld } from 'react-icons/tfi';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  
  const [toggle, setToggle] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  return (
    <>
      {/* Desktop Menu */}
      <nav className="w-full px-2 bg-primary bg-opacity-25 drop-shadow-sm backdrop-blur-md border-b border-b-gray-300 fixed top-0 z-50">
        <div className="container text-xs mx-auto flex lg:justify-center justify-between items-center px-3 space-x-8">

          {/* Logo */}
          <Link href="/" className="text-text-primary transition-colors hover:text-light-text-primary">
            <Image src={Logo} alt="logo" width={30} className="transition-opacity hover:opacity-80" />
          </Link>

          {/* Main menu */}
          <div className="space-x-8 lg:flex items-center hidden">
            {navlink.map(item => (
              item.title === 'Home' ? '' : (
                <div key={item.title} className="relative group">
                  <Link href={item.link}>
                    <span className="text-text-primary hover:opacity-70 cursor-pointer transition-all duration-300  hover:text-light-text-primary py-3">{item.title}</span>
                  </Link>

                  {item.subnavbar ? (
                    <div className="absolute lg:left-[-300px] left-[-200px] lg:w-[800px] w-[550px] bg-primary grid lg:grid-cols-3 grid-cols-2 py-6 px-10 rounded-md shadow-md opacity-0  lg:translate-y-2 translate-x-3 group-hover:opacity-100 lg:group-hover:translate-y-1 group-hover:translate-y-2 transition-all duration-300 invisible group-hover:visible overflow-hidden">
                      <div className="w-1/3 rounded-full h-9 bg-gradient-to-b from-blue-500 to-green-500 left-1/2 top-1/2 rotate-12 absolute inset-0 blur-xl opacity-20 object-cover"></div>
                      <div className="w-1/3 rounded-full h-9 bg-gradient-to-br from-blue-500 to-blue-500 left-0 top-1/2 absolute inset-0 blur-xl opacity-20 rotate-12 object-cover"></div>

                      {item.subnavbar.map(sublink => (
                        <div key={sublink.title} className="z-20 flex w-full h-16 items-center space-y-2 space-x-2 cursor-pointer">
                          <Link href={sublink.link} passHref className="flex gap-2 items-center">
                            <div className="w-9 h-9 bg-primary text-lg shadow-custom-blue flex items-center rounded-md justify-center text-secondary">
                              {sublink.icon}
                            </div>
                            <span className="transition-colors duration-300 drop-shadow-sm hover:text-secondary">{sublink.title}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : ''}
                </div>
              )
            ))}
          </div>

          {/* Icons */}
          <div className="sm:space-x-8 space-x-3 flex items-center">

            {/* Icons Menu */}
            <div className="space-x-8 flex items-center">
              <div className="relative group">

                <Link href='#' passHref>
                  <span className="text-text-primary hover:opacity-70 cursor-pointer transition-all duration-300  hover:text-text-primary py-3">
                    <TfiWorld />
                  </span>
                </Link>

                <div className="absolute md:left-[-60px] left-[-80px] w-max flex flex-col justify-between gap-y-3 bg-primary p-4 pr-7 rounded-md shadow-md opacity-0 lg:translate-y-2 translate-x-3 group-hover:opacity-100 lg:group-hover:translate-y-1 group-hover:translate-y-2 transition-all duration-300 invisible group-hover:visible">
                  {headerIcons.map(item => (
                    <div key={item.title} className="flex w-full items-center cursor-pointer">
                      <Link href={item.link} passHref className="flex gap-2 items-center hover:text-secondary transition-colors duration-300 drop-shadow-sm " target="_blank">
                        <span className="text-lg">{item.icon}</span>
                        <span >{item.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Toggle Button */}
            <div className="lg:hidden w-[15px] h-[10px] flex flex-col justify-between relative cursor-pointer z-50" onClick={() => setToggle(!toggle)}>
              <div className={`absolute top-0 w-[15px] ${toggle ? 'top-[4px] rotate-45' : ''}   h-[1.4px] bg-gray-700 transition-all duration-100 ease-in `}></div>
              <div className={`absolute bottom-0 w-[15px] ${toggle ? 'bottom-[4.5px]  -rotate-45' : ''}  h-[1.4px] bg-gray-700 transition-all duration-100 ease-in`}></div>
            </div>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={` lg:hidden w-full fixed z-40 ${toggle ? 'bg-primary h-screen top-0' : 'h-0 -top-4'} text-white overflow-y-scroll transition-all duration-300 pt-12 px-4`}>
        {navlink.map((item, index) => (
          <div key={item.title} className="w-full" onClick={() => setSubMenu(!subMenu)}>

            <Link href={item.link} className="w-full bg-primary" >
              <div className={`w-full ${(navlink.length - 1) === index ? 'border-none' : 'border-b '} border-black border-opacity-20 ${toggle ? ' opacity-1' : 'opacity-0'} text-text-primary hover:opacity-70 cursor-pointer transition-all duration-200  hover:text-light-text-primary py-2 flex items-center justify-between px-2`} onClick={() => { item.link === '#' ? '' : setToggle(!toggle) }}>

                {item.title}

                <span className={`transform ${subMenu ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ${item.submenu ? 'block' : 'hidden'}`}>
                  <FiChevronDown />
                </span>
              </div>
            </Link>

            {item.subnavbar ? (
              <div className={`w-full flex flex-col justify-between flex-wrap overflow-hidden ${subMenu ? 'max-h-[400px]' : 'max-h-0'} bg-primary pl-3 transition-all duration-300`}>

                {item.subnavbar.map((sublink, inId) => (
                  <div key={sublink.title} className={`z-20 flex w-full py-2 items-center ${(item.subnavbar.length - 1) === inId ? 'border-none' : 'border-b '} border-black border-opacity-20 cursor-pointer`}>
                    <Link href={sublink.link} className="flex gap-1 items-center text-black hover:text-secondary transition-colors duration-300 ">
                      <div className="text-base">
                        {sublink.icon}
                      </div>
                      <div className="text-xs">{sublink.title}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : ''}
          </div>

        ))}
      </div>
    </>

  );
};

export default Header;
