import { defineSchema, defineTable } from 'convex/server'
import { Infer, v } from 'convex/values'

const userSchema = v.object({
  userId: v.string(),
  picture: v.optional(v.string()),
  email: v.string(),
  username: v.string(),
  supporter: v.optional(v.boolean()),
})

export default defineSchema({
  users: defineTable(userSchema)
    .index('by_clerk_id', ['userId'])
    .index('by_email', ['email'])
    .index('by_username', ['username']),
})

export type User = Infer<typeof userSchema>
