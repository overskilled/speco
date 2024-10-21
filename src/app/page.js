import Banner from "@/components/home/banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, CheckCircle, GraduationCap, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "./HomeNav";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HomeNav />
        <main className="flex-1"> 
          <Banner />


          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Video className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Video Corrections</h3>
                  <p className="text-gray-500">Detailed video explanations for past exam questions and textbook exercises.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Textbook Aligned</h3>
                  <p className="text-gray-500">Chapter-by-chapter coverage of your school textbooks.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Exam Preparation</h3>
                  <p className="text-gray-500">Comprehensive coverage of past examination questions to boost your confidence.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="cycles" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Educational Cycles</h2>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Francophone Cycle</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>BEPC</li>
                    <li>Probatoire</li>
                    <li>Baccalauréat</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Anglophone Cycle</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>GCE Ordinary Level</li>
                    <li>GCE Advanced Level</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Students Say</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-600 mb-4">"This app has been a game-changer for my exam preparation. The video corrections are clear and helpful!"</p>
                    <p className="font-semibold">- Student {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">Ready to Excel in Your Exams?</h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed mb-8">
                Join thousands of students who are already benefiting from our comprehensive video corrections.
              </p>
              <div className="mx-auto max-w-sm space-y-4">
                <Input className="bg-white" type="email" placeholder="Enter your email" />
                <Button className="w-full bg-white text-primary hover:bg-gray-100">Get Early Access</Button>
              </div> 
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 EduSuccess Cameroon. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
