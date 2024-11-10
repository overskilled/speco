import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Video } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
    const { t } = useTranslation();
    return (
        <section id="how-it-works" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('howitworks.A1')}</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        {t('howitworks.A2')}
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            title: t('howitworks.B1'),
                            description:t('howitworks.B2'),
                            icon: Users
                        },
                        {
                            title: t('howitworks.B3'),
                            description: t('howitworks.B4'),
                            icon: BookOpen
                        },
                        {
                            title: t('howitworks.B5'),
                            description:t('howitworks.B6'),
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