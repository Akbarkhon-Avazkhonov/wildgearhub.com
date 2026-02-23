import { Truck, RotateCcw, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "STEALTH SHIPPING",
    description: "Free deployment on orders over $75",
  },
  {
    icon: RotateCcw,
    title: "30-DAY RETREAT",
    description: "Full refund, no questions asked",
  },
  {
    icon: Shield,
    title: "LIFETIME WARRANTY",
    description: "Built to survive any kitchen battlefield",
  },
  {
    icon: Headphones,
    title: "24/7 COMMAND CENTER",
    description: "Support operators standing by",
  },
]

export function FeaturesBanner() {
  return (
    <section className="border-y-2 border-saffron bg-flour">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center gap-3 p-6 text-center lg:p-8 ${
              i < features.length - 1 ? "border-r border-border" : ""
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center bg-jungle">
              <feature.icon className="h-4 w-4 text-saffron" />
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-jungle">
              {feature.title}
            </h3>
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
