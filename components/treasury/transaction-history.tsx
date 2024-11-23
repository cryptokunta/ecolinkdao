import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const transactions = [
  {
    date: "2024-01-18",
    type: "investment",
    description: "Investment from Rainer Munga",
    amount: 70,
    project: "Seed Camp"
  },
  {
    date: "2024-01-17",
    type: "investment",
    description: "Investment from Wolfgang Munga",
    amount: 50,
    project: "Seed Camp"
  },
  {
    date: "2024-01-16",
    type: "investment",
    description: "Investment from Samuel Munga",
    amount: 100,
    project: "Seed Camp"
  },
  {
    date: "2024-01-15",
    type: "investment",
    description: "Investment from Erwin Vanmassenhove",
    amount: 100,
    project: "Seed Camp"
  }
]

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-2 ${
                  transaction.type === "investment" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                }`}>
                  <Icon 
                    name={transaction.type === "investment" ? "arrow-down-right" : "arrow-up-right"} 
                    className="h-4 w-4" 
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{transaction.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="calendar" className="h-3 w-3" />
                    {new Date(transaction.date).toLocaleDateString()}
                    <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground" />
                    {transaction.project}
                  </div>
                </div>
              </div>
              <p className={`font-medium ${
                transaction.type === "investment" ? "text-green-600" : "text-blue-600"
              }`}>
                €{transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}