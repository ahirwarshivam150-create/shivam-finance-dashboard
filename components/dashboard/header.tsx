'use client'

import { useDashboard } from '@/contexts/dashboard-context'
import { useTheme } from '@/contexts/theme-context'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Shield, Eye, Plus, Wallet, Moon, Sun } from 'lucide-react'

export function DashboardHeader() {
  const { role, setRole, isAdmin } = useDashboard()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 flex flex-col gap-4 border-b border-border bg-card/80 px-4 py-4 backdrop-blur-md transition-all duration-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/25 transition-transform duration-300 hover:scale-105">
          <Wallet className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">Finance Dashboard</h1>
          <p className="text-sm text-muted-foreground">Track your financial health</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="h-10 w-10 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-secondary"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-warning" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* Role Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-xl transition-all duration-300 hover:scale-105">
              {role === 'admin' ? (
                <Shield className="h-4 w-4 text-primary" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="capitalize">{role}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-xl">
            <DropdownMenuItem onClick={() => setRole('admin')} className="gap-2 rounded-lg">
              <Shield className="h-4 w-4" />
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRole('viewer')} className="gap-2 rounded-lg">
              <Eye className="h-4 w-4" />
              Viewer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add Transaction Button (Admin Only) */}
        {isAdmin && (
          <Button className="gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Transaction</span>
          </Button>
        )}

        {/* User Avatar */}
        <Avatar className="h-10 w-10 ring-2 ring-border transition-all duration-300 hover:ring-primary">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
