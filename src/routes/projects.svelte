<script lang="ts">
  import { push } from "svelte-spa-router";
  import { CirclePlus } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button/";
  import RootLayout from "$lib/layouts/RootLayout.svelte";
  import { getProjects } from "$lib/db/queries";

  async function gotoAddProject(){
    push('/add-project')
  }

  $: {
    let allProjects = async () => await getProjects()
    console.log({ allProjects: allProjects() })
  }
</script>

<RootLayout>
  <div class="container">
    <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center justify-end">
        <div class="flex items-center">
          <Button size="sm" class="h-7 gap-1" on:click={gotoAddProject}>
            <CirclePlus class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Project
            </span>
          </Button>
        </div>
      </div>
      <div
        class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <div
          class="flex flex-col h-[75vh] my-auto items-center justify-center gap-1 text-center"
        >
          <h3 class="text-2xl font-bold tracking-tight">
            You have no projects
          </h3>
          <p class="text-sm text-muted-foreground">
            You can start by creating a project.
          </p>
          <Button class="mt-4" on:click={gotoAddProject}>Add Project</Button>
        </div>
      </div>
    </main>
  </div>
</RootLayout>
