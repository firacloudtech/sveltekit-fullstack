<script lang="ts">
	import { auth } from '$lib/firebase';
	import { user } from '$lib/stores/user.store';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	let errorMessage = '';
	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();

		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
		} catch (error) {
			if (error instanceof Error) {
				errorMessage = error?.message;
			}
		}
	}
</script>

<h2>Login</h2>

{#if $user}
	<div class="card-title">Welcome back, {$user.displayName}</div>
	<p class="text-center text-success">You are logged in</p>
{:else}
	<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}

{#if errorMessage.length > 0}
	<p class="alert alert-error text-center">{errorMessage}</p>
{/if}
