import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../state/app.state';
import { addPostAction } from '../posts-list/state/posts.action';
import { Post } from '../posts-list/state/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  postForm: FormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    description: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {

  }

  showDescriptionErrors() {

  }

  onAddPost() {
    console.log(this.postForm)
    let post: Post = {
      title: this.postForm.controls['title'].value,
     description: this.postForm.controls['description'].value,


    }

    this.store.dispatch(addPostAction({eachPost:post}))

  }

}
