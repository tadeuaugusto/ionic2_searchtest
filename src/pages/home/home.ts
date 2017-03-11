import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';

import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    searchTerm: string = '';
    items: any;
    searchControl: FormControl;
    searching: any = false;
    
  constructor(public navCtrl: NavController, public dataService: Data) {
    this.searchControl = new FormControl();
  }
  
  ionViewDidLoad() {
    this.setFilteredItems();
    
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
    });
  }
  
  setFilteredItems() {
  
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  
  onSearchInput(){
        this.searching = true;
    }

}
