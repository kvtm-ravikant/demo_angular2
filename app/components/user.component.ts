/**
 * Created by ravikant on 12/2/17.
 */
import { Component } from '@angular/core';
import {PostService} from '../services/posts.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostService]
})
export class UserComponent  {
  name: String;
  email: String;
  address: address ;
  hobbies: String[];
  showHobbies:boolean;
  posts:Post[];

  constructor(private postService: PostService) {
    this.name = "Rakesh";
    this.email= "rakesh@gmail.com";
    this.address= {
      street:" abc",
      city:" Los Angles",
      state:" California",
      country:" USA"
    }
    this.hobbies=["Music", "Movies","Sketing"];
    this.showHobbies=false;
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index) {
    this.hobbies.splice(index,1);
  }
}

interface  address {
  street: String;
  city: String;
  state: String;
  country: String;
}

interface Post{
  id:number;
  title:String;
  body: String;
}

