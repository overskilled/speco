import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Clock, Globe, GraduationCap, Video, Zap } from 'lucide-react'
import React from 'react'

const Features = () => {
    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Everything You Need to Excel
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Our platform provides comprehensive learning resources for both Anglophone and Francophone students.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            title: "Past Exam Corrections",
                            description: "Step-by-step video solutions for previous examination questions from BEPC to BAC and GCE O/A Levels.",
                            icon: Video
                        },
                        {
                            title: "Textbook Solutions",
                            description: "Detailed explanations for exercises from your curriculum textbooks, organized by chapter.",
                            icon: BookOpen
                        },
                        {
                            title: "Expert Teachers",
                            description: "Learn from experienced educators who understand both education systems.",
                            icon: GraduationCap
                        },
                        {
                            title: "24/7 Access",
                            description: "Study anytime, anywhere with our on-demand video platform.",
                            icon: Clock
                        },
                        {
                            title: "Bilingual Content",
                            description: "Access content in both English and French to support your learning.",
                            icon: Globe
                        },
                        {
                            title: "Performance Tracking",
                            description: "Monitor your progress and identify areas for improvement.",
                            icon: Zap
                        }
                    ].map((feature, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                    <CardTitle>{feature.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features