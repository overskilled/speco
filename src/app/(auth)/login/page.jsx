'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Loader2 } from 'lucide-react'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { toast, ToastContainer } from 'react-toastify'  // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'          // Import CSS for toastify

export default function LoginPage() {
    const router = useRouter();
    const [errors, setErrors] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [authUser, authLoading] = useAuthState(auth);

    // Handle input change for form fields
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        // If the user is already logged in, redirect to dashboard
        if (!authLoading && authUser) {
            router.push('/corrections');
        }
    }, [authUser, authLoading, router]);

    useEffect(() => {
        // Once a new user is created, redirect to dashboard
        if (user) {
            router.push('/corrections');
        }
    }, [user, router]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        setErrors(null);    // Reset errors before submission
    
        if (!formData.email || !formData.password) {
            setErrors('Please fill all fields');
            return;  // Prevent form submission if fields are missing
        }
    
        try {
            const userInfo = await signInWithEmailAndPassword(formData.email, formData.password);
            toast.success("Log In Successful");
    
            if (!userInfo) {
                setErrors("An error occurred while logging in.");
                return;  // Prevent further execution if sign-in fails
            }
    
            const docRef = doc(firestore, "users", userInfo.user.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
    
            } else {
                setErrors("User data not found in the database.");
                toast.error("User data not found.");
            }
    
        } catch (error) {
            toast.error(error.message);
            setErrors("An error occurred: " + error.message);
            console.log("Error:", error.message);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer /> {/* Toast container to show notifications */}
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-center">Login to Your Account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to access your learning materials
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                    value={formData.email}
                                    autoCorrect="off" spellCheck="false" autoComplete="off"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full mt-6 bg-blue-500 hover:bg-blue-400">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </>
                            ) : (
                                <>Sign In</>
                            )}
                        </Button>
                        {/* Display error messages */}
                        {errors && <p className="text-red-600 text-sm mt-2">{errors}</p>}
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground mt-2">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-blue-400 hover:underline ">
                            Register here
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
