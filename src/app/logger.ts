import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  log(message:string)
  {
    let timestamp  =new Date().toLocaleTimeString()
    let mt = timestamp+" : "+message
    return  mt
  }
}
