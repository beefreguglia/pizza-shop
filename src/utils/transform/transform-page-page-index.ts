import { z } from 'zod'

export function transformPageInPageIndex(searchParams: URLSearchParams) {
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')
  return pageIndex
}
