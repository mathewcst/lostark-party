import { defineSchema, defineTable } from 'convex/server'
import { Infer, v } from 'convex/values'

const raids = v.union(
  v.literal('Argos'),
  v.literal('Valtan'),
  v.literal('Vykas'),
  v.literal('Kakul Saydon'),
  v.literal('Brelshaza'),
  v.literal('Kayangel'),
  v.literal('Akkan'),
  v.literal('Ivory Tower'),
  v.literal('Thaemine'),
)

const raid_difficulty = v.union(
  v.literal('Normal'),
  v.literal('Hard'),
  v.literal('Hell'),
)

const userSchema = v.object({
  userId: v.string(),
  picture: v.optional(v.string()),
  email: v.string(),
  username: v.string(),
  supporter: v.optional(v.boolean()),
})

const partySchema = v.object({
  ownerId: v.string(),
  partyId: v.string(),
  name: v.string(),
  members: v.array(v.string()),
  raid: raids,
  difficulty: raid_difficulty,
})

export default defineSchema({
  users: defineTable(userSchema)
    .index('by_clerk_id', ['userId'])
    .index('by_email', ['email'])
    .index('by_username', ['username']),
  parties: defineTable(partySchema).index('by_owner_id', ['ownerId']),
})

export type Raid = Infer<typeof raids>
export type RaidDifficulty = Infer<typeof raid_difficulty>
export type User = Infer<typeof userSchema>
export type Party = Infer<typeof partySchema>
