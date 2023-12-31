import React from 'react'
import Drawer from './drawerNav'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function BottomNav() {
  return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-gray-200 dark:bg-black dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link to="/" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span className="text-sm text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                    </Link>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link to="/wallet" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                        <path clipRule="evenodd" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                        </svg>
                        <span className="text-sm text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                    </Link>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link to="/profile" className="inline-flex flex-col items-center justify-center px-5">
                        <svg className="w-6 h-6 mb-1 text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                        </svg>
                        <span className="text-sm text-[#285DBA] dark:text-[#285DBA]-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                    </Link>
                </button>
                <Drawer/>
            </div>
        </div>

// bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90%

  )
}
export default BottomNav