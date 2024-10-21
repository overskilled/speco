'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Sample data with free sample videos
const sampleData = {
    exam: {
        title: "Mathematics",
        videos: [
            { id: 1, chapitre: "Algebre numerique", title: "Question 1", url: "https://firebasestorage.googleapis.com/v0/b/speco-75acf.appspot.com/o/Course%2FQ2%20P41.mp4?alt=media&token=ac4870ec-fdc2-41b8-a7e9-170881ee0eed" },
            { id: 2, chapitre: "Algebre numerique", title: "Question 2: Geometry", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
            { id: 3, chapitre: "Algebre numerique", title: "Question 3: Probability", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
        ],
    },
    textbook: {
        title: "Physics Textbook Grade 10",
        videos: [
            { id: 1, title: "Chapter 1: Motion - Distance and Displacement", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
            { id: 2, title: "Chapter 1: Motion - Speed and Velocity", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
            { id: 3, title: "Chapter 2: Forces - Newton's Laws", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
            { id: 4, title: "Chapter 2: Forces - Friction", url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
        ],
    }
}

export default function CorrectionVideoPage() {
    const params = useParams()
    const type = params?.type ?? 'exam';
    const id = params?.id

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    // Use the sample data directly, with a fallback to prevent errors
    const data = sampleData[type] || { title: "Content Not Found", videos: [] }

    const handleNextVideo = () => {
        if (currentVideoIndex < data.videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1)
        }
    }

    const handlePrevVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1)
        }
    }

    if (data.videos.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="w-full max-w-3xl mx-auto">
                    <CardContent className="py-8">
                        <p className="text-center text-lg">No videos available for this content.</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-xs text-gray-800"> <span className='text-md font-bold'>Chapitre :</span> {data.videos[currentVideoIndex]?.chapitre || "Video Chapter Not Available"}</CardTitle>
                    <CardTitle>{data.videos[currentVideoIndex]?.title || "Video Title Not Available"}</CardTitle>
                    <CardDescription>Video {currentVideoIndex + 1} of {data.videos.length}</CardDescription>
                </CardHeader>
                <CardContent>
                    <video
                        src={data.videos[currentVideoIndex]?.url}
                        controls
                        className="w-full aspect-video rounded-md"
                    />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={handlePrevVideo}
                        disabled={currentVideoIndex === 0}
                        variant="outline"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button
                        onClick={handleNextVideo}
                        disabled={currentVideoIndex === data.videos.length - 1}
                    >
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">All Videos</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.videos.map((video, index) => (
                        <Button
                            key={video.id}
                            variant="outline"
                            className={`h-auto py-4 px-6 text-left justify-start ${index === currentVideoIndex ? 'border-primary' : ''}`}
                            onClick={() => setCurrentVideoIndex(index)}
                        >
                            <div>
                                <p className="font-semibold">{video.title}</p>
                                <p className="text-sm text-muted-foreground mt-1">Video {index + 1}</p>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}