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
		title: "Mail de prueba 1",
		body: "Hola Angular desde Mail",
		sender: "javierski@gmail.com",
		receiver: "example@gmail.com",
		state: true
	};

	const mail2 = {
		title: "Mail de prueba 2",
		body: "Hola Angular desde Mail",
		sender: "javierski@gmail.com",
		receiver: "example@gmail.com",
		state: false
	};

	this.mails = [];
	this.mails.push(mail1);
	this.mails.push(mail2);
  }

  ngOnInit(): void {
  }

}
