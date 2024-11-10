import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('faq.A1')}</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            {t('faq.A2')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl pt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: t('faq.B1.question'),
                                answer: t('faq.B1.answer')
                            },
                            {
                                question: t('faq.B2.question'),
                                answer: t('faq.B2.answer')
                            },
                            {
                                question: t('faq.B3.question'),
                                answer: t('faq.B3.answer')
                            },
                            {
                                question: t('faq.B4.question'),
                                answer: t('faq.B4.answer')
                            },
                            {
                                question: t('faq.B5.question'),
                                answer: t('faq.B5.answer')
                            },
                            {
                                question: t('faq.B6.question'),
                                answer: t('faq.B6.answer')
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
