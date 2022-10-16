<script>
	import { auth } from '$lib/firebase.js';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { fade } from 'svelte/transition';
	import { db } from '../../lib/firebase';
	import { collection, setDoc, doc } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let email = '',
		password = '',
		firstName = '';

	// Invalid credentials message
	let credentialError = false;
	let errorMessage;
	$: if (email || password) {
		credentialError = false;
	}

	// Sign in function
	const signup = async () => {
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
		// Error if name field blank
		if (firstName == '') {
			credentialError = true;
			errorMessage = 'Please enter your first name';
			return;
		}
		// Create Firebase user and updates collection
		try {
			const userRecord = await createUserWithEmailAndPassword(auth, email, password);
			await setDoc(doc(db, 'users', userRecord.user.uid), {
				email: userRecord.user.email
			});

			// Sets their first name
			await updateProfile(userRecord.user, { displayName: firstName });

			// Create settings doc
			await setDoc(collection(db, 'users', auth.currentUser.uid, 'data', 'dataDoc'), {
				rating: 4.00,
				postCount: 10
			});

			goto('/');
		} catch (err) {
			// Shows error message if sign-in credentials are invalid
			if (err.message == 'Firebase: Error (auth/invalid-email).') {
				credentialError = true;
				errorMessage = 'Invalid email';
			}
			if (
				err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'
			) {
				credentialError = true;
				errorMessage = 'Password should be at least 6 characters';
			}
			if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
				credentialError = true;
				errorMessage = 'Email already in use';
			}
		}
	};

	// For styling
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
	let nameFieldHasContent = false;
	$: if (firstName != '') {
		nameFieldHasContent = true;
	} else {
		nameFieldHasContent = false;
	}
</script>

<section class="flex justify-center items-center h-screen  w-screen bg-bridge-bg">
	<div class="flex flex-col items-start w-[350px]">
		<!-- BACK ARROW -->
		<a alt="back" href="/login" class="text-white"> ⬅ Back </a>

		<h2 class="text-white text-2xl font-bold mt-7">Create your account</h2>

		<!-- NAME FIELD -->
		<div class="mt-10 col-3 input-effect text-black text-[Epilogue]">
			<input
				class="effect-20 "
				type="text"
				bind:value={firstName}
				class:has-content={nameFieldHasContent}
				placeholder=""
			/>
			<label for="first name">First Name</label>
			<span class="focus-border">
				<i />
			</span>
		</div>

		<!-- EMAIL FIELD -->
		<div class="mt-8 col-3 input-effect text-black text-[Epilogue]">
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

		<!-- PASSWORD FIELD -->
		<div class="mt-8 col-3 input-effect text-black text-[Epilogue]">
			<input
				class="effect-20 "
				type="password"
				bind:value={password}
				class:has-content={passFieldHasContent}
				placeholder=""
			/>
			<label for="password">Password</label>
			<span class="focus-border">
				<i />
			</span>
		</div>

		<!-- REACTIVE ERROR MESSAGE -->
		{#if credentialError}
			<p in:fade class="text-[#ffffff] text-sm mt-4">*{errorMessage}</p>
		{/if}

		<!-- CONTINUE BUTTON -->
		<button
			class="bg-white hover:bg-[#fff1d3] text-bridge-bg font-bold rounded-3xl mt-7 py-2 w-[90%]"
			on:click={signup}>Continue</button
		>
	</div>
</section>

<style>
	/* INPUT FOCUS STYLING */
	:focus {
		outline: none;
	}

	.col-3 {
		float: left;
		/* width of input */
		width: 90%;
		position: relative;
	}

	input {
		color: white;
		width: 100%;
		box-sizing: border-box;
	}

	.effect-20 {
		border: 1px solid white;
		/* top right bottom left */
		padding: 7px 2px 7px 10px;
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
		background-color: white;
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
		background-color: white;
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
		color: rgb(255, 255, 255);
		transition: 0.3s;
		z-index: -1;
		letter-spacing: 0.5px;
	}
	.effect-20:focus ~ label,
	.has-content.effect-20 ~ label {
		top: -18px;
		left: 0;
		font-size: 12px;
		color: white;
		transition: 0.3s;
	}
</style>
