<script>
	import Modal from '../../components/Modal.svelte';
	import LoginForm from '../../components/LoginForm.svelte';
	import GoogleSignInButton from '../../components/GoogleSignIn.svelte';
	import { goto } from '$app/navigation';
	import { auth } from '../../lib/firebase';
	import { onAuthStateChanged } from 'firebase/auth';

	let userIsAuthenticated;

	// sign in modal
	let showModal = false;
	let toggleModal = () => {
		showModal = !showModal;
	};

	onAuthStateChanged(auth, (user) => {
		if (user) {
			userIsAuthenticated = user;
			goto('/');
		} else {
			// No user is signed in.
		}
	});
</script>

<!-- All regular email/pass auth scripts are in the LoginForm component -->
<Modal {showModal} on:click={toggleModal}>
	<LoginForm />
</Modal>

<section>
	{#if userIsAuthenticated}
		{goto('/')}
	{:else}
	
	<div class="flex flex-col justify-center items-center h-screen w-screen bg-bridge-bg">
		<img class="w-96 ml-10" src="CIVIL.png" alt="logo"/>
		<p class="mb-14">The hub for productive dialogue.</p>
		<div class="flex-col">
        <!-- SIGN UP WITH EMAIL -->
				<a alt="signup" href="/register">
					<button
						class="bg-[#FFF8FC] hover:bg-[#e7e0e4] text-[black] font-bold rounded-3xl px-5 py-3 w-64"
					>
						Sign up with email
					</button>
				</a>
				<p class="line-thru my-4">
					<span class="line-thru-bg"> or </span>
				</p>
				<!-- GOOGLE SIGN IN -->
				<GoogleSignInButton />
        
        <!-- EXISTING ACCOUNT LOG IN -->
				<div class="mt-12">
					<h1 class="mb-3">Already have an account?</h1>
					<button
						class="bg-transparent border-2 border-white hover:bg-bridge-sidebar text-white font-bold rounded-3xl px-5 py-3 w-64"
						on:click={toggleModal}
					>
						Sign in
					</button>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	/* line through effect on "or" */
	.line-thru {
		overflow: hidden;
		text-align: center;
	}

	.line-thru:before,
	.line-thru:after {
		background-color: #fff8fc63;
		content: '';
		display: inline-block;
		height: 2px;
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
