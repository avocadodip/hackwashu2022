<script>
	import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { signOut,  onAuthStateChanged } from 'firebase/auth';
  import { db, auth } from '$lib/firebase';
	let activeTab, name, email, photoURL;
	$: activeTab = $page.url.pathname;

  // Logs user out of firebase auth and redirects to login page
  const logout = async () => {
    await signOut(auth);
    goto('/login');
  };

  // If user authenticated, grabs their profile data
    onAuthStateChanged(auth, async (user) => {
    if (user) {
      name = auth.currentUser.displayName;
      email = auth.currentUser.email;
      photoURL = auth.currentUser.photoURL;

      // // GETS DAY START/END FROM DATABASE
      // const settingsRef = doc(db, 'users', auth.currentUser.uid, 'settings', 'settingsDoc');
			// const docSnap = await getDoc(settingsRef);

      // // // returns in string format '#:##'
      // dayStart = docSnap.data().dayStart;
      // dayEnd = docSnap.data().dayEnd;


		} else {
      // No user is signed in.
    }
  });
</script>

  <div class="relative max-h-screen">
    <svg class="absolute" width="201" height="796" viewBox="0 0 201 796" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.821655" width="152.716" height="795.178" fill="#E4B14E"/>
      <path d="M0 1.32165C0 1.04551 0.223858 0.821655 0.5 0.821655H199.552C199.85 0.821655 200.082 1.08069 200.049 1.37687L194.894 47.7716C194.866 48.0248 194.652 48.2164 194.397 48.2164H0.500003C0.223861 48.2164 0 47.9925 0 47.7164V1.32165Z" fill="#E4B14E"/>
      <path d="M0 48.7163C0 48.4402 0.223858 48.2163 0.5 48.2163H188.224C188.688 48.2163 188.902 48.7947 188.548 49.0965L171.224 63.8947C171.133 63.9721 171.018 64.0146 170.899 64.0146H0.499997C0.223855 64.0146 0 63.7907 0 63.5146V48.7163Z" fill="#D2A03D"/>
      <path d="M0 90.845C0 90.5688 0.223858 90.345 0.5 90.345H172.005C172.466 90.345 172.681 90.9162 172.335 91.2206L155.491 106.019C155.4 106.099 155.282 106.143 155.161 106.143H0.499997C0.223855 106.143 0 105.919 0 105.643V90.845Z" fill="#D2A03D"/>
      <path d="M126.386 106.143L126.386 279.474L110.588 261.493L110.588 106.143L126.386 106.143Z" fill="#D9A746"/>
      <path d="M126.386 358.915L126.386 532.246L110.588 514.265L110.588 358.915L126.386 358.915Z" fill="#D9A746"/>
      <path d="M121.12 622.219L121.12 795.55L105.322 777.569L105.322 622.219L121.12 622.219Z" fill="#D9A746"/>
      <path d="M84.2573 106.143L84.2573 237.795L68.4591 224.137L68.4591 106.143L84.2573 106.143Z" fill="#D9A746"/>
      <path d="M84.2573 295.722L84.2573 427.374L68.4591 413.716L68.4591 295.722L84.2573 295.722Z" fill="#D9A746"/>
      <path d="M78.9912 574.825L78.9912 706.477L63.193 692.819L63.193 574.825L78.9912 574.825Z" fill="#D9A746"/>
      <path d="M42.1287 106.143L42.1287 190.401L26.3304 181.66L26.3304 106.143L42.1287 106.143Z" fill="#D9A746"/>
      <path d="M42.1287 358.915L42.1287 443.173L26.3304 434.431L26.3304 358.915L42.1287 358.915Z" fill="#D9A746"/>
      <path d="M36.8625 664.348L36.8625 748.605L21.0643 739.864L21.0643 664.348L36.8625 664.348Z" fill="#D9A746"/>
      <path d="M0 64.5146C0 64.2385 0.223858 64.0146 0.5 64.0146H165.329C165.625 64.0146 165.856 64.2701 165.827 64.5644L163.294 89.8948C163.268 90.1504 163.053 90.3451 162.796 90.3451H0.500005C0.223862 90.3451 0 90.1212 0 89.8451V64.5146Z" fill="#E4B14E"/>
    </svg>
  </div>
  
  <main class="h-full flex flex-col justify-between py-10 pr-10 pl-[215px]">
    <!-- HOME -->
    <section class="flex flex-col gap-5">
      {#if activeTab == '/'}
          <div class="flex justify-center active rounded-3xl cursor-pointer" >
            <div class="flex items-center gap-5 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
                <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
              </svg>
              <p class="text-[23px] pt-2 font-bold font-bridge-text">
                Home
              </p>
            </div>
          </div>
      {:else}
        <a href="/" tabindex="-1">
          <div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer" >
            <div class="flex items-center gap-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p class="text-[23px] pt-2 font-semibold font-bridge-text">
                Home
              </p>
            </div>
          </div>
        </a>
      {/if}
  
      <!-- POPULAR -->
        {#if activeTab == '/popular'}
            <div class="flex justify-center active py-3 rounded-3xl cursor-pointer" >
              <div class="flex items-center gap-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                  <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
                </svg>     
                <p class="text-[23px] pt-2 font-bold font-bridge-text">
                  Popular
                </p>
              </div>
            </div>
        {:else}
          <a href="/popular" tabindex="-1">
            <div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer" >
              <div class="flex items-center gap-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
                
                <p class="text-[23px] pt-2 font-semibold font-bridge-text">
                  Popular
                </p>
              </div>
            </div>
          </a>
        {/if}
        <!-- END POPULAR -->

      <!-- Messages -->
        {#if activeTab == '/messages'}
            <div class="flex justify-center active py-3 rounded-3xl cursor-pointer" >
              <div class="flex items-center gap-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                  
                <p class="text-[23px] pt-1 font-bold font-bridge-text">
                  Messages
                </p>
              </div>
            </div>
        {:else}
          <a href="/messages" tabindex="-1">
            <div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer" >
              <div class="flex items-center gap-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                
                
                <p class="text-[23px] pt-1 font-semibold font-bridge-text">
                  Messages
                </p>
              </div>
            </div>
          </a>
        {/if}
        <!-- END MESSAGES -->
    </section>
    
  
    <div class="">
      <div class="flex items-center gap-4 bg-bridge-brown px-3 py-2 rounded-[50px] cursor-pointer">
        <div class="relative w-12 h-12">
          <img class="rounded-full border border-bridge-sidebar shadow-sm" src={photoURL} alt="profile pic" />
        </div>
        <div class="flex flex-col">
          <p class="text-md font-medium">
            {name}
          </p>
          <div class="flex items-center gap-1">
            <p class="text-sm">4.54</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 mb-1">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
            
          </div>
        </div>
      </div>
      
      <div class="flex justify-center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="cursor-pointer text-xs font-semibold mt-3 opacity-70" on:click={logout}>Log out</p>
      </div>
  
  
    </div>
  
  </main>

<style>
  main {
    background: rgb(242,194,101);
    background: linear-gradient(90deg, rgba(242,194,101,1) 0%, rgba(228,177,78,1) 100%);
  }
  
	.active {
		background-color: #b380295c;
		pointer-events: none;
		cursor: default;
	}

	.bold {
		stroke-width: 2;
	}

    
</style>
