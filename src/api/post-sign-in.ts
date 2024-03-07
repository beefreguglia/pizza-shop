import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function postSignIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
