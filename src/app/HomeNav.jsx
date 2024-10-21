"use client"

import { Button } from '@/components/ui/button'
import { GraduationCap, GraduationCapIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomeNav() {
    return (
        <header className=" bg-gray-100 px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center " href="#">
                <GraduationCapIcon className="h-6 w-6 mr-2" />  
                <span className="font-bold">SPECO</span>
            </Link>

            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="/login" prefetch={true}>
                    <Button className="rounded-full text-primary bg-white p-5 hover:bg-blue-500 hover:text-white">log in</Button>
                </Link>
                <Link href="/register" prefetch={true}>
                    <Button className="rounded-full bg-blue-500 text-white p-5">Get started</Button>
                </Link>
            </nav>
        </header>
    )
}

