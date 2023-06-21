import { Pipe, PipeTransform } from '@angular/core';
import { timesAgoFormat } from '@hotel/common/util';
import { DateTime } from 'luxon';
@Pipe({
  name: 'timesago',
  standalone: true,
})
export class TimesagoPipe implements PipeTransform {
  transform(time: any, ...args: unknown[]): string {
    console.log('time', time);
    return timesAgoFormat(time) as unknown as string;
  }
}
