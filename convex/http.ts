import { httpRouter } from 'convex/server'
import { internal } from './_generated/api'
import { httpAction } from './_generated/server'

const http = httpRouter()

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

export default http
