import { api } from '@/lib/axios'

export async function postSignOut() {
  await api.post('/sign-out')
}
