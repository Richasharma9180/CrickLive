import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-comentary',
  templateUrl: './comentary.component.html',
  styleUrls: ['./comentary.component.css']
})
export class ComentaryComponent implements OnInit {

  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }

}
