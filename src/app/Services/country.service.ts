import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class CountryService extends DataService {

  constructor(http: Http) {
    super('http://mercksymposiumeshre2018.com/services/Service.aspx', http);
  }

}
