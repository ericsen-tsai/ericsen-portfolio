import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <nav className="fixed top-0 z-[999] w-full bg-black/90">
      <div className="flex h-12 justify-between">
        <a
          href="#"
          className="pt-2 pb-1 text-2xl font-normal uppercase text-white"
        >
          MEMETICS
        </a>

        <button
          className="cursor-pointer outline-none"
          type="button"
          onClick={handleToggle}
        >
          <div
            className={`m-[3px] h-[2px] w-[28px] bg-gray-100 transition-all duration-500 ${
              isOpen && '-translate-x-[4px] translate-y-[5px] -rotate-45'
            }`}
          ></div>
          <div
            className={`m-[3px] h-[2px] w-[28px] bg-gray-100 transition-all duration-500 ${
              isOpen && 'invisible'
            }`}
          ></div>
          <div
            className={`m-[3px] h-[2px] w-[28px] bg-gray-100 transition-all duration-500 ${
              isOpen && '-translate-x-[4px] -translate-y-[5px] rotate-45'
            }`}
          ></div>
        </button>
      </div>

      <ul
        className={`${
          isOpen
            ? 'h-[calc(100vh-3rem)] overflow-y-hidden opacity-100'
            : 'h-0 -translate-y-[100vh] opacity-0'
        } flex flex-col items-start gap-5 px-5 uppercase transition-all duration-500`}
      >
        <li className="mt-[25%]">
          <a className="text-6xl text-white" href="#">
            Home
          </a>
        </li>
        <li className="">
          <a className="text-6xl text-white" href="#">
            Changelog
          </a>
        </li>
        <li className="">
          <a className="text-6xl text-white" href="#">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
