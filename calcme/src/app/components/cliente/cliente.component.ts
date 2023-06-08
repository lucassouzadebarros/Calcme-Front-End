import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {ClienteService} from "./cliente.service";



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{

  form!: FormGroup;
  constructor(private clienteServie: ClienteService) {

  }

  // @ts-ignore
  ngOnInit(): void {

    this.form = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl('')
    });

  }

  submit(){
    this.clienteServie.post(this.form.value).subscribe();
    this.form.reset();

  }


}
