'use client'

import { summaryData } from '@/lib/mock-data'
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
  gradient: string
  shadowColor: string
}

function StatCard({ title, value, change, icon, gradient, shadowColor }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl',
        gradient,
        shadowColor
      )}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-white/80">{title}</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <div className="mb-2 text-3xl font-bold tracking-tight">{value}</div>

        <div className="flex items-center gap-1.5 text-sm">
          {isPositive ? (
            <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span className="font-medium">{Math.abs(change)}%</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5">
              <ArrowDownRight className="h-3.5 w-3.5" />
              <span className="font-medium">{Math.abs(change)}%</span>
            </div>
          )}
          <span className="text-white/70">vs last month</span>
        </div>
      </div>
    </div>
  )
}

export function SummaryCards() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Total Balance"
        value={formatCurrency(summaryData.totalBalance)}
        change={summaryData.balanceChange}
        icon={<Wallet className="h-5 w-5 text-white" />}
        gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
        shadowColor="shadow-blue-500/30"
      />
      <StatCard
        title="Total Income"
        value={formatCurrency(summaryData.totalIncome)}
        change={summaryData.incomeChange}
        icon={<TrendingUp className="h-5 w-5 text-white" />}
        gradient="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700"
        shadowColor="shadow-emerald-500/30"
      />
      <StatCard
        title="Total Expenses"
        value={formatCurrency(summaryData.totalExpenses)}
        change={summaryData.expenseChange}
        icon={<TrendingDown className="h-5 w-5 text-white" />}
        gradient="bg-gradient-to-br from-rose-500 via-red-500 to-red-600"
        shadowColor="shadow-rose-500/30"
      />
    </div>
  )
}
