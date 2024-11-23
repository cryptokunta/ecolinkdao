import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const currentInvestments = [
  {
    investor: "Erwin Vanmassenhove",
    amount: "100",
    date: "2024-01-15",
    project: "Seed Camp"
  },
  {
    investor: "Samuel Munga",
    amount: "100",
    date: "2024-01-16",
    project: "Seed Camp"
  },
  {
    investor: "Wolfgang Munga",
    amount: "50",
    date: "2024-01-17",
    project: "Seed Camp"
  },
  {
    investor: "Rainer Munga",
    amount: "70",
    date: "2024-01-18",
    project: "Seed Camp"
  }
]

const totalInvestment = currentInvestments.reduce((sum, inv) => sum + Number(inv.amount), 0)
const totalInvestors = new Set(currentInvestments.map(inv => inv.investor)).size

export function InvestmentOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-full lg:col-span-4">
        <CardHeader>
          <CardTitle>Current Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Investment</p>
                      <p className="text-2xl font-bold">€{totalInvestment}</p>
                    </div>
                    <Icon name="landmark" className="h-4 w-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Investors</p>
                      <p className="text-2xl font-bold">{totalInvestors}</p>
                    </div>
                    <Icon name="users" className="h-4 w-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg border">
              <div className="p-4">
                <h4 className="font-medium">Recent Investments</h4>
              </div>
              <div className="divide-y">
                {currentInvestments.map((investment) => (
                  <div key={`${investment.investor}-${investment.date}`} className="flex items-center justify-between p-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{investment.investor}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="calendar" className="h-4 w-4" />
                        {new Date(investment.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">€{investment.amount}</p>
                      <p className="text-sm text-muted-foreground">{investment.project}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-3">
        <CardHeader>
          <CardTitle>Allocation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Wood Materials</span>
                <span className="font-medium">€180</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[56%] rounded-full bg-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Cement</span>
                <span className="font-medium">€140</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[44%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}