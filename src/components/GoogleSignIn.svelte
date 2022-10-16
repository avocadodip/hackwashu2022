<script>
  import { auth, googleProvider } from "../lib/firebase";
  import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
  import { db } from '../lib/firebase';
  import {
    collection, setDoc, doc,
  } from 'firebase/firestore'


  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then(async (result) => {
      const { isNewUser } = getAdditionalUserInfo(result);
      if (isNewUser) {
        // Adds new user to database
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
        });

        await setDoc(doc(db, 'users', auth.currentUser.uid, 'data', 'dataDoc'), {
          rating: 4.00,
          postCount: 10
        });
        
      };
    });
  };

</script>

<button
	class="bg-[#FFF8FC] hover:bg-[#e7e0e4] text-[black] font-bold rounded-3xl px-5 py-3 w-64"
	on:click={googleSignIn}
>
	<div class="flex items-center gap-3">
		<img src="google.png" alt="google" class="w-6" />
		<p>Continue with Google</p>
	</div>
</button>
