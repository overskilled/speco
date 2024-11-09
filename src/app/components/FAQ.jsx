import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQ = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Find answers to common questions about our platform
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl pt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: "Which education systems do you support?",
                                answer: "We support both the Anglophone and Francophone education systems in Cameroon, covering all major examinations including GCE O/A Levels, BEPC, Probatoire, and BAC."
                            },
                            {
                                question: "How do I access the video corrections?",
                                answer: "Once you've created an account and subscribed to a plan, you can access all video corrections through our platform. Videos are organized by subject, exam type, and year."
                            },
                            {
                                question: "Are the textbook solutions available offline?",
                                answer: "Currently, our content is available online only. However, you can access it from any device with an internet connection."
                            },
                            {
                                question: "Can I switch between plans?",
                                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                            },
                            {
                                question: "Do you offer group discounts for schools?",
                                answer: "Yes, we offer special pricing for schools and educational institutions. Please contact our sales team for more information."
                            },
                            {
                                question: "How often is new content added?",
                                answer: "We regularly update our content library with new exam corrections and textbook solutions. We also add new features and improvements based on user feedback."
                            }
                        ].map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQ