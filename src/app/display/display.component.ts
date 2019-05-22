import { Component, OnInit } from '@angular/core';
import {StorageService} from 'app/storage-service.service';

@Component({
  selector: 'af-display',
  templateUrl: './display.component.html',
  styles: []
})
export class DisplayComponent implements OnInit {

  data:any = {};
  objectKeys = Object.keys;
  
  constructor(private storageService : StorageService) { 
    
  }

  ngOnInit() {
   this.data = this.storageService.load;
  }

}
