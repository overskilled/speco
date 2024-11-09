import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, CheckCircle, Users, Video } from 'lucide-react'
import React from 'react'

const Stats = () => {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { title: 'Students', value: '1,500+', description: 'Active learners', icon: Users },
                        { title: 'Videos', value: '500+', description: 'Correction videos', icon: Video },
                        { title: 'Subjects', value: '15+', description: 'Core subjects', icon: BookOpen },
                        { title: 'Success Rate', value: '90%', description: 'Pass rate increase', icon: CheckCircle },
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