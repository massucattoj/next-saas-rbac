import { z } from 'zod'

export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'), // this is used to identify the type of the object
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>

/** Is not the same columns as the database, just the important info for permissions */
