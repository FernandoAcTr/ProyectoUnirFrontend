import axios, { AxiosError } from 'axios'

const getToken = (): string | null => {
  const token = localStorage.getItem('token')
  return token
}

const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
})

httpClient.interceptors.request.use((config) => {
  const token = getToken() ?? ''
  config.headers.Authorization = `Bearer ${token}`

  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => error
)

export { httpClient }
