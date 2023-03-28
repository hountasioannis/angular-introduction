import { Component } from '@angular/core';

@Component({
  selector: 'app-my-hello-component',
  templateUrl: './my-hello-component.component.html',
  styleUrls: ['./my-hello-component.component.css']
})
export class MyHelloComponentComponent {
    imageURL= "https://picsum.photos/200";
    imageALT= "an image from picsum photos"
    imageTooltip = this.imageALT

    buttonDisabled = false;
    buttonPrompt = "Click me"

    times = 0;
    userInput = '';

    onButtonClick() {
      this.times += 1
      console.log(this.times)
    }

    resetCounter(){
      this.times = 0
    }

    onUserInput(event:Event) {
      const target = event.target as HTMLInputElement;
      this.userInput = target.value;
    }
     
    
}
