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


  constructor(private service: ServerlessService){}

  ngOnInit() {

  }

  handleFormSubmit = (event: any) => {
    // event.preventDefault();
    console.log("form submitted", this.formData);

    this.service.saveuser(this.formData).subscribe(data=>console.log(data)
    )

  }



}
