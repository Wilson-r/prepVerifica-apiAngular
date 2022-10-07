import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  searchProduct(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=9&json=true`;
    let obsBello = this.http.get(url);
    return obsBello;
  }

  searchId(query: any) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${query}`;
    let obsBello1 = this.http.get(url);
    return obsBello1;
  }
}

