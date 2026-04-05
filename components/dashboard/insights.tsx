'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { expenseCategories, transactions, summaryData } from '@/lib/mock-data'
import { TrendingUp, TrendingDown, AlertCircle, Target, PiggyBank, CreditCard, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Insights() {
  // Calculate highest spending category
  const highestExpense = expenseCategories.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  )

  // Calculate average daily spending
  const totalExpenses = expenseCategories.reduce((sum, cat) => sum + cat.value, 0)
  const avgDailySpending = totalExpenses / 30

  // Get largest single transaction
  const largestExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((prev, current) => (prev.amount > current.amount ? prev : current))

  // Calculate savings rate
  const savingsRate = ((summaryData.totalIncome - summaryData.totalExpenses) / summaryData.totalIncome) * 100

  const insights = [
    {
      icon: <AlertCircle className="h-5 w-5" />,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      title: 'Highest Spending',
      value: highestExpense.name,
      detail: `₹₹{highestExpense.value.toLocaleString('en-IN')} this month`,
      trend: 'neutral',
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Daily Average',
      value: `₹₹{Math.round(avgDailySpending).toLocaleString('en-IN')}`,
      detail: 'Spending per day',
      trend: 'neutral',
    },
    {
      icon: <Target className="h-5 w-5" />,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      title: 'Largest Expense',
      value: largestExpense.description,
      detail: `₹₹{largestExpense.amount.toLocaleString('en-IN')}`,
      trend: 'down',
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      title: 'Savings Rate',
      value: `₹{savingsRate.toFixed(1)}%`,
      detail: 'Of income saved',
      trend: 'up',
    },
  ]

  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xl transition-all duration-300">
      <CardHeader className="border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-foreground">Financial Insights</CardTitle>
            <CardDescription className="text-muted-foreground">
              Key metrics and trends from your finances
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={cn(
                'group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
                insight.borderColor,
                'bg-gradient-to-br from-card to-secondary/20'
              )}
            >
              {/* Background decoration */}
              <div className={cn('absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-150', insight.bgColor)} />

              <div className="relative">
                <div className={cn('mb-3 flex h-10 w-10 items-center justify-center rounded-xl', insight.bgColor)}>
                  <span className={insight.iconColor}>{insight.icon}</span>
                </div>
                <p className="text-sm text-muted-foreground">{insight.title}</p>
                <p className="mt-1 truncate text-xl font-bold text-foreground">{insight.value}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  {insight.trend === 'up' && (
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                  )}
                  {insight.trend === 'down' && (
                    <TrendingDown className="h-3.5 w-3.5 text-rose-500" />
                  )}
                  <span className="text-xs text-muted-foreground">{insight.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
