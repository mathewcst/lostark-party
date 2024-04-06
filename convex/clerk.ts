'use node'

import type { WebhookEvent } from '@clerk/clerk-sdk-node'
import { Webhook } from 'svix'

import { v } from 'convex/values'
import { internalAction } from './_generated/server'

export const fulfill = internalAction({
  args: { headers: v.any(), payload: v.string() },
  handler: async (_ctx, args) => {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!)
    const payload = wh.verify(args.payload, args.headers) as WebhookEvent

    return payload
  },
})
