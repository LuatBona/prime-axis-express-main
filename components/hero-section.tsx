"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Clock, Globe } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-white pt-6 pb-16 lg:pt-8 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ship Now with
                <span className="block text-cyan-500">Prime Axis Express</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">

                Just Make the request on the website and our Team will come
                to pick up your package. you don't have to leave your home or office. 
                and we will deliver it to the recierve door step.
   

              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#0a0a0a] text-white hover:bg-gray-800"
                onClick={() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ship Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                Track Package
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Package className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Packages Delivered</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative space-y-6">
            {/* Regional Network Map */}
            <div className="relative">
              <Image
                src="/regional-map.jpeg"
                alt="Prime Axis Express Regional Network"
                width={500}
                height={400}
                className="w-full h-auto"
              />
       
            </div>

            {/* Tracking Visual */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Tracking ID</span>
                  <span className="text-sm font-bold text-gray-900">PAX123456789</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">Package picked up</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-semi text-gray-900">In transit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Out for delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
