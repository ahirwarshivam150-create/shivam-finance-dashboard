import { DashboardProvider } from '@/contexts/dashboard-context'
import { ThemeProvider } from '@/contexts/theme-context'
import { DashboardHeader } from '@/components/dashboard/header'
import { SummaryCards } from '@/components/dashboard/summary-cards'
import { BalanceChart } from '@/components/dashboard/balance-chart'
import { ExpenseChart } from '@/components/dashboard/expense-chart'
import { TransactionsTable } from '@/components/dashboard/transactions-table'
import { Insights } from '@/components/dashboard/insights'

export default function DashboardPage() {
  return (
    <ThemeProvider>
      <DashboardProvider>
        <div className="flex min-h-screen flex-col bg-background transition-colors duration-300">
          <DashboardHeader />
          
          <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-8">
              {/* Summary Cards */}
              <SummaryCards />

              {/* Charts Section */}
              <div className="grid gap-6 lg:grid-cols-2">
                <BalanceChart />
                <ExpenseChart />
              </div>

              {/* Insights */}
              <Insights />

              {/* Transactions Table */}
              <TransactionsTable />
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-border bg-card/50 px-4 py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Finance Dashboard - Built with React and Tailwind CSS
            </p>
          </footer>
        </div>
      </DashboardProvider>
    </ThemeProvider>
  )
}
