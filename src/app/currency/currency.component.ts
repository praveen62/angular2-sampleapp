import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {

  id_currency = '';
  myresult: any;
  constructor(private shareService: SharedService) { }

  ngOnInit() {
  }
  callCurrencyService() {
    this.shareService.getCurrencyExchRate(this.id_currency).subscribe(
      result => {
        this.myresult = JSON.stringify(result);
      },
      error => {
        console.log('Error. The callCurrencyService result JSON value is as follows:');
        console.log(error);
      }
    );
  }

}
