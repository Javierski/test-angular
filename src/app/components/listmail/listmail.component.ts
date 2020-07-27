import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmail',
  templateUrl: './listmail.component.html',
  styleUrls: ['./listmail.component.css']
})
export class ListmailComponent implements OnInit {

  mails: any[];
  constructor() {
  	const mail1 = {
		titulo: "Mail de prueba 1",
		cuerpo: "Hola Angular desde Mail",
		emisor: "javierski@gmail.com",
		destinatario: "example@gmail.com"
	};

	const mail2 = {
		titulo: "Mail de prueba 2",
		cuerpo: "Hola Angular desde Mail",
		emisor: "javierski@gmail.com",
		destinatario: "example@gmail.com"
	};

	this.mails = [];
	this.mails.push(mail1);
	this.mails.push(mail2);
  }

  ngOnInit(): void {
  }

}
