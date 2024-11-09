import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { GraduationCap, BookOpen, Video, Users, CheckCircle, ArrowRight, Star, Clock, Globe, Zap } from "lucide-react"
import HomeNav from "./components/HomeNav"
import Banner from "./components/banner"
import Stats from "./components/Stats"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <HomeNav />

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <Banner />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}