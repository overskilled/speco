import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Boost Your Grades?</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Join thousands of students who are already benefiting from EduSuccess
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="/auth/register">
                            <Button size="lg" className="w-full min-[400px]:w-auto bg-blue-500 hover:bg-blue-400">
                                Get Started Now
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction