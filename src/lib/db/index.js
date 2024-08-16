import { PGlite } from "@electric-sql/pglite"
// import { PGliteWorker } from '@electric-sql/pglite/worker'
import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/pglite"

export const schema = {
  project: pgTable("project", {
    pid: text("pid").notNull().primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull()
  }),
}

export const pg = await PGlite.create({ database: 'idb://locci' })

// const pg = new PGliteWorker(
//   new Worker(new URL('./pglite-worker.js', import.meta.url), {
//     type: 'module',
//   }),
//   {
//     dataDir: 'idb://locci',
//     meta: {
//       // additional metadata passed to `init`
//     },
    
//   },
// )

await pg.exec(`
	create table project (
	  pid text not null primary key,
		name text not null,
		description text not null
	);
`)

export const db = drizzle(pg)
