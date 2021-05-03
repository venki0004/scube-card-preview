import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwing-angular';
  name: any
  image: any
  desgination:any
  company:any
  ngOnInit(): void {
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const text = 'Your Name!'

    ctx.font = "40px Georgia";
    ctx.textAlign = 'center'
    ctx.fillStyle = '#cd944f'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    ctx.fillStyle = '#c5b76d'
    ctx.font = '20px Georgia'
    ctx.fillText('Designation', canvas.width / 2, (canvas.height / 2) + 30)
   
    
    ctx.fillStyle = '#c5b76d'
    ctx.font = '20px Georgia'
    ctx.fillText('Company Name', canvas.width / 2, (canvas.height / 2) + 60)

  }

  valueChange(name: any) {
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const text = this.name || 'Your Name!'

    ctx.font = "40px  Georgia";
    ctx.textAlign = 'center'
    ctx.fillStyle = '#cd944f'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)


    ctx.fillStyle = '#c5b76d'
    ctx.font = '20px Georgia'
    ctx.fillText(this.desgination || 'Designation', canvas.width / 2, (canvas.height / 2) + 30)
   
    
    ctx.fillStyle = '#c5b76d'
    ctx.font = '20px Georgia'
    ctx.fillText(this.company || 'Company Name', canvas.width / 2, (canvas.height / 2) + 60)

  }
}
