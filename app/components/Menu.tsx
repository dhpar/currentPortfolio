"use client";
import { KeyboardEvent, useEffect, useRef, useState, MouseEvent } from 'react';
import sectionProps from '../data/sectionsProps';
import MenuIcon from '../../public/icons/menu.svg';
import Link from 'next/link';

const Menu = () => {
    const [ isSmallScreen, setIsSmallScreen ] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const mobileMenuRef = useRef<HTMLDialogElement>(null);
    
    const handleMenuButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsMenuOpen(prev => !prev);
        }
    }

    const handleMobileMenuChange = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMenuOpen(prev => !prev);
    }

    const handleMenuClickOutside = (e: Event) => {
        if(e.target !== mobileMenuRef.current) {
            e.preventDefault();
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if(typeof window === 'undefined') {
            return;
        }

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1100);
        }
        
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleMenuClickOutside);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleMenuClickOutside);
        }
    }, []);

    useEffect(() => {
        if (mobileMenuRef.current && isMenuOpen) {
            mobileMenuRef.current.showModal();
        }

        return () => {
            mobileMenuRef.current?.close();
        };
    }, [mobileMenuRef]);

    const progresiveSectionProps = 
        isSmallScreen ? 
            sectionProps : sectionProps.slice(1);

    const MobileMenu = () => <>
        <button 
            onClick={handleMobileMenuChange} 
            onKeyDown={handleMenuButtonKeyDown} 
            className='text-amber-200 border-amber-200 border px-8 py-4 rounded-full bg-slate-950/30 backdrop-blur-sm z-10 w-fit self-end m-2 focus:bg-amber-200 focus:text-slate-950' 
            aria-label="Toggle menu"
        >
            <MenuIcon />
        </button>
        {isMenuOpen? <>
            <dialog className='w-full gap-8 bg-slate-950/30 backdrop-blur-sm border-amber-200 border  rounded-4xl text-gray-50 font-semibold fixed top-18' ref={mobileMenuRef} open={isMenuOpen}>
                <ul className="flex flex-col items-center">
                    {progresiveSectionProps.map(({ href, Icon, label }, i) => (
                        <li key={i} className='w-full'>
                            <Link href={`#${href}`} className="flex justify-center border-b border-solid border-transparent font-extrabold mx-2 my-4 hover:border-amber-200 hover:text-amber-200 focus:bg-amber-200 focus:text-slate-950 focus:w-full p-4">
                                <Icon className='w-fit mr-2'/>
                                <span>{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </dialog>
        </> : null
        }
    </>
    
    return (
        <nav className={`flex flex-col fixed z-10 w-full`}>
            {isSmallScreen ?
                <MobileMenu /> :
                <ul className="lg:flex gap-8 fixed top-0 right-0 rounded-full border-amber-200 border mt-4 mr-4 bg-slate-950/30 backdrop-blur-sm">
                    {progresiveSectionProps.map(({ href, Icon, label }, i) => (
                        <li key={i} className='flex'>
                            <Link href={href} className="flex border border-solid border-transparent capitalize font-extrabold
                            hover:bg-amber-200 hover:text-slate-950 hover:border hover:border-slate-950 hover:border-solid focus:bg-amber-200 focus:text-slate-950 focus:border focus:border-slate-950 focus:border-solid px-4 py-2 hover:rounded-full focus:rounded-full">
                                <Icon className='w-fit mr-2' />
                                {label}
                            </Link>
                        </li>)
                    )}
                </ul>}
        </nav> 
    );
}

export default Menu;
