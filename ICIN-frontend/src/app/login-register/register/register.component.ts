import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/home/user.model';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User[] = [];
  regisrationForm!: FormGroup; // Use definite assignment assertion

  constructor(private service: UserserviceService) { }
 
  ngOnInit(): void {
    this.regisrationForm = new FormGroup({
      firstName: new FormControl('hahah'),
      lastName: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
      password: new FormControl(''),
      age: new FormControl('')
    });
  }

  formSubmit(data: User) {
    // Save data to the database
    this.service.RegisterUserData(data).subscribe(
      (response) => {
        alert('Form Submitted');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
