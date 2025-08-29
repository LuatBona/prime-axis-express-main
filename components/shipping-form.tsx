"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Package, MapPin, Weight, Calendar, DollarSign, Camera, X } from "lucide-react"

const locations = [
  { value: "juba-south-sudan", label: "Juba, South Sudan" },
  { value: "cairo-egypt", label: "Cairo, Egypt" },
  { value: "dubai-uae", label: "Dubai, UAE" },
  { value: "kampala-uganda", label: "Kampala, Uganda" },
  { value: "sydney-australia", label: "Sydney, Australia" },
  { value: "utah-usa", label: "Utah, USA" },
  { value: "alberta-canada", label: "Alberta, Canada" },
  { value: "nairobi-kenya", label: "Nairobi, Kenya" },
  { value: "addis-ababa-ethiopia", label: "Addis Ababa, Ethiopia" },
]

const serviceTypes = [
  { value: "express", label: "Express (1-2 days)", price: 45 },
  { value: "standard", label: "Standard (3-5 days)", price: 25 },
  { value: "economy", label: "Economy (7-10 days)", price: 15 },
]

export function ShippingForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    weight: "",
    service: "",
    description: "",
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
  })

  const [packageImages, setPackageImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const calculateCost = () => {
    if (formData.weight && formData.service) {
      const basePrice = serviceTypes.find((s) => s.value === formData.service)?.price || 0
      const weightMultiplier = Math.ceil(Number.parseFloat(formData.weight))
      const cost = basePrice * weightMultiplier
      setEstimatedCost(cost)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "weight" || field === "service") {
      setTimeout(calculateCost, 100)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      const newImages = [...packageImages, ...files].slice(0, 3) // Limit to 3 images
      setPackageImages(newImages)

      // Create previews
      const newPreviews: string[] = []
      newImages.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          newPreviews.push(e.target?.result as string)
          if (newPreviews.length === newImages.length) {
            setImagePreviews(newPreviews)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    const newImages = packageImages.filter((_, i) => i !== index)
    const newPreviews = imagePreviews.filter((_, i) => i !== index)
    setPackageImages(newImages)
    setImagePreviews(newPreviews)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Shipping order:", formData)
    alert("Shipping order submitted successfully! We'll contact you shortly with pickup details.")
  }

  return (
    <section id="shipping-form" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ship Your Package</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant quote and book your shipment in just a few clicks. Fast, reliable, and secure delivery
            worldwide.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Details */}
          <Card className="shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Package className="h-6 w-6 text-cyan-500" />
                Shipping Details
              </CardTitle>
              <CardDescription className="text-lg">Tell us about your package and where it's going</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="from" className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                    Ship From
                  </Label>
                  <Select value={formData.from} onValueChange={(value) => handleInputChange("from", value)}>
                    <SelectTrigger className="h-14 text-lg border-[#0a0a0a] border-2">
                      <SelectValue placeholder="Select origin city" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value} className="text-lg py-3">
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="to" className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                    Ship To
                  </Label>
                  <Select value={formData.to} onValueChange={(value) => handleInputChange("to", value)}>
                    <SelectTrigger className="h-14 text-lg border-[#0a0a0a] border-2">
                      <SelectValue placeholder="Select destination city" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value} className="text-lg py-3">
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="weight" className="flex items-center gap-2 text-lg font-medium">
                    <Weight className="h-5 w-5 text-cyan-500" />
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    min="0.1"
                    placeholder="0.0"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2 w-32"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-cyan-500" />
                    Service Type
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="h-14 text-lg border-[#0a0a0a] border-2">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="text-lg py-3">
                          {service.label} - ${service.price}/kg
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="description" className="text-lg font-medium">
                    Package Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your package contents (e.g., documents, electronics, clothing)"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="text-lg resize-none border-[#0a0a0a] border-2"
                  />
                </div>

                {/* Package Images */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-lg font-medium">
                    <Camera className="h-5 w-5 text-cyan-500" />
                    Package Images (Optional)
                  </Label>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="package-images"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#0a0a0a] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Camera className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-lg text-gray-500">
                            <span className="font-semibold">Click to upload</span> package photos
                          </p>
                          <p className="text-sm text-gray-500">PNG, JPG or JPEG (MAX. 3 images)</p>
                        </div>
                        <input
                          id="package-images"
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>

                    {/* Image Previews */}
                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={preview || "/placeholder.svg"}
                              alt={`Package preview ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg border-2 border-[#0a0a0a]"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Cost Estimate */}
              {estimatedCost && (
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 text-cyan-700">
                    <DollarSign className="h-6 w-6" />
                    <span className="font-bold text-2xl">Estimated Cost: ${estimatedCost}</span>
                  </div>
                  <p className="text-cyan-600 mt-2 text-lg">
                    Final price may vary based on exact dimensions and additional services
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sender Information */}
          <Card className="shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Sender Information</CardTitle>
              <CardDescription className="text-lg">Your contact details for pickup and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="senderName" className="text-lg font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="senderName"
                    placeholder="Enter your full name"
                    value={formData.senderName}
                    onChange={(e) => handleInputChange("senderName", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="senderPhone" className="text-lg font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="senderPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.senderPhone}
                    onChange={(e) => handleInputChange("senderPhone", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="senderEmail" className="text-lg font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.senderEmail}
                    onChange={(e) => handleInputChange("senderEmail", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Receiver Information */}
          <Card className="shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Receiver Information</CardTitle>
              <CardDescription className="text-lg">Details of the person receiving the package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="receiverName" className="text-lg font-medium">
                    Receiver's Full Name
                  </Label>
                  <Input
                    id="receiverName"
                    placeholder="Enter receiver's full name"
                    value={formData.receiverName}
                    onChange={(e) => handleInputChange("receiverName", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="receiverPhone" className="text-lg font-medium">
                    Receiver's Phone
                  </Label>
                  <Input
                    id="receiverPhone"
                    type="tel"
                    placeholder="Enter receiver's phone number"
                    value={formData.receiverPhone}
                    onChange={(e) => handleInputChange("receiverPhone", e.target.value)}
                    required
                    className="h-14 text-lg border-[#0a0a0a] border-2"
                  />
                </div>
                <div className="space-y-3 lg:col-span-1">
                  <Label htmlFor="receiverAddress" className="text-lg font-medium">
                    Delivery Address
                  </Label>
                  <Textarea
                    id="receiverAddress"
                    placeholder="Enter complete delivery address including street, building, and landmarks"
                    value={formData.receiverAddress}
                    onChange={(e) => handleInputChange("receiverAddress", e.target.value)}
                    rows={4}
                    required
                    className="text-lg resize-none border-[#0a0a0a] border-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-[#0a0a0a] text-white hover:bg-gray-800 px-16 py-4 text-xl font-semibold"
            >
              Book Shipment
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
