import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Students Say</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Hear from students who have improved their grades with Speco
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            name: "Aisha N.",
                            role: "GCE A Level Student",
                            content: "Speco helped me understand complex Physics concepts. I improved my grade from a C to an A!",
                        },
                        {
                            name: "Jean-Pierre M.",
                            role: "BAC Student",
                            content: "The video explanations for Math problems are clear and easy to follow. It's like having a personal tutor.",
                        },
                        {
                            name: "Grace T.",
                            role: "BEPC Student",
                            content: "I love that I can access both English and French content. It really helps with my bilingual education.",
                        }
                    ].map((testimonial, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <Star className="h-5 w-5 text-yellow-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials