import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const categories = [
  {
    title: "Energy Systems",
    description: "Solar, wind, and alternative energy solutions",
    icon: "zap",
    href: "/categories/energy",
    metrics: {
      projects: "8",
      members: "24",
      success: "92%"
    },
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500"
  },
  {
    title: "Construction",
    description: "Infrastructure and building projects",
    icon: "hard-hat",
    href: "/categories/construction",
    metrics: {
      projects: "2",
      members: "15",
      success: "100%"
    },
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500"
  },
  {
    title: "Food Systems",
    description: "Permaculture and sustainable agriculture",
    icon: "sprout",
    href: "/categories/food",
    metrics: {
      projects: "5",
      members: "18",
      success: "85%"
    },
    bgImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    title: "Waste Management",
    description: "Zero-waste and recycling initiatives",
    icon: "recycle",
    href: "/categories/waste",
    metrics: {
      projects: "3",
      members: "12",
      success: "88%"
    },
    bgImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
  }
]

export function CategoryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {categories.map((category) => (
        <Link key={category.title} href={category.href}>
          <Card className="group h-full hover-lift overflow-hidden">
            <div className="relative h-40">
              <div className="absolute inset-0">
                <img
                  src={category.bgImage}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end">
                <div className="flex items-center gap-2">
                  <span className={`rounded-full ${category.iconBg} p-2`}>
                    <Icon name={category.icon} className={`h-4 w-4 ${category.iconColor}`} />
                  </span>
                  <h3 className="text-lg font-semibold text-white truncate">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-white/80 mt-1 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(category.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-lg font-semibold">{value}</p>
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}