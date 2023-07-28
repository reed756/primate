import { Injectable } from '@angular/core';
import { Auth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private fireStore: Firestore) { }

  async register({ email, password }: { email: string, password: string }) {
    try {
      const credentials = await createUserWithEmailAndPassword(this.auth, email, password);
      const ref = doc(this.fireStore, `users/${credentials.user.uid}`)
      setDoc(ref, { email });
      return credentials;
    } catch (e) {
      return null;
    }
  }
  async login({ email, password }: { email: string, password: string }) {
    try {
      const credentials = await signInWithEmailAndPassword(this.auth, email, password);
      const ref = doc(this.fireStore, `users/${credentials.user.uid}`)
      setDoc(ref, { email });
      return credentials;
    } catch (e) {
      return null;
    }
  }

  resetPw(email: string) {
    return sendPasswordResetEmail(this.auth, email)
  }

  logout() {
    return signOut(this.auth);
  }
}
