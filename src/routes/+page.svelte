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

		<!-- POST START -->
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
							<svg class="w-5 h-4" width="289" height="330" viewBox="0 0 289 330" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z" stroke="#A86302" stroke-width="30"/>
								</svg>						</button>
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
		<!-- POST END -->
		<!-- POST START -->
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
							<svg class="w-5 h-4" width="289" height="330" viewBox="0 0 289 330" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z" stroke="#A86302" stroke-width="30"/>
								</svg>						</button>
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
		<!-- POST END -->
		<!-- POST START -->
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
							<svg class="w-5 h-4" width="289" height="330" viewBox="0 0 289 330" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z" stroke="#A86302" stroke-width="30"/>
								</svg>						</button>
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
		<!-- POST END -->


			

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
