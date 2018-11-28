import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;
import {ItemWithTimestamp} from '../models/item-with-timestamp';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fromServer: Timestamp;
  timestampToSave: Timestamp;

  constructor(private db: AngularFirestore) {

  }

  save() {
    const myItem: ItemWithTimestamp = {
      someTextField: 'some string',
      theTimestamp: this.timestampToSave
    };
    this.db.collection('sampleData').doc('1').set(myItem);
  }

  load() {
    this.db.collection('sampleData').doc('1').ref.get().then(result => {
      console.log('result data is ', result.data());
      this.fromServer = result.data().theTimestamp;
    })
  }

  log() {
    console.log(this.timestampToSave);
  }
}
