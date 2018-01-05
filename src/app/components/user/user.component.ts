import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ;
  age:number;
  email:string;
  address:Address;
  hobbies:String[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    
  }
    
  ngOnInit() {
    this.name='Teddy Afro';
    this.age=40;
    this.email='teddy@example.com';
    this.address ={
      street:'Menelik II street',
      city: 'Addis Ababa',
      state: 'Ethiopia',
    }
    this.hobbies=['Write songs', 'Listen to music', 'Watch movies'];
    
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts=posts;
    });
  }

  onClick(){
    this.name='Seyoum Tefera';
    this.hobbies.push('walking');
  }
  addHobby(hobby){    
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length; i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }      
    }    
  }
  toggleEdit(){
    this.isEdit= !this.isEdit;
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}