import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Type definition for examTypes
const examTypes = {
    francophone: ['BEPC', 'Probatoire', 'Baccalauréat'],
    anglophone: ['GCE Ordinary Level', 'GCE Advanced Level']
}

// Subjects as a string array
const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'French', 'English', 'History', 'Geography',
    'Computer Science', 'Literature'
]


const page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Past Exam Corrections</h1>
            <Tabs defaultValue="francophone" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="francophone">Francophone</TabsTrigger>
                    <TabsTrigger value="anglophone">Anglophone</TabsTrigger>
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
    return (
        <div className="mt-6">
            {examTypes[cycle].map((examType) => (
                <Card key={examType} className="mb-6">
                    <CardHeader>
                        <CardTitle>{examType}</CardTitle>
                        <CardDescription>Select a subject to view available corrections</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {subjects.map((subject) => (
                                <Button key={subject} variant="outline" className="w-full">
                                    {subject}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default page