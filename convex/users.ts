import { v } from 'convex/values'
import { Doc } from './_generated/dataModel'
import { QueryCtx, internalMutation } from './_generated/server'

export const createUser = internalMutation({
  args: {
    email: v.string(),
    userId: v.string(),
    picture: v.optional(v.string()),
    username: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('users', {
      email: args.email,
      userId: args.userId,
      picture: args.picture,
      username: args.username,
    })
  },
})

export const deleteUser = internalMutation({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const userRecord = await userQuery(ctx, args.userId)

    if (userRecord === null) {
      console.warn(`User not found: ${args.userId}`)
    } else {
      await ctx.db.delete(userRecord._id)
    }
  },
})

export async function userQuery(
  ctx: QueryCtx,
  userId: string,
): Promise<Doc<'users'> | null> {
  return await ctx.db
    .query('users')
    .withIndex('by_clerk_id', (q) => q.eq('userId', userId))
    .unique()
}
