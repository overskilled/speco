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
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'react-i18next'

export default function LoginPage() {
    const router = useRouter();
    const { t } = useTranslation();
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        if (!authLoading && authUser) {
            router.push('/corrections');
        }
    }, [authUser, authLoading, router]);

    useEffect(() => {
        if (user) {
            router.push('/corrections');
        }
    }, [user, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(null);
    
        if (!formData.email || !formData.password) {
            setErrors(t('login.errorMessage'));
            return;
        }
    
        try {
            const userInfo = await signInWithEmailAndPassword(formData.email, formData.password);
            toast.success(t("login.successMessage"));
    
            if (!userInfo) {
                setErrors(t("login.notFoundMessage"));
                return;
            }
    
            const docRef = doc(firestore, "users", userInfo.user.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
            } else {
                setErrors(t("login.notFoundMessage"));
                toast.error(t("login.notFoundMessage"));
            }
    
        } catch (error) {
            toast.error(error.message);
            setErrors("An error occurred: " + error.message);
            console.log("Error:", error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-center">{t('login.title')}</CardTitle>
                    <CardDescription className="text-center">
                        {t('login.description')}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('login.emailLabel')}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={t('login.emailPlaceholder')}
                                    required
                                    value={formData.email}
                                    autoCorrect="off" spellCheck="false" autoComplete="off"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">{t('login.passwordLabel')}</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder={t('login.passwordPlaceholder')}
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
                                    {t('login.loadingButton')}
                                </>
                            ) : (
                                <>{t('login.signInButton')}</>
                            )}
                        </Button>
                        {errors && <p className="text-red-600 text-sm mt-2">{errors}</p>}
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground mt-2">
                        {t('login.registerPrompt')}{' '}
                        <Link href="/register" className="text-blue-400 hover:underline ">
                            {t('login.registerLink')}
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
