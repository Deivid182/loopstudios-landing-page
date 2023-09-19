import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { iconClose } from '../images/icons';
interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' onClose={onClose} className={'relative z-10'}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-20' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-0 top-0 flex max-w-full'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='-translate-y-full'
                  enterTo='translate-y-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveTo='-translate-y-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-full'>
                    <div className='flex h-full flex-col bg-black shadow-xl py-6 px-4 sm:px-6'>
                      <div className='flex items-center justify-between h-12'>
                        <a href="#" className='text-white text-2xl tracking- font-Alata font-light'>
                          loopstudios
                        </a>
                        <button
                          type='button'
                          onClick={onClose}
                          className='rounded-md
                            flex 
                            items-center 
                            justify-center 
                            text-slate-gray 
                            hover:text-coral-red 
                            hover:focus:outline-none
                            pr-4'
                        >
                          <img
                            src={iconClose}
                            alt='close'
                            width={24}
                            height={24}
                            className='w-6 h-6'
                          />
                        </button>
                      </div>
                      <div className='mt-24'>
                        <ul className='flex flex-col justify-center gap-y-6'>
                          <li className='text-white text-2xl uppercase tracking- font-Alata font-light'>
                            <a href="#">About</a>
                          </li>
                          <li className='text-white text-2xl uppercase tracking- font-Alata font-light'>
                            <a href="#">Careers</a>
                          </li>
                          <li className='text-white text-2xl uppercase tracking- font-Alata font-light'>
                            <a href="#">Events</a>
                          </li>
                          <li className='text-white text-2xl uppercase tracking- font-Alata font-light'>
                            <a href="#">Products</a>
                          </li>
                          <li className='text-white text-2xl uppercase tracking- font-Alata font-light'>
                            <a href="#">Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MenuMobile;
