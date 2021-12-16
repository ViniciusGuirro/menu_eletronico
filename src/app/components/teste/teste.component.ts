import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {

  @Input("titulo")
  titulo: string ='';

  constructor() { }

  ngOnInit() {}

}
