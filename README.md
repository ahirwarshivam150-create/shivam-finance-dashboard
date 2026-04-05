<<<<<<< HEAD
# Finance Dashboard

A modern, responsive finance dashboard built with React, Next.js, and Tailwind CSS. All amounts are displayed in Indian Rupees (INR).

## Features

- **Summary Cards** - View total balance, income, and expenses with gradient styling
- **Balance Chart** - Area chart showing balance trend over 7 months
- **Expense Chart** - Donut chart showing expense breakdown by category
- **Transactions Table** - Searchable and filterable transaction history with zebra striping
- **Insights Section** - Key financial metrics including savings rate and spending patterns
- **Dark/Light Mode** - Toggle between dark and light themes
- **Role-Based Access** - Switch between Admin and Viewer roles
- **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
app/
  page.tsx          # Main dashboard page
  layout.tsx        # Root layout
  globals.css       # Global styles and theme

components/
  dashboard/
    header.tsx           # Navigation bar with role switcher and theme toggle
    summary-cards.tsx    # Balance, income, expense cards
    balance-chart.tsx    # Area chart for balance trend
    expense-chart.tsx    # Pie chart for expense categories
    transactions-table.tsx  # Transaction list with filters
    insights.tsx         # Financial insights cards
  ui/                    # shadcn/ui components

contexts/
  dashboard-context.tsx  # Role management (Admin/Viewer)
  theme-context.tsx      # Dark/Light theme toggle

lib/
  mock-data.ts           # Sample data for the dashboard
  utils.ts               # Utility functions
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Components Overview

### Summary Cards
Three gradient cards showing:
- **Total Balance** (blue gradient)
- **Total Income** (green gradient)
- **Total Expenses** (red gradient)

Each card shows the amount and percentage change from last month.

### Charts
- **Balance Chart**: Shows how your balance changed over the last 7 months
- **Expense Chart**: Shows spending breakdown by category (Housing, Food, Utilities, etc.)

### Transactions Table
- Search transactions by description
- Filter by category (Housing, Food, Income, etc.)
- Filter by type (Income or Expense)
- Shows date, description, category, and amount

### Insights
Four insight cards showing:
- Highest spending category
- Average daily spending
- Largest single expense
- Savings rate percentage

### Role Switching
- **Admin**: Can see "Add Transaction" button
- **Viewer**: Read-only access

### Theme Toggle
Click the sun/moon icon to switch between light and dark mode.

## Customization

### Colors
Edit `app/globals.css` to change the color scheme. The dashboard uses CSS variables for easy theming.

### Data
Edit `lib/mock-data.ts` to change the sample data. Replace with real API calls for production use.

## License

MIT
=======
# shivam-finance-dashboard
A modern and responsive Finance Dashboard UI built using React and Tailwind CSS. It includes summary cards, charts, transactions table, role-based UI, and insights using mock data.
>>>>>>> bb54927c1a77d5fdb3e3a457e606141277e38075
