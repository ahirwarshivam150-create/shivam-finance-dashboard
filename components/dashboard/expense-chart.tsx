'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { expenseCategories } from '@/lib/mock-data'
import { Cell, Pie, PieChart } from 'recharts'
import { PieChartIcon } from 'lucide-react'

const chartConfig = {
  value: {
    label: 'Amount',
  },
  Housing: {
    label: 'Housing',
    color: '#3b82f6',
  },
  Food: {
    label: 'Food',
    color: '#10b981',
  },
  Utilities: {
    label: 'Utilities',
    color: '#f59e0b',
  },
  Transportation: {
    label: 'Transportation',
    color: '#ef4444',
  },
  Entertainment: {
    label: 'Entertainment',
    color: '#8b5cf6',
  },
  Other: {
    label: 'Other',
    color: '#6b7280',
  },
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#6b7280']

export function ExpenseChart() {
  const total = expenseCategories.reduce((sum, cat) => sum + cat.value, 0)

  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
      <CardHeader className="border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <PieChartIcon className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <CardTitle className="text-foreground">Expense Categories</CardTitle>
            <CardDescription className="text-muted-foreground">
              Breakdown of your spending this month
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer config={chartConfig} className="mx-auto h-[200px] w-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(value as number)
                  }
                />
              }
            />
            <Pie
              data={expenseCategories}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              nameKey="name"
              strokeWidth={0}
            >
              {expenseCategories.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {expenseCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="flex items-center gap-2 rounded-lg bg-secondary/30 px-3 py-2 transition-all duration-200 hover:bg-secondary/50"
            >
              <div
                className="h-3 w-3 rounded-full shadow-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="truncate text-sm text-muted-foreground">{category.name}</span>
              <span className="ml-auto text-sm font-semibold text-foreground">
                {((category.value / total) * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
