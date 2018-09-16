import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Board} from '../model/board';
import {SubTask} from '../model/subtask';
import {Task} from '../model/task';
import {TrelloService} from '../service/trello.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  boards: Board[]= new Array();
  errorMessage: string;

  constructor(private _trelloService:TrelloService,private _router: Router) { }

  ngOnInit() {
    this.boards.push (this._trelloService.seedData());
  }
  public addBoard(){
    console.log('Adding new board');
    let newBoard:Board= new Board();
    newBoard.id = this.boards.length + 1;
    newBoard.task = new Array();
    newBoard.title = "New Board";
    this.boards.push(newBoard);
    console.log('new board added');
  }
}
