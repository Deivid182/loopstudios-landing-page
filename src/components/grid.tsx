import { dataDesktop } from '../data/data-desktop'

const Grid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {dataDesktop.map((item) => (
        <section key={item.id} className='lg:h-[500px] h-[200px]'>
          <div className='flex max-lg:items-end lg:flex-col lg:justify-end relative' style={{
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}>
            <div className='absolute inset-0 w-full h-full bg-black opacity-30'/>

            <h3 className='z-20 font-light px-4 lg:px-8 py-6 text-white text-4xl max-lg:w-4/6 uppercase font-Josefin tracking-tight'>{item.title}</h3>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Grid