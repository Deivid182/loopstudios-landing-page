import Container from './container'
import { imageInteractive } from '../images/images-desktop'

const Showcase = () => {
  return (
    <div className='padding-y'>
      <Container>
        <div className='flex flex-row max-lg:flex-col max-lg:gap-y-12 lg:gap-0 items-end justify-center'>
          <div className='relative w-full z-20 flex-1'>
            <img
              src={imageInteractive}
              alt='interactive'
              className='w-full object-cover relative z-20'
            />
          </div>
          <article className='lg:pl-16 lg:pt-16 bg-white space-y-4 lg:z-20 transform lg:-translate-x-32 lg:bg-white flex-[0.5]'>
            <h2 className='font-light text-3xl max-lg:text-center lg:text-6xl uppercase font-Josefin tracking-tight lg:w-[130%]'>The leader in interactive VR</h2>
            <p className='max-lg:text-center max-lg:px-6 text-slate-gray leading-7 lg:w-[130%]'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality
              for some of the best companies around the globe. Our award-winning creations
              have transformed businesses through digital experiences that bind to their brand.
            </p>
          </article>
        </div>
      </Container>
    </div>
  )
}

export default Showcase