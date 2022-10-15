<script>
	import { page } from '$app/stores';
	let activeTab;
	$: activeTab = $page.url.pathname;
</script>

<main class="w-1/5 h-full bg-bridge-sidebar flex flex-col justify-between py-10 px-10">

  <!-- HOME -->
  <section class="flex flex-col gap-5">
    {#if activeTab == '/'}
        <div class="flex justify-center active py-4 rounded-3xl cursor-pointer" >
          <div class="flex items-center gap-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
              <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
            </svg>
            <p class="text-3xl pt-2 font-semibold font-bridge-text">
              Home
            </p>
          </div>
        </div>
    {:else}
      <a href="/" tabindex="-1">
        <div class="flex justify-center hover:bg-[#0000000b] py-4 rounded-3xl cursor-pointer" >
          <div class="flex items-center gap-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p class="text-3xl pt-2 font-semibold font-bridge-text">
              Home
            </p>
          </div>
        </div>
      </a>
    {/if}

    <!-- POPULAR -->
      {#if activeTab == '/popular'}
          <div class="flex justify-center active py-4 rounded-3xl cursor-pointer" >
            <div class="flex items-center gap-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
              </svg>     
              <p class="text-3xl pt-2 font-semibold font-bridge-text">
                Popular
              </p>
            </div>
          </div>
      {:else}
        <a href="/popular" tabindex="-1">
          <div class="flex justify-center hover:bg-[#0000000b] py-4 rounded-3xl cursor-pointer" >
            <div class="flex items-center gap-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              
              <p class="text-3xl pt-2 font-semibold font-bridge-text">
                Popular
              </p>
            </div>
          </div>
        </a>
      {/if}
  </section>

  <p class="cursor-pointer">Profile</p>

</main>

<style>
	.active {
		background: #0000001a;
		pointer-events: none;
		cursor: default;
	}

	.bold {
		stroke-width: 2;
	}
</style>
