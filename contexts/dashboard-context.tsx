'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Role = 'admin' | 'viewer'

interface DashboardContextType {
  role: Role
  setRole: (role: Role) => void
  isAdmin: boolean
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('admin')

  return (
    <DashboardContext.Provider
      value={{
        role,
        setRole,
        isAdmin: role === 'admin',
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}
