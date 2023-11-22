import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Appstate } from '../../state/app.state';
import { Observable } from 'rxjs';
import { Post, PostsState } from './state/posts.state';
import { getPostsSelector } from './state/posts.selector';
import { addPostAction, deletePostAction } from './state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
// implements OnInit
export class PostsListComponent implements OnInit {
  postsList$: Observable<Post[]> = new Observable<Post[]>();
  posts: Post[] = [];
  constructor(private store: Store<Appstate>) { }



  ngOnInit(): void {

    this.store.select(getPostsSelector).subscribe(data => {
      this.posts = data;
    })

    this.postsList$ = this.store.select(getPostsSelector);

  }

  update() {
    // let postObj:Post = {id:'3',title:'Sample Title3', description:'Sample description'};
    // this.store.dispatch(addPostAction({eachPost: postObj}))

  }

  delete(id?: string) {
    if (id) {
      if (confirm('Are you sure you want to delete')) {

        this.store.dispatch(deletePostAction({ idToDelete: id }))
      }
    }
    return false
  }


}


