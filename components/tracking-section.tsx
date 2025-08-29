"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("")

  return (
     <section id="tracking" className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Track Your Package</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., PAX123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="h-12 text-lg bg-white border-gray-300"
                />
              </div>
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600 h-12 px-8">
                <Search className="mr-2 h-5 w-5" />
                Track
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            Need help? Contact our support team at{" "}
            <a href="tel:1-800-PRIME-AX" className="text-cyan-400 hover:text-cyan-300">
              1-800-PRIME-AX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
