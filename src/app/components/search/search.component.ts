import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  albums: any[] = [];
  loading: boolean;
  error = false;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }
  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });

  }

}
