import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next";

// Type definition for examTypes
const examTypes = {
    francophone: ['BEPC', 'Probatoire', 'Baccalauréat'],
    anglophone: ['GCE Ordinary Level', 'GCE Advanced Level']
}

// Subjects as a string array
// This can be updated with translation keys later if needed
const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'French', 'English', 'History', 'Geography',
    'Computer Science', 'Literature'
]

const page = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">{t('exam.A1')}</h1>
            <Tabs defaultValue="francophone" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="francophone">{t('exam.francophone')}</TabsTrigger>
                    <TabsTrigger value="anglophone">{t('exam.anglophone')}</TabsTrigger>
                </TabsList>
                <TabsContent value="francophone">
                    <ExamCycleContent cycle="francophone" />
                </TabsContent>
                <TabsContent value="anglophone">
                    <ExamCycleContent cycle="anglophone" />
                </TabsContent>
            </Tabs>
        </div>
    )
}

// Component to display exam cycle content
function ExamCycleContent({ cycle }) {
    const { t } = useTranslation();

    return (
        <div className="mt-6">
            {examTypes[cycle].map((examType) => (
                <Card key={examType} className="mb-6">
                    <CardHeader>
                        <CardTitle>{examType}</CardTitle>
                        <CardDescription>{t('exam.selectSubject')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {subjects.map((subject) => (
                                <Button key={subject} variant="outline" className="w-full">
                                    {t(`exam.subjects.${subject}`) || subject}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default page;
