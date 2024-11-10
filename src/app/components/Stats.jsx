import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, CheckCircle, Users, Video } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Stats = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        {
                            title: t('stats.A1'),
                            value: '1,500+',
                            description: t('stats.A2'),
                            icon: Users
                        },
                        {
                            title: t('stats.A3'),
                            value: '500+',
                            description: t('stats.A4'),
                            icon: Video
                        },
                        {
                            title: t('stats.A5'),
                            value: '15+',
                            description: t('stats.A6'),
                            icon: BookOpen
                        },
                        {
                            title: t('stats.A7'),
                            value: '90%',
                            description: t('stats.A8'),
                            icon: CheckCircle
                        },
                    ].map((stat, idx) => <StatCard key={idx} {...stat} />)}
                </div>
            </div>
        </section>
    )
}

const StatCard = ({ title, value, description, icon: Icon }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default Stats