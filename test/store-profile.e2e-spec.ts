import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()
  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})

test('update profile error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Wrong Pizza')
  await page.getByLabel('Descrição').fill('Another description')
  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente!')

  await expect(toast).toBeVisible()
})
