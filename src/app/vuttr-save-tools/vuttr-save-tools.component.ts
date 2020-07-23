import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VuttrService } from '../vuttr.services/vuttr.service';
import { VuttrModel } from '../vuttr.model/vuttr.model';


@Component({
  selector: 'app-vuttr-save-tools',
  templateUrl: './vuttr-save-tools.component.html',
  styleUrls: ['./vuttr-save-tools.component.css']
})
export class VuttrSaveToolsComponent implements OnInit {

  public vuttrModel: VuttrModel;

  public formVuttr: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'linkDesc': new FormControl(null),
    'description': new FormControl(null),
    'toolsTags': new FormControl(null)
  })

  constructor(private vuttrService: VuttrService) {

  }
  ngOnInit(): void {
  }


  public insertNewVuttr(): void {

    this.vuttrModel = new VuttrModel();

    this.vuttrModel.title = this.formVuttr.value.title;
    this.vuttrModel.linkDesc = this.formVuttr.value.linkDesc;
    this.vuttrModel.description = this.formVuttr.value.description;
    this.vuttrModel.vuttrTagsModel.tags = this.formVuttr.value.toolsTags;

    console.log(this.vuttrModel);
    this.vuttrService.insertNewVuttrService(this.vuttrModel);




  }

  
}
