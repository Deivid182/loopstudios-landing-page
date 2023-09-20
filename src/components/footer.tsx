import Container from './container'
import { iconInstagram, iconFacebook, iconTwitter } from '../images/icons'

const Footer = () => {
  return (
    <footer id='footer' className='padding-y bg-black'>
      <Container>
        <div className='flex max-lg:flex-col items-center justify-between max-lg:gap-y-6 gap-y-0 text-white'>
          <div className='flex flex-col gap-y-8'>
            <h1 className='text-4xl font-bold text-white font-Alata'>loopstudios</h1>
            <ul className='flex items-center max-lg:flex-col max-lg:gap-y-4 gap-x-6'>
              <li className='text-white text-lg tracking- font-Alata font-light hover:border-b hover:border-white p-2 transition-colors bo'>
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
          </div>
          <div className='flex flex-col max-lg:items-center items-end gap-y-6'>
            <ul className='flex items-center gap-x-6'>
              <li className='text-white text-lg tracking- font-Alata font-light'>
                <a href="#" className='flex items-center justify-center p-2 hover:border-b hover:border-white transition-colors cursor-pointer'>
                  <img
                    src={iconFacebook}
                    alt='facebook'
                    width={24}
                    height={24}
                    className='w-6 h-6'
                  />
                </a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light'>
                <a href="#" className='flex items-center justify-center p-2 hover:border-b hover:border-white transition-colors cursor-pointer'>
                  <img
                    src={iconInstagram}
                    alt='instagram'
                    width={24}
                    height={24}
                    className='w-6 h-6'
                  />
                </a>
              </li>
              <li className='text-white text-lg tracking- font-Alata font-light'>
                <a href="#" className='flex items-center justify-center p-2 hover:border-b hover:border-white transition-colors cursor-pointer'>
                  <img
                    src={iconTwitter}
                    alt='twitter'
                    width={24}
                    height={24}
                    className='w-6 h-6'
                  />
                </a>
              </li>
            </ul>
            <p className='text-slate-gray text-lg font-Alata font-light'>
              © 2022 Loopstudios. All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer