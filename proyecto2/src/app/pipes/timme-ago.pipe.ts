import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

@Pipe({
  name: 'timmeAgo'
})
export class TimmeAgoPipe implements PipeTransform {

  transform(value: Timestamp): string {
    const newvalue = new Date(value.toDate())
    return formatDistance(new Date(), newvalue);
  }

}
