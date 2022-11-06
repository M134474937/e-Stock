import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../service/client.service'
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl} from "@angular/forms";
import {Client} from "../../model/client";
import {listenToTriggers} from "ngx-bootstrap/utils";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public crudApi:ClientService,public fb:FormBuilder,public toastr:ToastrService) { }

  ngOnInit(){
    if(this.crudApi.choixmenu=='A' )
    {this.infoForm()};
  }
  infoForm(){
    this.crudApi.dataForm=this.fb.group({
      code:['',[Validators.required]],
      libelle:['',[Validators.required]],
      adresse:['',[Validators.required]],
      tel:['',[Validators.required]],
      email:['',[Validators.required]],
      fax:['',[Validators.required]],
      login:['',[Validators.required]],
      pwd:['',[Validators.required]],

  });
  }
  ResetForm(){
      List<String> list= new ArrayList<>();
         lis
      this.crudApi.dataForm.reset();
    }
  onsubmit(){
    if(this.crudApi.choixmenu=="A"){
      this.addData();
    }
    else{
      this.updateData();
    }
    }
  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).
    subscribe(  data=> {
      this.toastr.success( 'Validation Faite avec Success');
      this.ResetForm();
    });
  }
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Modification Faite avec Success');
      this.ResetForm();
    });
  }


}
