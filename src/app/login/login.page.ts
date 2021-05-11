import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router:Router,
    public alertController: AlertController) { }

 
  
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
  });
  await alert.present();
  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
  goHome(){
    var ad = (<HTMLInputElement>document.getElementById("isim")).value; 
    var password= (<HTMLInputElement>document.getElementById("password")).value; 
    var uyari=(<HTMLInputElement>document.getElementById("uyari")); 
    if(ad=="Önder" && password=="1234"){
      this.router.navigateByUrl('home');
     window.confirm("Hoşgeldiniz hocam.");
      
    }
    else{
      uyari.style.display="block";
    }
   
  }
}
