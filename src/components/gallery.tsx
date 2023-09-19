import Container from './container'
import Grid from './grid'

const Gallery = () => {
  return (
    <div className='padding-y'>
      <Container>
        <div className='space-y-8'>
          <div className='flex items-center max-lg:justify-center lg:justify-between'>
            <h2 className='font-light text-3xl max-lg:text-center lg:text-6xl uppercase font-Josefin tracking-tight'>
              OUR CREATIONS
            </h2>
            <button className='hidden lg:flex py-2 px-8 border border-black text-center uppercase font-Josefin font-bold' style={{
              letterSpacing: '2px'
            }}>
              See all
            </button>
          </div>
          <Grid />
          <div className='lg:hidden flex items-center justify-center'>
            <button className='lg:hidden flex py-2 px-8 border border-black text-center uppercase font-Josefin font-bold' style={{
              letterSpacing: '2px'
            }}>
              See all
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallery