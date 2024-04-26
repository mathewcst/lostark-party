import { v } from 'convex/values'
import { Doc } from './_generated/dataModel'
import { QueryCtx, mutation } from './_generated/server'
import { raid_difficulty, raids } from './schema'

export const createOrUpdateParty = mutation({
  args: {
    ownerId: v.string(),
    partyId: v.string(),
    name: v.string(),
    members: v.array(v.string()),
    raid: raids,
    difficulty: raid_difficulty,
  },
  handler: async (ctx, args) => {
    const record = await partyQuery(ctx, args.ownerId)

    if (record) {
      await ctx.db.patch(record._id, {
        name: args.name,
        members: args.members,
        raid: args.raid,
        difficulty: args.difficulty,
      })
    } else {
      await ctx.db.insert('parties', {
        ownerId: args.ownerId,
        partyId: args.partyId,
        name: args.name,
        members: args.members,
        raid: args.raid,
        difficulty: args.difficulty,
      })
    }
  },
})

export async function partyQuery(
  ctx: QueryCtx,
  userId: string,
): Promise<Doc<'parties'> | null> {
  return await ctx.db
    .query('parties')
    .withIndex('by_owner_id', (q) => q.eq('ownerId', userId))
    .unique()
}
