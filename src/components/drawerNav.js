import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const appName = "LETSLUDO."
const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={openDrawer}>
            <svg className="w-6 h-6 text-[#285DBA] dark:text-[#285DBA] group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
            <span className="text-sm text-[#285DBA] dark:text-[#285DBA] group-hover:text-blue-600 dark:group-hover:text-blue-500">Menu</span>
        </div>

      <div
        className={`bg-gradient-to-b from-slate-900 fixed top-0 right-0 h-[48.8rem] w-64 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-around m-2 pb-3 pt-2 border-b border-b-[#013D7D]">
          <span onClick={() => setIsOpen(false)} className="text-2xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% cursor-pointer">
            {appName} 
          </span>

        </div>

        <div className="m-5">
          <ul className="flex flex-col items-end gap-7  transition-all ease-in duration-500">
            <li className="border-b border-b-[#013D7D]">
              <a
                href="/"
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% font-semibold transition-all ease-in-out duration-300"
              >
                Games History
              </a>
            </li>

            <li className="border-b border-b-[#013D7D]">
              <a
                href="/"
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% font-semibold transition-all ease-in-out duration-300"
              >
                Transactions
              </a>
            </li>

            <li className="border-b border-b-[#013D7D]">
              <a
                href="/"
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% font-semibold transition-all ease-in-out duration-300"
              >
                Notifications
              </a>
            </li>

            <li className="border-b border-b-[#013D7D]">
              <a
                href="/"
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-10% via-[#E0AA3E] via-30% to-[#FAF398] via-75% via-[#B88A44] to-90% font-semibold transition-all ease-in-out duration-300"
              >
               Refer and Earn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
 
// #BBA13D #9C8130 #EDE1B2 #C6A843