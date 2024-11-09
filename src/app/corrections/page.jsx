"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BookOpen, FileText } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const page = () => {


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Corrections Hub</h1>
            <p className="text-lg text-center mb-8">
                Access comprehensive corrections for past exams and textbook exercises.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <FileText className="mr-2" />
                            Past Exam Corrections
                        </CardTitle>
                        <CardDescription>
                            Review solutions for previous years' examination questions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Gain insights into exam patterns and improve your problem-solving skills with our detailed video explanations.
                        </p>
                        <Link href="/corrections/exams">
                            <Button className="w-full bg-blue-500 hover:bg-blue-400">Access Exam Corrections</Button>
                        </Link>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BookOpen className="mr-2" />
                            Textbook Exercise Corrections
                        </CardTitle>
                        <CardDescription>
                            Step-by-step solutions for your textbook exercises.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Reinforce your understanding of key concepts with our comprehensive chapter-by-chapter video corrections.
                        </p>
                        <Link href="/corrections/textbooks">
                            <Button className="w-full bg-blue-500 hover:bg-blue-400">Access Textbook Corrections</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default page