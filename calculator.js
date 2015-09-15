/**
 * Created by kotu on 9/13/15.
 */



var num1='';
var num2='';
var result;
$(document).ready(function() {
		$('#divide, #plus, #minus, #mul').click(function(e){
			//debugger;
			//alert(e.target.value);
			if(num1 == ''){
				alert('please enter first input value');
				return false;
			}
			$('#lastoperator').text(e.target.value);
			
		});
	
	$('.num').click(function(e){
		console.log(num1);
		console.log(num2);
		
		
		if($('#lastoperator').text() == ''){
			num1 = num1 + e.target.value;
			$('#ipscreen').text(num1);
		}else if(num1 && $('#lastoperator').text() != ''){
			num2 = num2 +e.target.value;
			$('#ipscreen2').text(num2);
		}
	});
	
	
	$('#ac').click(function(e){
		$('#lastoperator').text('');
		$('#ipscreen').text('');
		$('#ipscreen2').text('');
		num1='';
		num2='';
	});
	
	$('#equal').click(function(e){
		if(num1=='' || num2==''){
			alert('Input values are missing, Please enter correct values and try again');
			return false;
		}
		if($('#lastoperator').text() == ''){
			alert('please select the operation you would like to perform');
			return false;
		}
		if((num1 && num2 )&& $('#lastoperator').text() != ''){
			num1 = parseInt(num1);
			num2 = parseInt(num2);
			switch($('#lastoperator').text()) {
				case '*' : 
					result = num1 *num2;
					break;
				case '+' :
					result = num1+num2;
					break;
				case '/' :
					result = num1/num2;
					break;
				case '-':
					result= num1-num2;
					break;
				default:
					result=0;
			}
			
			
			if(isNaN(result) || !isFinite(result)){
				alert('Result is either infinite or not a number');
				$('#ipscreen').text('');
				num1='';
				num2='';
			}else{
				$('#ipscreen').text(result);
				num1=result;
				num2='';	
			}
			$('#lastoperator').text('');
			$('#ipscreen2').text('');
			
		}
		
	})
		
	
});