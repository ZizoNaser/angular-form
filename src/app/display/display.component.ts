import { Component, OnInit } from '@angular/core';
import {StorageService} from 'app/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'af-display',
  templateUrl: './display.component.html',
  styles: []
})
export class DisplayComponent implements OnInit {

  data:any = {};
  objectKeys = Object.keys;
  
  constructor(private storageService : StorageService, private router:Router) { 
    
  }

  ngOnInit() {
   this.data = this.storageService.load;
   if (! this.data['firstName']) 
      this.router.navigate(['/']);
  }

}
