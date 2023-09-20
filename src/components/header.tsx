import Container from './container'
import { iconHamburger } from '../images/icons'
import MenuMobile from './menu-mobile'
import { useState } from 'react'


const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <MenuMobile
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      <div className='bg-hero'>
        <Container>
          <nav className='items-center justify-between py-6 flex'>
            <h1 className='text-4xl font-bold text-white font-Alata'>loopstudios</h1>
            <ul className='hidden lg:flex items-center gap-x-6'>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors'>
                <a href="#">About</a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors'>
                <a href="#">Careers</a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors'>
                <a href="#">Events</a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors'>
                <a href="#">Products</a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors'>
                <a href="#">Support</a>
              </li>
            </ul>
            <div 
              onClick={() => setOpen(true)}
              className='flex lg:hidden items-center justify-center p-2 rounded-md hover:bg-neutral-400/60 cursor-pointer'
            >
              <img
                src={iconHamburger}
                alt='hamburger'
                width={24}
                height={24}
                className='w-6 h-6'
              />
            </div>
          </nav>
          <div className='flex items-start max-lg:justify-center flex-wrap mt-28 lg:mt-52'>
            <div className='border-white border-2 max-lg:w-[95%] w-[600px] p-6 lg:p-12'>
              <h2 className='text-white text-3xl lg:text-6xl uppercase font-Josefin font-medium'>
                Inmersive experiences that deliver
              </h2>
            </div>
          </div>
        </Container>      
      </div>
    </>
  )
}

export default Header