import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostsComponent } from "./edit-posts/edit-posts.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./posts-list/state/posts.reducer";


const routes: Routes = [
    {
        path: '', component: PostsListComponent,
        children: [
            { path: 'add', component: AddPostComponent },
            { path: 'edit/:id', component: EditPostsComponent }
        ]
    }
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, FormsModule, StoreModule.forFeature('postsReducer', postsReducer)],
    declarations: [PostsListComponent, AddPostComponent, EditPostsComponent]
})
export class PostModule {

}