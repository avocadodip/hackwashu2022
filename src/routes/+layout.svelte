<script>
	import '../app.postcss';
	import Sidebar from '../components/Sidebar.svelte';
	import { page } from '$app/stores';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '../lib/firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(async () => {
	  onAuthStateChanged(auth, async (user) => {
	    if (!user) {
	      goto("/login");
	    }
	  });
	});
</script>

<svelte:head>
	<title>Civil</title>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap');
	</style>
</svelte:head>

{#if $page.url.pathname === '/login' || $page.url.pathname === '/register'}
	<main class="flex h-screen">
		<slot />
	</main>
{:else}
	<main class="flex overflow-hidden bg-bridge-bg">
		<div class="sidebar w-[40%] h-screen">
			<Sidebar />
		</div>
		<div class="w-[60%] overflow-y-scroll h-screen">
			<slot />
		</div>
	</main>
{/if}

<style>
		/* ------ scrolling ------ */
		::-webkit-scrollbar {
		width: 17px;
	}

	/* Background */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--bridge-brown);
		border-radius: 8px;
		background-clip: padding-box;
		padding: 0 4px;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
	}
</style>
