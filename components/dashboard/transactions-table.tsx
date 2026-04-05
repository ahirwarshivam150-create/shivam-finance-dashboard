'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { transactions } from '@/lib/mock-data'
import { Search, ArrowUpRight, ArrowDownRight, Receipt } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = ['All', 'Income', 'Housing', 'Food', 'Utilities', 'Transportation', 'Entertainment', 'Health', 'Education', 'Shopping']

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>('all')

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch = transaction.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory =
        categoryFilter === 'All' || transaction.category === categoryFilter
      const matchesType = typeFilter === 'all' || transaction.type === typeFilter

      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchQuery, categoryFilter, typeFilter])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-xl transition-all duration-300">
      <CardHeader className="border-b border-border bg-secondary/30 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Receipt className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-foreground">Recent Transactions</CardTitle>
            <CardDescription className="text-muted-foreground">
              View and filter your transaction history
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-xl bg-secondary/50 pl-9 transition-all duration-300 focus:bg-secondary"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="rounded-lg">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={(value: 'all' | 'income' | 'expense') => setTypeFilter(value)}>
            <SelectTrigger className="w-full rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary sm:w-[140px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="all" className="rounded-lg">All Types</SelectItem>
              <SelectItem value="income" className="rounded-lg">Income</SelectItem>
              <SelectItem value="expense" className="rounded-lg">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary/50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Description</th>
                <th className="hidden px-4 py-3 text-left text-sm font-semibold text-muted-foreground sm:table-cell">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-muted-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                      <Receipt className="h-8 w-8 text-muted-foreground/50" />
                      <p>No transactions found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((transaction, index) => (
                  <tr
                    key={transaction.id}
                    className={cn(
                      'border-t border-border transition-colors duration-200 hover:bg-secondary/50',
                      index % 2 === 0 ? 'bg-transparent' : 'bg-secondary/20'
                    )}
                  >
                    <td className="px-4 py-3.5 text-sm text-muted-foreground">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {transaction.description}
                    </td>
                    <td className="hidden px-4 py-3.5 sm:table-cell">
                      <Badge 
                        variant="secondary" 
                        className="rounded-lg bg-secondary text-muted-foreground transition-colors duration-200 hover:bg-secondary/80"
                      >
                        {transaction.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {transaction.type === 'income' ? (
                          <div className="flex items-center gap-1 rounded-lg bg-success/10 px-2 py-1 text-success">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="font-semibold">
                              +{formatCurrency(transaction.amount)}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 rounded-lg bg-destructive/10 px-2 py-1 text-destructive">
                            <ArrowDownRight className="h-4 w-4" />
                            <span className="font-semibold">
                              -{formatCurrency(transaction.amount)}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
