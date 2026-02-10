import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="bg-transparent my-5 mx-10">
                <ul className="flex items-center justify-between p-4 font-sans">
                    <li className='uppercase'><a href="/">A Palavra do Dia</a></li>
                    <div className="flex items-center gap-4">
                        <li><a href="/about">Sobre</a></li>
                        {/* <li>.</li>
                        <li><a href="/contact">Contact</a></li> */}
                    </div>
                </ul>
            </nav>
        </div>
    )
}
