import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Promo } from "../model/promo";
import { Injectable } from "@angular/core";
import { APICONFIG } from "../config/api.config";
@Injectable()
export class PromoService {
    constructor(private http: HttpClient) { }
    getPromos(): Observable<Promo[]> {
        return this.http.get<Promo[]>(`${APICONFIG.url}/promo`);
    }
    getPromo(id: string): Observable<Promo> {
        return this.http.get<Promo>(`${APICONFIG.url}/promo/${id}`);
    }
}