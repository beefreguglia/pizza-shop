import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Customer-1', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'Customer-10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Próxima página' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer-11', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'Customer-20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer-51', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'Customer-60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer-41', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'Customer-50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer-1', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'Customer-10', exact: true }),
  ).toBeVisible()

  expect(page.getByText('Total de 60 item(s)')).toBeVisible()
})

test('filter by orderId', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByPlaceholder('ID do pedido').fill('order-36')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'order-36', exact: true }),
  ).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByPlaceholder('Nome do cliente').fill('Customer-41')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(
    page.getByRole('cell', { name: 'Customer-41', exact: true }),
  ).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)

  await page.getByRole('combobox').click()
  await page.getByLabel('Cancelado').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Cancelado' })).toHaveCount(10)

  await page.getByRole('combobox').click()
  await page.getByLabel('Em preparo').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Em preparo' })).toHaveCount(10)

  await page.getByRole('combobox').click()
  await page.getByLabel('Em entrega').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Em entrega' })).toHaveCount(10)

  await page.getByRole('combobox').click()
  await page.getByLabel('Entregue').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForLoadState('networkidle')

  await expect(page.getByRole('cell', { name: 'Entregue' })).toHaveCount(10)
})
