import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('Nav link', () => {
  it('Should set default email if is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=jhondoe@example.com']}>
            <QueryClientProvider client={queryClient}>
              <HelmetProvider>{children}</HelmetProvider>
            </QueryClientProvider>
          </MemoryRouter>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement
    expect(emailInput.value).toEqual('jhondoe@example.com')
  })
})
