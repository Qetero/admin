import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdEditCalendar,
  MdKeyboardDoubleArrowRight,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { BsFillPersonVcardFill, BsPersonBadge, BsStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const iconClass = `cursor-pointer duration-500 text-2xl`;
  const menuItems = [
    {
      title: <h1 className="text-white text-xl">Qetero</h1>,
      icon: (
        <MdEditCalendar
          className={`${iconClass} text-white text-3xl ${
            isOpen && "-ml-2 rotate-[360deg]"
          }`}
        />
      ),
    },
    {
      title: "Dashboard",
      icon: <MdDashboard className={iconClass} />,
      gap: true,
    },
    {
      title: "Bussiness Types",
      icon: <BsStack className={iconClass} />,
    },
    {
      title: "Customers",
      icon: <BsPersonBadge className={iconClass} />,
    },
    {
      title: "Bussiness Owners",
      icon: <BsFillPersonVcardFill className={iconClass} />,
    },
    {
      title: "Transactions",
      icon: <MdOutlineCurrencyExchange className={iconClass} />,
    },
    {
      title: "Payouts",
      icon: <GiReceiveMoney className={iconClass} />,
    },
  ];

  return (
    <div className={`bg-indigo-500 w-fit h-screen relative duration-300 mr-4`}>
      <MdKeyboardDoubleArrowRight
        className={`absolute cursor-pointer -right-4 top-12 text-4xl bg-white rounded-full border border-black  duration-300 ${
          !isOpen && "rotate-180"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className={`p-2 w-fit`}>
        {menuItems.map((menu, index) => (
          <Link
            to={`/${menu.title}`}
            key={index}
            className={`relative group flex rounded-md p-2 cursor-pointer hover:bg-black/60 text-gray-300 text-sm items-center gap-x-3 
              ${menu.gap ? "mt-9" : "mt-2"} `}
          >
            {menu.icon}
            {isOpen ? (
              <span className={`whitespace-nowrap origin-left duration-200`}>
                {menu.title}
              </span>
            ) : (
              <span
                className={`absolute left-full top-1 invisible group-hover:visible ml-1 bg-slate-800  text-white whitespace-nowrap py-1 px-4`}
              >
                {menu.title}
              </span>
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
