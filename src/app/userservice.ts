import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  getUser(){
return { name: 'Susan', role: 'Admin' };
  } 
}
