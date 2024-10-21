"use client"

import { ArrowBigRight, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";



const Header = () => {
    const [signOut, logOutLoading, logOutError] = useSignOut(auth);
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
        <header className="flex justify-between bg-primary text-white p-4">
            <Link className="flex items-center justify-center " href="/">
                <GraduationCap className="h-6 w-6 mr-2" />
                <span className="font-bold">SPECO</span>
            </Link>
            <Button className="rounded-full bg-blue-500 text-white hover:bg-white hover:text-primary p-5 gap-x-1" onClick={onLogout}>  Log Out<ArrowBigRight /></Button>
        </header>
    ) 
}

export default Header