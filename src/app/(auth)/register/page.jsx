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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(); 
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'section' ? { class: '', specialty: '' } : {}),
      ...(field === 'class' ? { specialty: '' } : {})
    }));
  };

  const shouldShowSpecialty = () => {
    const { section, class: selectedClass } = formData;
    if (!section || !selectedClass) return false;

    if (section === 'Anglophone' && ['Form 4', 'Form 5', 'Lower Sixth', 'Upper Sixth'].includes(selectedClass)) {
      return true;
    }
    if (section === 'Francophone' && ['2nd', '1er', 'Terminale'].includes(selectedClass)) {
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userData);
        localStorage.setItem("user-info", JSON.stringify(userData));
      }
    } catch (error) {
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      router.push('/corrections');
    }
  }, [authUser, router]);

  useEffect(() => {
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
          <CardTitle className="text-2xl text-center">{t('register.title')}</CardTitle>
          <CardDescription className="text-center">{t('register.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('register.full_name')}</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('register.email')}</Label>
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
              <Label htmlFor="password">{t('register.password')}</Label>
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
              <Label>{t('register.section')}</Label>
              <Select value={formData.section} onValueChange={handleSelectChange('section')}>
                <SelectTrigger>
                  <SelectValue placeholder={t('register.section')} />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>{section}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.section && (
              <>
                <div className="space-y-2">
                  <Label>{t('register.class')}</Label>
                  <Select value={formData.class} onValueChange={handleSelectChange('class')}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('register.class')} />
                    </SelectTrigger>
                    <SelectContent>
                      {classes[formData.section]?.map((classOption) => (
                        <SelectItem key={classOption} value={classOption}>{classOption}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {shouldShowSpecialty() && (
                  <div className="space-y-2">
                    <Label>{t('register.specialty')}</Label>
                    <Select value={formData.specialty} onValueChange={handleSelectChange('specialty')}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('register.specialty')} />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties[formData.section]?.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </>
            )}

            {errors && <div className="text-red-500 text-sm">{errors}</div>}
          </form>
        </CardContent>
        <CardFooter className="space-x-4">
          <Button type="submit" className="w-full">{loading || isLoading ? t('register.loading') : t('register.register_button')}</Button>
          <p className="text-sm">{t('register.already_have_account')} <Link href="/login" className="font-medium text-primary">{t('login')}</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
}
