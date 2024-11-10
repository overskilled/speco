"use client"

import { ArrowBigRight, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";



const Header = () => {
    const [signOut, logOutLoading, logOutError] = useSignOut(auth);
    const { t } = useTranslation();
    const router = useRouter()

    const onLogout = async () => {
        try {
            await signOut()

            console.log("logout successful")
        } catch (error) {
            console.log("An error occured while loging out: ", error.message)
        } finally {
            router.push("/")
        }
    }

    return (
        <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold">{ t('header.A1')}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Button className={"bg-blue-500 hover:bg-blue-400"} onClick={onLogout}>{ t('header.A2')} <ArrowBigRight /></Button>
                </div>
            </div>
        </header>
    )
}

export default Header