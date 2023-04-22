import Select, { SingleValue, OptionProps } from 'react-select'
import { useState, useEffect } from 'react'
import Logo from '@/assets/logo_white.png'
import type { Language } from '@/types/language'
import goToLangRoute from '@/utils/goToLangRoute'

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { value: 'en', label: 'English' },
  { value: 'zh-TW', label: '中文正體' },
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

type CustomOptionProps = OptionProps<Pick<Option, 'value'>, false>

const CustomOption: React.FC<CustomOptionProps> = ({
  innerProps,
  children,
}) => {
  return (
    <div
      {...innerProps}
      className="cursor-pointer bg-white p-2 text-xs text-gray-900 hover:bg-brand-green hover:text-white"
    >
      {children}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOnTop, setIsOnTop] = useState<boolean>(window.scrollY === 0)
  const initialLangVal = {
    value:
      options.find(
        (option) => option.value === (document.documentElement.lang || 'en')
      )?.value || options[0].value,
    label:
      options.find(
        (option) => option.value === (document.documentElement.lang || 'en')
      )?.label || options[0].label,
  } as Option

  const [selectedLang, setSelectedLang] = useState<Pick<
    Option,
    'value'
  > | null>(initialLangVal)

  const handleChange = (option: SingleValue<Pick<Option, 'value'>>) => {
    setSelectedLang(option)
    goToLangRoute({ lang: (option?.value || 'en') as Language })
  }

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
      <div className="relative z-20 flex h-[var(--navbar-height)] items-center pr-6 pl-6 md:px-10">
        <button
          className="flex aspect-square h-[60%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-yellow p-2 hover:animate-flash"
          onClick={() =>
            goToLangRoute({
              lang: document.documentElement.lang as Language,
              targetPathName: '',
            })
          }
        >
          <img src={Logo} className="aspect-square h-full" />
        </button>
        <Select
          value={selectedLang}
          defaultValue={initialLangVal}
          onChange={(option) => handleChange(option)}
          options={options}
          className="ml-auto"
          classNames={{
            control: (state) =>
              state.isFocused
                ? '!border-brand-green !shadow-md !text-xs'
                : '!text-xs',
          }}
          components={{ Option: CustomOption }}
        />
        <h3
          className={`ml-5 mr-2 transition-all duration-500 md:ml-10 ${
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
            className={`m-[3px] transition-all duration-500 ${
              isOpen
                ? 'h-[5px] w-[40px] -translate-x-[4px] translate-y-[5px] -rotate-45'
                : 'h-[3px] w-[25px] rotate-[113.5deg]'
            }`}
          ></div>
          <div
            className={`m-[3px] transition-all duration-500 ${
              isOpen
                ? 'h-[5px] w-[40px] -translate-x-[4px] -translate-y-[4px] rotate-45'
                : 'h-[3px] w-[25px] -translate-x-[10px] -translate-y-[5px] rotate-[113.5deg]'
            }`}
          ></div>
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
              <button
                className="absolute h-[60px] translate-x-[20rem] overflow-hidden text-white transition-all  duration-500 ease-in-out group-hover:translate-x-0 md:h-[120px] md:translate-x-[35rem]"
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
              </button>
            </div>
            <button
              className={`before:text-white/50 ${list.pseudoBeforeClassName}`}
              onClick={() => {
                setIsOpen(false)
                goToLangRoute({
                  lang: document.documentElement.lang as Language,
                  targetPathName: list.link,
                })
              }}
            ></button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
