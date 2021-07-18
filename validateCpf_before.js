function validate(str) {
	if (str !== null && str !== undefined) {
		if (str.length >= 11 || str.length <= 14){  
			str=str.replace('.','');  
			str=str.replace('.','');  
			str=str.replace('-','');  
			str=str.replace(" ","");  
			if (!str.split("").every(c => c === str[0])) {
				try{  
					let     d1, d2;  
					let     digito1, digito2, resto;  
					let     digito;  
						let     nDigResult;  
					d1 = d2 = 0;  
					digito1 = digito2 = resto = 0;  
						
					for (let nCount = 1; nCount < str.length -1; nCount++) {  
						
						if (isNaN(parseInt(str.substring(nCount -1, nCount)))) {
							return false;

						} else {

							digito = parseInt(str.substring(nCount -1, nCount));  
							
							d1 = d1 + ( 11 - nCount ) * digito;  
							
							d2 = d2 + ( 12 - nCount ) * digito;  
						}
					};  
						
					resto = (d1 % 11);  
		
					digito1 = (resto < 2) ? digito1 = 0 : 11 - resto;  
						
					d2 += 2 * digito1;  
		
					resto = (d2 % 11);  
		
					if (resto < 2)  
						digito2 = 0;  
					else  
						digito2 = 11 - resto;  
						
					let nDigVerific = str.substring(str.length-2, str.length);  
					nDigResult = "" + digito1 + "" + digito2;  
					return nDigVerific == nDigResult;
				}catch (e){  
					console.error("Erro !"+e);  
					return false;  
				}  
			} else return false
		}else return false;
	} else return false;
}

console.log(validate("00000000000"));
console.log(validate("86446422784"));
console.log(validate("864.464.227-84"));
console.log(validate("91720489726"));
console.log(validate("a1720489726"));
