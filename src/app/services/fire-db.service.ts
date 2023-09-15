import { Injectable } from '@angular/core';
import { Database, ref, get, set, push, onValue, update, remove, query, orderByChild, orderByKey, limitToLast } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {
  subscribersRef = ref(this.db, 'subscribers');

  constructor(private db: Database) { }

  /* Subscriber Methods --------------------------------------------- */

  async addSubscriber(email: string): Promise<void> {
    // const subscriberCount: number = await this.getSubscriberCount();
    // const inputEmail = email.trim();
    // let emailRef = ref(this.db, 'subscribers/' + (subscriberCount + 1).toString());
    // set(emailRef, {email: inputEmail});
    const newSubscriberRef = push(this.subscribersRef);
    await set(newSubscriberRef, { email: email });
  }


  // async getSubscriberCount(): Promise<number> {
  //   const subscribersCountRef = query(this.subscribersRef, orderByKey(), limitToLast(1));
  //   const snapshot = await get(subscribersCountRef);
  //   const lastChild = snapshot.val();
  //   if (lastChild) {
  //     const lastChildKey = Object.keys(lastChild)[0];
  //     return parseInt(lastChildKey);
  //   } else {
  //     return 0;
  //   }
  // }


  // async getSubscriberList(): Promise<string[]> {
  //   const arr: string[] = [];
  //   const snapshot = await get(this.subscribersRef);
  //   snapshot.forEach((childSnapshot) => {
  //     const emailObj = childSnapshot.val();
  //     const email = emailObj.email;
  //     if (email) { arr.push(email); }
  //   });
  //   return arr;
  // }
}
