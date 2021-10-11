import React from 'react'
import Surfboard from '../svgIcons/Surfboard'
import Link from 'next/link'
import { BsMoon, BsThreeDotsVertical } from 'react-icons/bs'
import MyModal from '../Home/Modal'

const AppNavbar = () => {
    return (
        <header className="sm:flex block py-4 -m-0 relative justify-between bg-gray-200 bg-opacity-50 shadow-md items-center">
            <h1 className="m-4 font-bold">
                <Surfboard />
            </h1>
            <div className="m-4 flex">
                <Link href="/Produtos">
                    <a className="mr-3 bg-blue-300 hover:bg-blue-400 hover:text-white p-2 rounded-lg transition duration-300 ">
                        Produtos
                    </a>
                </Link>
                <Link href="/Login">
                    <a className="mr-3 bg-blue-300 hover:bg-blue-400 hover:text-white p-2 rounded-lg transition duration-300 ">
                        Login
                    </a>
                </Link>
                <Link href="/Contato">
                    <a className="mr-3 bg-blue-300 hover:bg-blue-400 hover:text-white p-2 rounded-lg transition duration-300 ">
                        Contato
                    </a>
                </Link>
            </div>
            <div className="m-4 flex">
                <div className="mr-3 p-2">
                    <BsMoon className="w-5 h-5" />
                </div>
                <div className="mr-3 p-2">
                    <MyModal />
                </div>{' '}
                <div className="mr-3 p-2">
                    <BsThreeDotsVertical className="w-5 h-5" />
                </div>
            </div>
        </header>
    )
}

export default AppNavbar
