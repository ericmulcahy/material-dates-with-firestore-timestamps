import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export interface ItemWithTimestamp {
  someTextField: string;
  theTimestamp: Timestamp;
}
