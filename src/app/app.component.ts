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
  desgination: any
  company: any
  sampleImg='data:image/png;base64,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'
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


    var can: any = document.getElementById("image-canvas");
    var c = can.getContext("2d");
    c.fillStyle = "#000";
    c.fillRect(0, 0, can.width, can.height);
    var img: any = new Image();
    img.src = this.sampleImg
    setTimeout(()=>{
      c.drawImage(img, can.width / 2 - 50,
        can.height / 2 - 30 ,130,35
      );
    })
   
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
    this.image = canvas.toDataURL();
  }

  onImageUpload(e: any) {
    var canvas: any = document.getElementById("image-canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var reader = new FileReader();
    reader.onload = function (event: any) {
      var img: any = new Image();
      img.onload = function () {
        ctx.drawImage(img, canvas.width / 2 - 30,
          canvas.height / 2 - 30 ,130,35
        );
      }
      console.log(img)
      img.height = '35px'
      img.width = '35px'
      img.src = event.target.result;

    }
    reader.readAsDataURL(e.target.files[0]);
  }
}
