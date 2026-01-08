import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {

  transform(fullname:string): string {
    let splitAry = fullname.split(' ')
    let ini = splitAry.map((w)=>w[0].toUpperCase()).join('')
    return ini;
  }

}
