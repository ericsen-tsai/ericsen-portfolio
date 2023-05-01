import { useState, useEffect, Fragment } from 'react'
import Logo from '@/assets/logo_white.png'
import type { Language } from '@/types/language'
import goToLangRoute from '@/utils/goToLangRoute'

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { value: 'en', label: 'EN' },
  { value: 'zh-TW', label: '中文' },
]

const NAVBAR_CONFIG = [
  {
    name: 'home',
    pseudoBeforeClassName: "before:content-['home.']",
    link: '',
  },
  {
    name: 'about',
    pseudoBeforeClassName: "before:content-['about.']",
    link: 'about',
  },
  {
    name: 'life',
    pseudoBeforeClassName: "before:content-['life.']",
    link: '#',
  },
  {
    name: 'changelog',
    pseudoBeforeClassName: "before:content-['changelog.']",
    link: 'changelog',
  },
  {
    name: 'works',
    pseudoBeforeClassName: "before:content-['works.']",
    link: '#',
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOnTop, setIsOnTop] = useState<boolean>(window.scrollY === 0)
  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
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

  const handleToggleTheme = () => {
    setDarkTheme((prev) => !prev)
    localStorage.setItem(
      'color-theme',
      localStorage.getItem('color-theme') === 'dark' ? 'light' : 'dark'
    )
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav
      className={`fixed top-0 z-[999] h-[var(--navbar-height)] w-screen transition-all ${
        isOnTop ? 'bg-[transparent]' : 'bg-black/10 backdrop-blur-md'
      }`}
    >
      <div className="relative z-20 flex h-[var(--navbar-height)] items-center pr-6 pl-6 dark:text-brand-smoke md:px-10">
        <button
          className="flex aspect-square h-[60%] skew-y-3 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-brand-green to-brand-yellow p-2 hover:animate-flash"
          onClick={() =>
            goToLangRoute({
              lang: document.documentElement.lang as Language,
              targetPathName: '',
            })
          }
        >
          <img src={Logo} className="aspect-square h-full" />
        </button>
        <div className="ml-auto flex items-center gap-1">
          {options.map((option, ind) => (
            <Fragment key={option.label}>
              <button
                onClick={() =>
                  goToLangRoute({ lang: (option?.value || 'en') as Language })
                }
                className={`font-black transition-all duration-500 hover:text-brand-green/70 ${
                  option.value === document.documentElement.lang
                    ? 'text-brand-green underline'
                    : isOpen
                    ? 'text-white'
                    : ''
                }`}
              >
                {option.label}
              </button>
              {ind !== options.length - 1 && (
                <p
                  className={`${
                    isOpen ? 'text-white' : ''
                  } transition-all duration-500`}
                >
                  |
                </p>
              )}
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          className="mx-3 rounded-lg p-2.5 text-sm text-brand-green transition-all hover:bg-brand-green/20 hover:ring-2 hover:ring-brand-green"
          onClick={handleToggleTheme}
        >
          <svg
            className={`${darkTheme ? 'hidden' : ''} h-5 w-5`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className={`${darkTheme ? '' : 'hidden'} h-5 w-5`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <h3
          className={`mr-2 transition-all duration-500 ${
            isOpen ? 'text-white' : ''
          } scale-x-[1.2] font-light`}
        >
          menu
        </h3>
        <button
          className={`cursor-pointer outline-none ${
            isOpen
              ? '[&>div]:bg-brand-smoke'
              : '[&>div]:bg-black dark:[&>div]:bg-brand-smoke'
          }`}
          type="button"
          onClick={handleToggle}
        >
          <div
            className={`m-[3px] transition-all duration-500 ${
              isOpen
                ? 'h-[5px] w-[40px] -translate-x-[4px] translate-y-[5px] -rotate-45'
                : 'h-[3px] w-[25px] rotate-[113.5deg]'
            }`}
          />
          <div
            className={`m-[3px] transition-all duration-500 ${
              isOpen
                ? 'h-[5px] w-[40px] -translate-x-[4px] -translate-y-[4px] rotate-45'
                : 'h-[3px] w-[25px] -translate-x-[10px] -translate-y-[5px] rotate-[113.5deg]'
            }`}
          />
        </button>
      </div>

      <ul
        className={`${
          isOpen
            ? 'h-screen overflow-y-hidden opacity-100'
            : 'h-0 -translate-y-[100vh] opacity-0'
        } absolute left-0 top-0 z-10 flex w-screen flex-col items-start justify-center gap-5 overflow-hidden bg-black/80 px-5 font-sans text-4xl font-extrabold transition-all duration-500 xs:text-6xl md:text-8xl [&>li]:ml-3 [&>li]:origin-left [&>li]:scale-x-[1.3] md:[&>li]:ml-[min(30vw,10%)]`}
      >
        {NAVBAR_CONFIG.map((list) => (
          <li className="group relative cursor-pointer" key={list.name}>
            <div className="absolute h-[60px] w-[20rem] translate-x-[-20rem] overflow-hidden transition-all duration-500 ease-in-out group-hover:translate-x-0 md:h-[120px] md:w-[35rem] md:translate-x-[-35rem]">
              <a
                role="button"
                className="absolute block h-[60px] translate-x-[20rem] overflow-hidden text-white  transition-all duration-500 ease-in-out group-hover:translate-x-0 md:h-[120px] md:translate-x-[35rem]"
                onClick={() => {
                  setIsOpen(false)
                  goToLangRoute({
                    lang: document.documentElement.lang as Language,
                    targetPathName: list.link,
                  })
                }}
              >
                {list.name}
                <span className="text-brand-green">.</span>
              </a>
            </div>
            <a
              role="button"
              className={`block before:text-white/50 ${list.pseudoBeforeClassName}`}
              onClick={() => {
                setIsOpen(false)
                goToLangRoute({
                  lang: document.documentElement.lang as Language,
                  targetPathName: list.link,
                })
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
