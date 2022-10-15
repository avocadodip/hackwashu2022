<script>
	import {onAuthStateChanged } from 'firebase/auth';

	import { db, auth } from '$lib/firebase';
	let name, email, photoURL;

// npm run dev -- --host

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

<main class="bg-bridge-bg ml-8">
	<div class="bg-bridge-sidebar h-36 p-5 mt-12 rounded-lg w-[500px] flex flex-col justify-between">
		<div class="flex gap-3">
			<div class="relative w-10 h-10">
        <img class="rounded-full border border-bridge-sidebar shadow-sm" src={photoURL} alt="profile pic" />
      </div>
			<textarea rows="3" class="w-full h-full mt-2" placeholder="New post..." />
		</div>
		<div class="flex justify-end">
			<button>Post</button>
		</div>
	</div>
	<p class="line-thru mt-10 w-[500px]">
		<span class="line-thru-bg"> Feed </span>
	</p>

		<div class="bg-bridge-sidebar h-42 pt-5 pl-5 pb-3 mt-6 rounded-lg w-[500px] flex gap-5">
			<div class="flex flex-col items-center gap-1 w-1/8">
				<div class="relative w-10 h-10">
					<img class="rounded-full border border-bridge-sidebar shadow-sm" src="avatar3.jpg" alt="profile pic" />
				</div>
				<div class="flex items-center gap-1">
					<p class="text-sm">4.4</p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 mb-1">
						<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
					</svg>
					
				</div>
			</div>
			<div class="flex flex-col">
				<!-- skeleton text -->
				<div>
					<div class="bg-[#b380295c] w-72 h-5 mt-1 rounded-md"/>
					<div class="bg-[#b380295c] w-96 h-5 mt-2 rounded-md"/>
					<div class="bg-[#b380295c] w-64 h-5 mt-2 rounded-md"/>
				</div>
				<!-- buttons -->
				<div class="flex gap-7 mt-3">
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">23</p>
					</div>
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">47</p>
					</div>


					<!-- <button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
						</svg>
					</button> -->
				</div>
			</div>
			
		</div>

		<div class="bg-bridge-sidebar h-42 pt-5 pl-5 pb-3 mt-6 rounded-lg w-[500px] flex gap-5">
			<div class="flex flex-col items-center gap-1 w-1/8">
				<div class="relative w-10 h-10">
					<img class="rounded-full border border-bridge-sidebar shadow-sm" src="avatar4.jpg" alt="profile pic" />
				</div>
				<div class="flex items-center gap-1">
					<p class="text-sm">4.4</p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 mb-1">
						<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
					</svg>
					
				</div>
			</div>
			<div class="flex flex-col">
				<!-- skeleton text -->
				<div>
					<div class="bg-[#b380295c] w-72 h-5 mt-1 rounded-md"/>
					<div class="bg-[#b380295c] w-96 h-5 mt-2 rounded-md"/>
					<div class="bg-[#b380295c] w-64 h-5 mt-2 rounded-md"/>
				</div>
				<!-- buttons -->
				<div class="flex gap-7 mt-3">
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">23</p>
					</div>
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">47</p>
					</div>


					<!-- <button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
						</svg>
					</button> -->
				</div>
			</div>
			
		</div>


		<div class="bg-bridge-sidebar h-42 pt-5 pl-5 pb-3 mt-6 rounded-lg w-[500px] flex gap-5">
			<div class="flex flex-col items-center gap-1 w-1/8">
				<div class="relative w-10 h-10">
					<img class="rounded-full border border-bridge-sidebar shadow-sm" src="avatar2.jpg" alt="profile pic" />
				</div>
				<div class="flex items-center gap-1">
					<p class="text-sm">4.4</p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 mb-1">
						<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
					</svg>
					
				</div>
			</div>
			<div class="flex flex-col">
				<!-- skeleton text -->
				<div>
					<div class="bg-[#b380295c] w-72 h-5 mt-1 rounded-md"/>
					<div class="bg-[#b380295c] w-96 h-5 mt-2 rounded-md"/>
					<div class="bg-[#b380295c] w-64 h-5 mt-2 rounded-md"/>
				</div>
				<!-- buttons -->
				<div class="flex gap-7 mt-3">
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">23</p>
					</div>
					<div class="flex items-center gap-2">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
							</svg>
						</button>
						<p class="text-sm font-medium pt-1">47</p>
					</div>


					<!-- <button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
						</svg>
					</button> -->
				</div>
			</div>
			
		</div>

</main>

<style>
	textarea {
		background-color: transparent;
		font-size: 17px;
		resize: none;
		overflow: hidden;
	}

	textarea:focus {
		outline: none;
	}

	textarea::placeholder {
		color: var(--bridge-text);
		opacity: 0.8;
	}

		/* line through effect on "or" */
		.line-thru {
		overflow: hidden;
		text-align: center;
	}

	.line-thru:before,
	.line-thru:after {
		background-color: var(--bridge-text);
		opacity: 0.15;
		content: '';
		display: inline-block;
		height: 1.75px;
		vertical-align: middle;
		width: 50%;
	}

	.line-thru:before {
		right: 0.5em;
		margin-left: -50%;
	}

	.line-thru:after {
		left: 0.5em;
		margin-right: -50%;
	}

	.line-thru-bg {
		background: var(--bridge-bg);
		padding: 0 8px;
	}
</style>
