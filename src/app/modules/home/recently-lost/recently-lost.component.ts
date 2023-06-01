import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-recently-lost',
  templateUrl: './recently-lost.component.html',
  styleUrls: ['./recently-lost.component.scss']
})
export class RecentlyLostComponent implements OnInit {
  isLoading: boolean = false;
  imagesPet: any;
  estado: string = "Encontrado"

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.searchPetlost()
  }

  searchPetlost() {
    this.isLoading = true;
    this.petService.recentlyReported().subscribe((res) => {
      this.imagesPet = res;
    }, (error) => {
      this.imagesPet = [];
    });
  }

}
