import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { User } from '../types'
import { authService } from '../services/auth.service'

type ContextType = {
  user?: User
  isLogged: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<ContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>()
  const isLogged = useMemo(() => !!user, [user])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    authService.getUser().then(setUser)
  }, [])

  const login = async (email: string, password: string) => {
    await authService.login(email, password)
    const user = await authService.getUser()
    setUser(user)
  }

  const logout = async () => {
    await authService.logout()
    setUser(undefined)
  }

  const register = async (name: string, email: string, password: string) => {
    await authService.register(name, email, password)
    const user = await authService.getUser()
    setUser(user)
  }

  return <AuthContext.Provider value={{ user, isLogged, login, logout, register }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)!
