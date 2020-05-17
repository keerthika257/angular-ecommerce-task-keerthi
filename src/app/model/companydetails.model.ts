import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel{
  
  public companyInfo : any = 
    {
      name : 'Online Shopping',
      address : '6,Dehiwala Road',
      city: 'Colombo',
      pincode: '18050',
      email: 'customer.care@onlineshoppee.com',
      phone : '079876564'
    }
    
  
} 