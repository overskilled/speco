"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '@/firebase/config';
import { collection, query, where } from 'firebase/firestore';
import { Skeleton } from "@/components/ui/skeleton"

// // Define subjects as a string array
// const subjects = [
//     'Mathematics', 'Physics', 'Chemistry', 'Biology',
//     'French', 'English', 'History', 'Geography',
//     'Computer Science', 'Literature'
// ]
const Page = () => {
    // Use state to manage selected subject and search term
    const [selectedSubject, setSelectedSubject] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    // Fetch subjects from Firestore
    const [subjects, subjectsLoading, subjectsError] = useCollectionData(
        collection(firestore, 'subjects'),
        { idField: 'id' }
    );

    // Fetch all textbooks
    const [textbooks, textbooksLoading, textbooksError] = useCollectionData(
        collection(firestore, 'textbooks'),
        { idField: 'id' }
    );

    // Group textbooks by subject
    const textbooksBySubject = textbooks?.reduce((acc, textbook) => {
        if (!acc[textbook.subject]) {
            acc[textbook.subject] = [];
        }
        acc[textbook.subject].push(textbook);
        return acc;
    }, {});

    // Filter textbooks based on the search term and selected subject
    const filteredTextbooks = textbooks?.filter(textbook =>
        textbook.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedSubject || textbook.subject === selectedSubject)
    );

    // Loading placeholder
    const LoadingPlaceholder = () => (
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
            </CardContent>
        </Card>
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Textbook Exercise Corrections</h1>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Find Your Textbook</CardTitle>
                    <CardDescription>Select a subject and search for your textbook</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Dropdown to select subject */}
                        <Select onValueChange={setSelectedSubject}>
                            <SelectTrigger className="w-full md:w-[200px]">
                                <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                                {subjects?.map((subject) => (
                                    <SelectItem key={subject.id} value={subject.name}>
                                        {subject.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Input for searching textbooks */}
                        <Input
                            type="text"
                            placeholder="Search for a textbook..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Display subjects and their textbooks or loading placeholders */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjectsLoading || textbooksLoading ? (
                    // Display 6 loading placeholders while data is being fetched
                    Array(6).fill().map((_, index) => (
                        <LoadingPlaceholder key={index} />
                    ))
                ) : (
                    // Display actual data once loaded
                    (selectedSubject ? [selectedSubject] : subjects)?.map((subject) => (
                        <Card key={subject.id}>
                            <CardHeader>
                                <CardTitle>{subject.name}</CardTitle>
                                <CardDescription>Textbook exercise corrections</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {textbooksBySubject[subject.name]
                                        ?.filter(textbook => textbook.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map((textbook) => (
                                            <li key={textbook.id}>
                                                <Link href={`/corrections/textbooks/${textbook.title}`}>
                                                    <Button variant="link" className="w-full justify-start">
                                                        {textbook.title}
                                                    </Button>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default Page
