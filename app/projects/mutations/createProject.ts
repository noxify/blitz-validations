import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

export const CreateProjectSchema = z.object({
  name: z.string().min(10),
})

export default resolver.pipe(
  resolver.zod(CreateProjectSchema),
  /*resolver.authorize(),*/
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db.project.create({ data: input })

    return project
  }
)
