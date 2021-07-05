import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allPosts:any = [];
  search: any;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getData().subscribe(data=>{
      this.allPosts = data;
    })
  }

  displayedColumns: any[] = ['id','userId','title'];
}
