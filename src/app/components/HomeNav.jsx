// "use client"

import { Button } from '@/components/ui/button'
import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomeNav() {
    return (
        <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold">Speco</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link className="text-sm font-medium hover:text-primary" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary" href="#how-it-works">
                        How It Works
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary" href="#testimonials">
                        Testimonials
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary" href="#pricing">
                        Pricing
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={"bg-blue-500 hover:bg-blue-400"}>Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

