<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { signOut, onAuthStateChanged } from 'firebase/auth';
	import { db, auth } from '$lib/firebase';
	import { getDoc, doc, onSnapshot, collection } from 'firebase/firestore';
	import { formatNum } from '../lib/format';

	let activeTab, name, email, photoURL, rating, postCount;
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

			// GETS RATING/POSTCOUNT
			onSnapshot(doc(db, 'users', auth.currentUser.uid, 'data', 'dataDoc'), (doc) => {
				postCount = doc.data().postCount;
				rating = formatNum(doc.data().rating);
			});
		} else {
			// No user is signed in.
		}
	});
</script>

<div class="relative max-h-screen">
	<svg
		class="absolute"
		width="201"
		height="796"
		viewBox="0 0 201 796"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect y="0.821655" width="152.716" height="795.178" fill="#E4B14E" />
		<path
			d="M0 1.32165C0 1.04551 0.223858 0.821655 0.5 0.821655H199.552C199.85 0.821655 200.082 1.08069 200.049 1.37687L194.894 47.7716C194.866 48.0248 194.652 48.2164 194.397 48.2164H0.500003C0.223861 48.2164 0 47.9925 0 47.7164V1.32165Z"
			fill="#E4B14E"
		/>
		<path
			d="M0 48.7163C0 48.4402 0.223858 48.2163 0.5 48.2163H188.224C188.688 48.2163 188.902 48.7947 188.548 49.0965L171.224 63.8947C171.133 63.9721 171.018 64.0146 170.899 64.0146H0.499997C0.223855 64.0146 0 63.7907 0 63.5146V48.7163Z"
			fill="#D2A03D"
		/>
		<path
			d="M0 90.845C0 90.5688 0.223858 90.345 0.5 90.345H172.005C172.466 90.345 172.681 90.9162 172.335 91.2206L155.491 106.019C155.4 106.099 155.282 106.143 155.161 106.143H0.499997C0.223855 106.143 0 105.919 0 105.643V90.845Z"
			fill="#D2A03D"
		/>
		<path
			d="M126.386 106.143L126.386 279.474L110.588 261.493L110.588 106.143L126.386 106.143Z"
			fill="#D9A746"
		/>
		<path
			d="M126.386 358.915L126.386 532.246L110.588 514.265L110.588 358.915L126.386 358.915Z"
			fill="#D9A746"
		/>
		<path
			d="M121.12 622.219L121.12 795.55L105.322 777.569L105.322 622.219L121.12 622.219Z"
			fill="#D9A746"
		/>
		<path
			d="M84.2573 106.143L84.2573 237.795L68.4591 224.137L68.4591 106.143L84.2573 106.143Z"
			fill="#D9A746"
		/>
		<path
			d="M84.2573 295.722L84.2573 427.374L68.4591 413.716L68.4591 295.722L84.2573 295.722Z"
			fill="#D9A746"
		/>
		<path
			d="M78.9912 574.825L78.9912 706.477L63.193 692.819L63.193 574.825L78.9912 574.825Z"
			fill="#D9A746"
		/>
		<path
			d="M42.1287 106.143L42.1287 190.401L26.3304 181.66L26.3304 106.143L42.1287 106.143Z"
			fill="#D9A746"
		/>
		<path
			d="M42.1287 358.915L42.1287 443.173L26.3304 434.431L26.3304 358.915L42.1287 358.915Z"
			fill="#D9A746"
		/>
		<path
			d="M36.8625 664.348L36.8625 748.605L21.0643 739.864L21.0643 664.348L36.8625 664.348Z"
			fill="#D9A746"
		/>
		<path
			d="M0 64.5146C0 64.2385 0.223858 64.0146 0.5 64.0146H165.329C165.625 64.0146 165.856 64.2701 165.827 64.5644L163.294 89.8948C163.268 90.1504 163.053 90.3451 162.796 90.3451H0.500005C0.223862 90.3451 0 90.1212 0 89.8451V64.5146Z"
			fill="#E4B14E"
		/>
	</svg>
</div>

<main class="h-full flex flex-col justify-between py-10 pr-10 pl-[215px]">
	<!-- HOME -->
	<section class="flex flex-col gap-5">
		{#if activeTab == '/'}
			<div class="flex justify-center active rounded-3xl cursor-pointer">
				<div class="flex items-center gap-5 py-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-9 h-9"
					>
						<path
							fill-rule="evenodd"
							d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="text-[23px] pt-2 font-bold font-bridge-text">Home</p>
				</div>
			</div>
		{:else}
			<a href="/" tabindex="-1">
				<div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer">
					<div class="flex items-center gap-5 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.6"
							stroke="currentColor"
							class="w-9 h-9"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<p class="text-[23px] pt-2 font-semibold font-bridge-text">Home</p>
					</div>
				</div>
			</a>
		{/if}

		<!-- TRENDING -->
		{#if activeTab == '/trending'}
			<div class="flex justify-center active py-3 rounded-3xl cursor-pointer">
				<div class="flex items-center gap-5 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-9 h-9"
					>
						<path
							fill-rule="evenodd"
							d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
							clip-rule="evenodd"
						/>
					</svg>

					<p class="text-[23px] pt-2 font-bold font-bridge-text">Trending</p>
				</div>
			</div>
		{:else}
			<a href="/trending" tabindex="-1">
				<div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer">
					<div class="flex items-center gap-5 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.6"
							stroke="currentColor"
							class="w-9 h-9"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
							/>
						</svg>

						<p class="text-[23px] pt-2 font-semibold font-bridge-text">Trending</p>
					</div>
				</div>
			</a>
		{/if}
		<!-- END TRENDING -->

		<!-- Forum -->
		{#if activeTab == '/forum'}
			<div class="flex justify-center active py-3 rounded-3xl cursor-pointer">
				<div class="flex items-center gap-5 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-8 h-8"
					>
						<path
							d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
						/>
						<path
							d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
						/>
					</svg>

					<p class="text-[23px] pt-1 font-bold font-bridge-text">Forum</p>
				</div>
			</div>
		{:else}
			<a href="/forum" tabindex="-1">
				<div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer">
					<div class="flex items-center gap-5 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.7"
							stroke="currentColor"
							class="w-8 h-8"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
							/>
						</svg>

						<p class="text-[23px] pt-1 font-semibold font-bridge-text">Forum</p>
					</div>
				</div>
			</a>
		{/if}
		<!-- END FORUM -->

		<!-- Messages -->
		{#if activeTab == '/messages'}
			<div class="flex justify-center active py-3 rounded-3xl cursor-pointer">
				<div class="flex items-center gap-5 ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
						<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
						<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
					</svg>
					

					<p class="text-[23px] pt-1 font-bold font-bridge-text">Messages</p>
				</div>
			</div>
		{:else}
			<a href="/messages" tabindex="-1">
				<div class="flex justify-center hover:bg-[#0000000b] py-3 rounded-3xl cursor-pointer">
					<div class="flex items-center gap-5 ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-8 h-8">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
						</svg>
						

						<p class="text-[23px] pt-1 font-semibold font-bridge-text">Messages</p>
					</div>
				</div>
			</a>
		{/if}
		<!-- END MESSAGES -->
	</section>

	<div class="">
		<div class="flex items-center gap-4 bg-bridge-brown px-3 py-2 rounded-[50px] cursor-pointer">
			<div class="relative w-12 h-12">
				<img
					class="rounded-full border border-bridge-sidebar shadow-sm"
					src={photoURL}
					alt="profile pic"
				/>
			</div>
			<div class="flex flex-col">
				<p class="text-md font-medium">
					{name}
				</p>
				<div class="flex items-center gap-1">
					<p class="text-sm">{rating}</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-3 h-3 mb-1"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
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
		background: rgb(242, 194, 101);
		background: linear-gradient(90deg, rgba(242, 194, 101, 1) 0%, rgba(228, 177, 78, 1) 100%);
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
