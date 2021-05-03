import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwing-angular';
  name:any

  ngOnInit(): void {
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const text = 'Your Name!'

    ctx.font = "40px Georgia";
    ctx.textAlign = 'center'
    ctx.fillStyle = '#cd944f'
    ctx.fillText(text, canvas.width/2, canvas.height/2)


  }

  valueChange(name:any) {
console.log(name)
var canvas: any = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
const text = name

ctx.font = "40px Georgia";
ctx.textAlign = 'center'
ctx.fillStyle = '#cd944f'
ctx.fillText(text, canvas.width/2, canvas.height/2)

  }
}
