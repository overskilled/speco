import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Video } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Get started with Speco in just a few simple steps
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            title: "1. Sign Up",
                            description: "Create your account and choose a subscription plan that fits your needs.",
                            icon: Users
                        },
                        {
                            title: "2. Choose Your Content",
                            description: "Select from our library of past exam corrections or textbook solutions.",
                            icon: BookOpen
                        },
                        {
                            title: "3. Start Learning",
                            description: "Watch expert video explanations and improve your understanding.",
                            icon: Video
                        }
                    ].map((step, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <step.icon className="h-8 w-8 text-primary" />
                                    <CardTitle>{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks