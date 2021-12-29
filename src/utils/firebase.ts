import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA9xP1n0XbdFdevE7jfvvWFGQLfp9GbUKc",
  authDomain: "history-book-739c7.firebaseapp.com",
  projectId: "history-book-739c7",
  storageBucket: "history-book-739c7.appspot.com",
  messagingSenderId: "200198705230",
  appId: "1:200198705230:web:e84de2042ce5d7b3eb331f",
  measurementId: "G-QQNEYMEBZG"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export interface IAudioInfo {
  audioId: number;
  image: string;
  title: string;
}

export interface IAudio {
  title: string;
  description: string;
  artwork: string;
  url: string;
  id: number;
  duration: number;
}

export interface IAudioBook {
  audioId: number;
  audio: string;
}
