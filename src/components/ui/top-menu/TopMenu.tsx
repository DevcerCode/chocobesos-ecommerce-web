'use client'
import React, { useCallback } from 'react'
import Link from 'next/link'
import { titleFont } from '@/config/fonts'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { useUIStore } from '@/store'
import { sendGTMEvent } from '@next/third-parties/google'

export const TopMenu = () => {

    const openMenu = useUIStore(state => state.openSideMenu)

    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>ChocoBesos</span>
                </Link>
            </div>
            <div className='hidden sm:block'>
                <Link onClick={() => sendGTMEvent({ event: "CategorySelected", value: 'Amor' })} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/love"}>Amor</Link>
                <Link onClick={() => sendGTMEvent({ event: "CategorySelected", value: 'Amistad' })} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/friendship"}>Amistad</Link>
                <Link onClick={() => sendGTMEvent({ event: "CategorySelected", value: 'Aniversario' })} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/anniversary"}>Aniversario</Link>
                <Link onClick={() => sendGTMEvent({ event: "CategorySelected", value: 'Peluches' })} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/stuffed"}>Peluches</Link>
                <Link onClick={() => sendGTMEvent({ event: "CategorySelected", value: 'Chocolate' })} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/chocolates"}>Chocolates</Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className='flex items-center'>

                <Link href="/search" className='mx-2'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>

                <Link href="/cart" className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                            3
                        </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>

                <button
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                    onClick={openMenu}
                >
                    Menu
                </button>
            </div>
        </nav>
    )
}
