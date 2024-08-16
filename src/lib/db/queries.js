import { db, schema } from "./index"

export const getProjects = async () => {
  return await db
    .select()
    .from(schema.project)
}
