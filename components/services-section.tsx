import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Plane, Ship, Clock, Shield, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Ground Express",
    description: "Fast ground delivery for domestic shipments with next-day and 2-day options.",
    features: ["Next-day delivery", "Real-time tracking", "Signature confirmation"],
  },
  {
    icon: Plane,
    title: "Air Express",
    description: "Premium air shipping for urgent international and domestic deliveries.",
    features: ["Same-day delivery", "Priority handling", "Global network"],
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective ocean shipping for large volume international shipments.",
    features: ["Bulk shipping", "Container services", "Port-to-port delivery"],
  },
  {
    icon: Clock,
    title: "Time Critical",
    description: "Emergency shipping solutions for time-sensitive deliveries.",
    features: ["24/7 availability", "Dedicated courier", "Hand-carry service"],
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "High-security shipping for valuable and sensitive items.",
    features: ["Insurance coverage", "Tamper-proof packaging", "Chain of custody"],
  },
  {
    icon: MapPin,
    title: "Last Mile",
    description: "Final delivery solutions to reach customers at their doorstep.",
    features: ["Flexible delivery", "SMS notifications", "Proof of delivery"],
  },
]

export function ServicesSection() {
  return (
    <section id="our-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive shipping solutions tailored to meet your business and personal delivery needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
