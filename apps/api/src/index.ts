import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ id: '1', role: 'ADMIN' })

console.log(ability.can('manage', 'Project'))
