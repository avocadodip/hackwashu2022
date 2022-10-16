<!-- npm run dev -- --host -->
<script>
	import { onAuthStateChanged } from 'firebase/auth';
	import { getDoc, doc, onSnapshot, collection } from 'firebase/firestore';
	import { db, auth } from '$lib/firebase';
	import { formatNum } from '../lib/format';
	import FeedPost from '../components/FeedPost.svelte';
	let name, email, photoURL, rating, postCount;
	let feedPosts = [];
	let postRatings = [
		{ rating: 4.0, avatar: 'avatar4.jpg', likeCount: 5, respectCount: 2, commentCount: 2 },
		{ rating: 4.7, avatar: 'avatar3.jpg', likeCount: 430, respectCount: 321, commentCount: 94 },
		{ rating: 4.2, avatar: 'avatar2.jpg', likeCount: 124, respectCount: 26, commentCount: 40 }
	];

	function findValues(object) {
		const values = [];

		for (const key in object) {
			if (key === 'value') {
				values.push(object[key]);
			} else {
				if (Array.isArray(object[key])) {
					values.push(...object[key].map((elem) => findValues(elem)));
				} else if (typeof object[key] === 'object') {
					values.push(...findValues(object[key]));
				}
			}
		}

		return values;
	}

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

	let postContent;

	const handleSubmit = () => {
		// Pass String/rating/postCount into our algorithm
		fetch(`/data?text=${postContent}`)
			.then((res) => res.json())
			.then((toxicityValues) => console.log(toxicityValues));

		// Retrieve new rating from algo and set it as user's rating

		// Increment user's postCount by 1

		feedPosts = [postContent].concat(feedPosts);

		postContent = '';

	};

</script>

<main class="bg-bridge-bg ml-12 mb-20">
	<div
		class="bg-bridge-sidebar h-[160px] p-5 mt-12 rounded-lg w-[500px] flex flex-col justify-between"
	>
		<div class="flex gap-3">
			<div class="relative w-10 h-10">
				<img
					class="rounded-full border border-bridge-sidebar shadow-sm"
					src={photoURL}
					alt="profile pic"
				/>
			</div>
			<textarea
				bind:value={postContent}
				rows="3"
				class="w-full h-full mt-2"
				placeholder="New post..."
			/>
		</div>
		<div class="flex justify-end">
			<button
				class="bg-bridge-brown rounded-full py-1 px-4 hover:opacity-70"
				on:click={handleSubmit}
				>Post
			</button>
		</div>
	</div>
	<p class="line-thru mt-10 w-[500px]">
		<span class="line-thru-bg"> Feed </span>
	</p>

	{#each feedPosts as text}
		<FeedPost
			{rating}
			profilePic={photoURL}
			likeCount={0}
			respectCount={0}
			postContent={text}
			commentCount={0}
		/>
	{/each}

	{#each postRatings as otherUserRating}
		{#if rating <= otherUserRating}
			<FeedPost
				rating={otherUserRating.rating}
				profilePic={otherUserRating.avatar}
				likeCount={otherUserRating.likeCount}
				respectCount={otherUserRating.respectCount}
				commentCount={otherUserRating.commentCount}
			/>
		{/if}
	{/each}

	<!-- <FeedPost rating={4.6} profilePic={'avatar2.jpg'} likeCount={5} respectCount={6} commentCount={12} />
	<FeedPost rating={4.4} profilePic={'avatar3.jpg'} likeCount={67} respectCount={64} commentCount={42} />
	<FeedPost rating={4.8} profilePic={'avatar4.jpg'} likeCount={25} respectCount={41} commentCount={12} /> -->
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
