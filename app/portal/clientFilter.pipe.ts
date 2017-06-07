import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'gp_client_filter',
  pure: false
})

export class ClientFilterPipe{
    transform(items: any[], filter: Object): any {
      if (!items || !filter) {
          return items;
      }
      console.log(items);
      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter(item => item.pyLabel.indexOf(filter) !== -1);
  }
}
