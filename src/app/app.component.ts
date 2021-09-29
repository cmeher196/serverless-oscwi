import { Component, OnInit } from '@angular/core';
import { ServerlessService } from './serverless.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'serverless-oscwi';

  public formData = {
    name: '',
    id: '',
    email: '',
    number: ''
  }
  public status: boolean = false;
  public userData: any = [];

  constructor(private service: ServerlessService){}

  ngOnInit() {
    this.getUser()
  }

  handleFormSubmit = (event: any) => {
    // event.preventDefault();
    this.status = true;
    console.log("form submitted", this.formData);

    this.service.saveuser(this.formData)
    .subscribe(data=>
      {
        console.log(data);
        this.status = false;
        this.getUser();
        
      }
    );

  }


  getUser=()=>{
    this.service.getUser().subscribe(data=>{
      this.userData = data.entries;
      console.log("data is here",this.userData)
    });
  }


}
