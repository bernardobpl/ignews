import * as Prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { PreviewData } from 'next'
import sm from '../../sm.json'

export const prismicEndpoint = sm.apiEndpoint

export function getPrismicClient(req?: unknown, context?: PreviewData) {
  const prismic = Prismic.createClient(
    prismicEndpoint,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  enableAutoPreviews({
    client: prismic,
    previewData: context,
    req,
  })

  return prismic
}