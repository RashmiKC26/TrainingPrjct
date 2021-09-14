import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LinkedInService } from './linked-in.service';
import { LinkedInList } from './models/linkedin';

@Injectable({
  providedIn: 'root'
})
export class LinkedInProjectResolverGuard implements Resolve<Array<LinkedInList>> {

 constructor(public linkedinService : LinkedInService)
 {

 }

 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LinkedInList[] | Observable<LinkedInList[]> | Promise<LinkedInList[]> {
  return this.linkedinService.getAllList();
}
  
}
