import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadServiceService {
  changed = false;

  constructor() { }

}
