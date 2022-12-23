import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

import * as $ from 'jquery';
@Component({
  selector: 'app-ourclients',
  templateUrl: './ourclients.component.html',
  styleUrls: [
    './ourclients.component.css',
    '../assets/css/my-task.style.min.css',
  ],
})
export class OurclientsComponent implements OnInit {
  constructor(private service: ApiserviceService) {}
  clients: any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      this.clients = res;
    });
  }

  deleteClient(id: any) {
    this.service.deleteClient(id).subscribe((res) => {});
  }
}
