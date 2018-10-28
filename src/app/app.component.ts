import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	inputText;

	hexString;

	ZPLHexString;




	genHexStr(){
		console.log('genHexStr');
		this.hexString = _.toUpper(this.toHex(this.inputText));
		this.ZPLHexString = this.toZPLHex(this.hexString)
	}



	//to hex String
	// ref: https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex
	toHex(str){
		try{
			var hex = unescape(encodeURIComponent(str))
			.split('').map(function(v){
			return v.charCodeAt(0).toString(16)
			}).join('')
		}
		catch(e){
			hex = str
			console.log('invalid text input: ' + str)
		}
		return hex
	}



	toZPLHex(_hex){
		let zplHex = ''; 
		for(let i=0;i<_hex.length;i+=2){  
		  zplHex += ('_'+ _hex.substring(i,i+2));
		}
 		
 		return zplHex;
	}
}
