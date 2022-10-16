<script>
	import { fly } from 'svelte/transition';

  export let rating;
  export let profilePic;
  export let likeCount = 5;
  export let respectCount = 5;
  export let commentLikeCount = 5;
  export let commentRespectCount = 5;
	export let commentCount;
  export let postContent = 'skeleton';
	let arrowOneDirection = false;
	let showComments = false;	
	let isPostHeart = false;
	let isCommentHeart = false;
	let isPostRespect = false;
	let isCommentRespect = false;

	const togglePostHeart = () => {
		if (isPostHeart == false) likeCount++;
		if (isPostHeart == true) likeCount--;
		isPostHeart = !isPostHeart;
	}
	
	const togglePostRespect = () => {
		if (isPostRespect == false) respectCount++;
		if (isPostRespect == true) respectCount--;
		isPostRespect = !isPostRespect;
	}

	const toggleCommentHeart = () => {
		if (isCommentHeart == false) commentLikeCount++;
		if (isCommentHeart == true) commentLikeCount--;
		isCommentHeart = !isCommentHeart;

	}

	const toggleCommentRespect = () => {
		if (isCommentRespect == false) commentRespectCount++;
		if (isCommentRespect == true) commentRespectCount--;
		isCommentRespect = !isCommentRespect;
	}

	const toggleComments = () => {
		showComments = !showComments;
	}


</script>

<!-- POST START -->

	<div class="bg-bridge-sidebar max-h-[160px] pt-5 pl-5 pb-4 mt-6 rounded-lg w-[500px] flex gap-5" >

		<div class="flex flex-col items-center gap-1 w-1/8">
			<div class="relative w-10 h-10">
				<img
					class="rounded-full border border-bridge-sidebar shadow-sm"
					src={profilePic}
					alt="profile pic"
				/>
			</div>
			<div class="flex items-center gap-1 pl-1">
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
		<div class="flex flex-col justify-between max-w-[400px] whitespace-normal truncate">
      {#if postContent == 'skeleton'}
			<!-- skeleton text -->
			<div>
				<div class="bg-[#b380295c] w-72 h-5 mt-1 rounded-md" />
				<div class="bg-[#b380295c] w-96 h-5 mt-2 rounded-md" />
				<div class="bg-[#b380295c] w-64 h-5 mt-2 rounded-md" />
			</div>
      {:else}
        <div class="">
          <p class="leading-relaxed">{postContent}</p>
        </div>
      {/if}
			<!-- buttons -->
			<div class="flex gap-7 mt-3">
				<div class="flex items-center gap-2">
					{#if isPostHeart == false}
						<button on:click={togglePostHeart}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
								/>
							</svg>
						</button>
						{:else}
						<button on:click={togglePostHeart}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
								<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
							</svg>
							
						</button>
					{/if}
					<p class="text-sm font-medium pt-1">{likeCount}</p>
				</div>
				<div class="flex items-center gap-2">
					<!-- RESPECT -->
					{#if isPostRespect == false}
						<button on:click={togglePostRespect}>
							<svg
								class="w-5 h-4"
								width="289"
								height="330"
								viewBox="0 0 289 330"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z"
									stroke="#A86302"
									stroke-width="30"
								/>
							</svg>
						</button>
					{:else}
						<button on:click={togglePostRespect}
						>
							<svg
							class="w-5 h-4"
							width="289"
							height="330"
							viewBox="0 0 289 330"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z"
								stroke="#A86302"
								stroke-width="30"
							/>
						</svg>
						</button>
					{/if}
					<p class="text-sm font-medium pt-1">{respectCount}</p>
				</div>
				<!-- COMMENT -->
				<div class="flex items-center gap-2">
					<button on:click={toggleComments}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
						</svg>
						
					</button>
					<p class="text-sm font-medium pt-1">{commentCount}</p>
					<!-- ARROW -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="flex items-center cursor-pointer" class:button-focused={arrowOneDirection} on:click={toggleComments}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 rotate"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
							class:rotateUp={showComments}
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- POST END -->
	{#key showComments}
		{#if showComments == true} 
			<!-- COMMENT START -->
	<div class="bg-bridge-sidebar max-h-[160px] pt-5 pl-5 pb-4 ml-12 rounded-lg w-[452px] flex gap-5">
		<div class="flex flex-col items-center gap-1 w-1/8">
			<div class="relative w-10 h-10">
				<img
					class="rounded-full border border-bridge-sidebar shadow-sm"
					src="avatar1.jpg"
					alt="profile pic"
				/>
			</div>
			<div class="flex items-center gap-1 pl-1">
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
		<div class="flex flex-col justify-between max-w-[400px] whitespace-normal truncate">
      {#if postContent == 'skeleton'}
			<!-- skeleton text -->
			<div>
				<div class="bg-[#b380295c] w-64 h-5 mt-2 rounded-md" />
			</div>
      {:else}
        <div class="">
          <p class="leading-relaxed">{postContent}</p>
        </div>
      {/if}
			<!-- buttons -->
			<div class="flex gap-7 mt-3">
				<div class="flex items-center gap-2">
					{#if isCommentHeart == false}
						<button on:click={toggleCommentHeart}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
								/>
							</svg>
						</button>
						{:else}
						<button on:click={toggleCommentHeart}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
								<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
							</svg>
							
						</button>
					{/if}
					<p class="text-sm font-medium pt-1">{commentLikeCount}</p>
				</div>
				<div class="flex items-center gap-2">
					{#if isCommentRespect == false}
						<button on:click={toggleCommentRespect}>
							<svg
								class="w-5 h-4"
								width="289"
								height="330"
								viewBox="0 0 289 330"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z"
									stroke="#A86302"
									stroke-width="30"
								/>
							</svg>
						</button>
					{:else}
						<button on:click={toggleCommentRespect}
						>
							<svg
							class="w-5 h-4"
							width="289"
							height="330"
							viewBox="0 0 289 330"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M74 81H50C46.6863 81 44 78.3137 44 75V54C44 52.3431 42.6569 51 41 51H29.1325C26.6441 51 24.4139 49.464 23.5267 47.139L13.6057 21.139C12.107 17.2114 15.0075 13 19.2115 13H270.073C274.335 13 277.238 17.3196 275.628 21.2661L265.023 47.2661C264.102 49.5241 261.906 51 259.467 51H248.5C246.843 51 245.5 52.3431 245.5 54V75C245.5 78.3137 242.814 81 239.5 81H213.5C211.843 81 210.5 82.3431 210.5 84V251C210.5 252.657 211.843 254 213.5 254H239.5C242.814 254 245.5 256.686 245.5 260V279C245.5 280.657 246.843 282 248.5 282H260.044C262.444 282 264.613 283.43 265.558 285.636L275.416 308.636C277.112 312.596 274.208 317 269.901 317H19.0992C14.7917 317 11.8876 312.596 13.5844 308.636L23.4415 285.636C24.387 283.43 26.5562 282 28.9564 282H40C41.6569 282 43 280.657 43 279V260C43 256.686 45.6863 254 49 254H74C75.6569 254 77 252.657 77 251V84C77 82.3431 75.6569 81 74 81Z"
								stroke="#A86302"
								stroke-width="30"
							/>
						</svg>
						</button>
					{/if}
					<p class="text-sm font-medium pt-1">{commentRespectCount}</p>
				</div>
				<!-- COMMENT -->
				<div class="flex items-center gap-2">
					<button >
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
						</svg>
						
					</button>
					<p class="text-sm font-medium pt-1">2</p>
				</div>



			</div>
		</div>
	</div>
	<!-- COMMENT END -->
		{/if}
	{/key}

	<style>
			/* .button-focused {
    background-color: #ffd2d2;
	} */

	  /* ROTATE ARROW */
		.rotate {
    -moz-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .rotateUp {
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
	</style>

