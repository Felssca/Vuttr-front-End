import { Observable } from "rxjs";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { VuttrModel } from '../vuttr.model/vuttr.model';
import { Params } from '@angular/router';


@Injectable({

  providedIn: "root"

})


export class VuttrService {

  private localhost: string = "http://localhost:3000";

  /**POST */
  public httpVuttr_POST: string = "/api/tools";

  /**GET */
  public httpVuttr_GET: string = "/api/tools";

  /**delete */
  public httpVuttr_DELETE: string = "/api/tools/";

  /**GET Param */
  public httpVuttr_GET_PARAM: string = "/api/tools/title?";

  public vuttrModel: VuttrModel[];

  public params:Params;


  constructor(private http: HttpClient) {


  }

  get headers(): HttpHeaders {

    return new HttpHeaders().set('content-type', 'application/json');
  }

  /**serviço  GET */
  public listVuttrMainService(): Observable<VuttrModel[]> {
    return this.http.get<VuttrModel[]>(this.localhost + this.httpVuttr_GET);
  }

  /**serviço POST */
  public insertNewVuttrService(vuttrModel: VuttrModel): Observable<VuttrModel> {
    return this.http.post<VuttrModel>(this.localhost + this.httpVuttr_POST, JSON.stringify(vuttrModel), { headers: this.headers });
  }
  /**servico DELETE */
  public deleteVuttrService(id: number): Observable<void> {
    return this.http.delete<void>(this.localhost + this.httpVuttr_DELETE + id, { headers: this.headers });
  }
  /**Servico Get palavras */
  public findVuttrKeyWordService(word: string): Observable<VuttrModel[]> {
    let params = new HttpParams();
    params = params.append('name', word);
    return this.http.get<VuttrModel[]>(this.localhost + this.httpVuttr_GET_PARAM,{params:params});

  }



}