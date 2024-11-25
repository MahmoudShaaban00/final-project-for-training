import React, { createContext, useContext, useState } from 'react';


export default function Sidebar({ children }) {
    return ( 
        <aside >
            <nav className='h-full flex flex-col border-r sm:p-0 pr-36  shadow-sm'>
                    <ul className='flex-1 px-3'>{children}</ul>
            </nav>
        </aside>
    );
}

export function SideBarItems({  text }) {
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group`}>
            <span className="w-52 ml-3">{text}</span>
        </li>
    );
}