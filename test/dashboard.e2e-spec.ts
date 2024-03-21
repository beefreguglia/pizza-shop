import { expect, test } from '@playwright/test'

test('display day orders amount metrics right', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metrics right', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200')).toBeVisible()
  await expect(page.getByText('+23% em relação ao mês passado')).toBeVisible()
})

test('display canceled month orders amount metrics right', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('13')).toBeVisible()
  await expect(page.getByText('-7% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metrics right', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 23,42')).toBeVisible()
  await expect(page.getByText('+20% em relação ao mês passado')).toBeVisible()
})
