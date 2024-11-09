'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCapIcon, Loader2 } from 'lucide-react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';


const sections = ['Anglophone', 'Francophone'];

const classes = {
    "Anglophone": ['Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Lower Sixth', 'Upper Sixth'],
    "Francophone": ['6eme', '5eme', '4eme', '3eme', '2nd', '1er', 'Terminale']
};

const specialties = {
    "Anglophone": ['Science', 'Arts', 'Commercial'],
    "Francophone": ['A', 'D', 'C'],
};

export default function RegisterPage() {
    const [errors, setErrors] = useState(null);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [authUser, authLoading] = useAuthState(auth);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        section: '',
        class: '',
        specialty: ''
    });

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Handle changes for form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle select change for section, class, specialty
    const handleSelectChange = (field) => (value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
            // Reset dependent fields when section or class is changed
            ...(field === 'section' ? { class: '', specialty: '' } : {}),
            ...(field === 'class' ? { specialty: '' } : {})
        }));
    };

    // Determine if we should show the specialty field
    const shouldShowSpecialty = () => {
        const { section, class: selectedClass } = formData;

        if (!section || !selectedClass) return false;

        // For Anglophone, show for Form 4 to Upper Sixth
        if (section === 'Anglophone' && ['Form 4', 'Form 5', 'Lower Sixth', 'Upper Sixth'].includes(selectedClass)) {
            return true;
        }

        // For Francophone, show for 2nd to Terminale
        if (section === 'Francophone' && ['2nd', '1er', 'Terminale'].includes(selectedClass)) {
            return true;
        }

        return false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted", formData);
        // Simple validation
        if (!formData.name || !formData.email || !formData.password || !formData.section) {
            setErrors("Please fill all fields");
            return;
        }
        
        try {
            setIsLoading(true);
            const newUser = await createUserWithEmailAndPassword(formData.email, formData.password);

            if (newUser) {
                const userData = {
                    uid: newUser.user.uid,
                    name: formData.name,
                    email: formData.email,
                    section: formData.section,
                    class: formData.class,
                    speciality: formData.specialty,
                    createdAt: Date.now(),
                    profilepic: "",
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userData);
                localStorage.setItem("user-info", JSON.stringify(userData));
            }

            console.log("User created successfully!");
        } catch (error) {
            // Handle any errors during the user creation process
            console.error("Error creating user:", error.message);
            setErrors(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // If the user is already logged in, redirect to dashboard
        if (authUser) {
            router.push('/corrections');
        }
    }, [authUser, router]);

    useEffect(() => {
        // Once the user is created, redirect to the dashboard
        if (user) {
            router.push('/corrections');
        }
    }, [user, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10 lg:p-20">
            <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg p-6 lg:p-8 overflow-y-auto max-h-full">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCapIcon className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your details to register for our learning platform
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                autoCorrect="off" spellCheck="false" autoComplete="off"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={handleSelectChange('section')} value={formData.section}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sections.map((section) => (
                                        <SelectItem key={section} value={section}>{section}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Display Class field only when section is selected */}
                        {formData.section && (
                            <div className="space-y-2">
                                <Label htmlFor="class">Class</Label>
                                <Select onValueChange={handleSelectChange('class')} value={formData.class}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {classes[formData.section].map((cls) => (
                                            <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        {/* Display Specialty field only for selected classes */}
                        {shouldShowSpecialty() && (
                            <div className="space-y-2">
                                <Label htmlFor="specialty">Specialty</Label>
                                <Select onValueChange={handleSelectChange('specialty')} value={formData.specialty}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your specialty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {specialties[formData.section].map((specialty) => (
                                            <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        <Button type="submit" className="w-full mt-6 bg-blue-500 hover:bg-blue-400">
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </>
                            ) : (
                                <>Register</>
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground mt-2">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline ">
                            Login here
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
