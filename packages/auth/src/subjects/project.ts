import { z } from 'zod'

import { projectSchema } from '../models/project'

export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

export type ProjectSubject = z.infer<typeof projectSubject>

// export type ProjectSubject = [
//   // First argument is all the actions that can be performed on the project
//   'create' | 'delete' | 'manage',
//   // Second argument is the name of the subject
//   'Project',
// ]
