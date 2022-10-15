<script>
  import "../app.postcss";
  import Sidebar from '../components/Sidebar.svelte'
  import { page } from '$app/stores'
  // import { onAuthStateChanged } from 'firebase/auth';
  // import { auth } from '../lib/firebase';
	// import { goto } from '$app/navigation';
  // import { onMount } from 'svelte';

	// onMount(async () => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (!user) {
  //       goto("/login");
  //     }
  //   });
  // });
</script>

<svelte:head>
  <title>
    Hackathon
  </title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap');
  </style>
</svelte:head>

{#if $page.url.pathname === '/login' || $page.url.pathname === '/register' }
  <main class="flex h-screen">
    <slot />
  </main>
{:else}
  <main class="flex h-screen">
    <Sidebar />
    <slot></slot>
  </main>
{/if}

