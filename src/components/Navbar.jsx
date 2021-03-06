import { Fragment } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { MoonIcon, SunIcon , MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Explore', href: '#', current: true, path:'/' },
  { name: 'Skills', href: '#', current: false, path:'/Explore' },
  { name: 'Projects', href: '#', current: false, path:'/Projects' },
  { name: 'Contact', href: '#', current: false, path:'/Contact' },
  { name: 'Tip', href: '#', current: false, path:'/Tip' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-5 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to='/' className='text-white uppercase font-bold text-[1.2rem]'>                 
                   <div className="h-11 w-11 mt-1 flex items-center justify-center bg-black dark:bg-white rounded-full shadow-2xl">
                     <h1 className="font-bold text-[32px] text-white dark:text-black">K</h1>
                   </div>
                    </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.nLinkme}
                        to={item.path}
                        className={classNames(
                          item.current ? 'bg-black dark:bg-gray-900 text-white' : 'text-black hover:bg-black hover:text-white dark:text-gray-300 dark:hover:bg-gray-700',
                          'px-3 py-2 rounded-md text-sm font-medium mt-2'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-black dark:shadow-xl p-1 rounded-full cursor:pointer"
                >
                  <span className="sr-only">View notifications</span>
                  <MoonIcon className='h-6 w-6 text-white' />
                </button>
                {/* <Toggle /> */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                 <Link to={item.path}> 
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black dark:bg-gray-900 text-white' : 'text-black hover:bg-black hover:text-white dark:text-gray-300 dark:hover:bg-gray-700',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >                                 
                  {item.name}
                </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
