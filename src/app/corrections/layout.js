
import Header from "@/components/corrections/Header";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'Corrections - Video Page',
    description: 'Watch and learn from video corrections.',
};



export default function CorrectionsLayout({ children }) {
    return (
        <div className="corrections-layout">
            <Header />

            <main className="p-8 bg-gray-50 min-h-screen">
                {children}  {/* This renders the page content */}
            </main>

            <footer className="bg-primary text-white p-4 text-center">
                <p>© 2024 Corrections. All rights reserved.</p>
            </footer>
        </div>
    );
}
