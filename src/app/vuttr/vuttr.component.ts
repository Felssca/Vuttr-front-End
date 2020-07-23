import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { VuttrModel } from '../vuttr.model/vuttr.model';
import { VuttrTagsModel } from '../vuttr.model/vuttr.tags.model';
import { VuttrService } from '../vuttr.services/vuttr.service';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-vuttr',
  templateUrl: './vuttr.component.html',
  styleUrls: ['./vuttr.component.css']
})
export class VuttrComponent implements OnInit {

  public vuttrModelList: VuttrModel[];
  public vuttrTagsModel: VuttrTagsModel[];
  public vuttrModel: VuttrModel;

  constructor(private vuttrService: VuttrService) { 


  }


  public vuttrFormSearch:FormGroup  = new FormGroup({

    'searchKey': new FormControl(null),
    'searchKeyTag': new FormControl(null)

  })

  ngOnInit(): void {

    this.listAllVuttr();

  }





  /**Lista todos os Vuttr e exibe na tela em cards */
  public listAllVuttr() {
    this.vuttrService.listVuttrMainService().subscribe(
      Jsonlist => { this.vuttrModelList = Jsonlist },
      e => {
        console.log(e.error);
      }

    )


  }
  /**Busca titulos ou tags por palavras chave */
  public searchVuttrKeyWord(){

    let flagTag = this.vuttrFormSearch.value.searchKeyTag;
    let searchKeyWord = this.vuttrFormSearch.value.searchKey;
      alert(searchKeyWord+flagTag)
    this.vuttrService.findVuttrKeyWordService(searchKeyWord).subscribe(
      JsonlistSearch => { this.vuttrModelList = JsonlistSearch },
      e => {
        console.log(e.error);
      })
      //this.refreshPage();
     
  }


  /**Deleta o cards Vuttr */
  public deleteVuttr(vuttrModel: VuttrModel) {
    this.vuttrService.deleteVuttrService(vuttrModel.id).subscribe();
    alert("Vuttr Tool Deleted!")
    this.refreshPage();

  }
 /** Atualiza a página */
  refreshPage() {
    window.location.reload();
  }

  

}
