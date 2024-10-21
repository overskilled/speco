'use client';

import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
    const animationURL = "/Animation1.json";

    return (
        <div className="bg-gray-100 p-8 px-20">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
                {/* Left side: Heading and text */}
                <div className="flex flex-col my-5 w-full md:w-1/2 gap-5 items-center md:items-start">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold">
                        Transforming Lives <span className="font-normal">Through</span> Education
                    </h1>
                    <p className="mt-4 text-base md:text-lg leading-relaxed max-w-[90%] md:max-w-full">
                        Comprehensive video corrections for past examination questions and textbook exercises. Tailored for both Francophone and Anglophone students.
                    </p>

                    {/* Call-to-action buttons */}
                    <div className="flex gap-4 mt-5 justify-center md:justify-start">
                        <Button className="p-5 rounded-full bg-blue-500 hover:bg-primary text-white">
                            Get Started
                        </Button>
                        <Button className="p-5 rounded-full hover:text-primary text-primary text-white hover:bg-gray-100 flex items-center">
                            <Play className="mr-2 h-4 w-4 text-gray-400" /> How It Works
                        </Button>
                    </div>
                </div>

                {/* Right side: Lottie Animation */}
                <div className="hidden md:block mt-6 md:mt-0 w-[300px] md:w-[500px]">
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
    );
};

export default Banner;
