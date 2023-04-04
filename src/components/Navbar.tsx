import { useState, useEffect } from 'react'

import Logo from '@/assets/logo_white.png'

const NAVBAR_CONFIG = [
  {
    name: 'home',
    pseudoBeforeClassName: "before:content-['home.']",
    link: '/',
  },
  {
    name: 'about',
    pseudoBeforeClassName: "before:content-['about.']",
    link: '/about',
  },
  {
    name: 'life',
    pseudoBeforeClassName: "before:content-['life.']",
    link: '#',
  },
  {
    name: 'changelog',
    pseudoBeforeClassName: "before:content-['changelog.']",
    link: '/changelog',
  },
  {
    name: 'works',
    pseudoBeforeClassName: "before:content-['works.']",
    link: '#',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOnTop, setIsOnTop] = useState<boolean>(window.scrollY === 0)

  const handleToggle = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true)
        return
      }
      if (isOnTop) {
        setIsOnTop(false)
      }
    }
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-[999] h-[var(--navbar-height)] w-screen transition-all ${
        isOnTop ? 'bg-[transparent]' : 'bg-black/10 backdrop-blur-md'
      }`}
    >
      <div className="relative z-20 flex h-[var(--navbar-height)] items-center px-10">
        <div className="flex aspect-square h-[60%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-yellow p-2 hover:animate-flash">
          <img src={Logo} className="aspect-square h-full" />
        </div>

        <h3
          className={`ml-auto mr-2 transition-all duration-500 ${
            isOpen && 'text-white'
          } scale-x-[1.2] font-light`}
        >
          menu
        </h3>
        <button
          className={`cursor-pointer outline-none ${
            isOpen ? '[&>div]:bg-white' : '[&>div]:bg-black'
          }`}
          type="button"
          onClick={handleToggle}
        >
          <div
            className={`m-[3px] h-[5px] w-[40px] transition-all duration-500 ${
              isOpen
                ? '-translate-x-[4px] translate-y-[5px] -rotate-45'
                : 'rotate-[113.5deg]'
            }`}
          ></div>
          <div
            className={`m-[3px] h-[5px] w-[40px] transition-all duration-500 ${
              isOpen
                ? '-translate-x-[4px] -translate-y-[4px] rotate-45'
                : '-translate-x-[10px] -translate-y-[5px] rotate-[113.5deg]'
            }`}
          ></div>
        </button>
      </div>

      <ul
        className={`${
          isOpen
            ? 'h-screen overflow-y-hidden opacity-100'
            : 'h-0 -translate-y-[100vh] opacity-0'
        } absolute left-0 top-0 z-10 flex w-screen flex-col items-start justify-center gap-5 overflow-hidden bg-black/80 px-5 font-sans text-5xl font-extrabold transition-all duration-500 md:text-8xl [&>li]:ml-3 [&>li]:origin-left [&>li]:scale-x-[1.3] md:[&>li]:ml-[30vw]`}
      >
        {NAVBAR_CONFIG.map((list) => (
          <li className="group relative cursor-pointer" key={list.name}>
            <div className="absolute h-[60px] w-[20rem] translate-x-[-20rem] overflow-hidden transition-all duration-500 ease-in-out group-hover:translate-x-0 md:h-[120px] md:w-[35rem] md:translate-x-[-35rem]">
              <a
                className="absolute h-[60px] translate-x-[20rem] overflow-hidden text-white transition-all  duration-500 ease-in-out group-hover:translate-x-0 md:h-[120px] md:translate-x-[35rem]"
                href={list.link}
                onClick={() => setIsOpen(false)}
              >
                {list.name}
                <span className="text-brand-green">.</span>
              </a>
            </div>
            <a
              className={`before:text-white/50 ${list.pseudoBeforeClassName}`}
              href={list.link}
              onClick={() => setIsOpen(false)}
            ></a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
