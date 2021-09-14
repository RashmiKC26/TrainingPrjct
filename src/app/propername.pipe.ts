import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propername'
})
export class PropernamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let [firstName,lastName] =value.split(' ');
    firstName =firstName.charAt(0).toLocaleLowerCase() + firstName.substr(1,firstName.length -1).trim();
    lastName =lastName.charAt(0).toLocaleLowerCase() + lastName.substr(1,lastName.length -1).trim();
    return `${firstName} ${lastName}`;
  }

}
