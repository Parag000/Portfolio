import React , {useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import {styles} from "../styles";
import { navLinks } from '../constants';
import { logo , close, menu } from "../assets";

const Navbar = () => {
  const [active , setActive] = useState('');
  const [toggle , setToggle] = useState(false);
  const [isTop, setIsTop] = useState(true); 
  //console.log(toggle);
  useEffect(() => {
    const handleScroll = () => {
      const isTopNow = window.scrollY < 50; // Consider "not top" when scrolled more than 50 pixels
      setIsTop(isTopNow);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center 
      py-0 fixed top-0 z-20 ${
        isTop ? 'bg-transparent' : 'bg-primary'}`}
    >
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }
        }>
          <img src={logo} alt="logo" className="w-24 h-24 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Parag &nbsp; 
            <span className="sm:block hidden">Deshpande</span>
          </p>
        </Link>
        <ul className="list-none hidden 
        sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close:menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {
              setToggle(!toggle);
              
            }}
          />
          <div className={`${!toggle ? 'hidden' : 'flex' } p-6
            black-gradient absolute top-20 right-0 mx-4 my-2
            min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          </div>

      </div>

    </nav>
  )
 
}

export default Navbar