import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
	mail: any;
	constructor() {
		this.mail = {
			titulo: "Mail de prueba",
			cuerpo: "Hola Angular desde Mail",
			emisor: "javierski@gmail.com",
			destinatario: "example@gmail.com"
		}
	}

  ngOnInit(): void {
  }

}
