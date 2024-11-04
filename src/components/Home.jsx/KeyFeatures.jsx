'use client'

import React from 'react'
import { Smartphone, Accessibility, Zap, Search,SwatchBook,Tickets } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KeyFeatures() {
  const features = [
    {
      title: "Total Credit and Lending Overview",
      description: "Gain instant insights into your total available credit and lending amounts, with clear, real-time data on loan repayments, debt repayments, and outstanding balances. Track the complete status of received and pending payments, making it easy to stay on top of your financial health.",
      icon: Smartphone
    },
    {
      title: "Participant Payment Status",
      description: "View a detailed list of participants and their monthly payment statuses. Keep an organized record of received and pending payments, and easily check due dates.",
      icon: Accessibility
    },
    {
      title: "Loan List Details at a Glance",
      description: "Access full loan details, including disbursed amounts, repayment totals, outstanding balances, installment methods, interest charges, and foreclosure fees. Stay informed on every aspect of loan repayment with a structured and easy-to-navigate display.",
      icon: Zap
    },
    {
      title: "Flexible Loan Entry System",
      description: "Add multiple loan entries for each participant with custom dates, allowing you to manage different loan types under a single participant’s profile.",
      icon: Tickets
    },
    {
      title: "Advanced Search Functionality",
      description: "Use the built-in search feature to quickly locate all loans under a participant’s name, enabling rapid access to detailed payment and loan records",
      icon: Search
    },
    {
      title: "Simple, Accessible Web Interface",
      description: `The intuitive dashboard provides a straightforward user experience, making it easy to enter, update, and manage payments and loans from any web browser.`,
      icon: SwatchBook
    },
  ]

  return (
    <div className="min-h-screen bg-[#191D31] transition-colors duration-300">
      <div className="px-[6vw] py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Key Features</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden bg-blue-950 text-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <feature.icon className="h-6 w-6 text-gray-200" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
