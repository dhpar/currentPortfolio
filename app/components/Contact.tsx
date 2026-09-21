import Link from "next/link";
import contactProps from "../data/contactProps";

export const Contact = () => (
    <div>
        <a href="www.google.com" target="_blank" rel="noopener noreferrer">test</a>
    <ul>
        {contactProps.map(({href, Icon, label}, i) => (
            <li key={i}>
                <a href={href} target="_blank" className="flex w-full items-center align-middle font-semibold hover:bg-amber-200 p-2">
                <Icon className="w-fit mr-4 text-amber-200 in-[a:hover]:text-amber-900"/>
                <span className='border-b border-solid border-transparent in-[a:hover]:text-amber-900'>{label}</span>
                </a>
            </li>
        ))}
    </ul>
    </div>
    );
