import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { patchApproveOrderMock } from './patch-approve-order-mock'
import { patchCancelOrderMock } from './patch-cancel-order-mock'
import { patchDeliverOrderMock } from './patch-deliver-order-mock'
import { patchDispatchOrderMock } from './patch-dispatch-order-mock'
import { postRegisterRestaurantMock } from './post-register-restaurant-mock'
import { postSignInMock } from './post-sign-in-mock'
import { putProfileMock } from './put-profile-mock'

export const mswWorker = setupWorker(
  postSignInMock,
  postRegisterRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  putProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  patchApproveOrderMock,
  patchCancelOrderMock,
  patchDeliverOrderMock,
  patchDispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await mswWorker.start()
}
