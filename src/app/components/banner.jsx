"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

const Banner = () => {
    const animationURL = "/Animation1.json";

    return (
        <section className="pt-24 md:pt-10 lg:pt-10">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge className="inline-block bg-blue-100" variant="secondary">
                                Now Available in Cameroon
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Master Your Exams with Expert Video Corrections
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Comprehensive video solutions for past examination questions and textbook exercises.
                                Supporting both Anglophone and Francophone education systems.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/register">
                                <Button size="lg" className="w-full min-[400px]:w-auto bg-blue-500 hover:bg-blue-400">
                                    Start Learning Now
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto lg:mx-0">
                        <Player
                            src={animationURL}
                            autoplay
                            loop
                            speed={1}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Banner;
