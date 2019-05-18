import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class TranslationService {
   langs:string[] =["ar","en"];
   checkLang(){
     if (localStorage.getItem("lang") != undefined && localStorage.getItem("lang") != null &&
       localStorage.getItem("langs") != undefined && localStorage.getItem("langs") != null) {
       let tempLang = localStorage.getItem("lang");
       let langs: any[] = localStorage.getItem("langs").split(',');
       this.translate.addLangs(langs);
       this.translate.setDefaultLang(tempLang);
       this.translate.use(tempLang);
     } else {
       this.translate.addLangs(this.langs);
       localStorage.setItem("lang", 'ar');
       localStorage.setItem("langs", this.translate.getLangs().toString());       
     }
   }
  constructor(private translate:TranslateService) {

  }
  toggleLang(){
     localStorage.getItem("lang")=="ar"?localStorage.setItem("lang","en"):localStorage.setItem("lang","ar");
     this.translate.use(localStorage.getItem("lang"));
  }
 translateWord(word :string){
    let temp;
     this.translate.stream(word).subscribe( (str)=>{
      temp= str;
    });
     return temp;
}

}
