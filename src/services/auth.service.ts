import { User } from '../types'
import { httpClient } from '../utils/http_client'

class AuthService {
  async register(name: string, email: string, password: string) {
    const { data } = await httpClient.post('/auth/register', {
      name,
      email,
      password,
    })

    localStorage.setItem('token', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
  }

  async login(email: string, password: string) {
    const { data } = await httpClient.post('/auth/login', {
      email,
      password,
    })

    localStorage.setItem('token', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
  }

  async logout() {
    httpClient.post('/auth/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  }

  async getUser(): Promise<User | undefined> {
    if (!localStorage.getItem('token')) return

    try {
      const { data } = await httpClient.get('/auth/user')
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export const authService = new AuthService()
