"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icons"

const categories = [
  { 
    id: "energy", 
    label: "Energy Systems", 
    icon: "Zap",
    href: "/categories/energy",
    subItems: [
      { label: "Solar Projects", href: "/categories/energy/solar" },
      { label: "Wind Power", href: "/categories/energy/wind" },
      { label: "Energy Storage", href: "/categories/energy/storage" }
    ]
  },
  { 
    id: "water", 
    label: "Water Management", 
    icon: "Droplet",
    href: "/categories/water",
    subItems: [
      { label: "Collection Systems", href: "/categories/water/collection" },
      { label: "Purification", href: "/categories/water/purification" },
      { label: "Distribution", href: "/categories/water/distribution" }
    ]
  },
  { 
    id: "funds", 
    label: "Funds", 
    icon: "Wallet",
    href: "/modules/treasury",
    subItems: [
      { label: "Treasury", href: "/modules/treasury" },
      { label: "Investments", href: "/modules/treasury/investments" },
      { label: "Transactions", href: "/modules/treasury/transactions" }
    ]
  },
  { 
    id: "food", 
    label: "Food Systems", 
    icon: "Sprout",
    href: "/categories/food",
    subItems: [
      { label: "Community Gardens", href: "/categories/food/gardens" },
      { label: "Permaculture", href: "/categories/food/permaculture" },
      { label: "Food Storage", href: "/categories/food/storage" }
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
    if (isCollapsed) {
      setIsCollapsed(false)
    }
  }

  return (
    <div className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background border-r transition-all duration-300 z-10",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <Button
        variant="ghost"
        size="sm"
        className="absolute -right-4 top-2 h-8 w-8 rounded-full border bg-background"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} className="h-4 w-4" />
      </Button>
      
      <div className="space-y-2 p-2">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <Button
              variant={pathname.startsWith(category.href) ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                isCollapsed ? "px-3" : "px-4"
              )}
              onClick={() => toggleCategory(category.id)}
            >
              <Icon name={category.icon} className="h-5 w-5" />
              {!isCollapsed && (
                <>
                  <span className="ml-3 flex-1 text-left">{category.label}</span>
                  {category.subItems && (
                    <Icon 
                      name={expandedCategory === category.id ? "ChevronDown" : "ChevronRight"} 
                      className="h-4 w-4"
                    />
                  )}
                </>
              )}
            </Button>

            {!isCollapsed && expandedCategory === category.id && (
              <div className="ml-9 space-y-1">
                {category.subItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start h-8 px-2 text-sm"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Icon name="Settings" className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}