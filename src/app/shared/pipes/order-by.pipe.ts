import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, propName?: string): Array<any> {
    return array.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      }
      if (a[propName] < b[propName]) {
        return -1;
      }
      return 0;
    });
  }
}
