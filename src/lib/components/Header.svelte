<script>
  // @ts-ignore
  import Menu from "lucide-svelte/icons/menu";
  // @ts-ignore
  import Search from "lucide-svelte/icons/search";
  // @ts-ignore
  import Package2 from "lucide-svelte/icons/package-2";
  // @ts-ignore
  import CircleUser from "lucide-svelte/icons/circle-user";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import ModeSwitch from "$lib/components/ModeSwitch.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { link } from "svelte-spa-router";
</script>

<header
  class="sticky top-0 flex h-16 items-center gap-4 border-t border-b bg-background px-4 md:px-6"
>
  <nav
    class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
  >
    <a
      href="/"
      class="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 class="h-6 w-6" />
      <span class="sr-only">Locci</span>
    </a>
    <a
      href="/"
      use:link
      class="text-foreground transition-colors hover:text-foreground"
    >
      Overview
    </a>
    <a
      href="#/projects"
      use:link
      class="text-muted-foreground transition-colors hover:text-foreground"
    >
      Projects
    </a>
    <a
      href="#/settings"
      use:link
      class="text-muted-foreground transition-colors hover:text-foreground"
    >
      Settings
    </a>
  </nav>
  <Sheet.Root>
    <Sheet.Trigger asChild let:builder>
      <Button
        variant="outline"
        size="icon"
        class="shrink-0 md:hidden"
        builders={[builder]}
      >
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </Sheet.Trigger>
    <Sheet.Content side="left">
      <nav class="grid gap-6 text-lg font-medium">
        <a href="##" class="flex items-center gap-2 text-lg font-semibold">
          <Package2 class="h-6 w-6" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <a href="/" use:link class="hover:text-foreground"> Overview </a>
        <a
          href="#/projects"
          use:link
          class="text-muted-foreground hover:text-foreground"
        >
          Projects
        </a>
        <a
          href="#/settings"
          use:link
          class="text-muted-foreground hover:text-foreground"
        >
          Settings
        </a>
      </nav>
    </Sheet.Content>
  </Sheet.Root>

  <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
    <form class="ml-auto flex-1 sm:flex-initial">
      <div class="relative">
        <Search
          class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        />
        <Input
          type="search"
          placeholder="Search..."
          class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>
    </form>
    <ModeSwitch />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          variant="secondary"
          size="icon"
          class="rounded-full"
        >
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Support</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</header>
