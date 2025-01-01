"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

const Pricing = () => {

    const DepositRequestBuild = () => {
        const body = {
            depositId: "AA97B177-9383-4934-8543-0F91A7A02838",
            amount: "15",
            currency: "XAF",
            country: "CMR",
            correspondent: "MTN_MOMO_CMR",
            payer: {
                type: "MSISDN",
                address: {
                    value: "237680462509"
                }
            },
            customerTimestamp: "2020-02-21T17:32:28Z",
            statementDescription: "Note of 4 to 22 chars",
            preAuthorisationCode: "string",
            metadata: [
                {
                    fieldName: "orderId",
                    fieldValue: "ORD-123456789"
                },
                {
                    fieldName: "customerId",
                    fieldValue: "customer@email.com",
                    isPII: true
                }
            ]
        };
    
        const options = {
            method: 'POST',
            headers: {
                Authorization: "Bearer eyJraWQiOiIxIiwiYWxnIjoiRVMyNTYifQ.eyJ0dCI6IkFBVCIsInN1YiI6IjgxOSIsImV4cCI6MjA1MTAxMzAxMiwiaWF0IjoxNzM1NDgwMjEyLCJwbSI6IkRBRixQQUYiLCJqdGkiOiI2OGM2MTIwMi0wZmI3LTQ5NjItOWQ0Ni05ZTI4OWJkMTRiYjMifQ.MZmI6GmLbS4F8Ah_0haUlA220lWmAin_BJek2tF19AJ9_zSJeBgr-WW2saDjjv_oRjF5S00Zk6SGwhb4R30rKA",
                'Content-Type': 'application/json',
                Connection: "Keep-alive",
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br"
            },
            body: JSON.stringify(body) // Properly stringify the body
        };
    
        fetch('/api/deposits', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse the response JSON
            })
            .then(response => console.log("Pawapay responded with", response))
            .catch(err => console.error("An error occurred: ", err));
    };
    



    return (
        <section id="pricing" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Choose the plan that best fits your learning needs
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
                    {[
                        {
                            title: "Basic",
                            price: "Free",
                            description: "Perfect for trying out our platform",
                            features: ["Access to sample videos", "Basic study materials", "Community support"]
                        },
                        {
                            title: "Standard",
                            price: "2,000 FCFA",
                            description: "Most popular choice for students",
                            features: ["All Basic features", "Full access to past exam corrections", "Textbook solutions", "Priority support"]
                        },
                        {
                            title: "Premium",
                            price: "5,000 FCFA",
                            description: "Complete learning experience",
                            features: ["All Standard features", "Live Q&A sessions", "Personalized study plan", "Mock exam preparation"]
                        }
                    ].map((plan, index) => (
                        <Card key={index} className={index === 1 ? "border-blue-500" : ""}>
                            <CardHeader>
                                <CardTitle>{plan.title}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="pt-4">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    {plan.price !== "Free" && <span className="text-muted-foreground">/month</span>}
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
                                <Button
                                    variant={index === 1 ? "default" : "outline"}
                                    className={index === 1 ? "w-full bg-blue-500 hover:bg-blue-400" : "w-full"}
                                    onClick={() => DepositRequestBuild()}
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing