import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import React from 'react'

const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('calltoaction.A1') }</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        {t('calltoaction.A2') }
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="/auth/register">
                            <Button size="lg" className="w-full min-[400px]:w-auto bg-blue-500 hover:bg-blue-400">
                            {t('calltoaction.A3') }
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                        {t('calltoaction.A4') }
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction