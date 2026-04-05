export interface Transaction {
  id: string
  date: string
  description: string
  category: string
  amount: number
  type: 'income' | 'expense'
}

export interface BalanceTrend {
  month: string
  balance: number
}

export interface ExpenseCategory {
  name: string
  value: number
  color: string
}

export const transactions: Transaction[] = [
  { id: '1', date: '2024-03-15', description: 'Salary Deposit', category: 'Income', amount: 85000, type: 'income' },
  { id: '2', date: '2024-03-14', description: 'Rent Payment', category: 'Housing', amount: 22000, type: 'expense' },
  { id: '3', date: '2024-03-13', description: 'Grocery Store', category: 'Food', amount: 3560, type: 'expense' },
  { id: '4', date: '2024-03-12', description: 'Electric Bill', category: 'Utilities', amount: 1890, type: 'expense' },
  { id: '5', date: '2024-03-11', description: 'Freelance Project', category: 'Income', amount: 25000, type: 'income' },
  { id: '6', date: '2024-03-10', description: 'Restaurant Dinner', category: 'Food', amount: 1850, type: 'expense' },
  { id: '7', date: '2024-03-09', description: 'Petrol Station', category: 'Transportation', amount: 2500, type: 'expense' },
  { id: '8', date: '2024-03-08', description: 'Netflix Subscription', category: 'Entertainment', amount: 649, type: 'expense' },
  { id: '9', date: '2024-03-07', description: 'Investment Return', category: 'Income', amount: 8500, type: 'income' },
  { id: '10', date: '2024-03-06', description: 'Coffee Shop', category: 'Food', amount: 450, type: 'expense' },
  { id: '11', date: '2024-03-05', description: 'Internet Bill', category: 'Utilities', amount: 1199, type: 'expense' },
  { id: '12', date: '2024-03-04', description: 'Gym Membership', category: 'Health', amount: 2499, type: 'expense' },
  { id: '13', date: '2024-03-03', description: 'Online Course', category: 'Education', amount: 4999, type: 'expense' },
  { id: '14', date: '2024-03-02', description: 'Clothing Store', category: 'Shopping', amount: 5650, type: 'expense' },
  { id: '15', date: '2024-03-01', description: 'Bonus Payment', category: 'Income', amount: 35000, type: 'income' },
]

export const balanceTrend: BalanceTrend[] = [
  { month: 'Sep', balance: 185000 },
  { month: 'Oct', balance: 212000 },
  { month: 'Nov', balance: 198000 },
  { month: 'Dec', balance: 235000 },
  { month: 'Jan', balance: 268000 },
  { month: 'Feb', balance: 241000 },
  { month: 'Mar', balance: 287500 },
]

export const expenseCategories: ExpenseCategory[] = [
  { name: 'Housing', value: 22000, color: 'var(--chart-1)' },
  { name: 'Food', value: 5860, color: 'var(--chart-2)' },
  { name: 'Utilities', value: 3089, color: 'var(--chart-3)' },
  { name: 'Transportation', value: 2500, color: 'var(--chart-4)' },
  { name: 'Entertainment', value: 649, color: 'var(--chart-5)' },
  { name: 'Other', value: 13148, color: 'var(--muted-foreground)' },
]

export const summaryData = {
  totalBalance: 287500,
  totalIncome: 153500,
  totalExpenses: 47246,
  balanceChange: 8.2,
  incomeChange: 12.5,
  expenseChange: -3.4,
}
