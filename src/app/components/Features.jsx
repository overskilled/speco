import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Clock, Globe, GraduationCap, Video, Zap } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Features = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        {t('features.A1')}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            {t('features.A2')}
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                    {[
                        {
                            title: t('features.B1'),
                            description: t('features.B2'),
                            icon: Video
                        },
                        {
                            title: t('features.B3'),
                            description: t('features.B4'),
                            icon: BookOpen
                        },
                        {
                            title: t('features.B5'),
                            description: t('features.B6'),
                            icon: GraduationCap
                        },
                        {
                            title: t('features.B7'),
                            description: t('features.B8'),
                            icon: Clock
                        },
                        {
                            title: t('features.B9'),
                            description: t('features.B10'),
                            icon: Globe
                        },
                        {
                            title: t('features.B11'),
                            description:t('features.B12'),
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