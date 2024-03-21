import { http, HttpResponse } from 'msw'

import { SignInBody } from '../post-sign-in'

// 1 generic params, 2 body da requisição, 3 body resposta, 4 path
export const postSignInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@example.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
