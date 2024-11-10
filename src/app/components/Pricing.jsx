import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('pricing.A1')}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {t('pricing.A2')}
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          {[
            {
              title: t('pricing.B1.title'),
              price: t('pricing.B1.price'),
              description: t('pricing.B1.description'),
              features: Array.isArray(t('pricing.B1.features', { returnObjects: true }))
                ? t('pricing.B1.features', { returnObjects: true })
                : [], // Fallback to empty array if not an array
            },
            {
              title: t('pricing.B2.title'),
              price: t('pricing.B2.price'),
              description: t('pricing.B2.description'),
              features: Array.isArray(t('pricing.B2.features', { returnObjects: true }))
                ? t('pricing.B2.features', { returnObjects: true })
                : [], // Fallback to empty array if not an array
            },
            {
              title: t('pricing.B3.title'),
              price: t('pricing.B3.price'),
              description: t('pricing.B3.description'),
              features: Array.isArray(t('pricing.B3.features', { returnObjects: true }))
                ? t('pricing.B3.features', { returnObjects: true })
                : [], // Fallback to empty array if not an array
            },
          ].map((plan, index) => (
            <Card key={index} className={index === 1 ? 'border-blue-500' : ''}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-muted-foreground">{t('pricing.A3')}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={index === 1 ? 'default' : 'outline'} className={index === 1 ? 'w-full bg-blue-500 hover:bg-blue-400' : 'w-full'}>
                  {t('pricing.A4')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
