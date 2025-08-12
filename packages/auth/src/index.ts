import type { CreateAbility, ForcedSubject, MongoAbility } from '@casl/ability'
import { AbilityBuilder, createMongoAbility } from '@casl/ability'

const actions = ['manage', 'invite', 'delete'] as const
const subjects = ['User', 'all'] as const // entities

type AppAbilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

// builder
const { can, cannot, build } = new AbilityBuilder<AppAbility>(createAppAbility)

// A user can invite another user to the app
can('invite', 'User')
cannot('delete', 'User')

export const ability = build()
