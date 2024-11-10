import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-100 mt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="font-bold">{t('footer.A1') }</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        {t('footer.A2') }                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold">{t('footer.A3') }</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#features" className="text-muted-foreground hover:text-primary">
                                {t('footer.A4') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-muted-foreground hover:text-primary">
                                {t('footer.A5') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
                                {t('footer.A6') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A7') }
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold">{t('footer.A8') }</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A9') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A10') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A11') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A12') }
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold">{t('footer.A13') }</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A14') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A15') }
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                {t('footer.A16') }
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>{t('footer.A17') }</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer