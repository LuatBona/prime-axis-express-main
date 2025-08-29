import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Zap } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Reliable Service",
    description: "99.9% on-time delivery rate with comprehensive tracking",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced logistics professionals dedicated to your success",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Award-winning service recognized globally for excellence",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick pickup and processing to get your packages moving",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Prime Axis Express?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in logistics and express delivery, we've built a reputation for
                reliability, speed, and exceptional customer service.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-[#0a0a0a] text-white hover:bg-gray-800">
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-600">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Delivery Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
