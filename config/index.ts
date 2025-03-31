import type { AppInfo } from '@/types/app'

export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'

export const APP_INFO: AppInfo = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || 'Text Generator APP',
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'App description',
  copyright: process.env.NEXT_PUBLIC_APP_COPYRIGHT || '',
  privacy_policy: process.env.NEXT_PUBLIC_APP_PRIVACY_POLICY || '',
  default_language: 'en-US',
}

export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48