window.onload = function () {
    
	var ilkSayi = document.getElementById('ilk-sayi');
	var ikinciSayi = document.getElementById('ikinci-sayi');	
	var islem = document.getElementById('islem');
	var sonuc = document.getElementById('sonuc');
	ilkSayi.focus();
	var buttons = document.querySelectorAll("button");
	console.log(buttons);
	buttons.forEach(function(el){
		
		el.addEventListener("click", function(){
			
			console.log(this.value);
			var btnValue = this.value;
			
			if(btnValue >= 0 || btnValue <= 9) {
				updateScreen(btnValue);
			} else if(btnValue == '+' || btnValue == '-' || btnValue == '*' || btnValue == '/' ){
				updateScreenProcess(btnValue);
			} else {
				switch(btnValue) {
				case 'reset':
					resetScreen();
					break;
				case 'delete':
					deleteLastDigit();
					break;
				case 'close':
					closeScreen();
				break;
				case '=':
					calculateResult();
					break;
				default:
					break
			}			
		}
	});
	
	
	function updateScreen(sayi) {
		
		if(islem.value == '' || islem.value == null) {
			
			ilkSayi.value += sayi;
			
		} else {
			ikinciSayi.value += sayi;
			
		}
	}
	
	function updateScreenProcess(val) {
		islem.value = val;
		ilkSayi.classList.add('passive');
	}
	
	function resetScreen() {
		ilkSayi.value=" ";
		ikinciSayi.value=" ";
		islem.value='';
	    sonuc.innerHTML=" ";
		ilkSayi.classList.add('ress');
		ikinciSayi.classList.add('ress');
		ilkSayi.focus();
	}  
	
	function deleteLastDigit() {
		ikinciSayi.value=" ";
	}
	
	function calculateResult() {
     var sayi1=parseInt(ilkSayi.value);
	 var sayi2=parseInt(ikinciSayi.value); 	
	 var islem1=islem.value;
	 switch (islem1)
	 {
	 case "+":
	 console.log(sayi1+sayi2,islem1)
	 sonuc.innerHTML=sayi1+sayi2;
	 break;
	 	 case "-":
	 sonuc.innerHTML=sayi1-sayi2;
	 break;
	 	 case "*":
	 sonuc.innerHTML=sayi1*sayi2;
	 break;
	 	 case "/":
	 sonuc.innerHTML=sayi1/sayi2;
	 break;
	 }
	 ikinciSayi.classList.add('passive');
	}
	function closeScreen() {
		window.close();
	}
})
}