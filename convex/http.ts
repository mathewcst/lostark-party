import { httpRouter } from 'convex/server'
import { internal } from './_generated/api'
import { httpAction } from './_generated/server'

const http = httpRouter()

type KofiData = {
  verification_token: string
  message_id: string
  timestamp: string
  type: 'Donation' | 'Subscription' | 'Comission' | 'Shop Order'
  is_public: boolean
  from_name: string
  message: string
  amount: string
  url: string
  email: string
  currency: string
  is_subscription_payment: boolean
  is_first_subscription_payment: boolean
  kofi_transaction_id: string
  shop_items?: string[] | null
  tier_name: string | null
  shipping: string | null
}

http.route({
  path: '/clerk',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    const payloadString = await request.text()
    const payloadHeaders = request.headers

    try {
      const result = await ctx.runAction(internal.clerk.fulfill, {
        payload: payloadString,
        headers: {
          'svix-id': payloadHeaders.get('svix-id')!,
          'svix-timestamp': payloadHeaders.get('svix-timestamp')!,
          'svix-signature': payloadHeaders.get('svix-signature')!,
        },
      })

      switch (result.type) {
        case 'user.created':
        case 'user.updated':
          await ctx.runMutation(internal.users.createUser, {
            email: result.data.email_addresses[0].email_address,
            userId: result.data.id,
            picture: result.data.image_url,
            username: result.data.username!,
          })
          break
        case 'user.deleted':
          await ctx.runMutation(internal.users.deleteUser, {
            userId: result.data.id!,
          })
          break
      }

      return new Response(null, { status: 200 })
    } catch (error) {
      return new Response('Webhook Error', {
        status: 400,
      })
    }
  }),
})

http.route({
  path: '/kofi',
  method: 'POST',
  handler: httpAction(async (_ctx, _request) => {
    //const payload = await request.formData()
    //const data = payload.get('data')
    //const _result = JSON.parse(data as string) as KofiData
    //console.log(result)

    // TODO: auomaticaly create a user and a donation record

    return new Response(null, { status: 200 })
  }),
})

export default http
