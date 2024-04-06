import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    picture: v.optional(v.string()),
    email: v.string(),
    username: v.string(),
  })
    .index('by_clerk_id', ['userId'])
    .index('by_email', ['email'])
    .index('by_username', ['username']),
})
