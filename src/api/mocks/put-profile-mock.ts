import { http, HttpResponse } from 'msw'

import { PutProfileBody } from '../put-profile'

export const putProfileMock = http.put<never, PutProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, {
        status: 204,
      })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
