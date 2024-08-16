<script>
  import { ChevronLeft } from "lucide-svelte";
  import { Upload } from "lucide-svelte";

  import { Badge } from "$lib/components/ui/badge/index.js";

  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import RootLayout from "$lib/layouts/RootLayout.svelte";

  import { pop } from "svelte-spa-router";
  import { v4 as uuidv4 } from 'uuid';
  import { insertProjects } from "$lib/db/mutations";
  import { getProjects } from "$lib/db/queries";

  function getPid(){
    return uuidv4();
  }
  
  let pid = getPid();
  let projectName;
  let projectDescription;

  async function goBack(){
    await pop()
  }

  async function addProject(){
    console.log({ pid, name: projectName, description: projectDescription })

    let values = { pid, name: projectName, description: projectDescription }
    await insertProjects({ ...values })
    console.log("Insert successful...")

    let allProjects = async () => await getProjects()
    console.log({ allProjects: allProjects() })
  }
</script>

<RootLayout>
  <div class="container">
    <main class="grid flex-1 items-start gap-4 my-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <form method="POST" on:submit|preventDefault={addProject}>
          <div class="flex items-center gap-4 my-2">
            <Button variant="outline" size="icon" class="h-7 w-7" on:click={goBack}>
              <ChevronLeft class="h-4 w-4" />
              <span class="sr-only">Back</span>
            </Button>
            <h1
              class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0"
            >
              Add Project
            </h1>
            <Badge variant="secondary" class="ml-auto sm:ml-0">draft</Badge>
            <div class="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm" on:click={goBack}>Discard</Button>
              <Button size="sm" type="submit">Save Product</Button>
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card.Root
                data-x-chunk-name="dashboard-07-chunk-0"
                data-x-chunk-description="A card with a form to edit the product details"
              >
                <Card.Header>
                  <Card.Title>Project Details</Card.Title>
                  <Card.Description>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Label for="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        class="w-full"
                        bind:value={projectName}
                      />
                    </div>
                    <div class="grid gap-3">
                      <Label for="description">Description</Label>
                      <Textarea
                        id="description"
                        class="min-h-32"
                        bind:value={projectDescription}
                      />
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
              <Card.Root
                data-x-chunk-name="dashboard-07-chunk-2"
                data-x-chunk-description="A card with a form to edit the product category and subcategory"
              >
                <Card.Header>
                  <Card.Title>Project Category</Card.Title>
                </Card.Header>
                <Card.Content>
                  <div class="grid gap-6 sm:grid-cols-2">
                    <div class="grid gap-3">
                      <Label for="category">Category</Label>
                      <Select.Root>
                        <Select.Trigger
                          id="category"
                          aria-label="Select category"
                        >
                          <Select.Value placeholder="Select category" />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value="web" label="Web"
                            >Web</Select.Item
                          >
                          <Select.Item
                            value="database"
                            label="Database"
                          >
                            Database
                          </Select.Item>
                          <Select.Item
                            value="server"
                            label="Web Server"
                          >
                            Web Server
                          </Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </div>
                    <!-- <div class="grid gap-3">
                      <Label for="subcategory">Subcategory</Label>
                      <Select.Root>
                        <Select.Trigger
                          id="subcategory"
                          aria-label="Select subcategory"
                        >
                          <Select.Value placeholder="Select subcategory" />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value="t-shirts" label="T-Shirts"
                            >T-Shirts</Select.Item
                          >
                          <Select.Item value="hoodies" label="Hoodies"
                            >Hoodies</Select.Item
                          >
                          <Select.Item
                            value="sweatshirts"
                            label="Sweatshirts"
                          >
                            Sweatshirts
                          </Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </div> -->
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
            <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card.Root
                data-x-chunk-name="dashboard-07-chunk-3"
                data-x-chunk-description="A card with a form to edit the product status"
              >
                <Card.Header>
                  <Card.Title>Project Status</Card.Title>
                </Card.Header>
                <Card.Content>
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Label for="status">Status</Label>
                      <Select.Root>
                        <Select.Trigger id="status" aria-label="Select status">
                          <Select.Value placeholder="Select status" />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value="draft" label="Draft"
                            >Draft</Select.Item
                          >
                          <Select.Item value="published" label="Active"
                            >Active</Select.Item
                          >
                          <Select.Item value="archived" label="Archived"
                            >Archived</Select.Item
                          >
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
              <Card.Root
                class="overflow-hidden"
                data-x-chunk-name="dashboard-07-chunk-4"
                data-x-chunk-description="A card with a form to upload product images"
              >
                <Card.Header>
                  <Card.Title>Project Images</Card.Title>
                  <Card.Description>
                    You can upload your project images here
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div class="grid gap-2">
                    <img
                      alt="Project"
                      class="aspect-square w-full rounded-md object-cover"
                      height="300"
                      src="/placeholder.svg"
                      width="300"
                    />
                    <div class="grid grid-cols-2 gap-1">
                      <button
                        class="flex aspect-video w-full items-center justify-center rounded-md border border-dashed"
                      >
                        <Upload class="h-4 w-4 text-muted-foreground" />
                        <span class="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
              <Card.Root
                data-x-chunk-name="dashboard-07-chunk-5"
                data-x-chunk-description="A card with a call to action to archive the product"
              >
                <Card.Header>
                  <Card.Title>Archive Project</Card.Title>
                  <Card.Description>
                    You can archive this project
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div></div>
                  <Button size="sm" variant="secondary">Archive Project</Button>
                </Card.Content>
              </Card.Root>
              <Card.Root
                class="bg-red-700"
                data-x-chunk-name="dashboard-07-chunk-5"
                data-x-chunk-description="A card with a call to action to archive the product"
              >
                <Card.Header>
                  <Card.Title>Delete Project</Card.Title>
                  <Card.Description
                    class="text-black"
                  >
                    Are you sure you want to permanently delete this project?
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div></div>
                  <Button size="sm" variant="outline">Delete Project</Button>
                </Card.Content>
              </Card.Root>
            </div>
          </div>
          <div class="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm" on:click={goBack}>Discard</Button>
            <Button size="sm">Save Project</Button>
          </div>
        </form>
      </div>
    </main>
  </div>
</RootLayout>
