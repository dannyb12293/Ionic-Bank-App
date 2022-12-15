import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  features: any[] = [
    {id: 1, name: 'Deposit', src:'assets/icon/deposit.png', page:''},
    {id: 2, name: 'Send', src:'assets/icon/piggy-bank.png', page:''},
    {id: 3, name: 'Pay', src:'assets/icon/cashless-payment.png', page:''},
    {id: 4, name: 'Explore', src:'assets/icon/compass.png', page:''}
  ];
  transactions: any[] = [
    {id: 1, vendor: "Cash App", date:'4/9/2022', image:'', amount: +1020.00 },
    {id: 2, vendor: "Papa Johns", date:'4/9/2022', image:'', amount: -20.68 },
    {id: 3, vendor: "Wawas", date:'4/8/2022', image:'', amount: -72.68 },
    {id: 4, vendor: "Walmart",date:'4/8/2022', image:'', amount: -128.98 },
  ];

  constructor() {}

}
