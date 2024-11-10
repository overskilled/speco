import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Testimonials = () => {
    const { t } = useTranslation();

    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('testimonials.A1')}</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">{t('testimonials.A2')}</p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            name: t('testimonials.B1.name'),
                            role: t('testimonials.B1.role'),
                            content: t('testimonials.B1.content'),
                        },
                        {
                            name: t('testimonials.B2.name'),
                            role: t('testimonials.B2.role'),
                            content: t('testimonials.B2.content'),
                        },
                        {
                            name: t('testimonials.B3.name'),
                            role: t('testimonials.B3.role'),
                            content: t('testimonials.B3.content'),
                        },
                    ].map((testimonial, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400" />
                                    ))}
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
    );
};

export default Testimonials;
