import { Country } from './Country';
import { Component, OnInit } from '@angular/core';
import { State } from './state';
import { CountryService } from './country.service';

@Component({
  selector: 'app-equity-analysis',
  templateUrl: './equity-analysis.component.html',
  styleUrls: ['./equity-analysis.component.css'],
  providers: [CountryService]
})
export class EquityAnalysisComponent implements OnInit {

data = {
  CCLoanNumber: '',
  ModelRun: ''
}

  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];

  // retriveTrue:boolean = false;
  // submitTrue:boolean = false;

  constructor(private _countryservice: CountryService) {
    this.countries = this._countryservice.getCountries();
   }

   onSelect(countryid) {
    this.states = this._countryservice.getStates()
                 .filter((item)=> item.countryid == countryid);
  }

  ngOnInit() {
  }

  onRetrive(value: any){
    this.data.ModelRun = value.ModelRun;
    this.data.CCLoanNumber = value.CCLoanNumber;


    // console.log("Data" + this.data);
    } 
    onSubmit(){
    
    }
    onReset(){
   
    }
    onSignOut(){
   
    }


}
