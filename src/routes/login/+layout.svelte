<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<nav>
	<ul>
		<li>Hello</li>
	</ul>
</nav>

<main class="card w-4/6 mx-auto bg-neutral text-neutral-content">
	<div class="card-body items-center text-center">
		<slot />
	</div>
</main>
