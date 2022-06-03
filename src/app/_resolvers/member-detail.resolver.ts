import { Member } from "../_models/member";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { MembersService } from "../_services/members.service";

@Injectable({
    providedIn: 'root'
})

export class MemberDetailResolver implements Resolve<Member>{

    constructor(private memberService: MembersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Member>{
        return this.memberService.getMember(route.paramMap.get("username"));
    }
}