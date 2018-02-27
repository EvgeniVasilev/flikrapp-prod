import { Pipe, PipeTransform } from '@angular/core';
import { Pictures } from '../Pictures';

@Pipe({
    name: 'filtertitle',
    pure: false
})

export class FilterTitle implements PipeTransform {
    transform(items: any[], filter: Pictures): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1);
    }
}
