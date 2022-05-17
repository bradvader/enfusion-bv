/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react';
const navigation = [
  { name: 'For Fund Launches', href: '#', current: false },
  { name: 'Clients', href: '#', current: false },
  { name: 'A 文', href: '#', current: false },
  { name: 'Talk to Us', href: '#', current: true },
  { name: 'Menu', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar() {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  



  return (
    // <Disclosure as="nav" className='fixed top-0 z-50 w-full'>
      <Disclosure as="nav" id="main-nav" className={"transition-all duration-500 fixed top-0 z-50 w-full " + (navbar ? 'navbar scroll-active' : 'navbar')}>
      {({ open }) => (
        <>
             
          <div className="max-w-[7xl] mx-auto px-6">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch">
                <div className="flex-shrink-0 flex items-center">

                  <div className="flex flex-row justify-end items-end">

                    <svg className="logo-icon" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.1796 46.1545C22.1796 47.174 23.0072 48 24.0279 48C25.0487 48 25.8763 47.174 25.8763 46.1545C25.8763 45.1347 25.0487 44.3072 24.0279 44.3072C23.0072 44.3072 22.1796 45.1347 22.1796 46.1545ZM21.2556 36C21.2556 37.5295 22.4967 38.7685 24.0279 38.7685C25.5592 38.7685 26.8003 37.5295 26.8003 36C26.8003 34.4705 25.5592 33.2317 24.0279 33.2317C22.4967 33.2317 21.2556 34.4705 21.2556 36ZM3.69665 24C3.69665 22.9804 2.86909 22.1544 1.84833 22.1544C0.827606 22.1544 0 22.9804 0 24C0 25.0196 0.827606 25.8456 1.84833 25.8456C2.86909 25.8456 3.69665 25.0196 3.69665 24ZM14.7865 12C14.7865 10.4705 13.5451 9.22991 12.0139 9.22991C10.4828 9.22991 9.24148 10.4705 9.24148 12C9.24148 13.5295 10.4828 14.7683 12.0139 14.7683C13.5451 14.7683 14.7865 13.5295 14.7865 12ZM14.7865 24C14.7865 22.4705 13.5451 21.2299 12.0139 21.2299C10.4828 21.2299 9.24148 22.4705 9.24148 24C9.24148 25.5295 10.4828 26.7686 12.0139 26.7686C13.5451 26.7686 14.7865 25.5295 14.7865 24ZM14.7865 36C14.7865 34.4705 13.5451 33.2317 12.0139 33.2317C10.4828 33.2317 9.24148 34.4705 9.24148 36C9.24148 37.5295 10.4828 38.7685 12.0139 38.7685C13.5451 38.7685 14.7865 37.5295 14.7865 36ZM25.8763 1.84552C25.8763 0.825973 25.0487 0 24.0279 0C23.0072 0 22.1796 0.825973 22.1796 1.84552C22.1796 2.86535 23.0072 3.69132 24.0279 3.69132C25.0487 3.69132 25.8763 2.86535 25.8763 1.84552ZM26.8003 12C26.8003 10.4705 25.5592 9.22991 24.0279 9.22991C22.4967 9.22991 21.2556 10.4705 21.2556 12C21.2556 13.5295 22.4967 14.7683 24.0279 14.7683C25.5592 14.7683 26.8003 13.5295 26.8003 12ZM27.7246 24C27.7246 21.9606 26.0694 20.3069 24.0279 20.3069C21.9864 20.3069 20.3312 21.9606 20.3312 24C20.3312 26.0394 21.9864 27.6931 24.0279 27.6931C26.0694 27.6931 27.7246 26.0394 27.7246 24ZM38.8144 12C38.8144 10.4705 37.573 9.22991 36.042 9.22991C34.5108 9.22991 33.2694 10.4705 33.2694 12C33.2694 13.5295 34.5108 14.7683 36.042 14.7683C37.573 14.7683 38.8144 13.5295 38.8144 12ZM38.8144 24C38.8144 22.4705 37.573 21.2299 36.042 21.2299C34.5108 21.2299 33.2694 22.4705 33.2694 24C33.2694 25.5295 34.5108 26.7686 36.042 26.7686C37.573 26.7686 38.8144 25.5295 38.8144 24ZM48.0559 24C48.0559 22.9804 47.2283 22.1544 46.2075 22.1544C45.1868 22.1544 44.3592 22.9804 44.3592 24C44.3592 25.0196 45.1868 25.8456 46.2075 25.8456C47.2283 25.8456 48.0559 25.0196 48.0559 24Z" fill="#7D5FFF" />
                    </svg>
                    


                    <svg className="logo-word -ml-4" width="107" height="22" viewBox="0 0 107 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.2408 7.5139H70.7954V21.7147H73.2408V7.5139ZM11.7292 13.3362H2.85725C3.31222 10.5524 5.38794 9.38841 7.40676 9.38841C9.53956 9.38841 11.2742 10.6954 11.7292 13.3362ZM14.3166 15.2686C14.6296 10.8652 11.985 7.23004 7.49215 7.23004C3.0278 7.23004 0.269531 10.4386 0.269531 14.6142C0.269531 18.8459 3.28368 21.9986 7.4353 21.9986C11.0466 21.9986 13.4068 19.8979 14.0893 17.398H11.5869C10.7053 19.1026 9.25513 19.7841 7.46384 19.7841C4.87612 19.7841 2.82871 17.8517 2.74337 15.2686H14.3166ZM27.4447 21.7147H29.8617V12.9675C29.8617 9.44451 27.6721 7.23004 24.4874 7.23004C22.6391 7.23004 20.9612 7.99642 19.966 9.70098V7.5139H17.5205V21.7147H19.966V14.6721C19.966 11.3479 21.8143 9.47346 24.0893 9.47346C26.1081 9.47346 27.4447 10.9503 27.4447 13.3362V21.7147ZM50.9876 21.7147H53.4331V7.5139H50.9876V14.5583C50.9876 17.8245 49.2247 19.7552 47.035 19.7552C45.073 19.7552 43.8218 18.2494 43.8218 15.865V7.5139H36.9789V6.0658C36.9789 4.24744 37.7466 3.65097 39.339 3.65097H41.3764V1.40754H38.884C36.3817 1.40754 34.5334 2.85564 34.5334 5.80934V7.5139H31.5192V9.75713H34.5334V21.7147H36.9789V9.75713H41.3764V16.2339C41.3764 19.7552 43.5091 21.9986 46.6084 21.9986C48.4284 21.9986 50.0492 21.2031 50.9876 19.5274V21.7147ZM59.5407 11.0351C59.5407 9.92873 60.6213 9.27441 61.9862 9.27441C63.3227 9.27441 64.3463 10.041 64.7161 11.2918H67.1616C66.934 9.0197 65.0005 7.23004 61.9862 7.23004C59.1428 7.23004 57.0668 8.70689 57.0668 11.0641C57.0668 13.1084 58.2612 14.5855 60.735 15.2396L62.7824 15.7784C64.4885 16.2339 65.1425 16.9155 65.1425 18.0506C65.1425 19.3014 63.9767 19.9251 62.4128 19.9251C60.9626 19.9251 59.427 19.3286 59.1143 17.5968H56.6119C56.8393 20.4656 59.3133 21.9986 62.3843 21.9986C65.3416 21.9986 67.6165 20.7206 67.6165 17.8807C67.6165 15.7223 66.3654 14.2744 63.9767 13.678L61.702 13.0812C60.1949 12.6549 59.5407 12.0871 59.5407 11.0351ZM73.8663 2.52935C73.8663 1.50957 73.0387 0.683594 72.018 0.683594C70.9972 0.683594 70.1696 1.50957 70.1696 2.52935C70.1696 3.54895 70.9972 4.37492 72.018 4.37492C73.0387 4.37492 73.8663 3.54895 73.8663 2.52935ZM88.7891 14.6142C88.7891 17.4541 86.8271 19.7263 83.8698 19.7263C80.9125 19.7263 78.922 17.4541 78.922 14.6142C78.922 11.7745 80.9125 9.50217 83.8698 9.50217C86.8271 9.50217 88.7891 11.7745 88.7891 14.6142ZM91.2915 14.6142C91.2915 10.5253 88.1351 7.23004 83.8698 7.23004C79.5474 7.23004 76.4196 10.5253 76.4196 14.6142C76.4196 18.7049 79.5474 21.9986 83.8698 21.9986C88.1351 21.9986 91.2915 18.7049 91.2915 14.6142ZM106.811 21.7147V12.9675C106.811 9.44451 104.622 7.23004 101.437 7.23004C99.5888 7.23004 97.911 7.99642 96.9158 9.70098V7.5139H94.4702V21.7147H96.9158V14.6721C96.9158 11.3479 98.7641 9.47346 101.039 9.47346C103.058 9.47346 104.394 10.9503 104.394 13.3362V21.7147H106.811Z" fill="white" />
                    </svg>


                    <svg className="logo-word-dark hidden -ml-4 text-[#1E1A34]" width="107" height="22" viewBox="0 0 107 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.2408 7.5139H70.7954V21.7147H73.2408V7.5139ZM11.7292 13.3362H2.85725C3.31222 10.5524 5.38794 9.38841 7.40676 9.38841C9.53956 9.38841 11.2742 10.6954 11.7292 13.3362ZM14.3166 15.2686C14.6296 10.8652 11.985 7.23004 7.49215 7.23004C3.0278 7.23004 0.269531 10.4386 0.269531 14.6142C0.269531 18.8459 3.28368 21.9986 7.4353 21.9986C11.0466 21.9986 13.4068 19.8979 14.0893 17.398H11.5869C10.7053 19.1026 9.25513 19.7841 7.46384 19.7841C4.87612 19.7841 2.82871 17.8517 2.74337 15.2686H14.3166ZM27.4447 21.7147H29.8617V12.9675C29.8617 9.44451 27.6721 7.23004 24.4874 7.23004C22.6391 7.23004 20.9612 7.99642 19.966 9.70098V7.5139H17.5205V21.7147H19.966V14.6721C19.966 11.3479 21.8143 9.47346 24.0893 9.47346C26.1081 9.47346 27.4447 10.9503 27.4447 13.3362V21.7147ZM50.9876 21.7147H53.4331V7.5139H50.9876V14.5583C50.9876 17.8245 49.2247 19.7552 47.035 19.7552C45.073 19.7552 43.8218 18.2494 43.8218 15.865V7.5139H36.9789V6.0658C36.9789 4.24744 37.7466 3.65097 39.339 3.65097H41.3764V1.40754H38.884C36.3817 1.40754 34.5334 2.85564 34.5334 5.80934V7.5139H31.5192V9.75713H34.5334V21.7147H36.9789V9.75713H41.3764V16.2339C41.3764 19.7552 43.5091 21.9986 46.6084 21.9986C48.4284 21.9986 50.0492 21.2031 50.9876 19.5274V21.7147ZM59.5407 11.0351C59.5407 9.92873 60.6213 9.27441 61.9862 9.27441C63.3227 9.27441 64.3463 10.041 64.7161 11.2918H67.1616C66.934 9.0197 65.0005 7.23004 61.9862 7.23004C59.1428 7.23004 57.0668 8.70689 57.0668 11.0641C57.0668 13.1084 58.2612 14.5855 60.735 15.2396L62.7824 15.7784C64.4885 16.2339 65.1425 16.9155 65.1425 18.0506C65.1425 19.3014 63.9767 19.9251 62.4128 19.9251C60.9626 19.9251 59.427 19.3286 59.1143 17.5968H56.6119C56.8393 20.4656 59.3133 21.9986 62.3843 21.9986C65.3416 21.9986 67.6165 20.7206 67.6165 17.8807C67.6165 15.7223 66.3654 14.2744 63.9767 13.678L61.702 13.0812C60.1949 12.6549 59.5407 12.0871 59.5407 11.0351ZM73.8663 2.52935C73.8663 1.50957 73.0387 0.683594 72.018 0.683594C70.9972 0.683594 70.1696 1.50957 70.1696 2.52935C70.1696 3.54895 70.9972 4.37492 72.018 4.37492C73.0387 4.37492 73.8663 3.54895 73.8663 2.52935ZM88.7891 14.6142C88.7891 17.4541 86.8271 19.7263 83.8698 19.7263C80.9125 19.7263 78.922 17.4541 78.922 14.6142C78.922 11.7745 80.9125 9.50217 83.8698 9.50217C86.8271 9.50217 88.7891 11.7745 88.7891 14.6142ZM91.2915 14.6142C91.2915 10.5253 88.1351 7.23004 83.8698 7.23004C79.5474 7.23004 76.4196 10.5253 76.4196 14.6142C76.4196 18.7049 79.5474 21.9986 83.8698 21.9986C88.1351 21.9986 91.2915 18.7049 91.2915 14.6142ZM106.811 21.7147V12.9675C106.811 9.44451 104.622 7.23004 101.437 7.23004C99.5888 7.23004 97.911 7.99642 96.9158 9.70098V7.5139H94.4702V21.7147H96.9158V14.6721C96.9158 11.3479 98.7641 9.47346 101.039 9.47346C103.058 9.47346 104.394 10.9503 104.394 13.3362V21.7147H106.811Z" fill="#1E1A34" />
                    </svg>
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6 items-center align-right">
                  <div className="flex flex-row mt-[8px] gap-2">
                    {navigation.map((item) => ( 
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-[#7d5fff] text-white' : 'text-[rgba(255,255,255,0.8)] hover:text-white',
                          'px-5 py-[9px] rounded-[40px] text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items> */}
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
