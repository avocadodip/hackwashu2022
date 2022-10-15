<script>
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase.js';
	import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';

	let email = '',
		password = '';

	// Invalid credentials message
	let credentialError = false;
	let errorMessage;
	$: if (email || password) {
		credentialError = false;
	}

	// logs in if 'enter' key pressed
	const onKeyPress = (e) => {
		if (e.charCode === 13) login();
	};

	// Log in function
	const login = async () => {
    // Error if email field blank
		if (email == '') {
      credentialError = true;
			errorMessage = 'Please enter an email';
			return;
		}
    // Error if password field blank
		if (password == '') {
			credentialError = true;
			errorMessage = 'Please enter a password';
			return;
		}
    // Logs user in with firebase auth and redirects
		try {
			await signInWithEmailAndPassword(auth, email, password);
			goto('/');
		} 
    // Shows error message if log-in credentials are invalid
    catch (err) {
			credentialError = true;
			errorMessage = 'Incorrect email or password';
		}
	};

	// For input styling
	let emailFieldHasContent = false;
	$: if (email != '') {
		emailFieldHasContent = true;
	} else {
		emailFieldHasContent = false;
	}
	let passFieldHasContent = false;
	$: if (password != '') {
		passFieldHasContent = true;
	} else {
		passFieldHasContent = false;
	}
</script>

<section class="flex flex-col items-center">
	<h2 class="text-black text-3xl font-bold mt-4 mb-6">Sign in to Fervo</h2>

	<!-- Inputs are same, only have different labels -->
	<div class="col-3 input-effect text-black text-[Epilogue]">
		<input
			class="effect-20 "
			type="text"
			bind:value={email}
			class:has-content={emailFieldHasContent}
			placeholder=""
		/>
		<label for="email">Email</label>
		<span class="focus-border">
			<i />
		</span>
	</div>

	<div class="col-3 input-effect text-black text-[Epilogue]">
		<input
			class="effect-20 "
			type="password"
			bind:value={password}
			class:has-content={passFieldHasContent}
			placeholder=""
			on:keypress={onKeyPress}
		/>
		<label for="password">Password</label>
		<span class="focus-border">
			<i />
		</span>
	</div>

	<button
		class="bg-[#dd4f4f] hover:bg-[#e86565] text-white font-bold rounded-3xl mt-5 py-2 w-[70%]"
		on:click={login}>Continue</button
	>

	{#if credentialError}
		<p in:fade class="text-[#e86565] text-sm mt-2">*{errorMessage}</p>
	{/if}

	<p class="text-[#9a9a9a] mt-5">
		Don't have an account? <span class="text-[#dd4f4f] cursor-pointer"
			><a alt="signup" href="/signup">Sign up</a></span
		>
	</p>
</section>

<style>
	/* INPUT FOCUS STYLING */
	:focus {
		outline: none;
	}

	.col-3 {
		float: left;
		width: 70%;
		/* vertical space between both inputs */
		margin: 17px;
		position: relative;
	}

	input {
		color: #333;
		width: 100%;
		box-sizing: border-box;
	}

	.effect-20 {
		border: 1px solid #ccc;
		padding: 7px 2px 7px 10px;
		/* top right bottom left */
		transition: 0.4s;
		background: transparent;
	}

	.effect-20 ~ .focus-border:before,
	.effect-20 ~ .focus-border:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #dd4f4f;
		transition: 0.3s;
	}
	.effect-20 ~ .focus-border:after {
		top: auto;
		bottom: 0;
		left: auto;
		right: 0;
	}
	.effect-20 ~ .focus-border i:before,
	.effect-20 ~ .focus-border i:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 0;
		background-color: #dd4f4f;
		transition: 0.4s;
	}
	.effect-20 ~ .focus-border i:after {
		left: auto;
		right: 0;
		top: auto;
		bottom: 0;
	}
	.effect-20:focus ~ .focus-border:before,
	.effect-20:focus ~ .focus-border:after,
	.has-content.effect-20 ~ .focus-border:before,
	.has-content.effect-20 ~ .focus-border:after {
		width: 100%;
		transition: 0.3s;
	}
	.effect-20:focus ~ .focus-border i:before,
	.effect-20:focus ~ .focus-border i:after,
	.has-content.effect-20 ~ .focus-border i:before,
	.has-content.effect-20 ~ .focus-border i:after {
		height: 100%;
		transition: 0.4s;
	}
	.effect-20 ~ label {
		position: absolute;
		left: 14px;
		width: 100%;
		top: 10px;
		color: #aaa;
		transition: 0.3s;
		z-index: -1;
		letter-spacing: 0.5px;
	}
	.effect-20:focus ~ label,
	.has-content.effect-20 ~ label {
		top: -18px;
		left: 0;
		font-size: 12px;
		color: #dd4f4f;
		transition: 0.3s;
	}
</style>
