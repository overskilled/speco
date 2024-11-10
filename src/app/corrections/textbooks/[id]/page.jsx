import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, query, where } from 'firebase/firestore'
import { firestore } from '@/firebase/config'
import { useTranslation } from 'react-i18next' // import useTranslation hook

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

export default function CorrectionVideoPage({ params }) {
    const { t } = useTranslation()  // Using react-i18next's useTranslation hook
    const name = decodeURIComponent(params.id).replace(/[^\w\s-]/g, '')
    const type = params?.type ?? 'exam';
    const id = params?.id

    const [chapters, chaptersLoading, chaptersError] = useCollectionData(
        query(collection(firestore, 'chapters'), where('textbook', '==', name)),
        { idField: 'id' }
    );

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
                        <p className="text-center text-lg">{t('correction2.noVideos')}</p> {/* Translation for no videos */}
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{name}</h1>

            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-xs text-gray-800"> <span className='text-md font-bold'>{t('correction2.videoChapter')} :</span> {data.videos[currentVideoIndex]?.chapitre || t('correction2.videoChapterNotAvailable')}</CardTitle>
                    <CardTitle>{data.videos[currentVideoIndex]?.title || t('correction2.videoTitleNotAvailable')}</CardTitle>
                    <CardDescription>{t('correction2.video')} {currentVideoIndex + 1} {t('correction2.of')} {data.videos.length}</CardDescription>
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
                        <ChevronLeft className="mr-2 h-4 w-4" /> {t('correction2.previous')}
                    </Button>
                    <Button
                        onClick={handleNextVideo}
                        disabled={currentVideoIndex === data.videos.length - 1}
                    >
                        {t('correction2.next')} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">{t('correction2.allVideos')}</h2>
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
                                <p className="text-sm text-muted-foreground mt-1">{t('correction2.video')} {index + 1}</p>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
