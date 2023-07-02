import { auth } from "$lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { writable } from "svelte/store";


const currentUser = writable<User | null>(null);

onAuthStateChanged(auth, (user) => {
	currentUser.set(user);
});

export const user = currentUser;