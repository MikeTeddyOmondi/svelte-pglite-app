<script>
  import Router from 'svelte-spa-router';
  import { ModeWatcher } from "mode-watcher";
  
  import Login from "./routes/login.svelte"; 
  import Overview from "./routes/overview.svelte"; 
  import Projects from "./routes/projects.svelte";
  import AddProject from "./routes/add-project.svelte";
  import Settings from "./routes/settings.svelte";  

	const routes = {
		'/': Overview,
    '/login': Login,
    '/projects': Projects,
    '/settings': Settings,
    '/add-project': AddProject,
    // '/projects/:id': Invoice,
    // '/rooms': Rooms,
    // '/customers': Customers,
    // '/drink-cart': DrinkCart,
    // '/restaurant': Restaurant,
		// '/forgot-password': ForgotPassword,
	};
</script>

<ModeWatcher /> 
<Router {routes}/>
