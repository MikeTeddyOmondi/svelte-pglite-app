import { db, schema } from "./index"

export const insertProjects = async ({ pid, name, description }) => {
  let vals = { pid, name, description }
  console.log({ vals })
  await db
    .insert(schema.project).values(vals)
    .onConflictDoUpdate({
      target: schema.project.pid,
      set: { name: (name ?? "foo"), description: (description ?? "bar") },
    })
}
