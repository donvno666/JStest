"use strict";
// alert("I'm JavaScript");//注释
// //注释
// /*注释
// 注释
// 注释*/
// alert("Hello");
// alert("World");

// let isBoss = confirm("Are you the boss?");
// 
// alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
// 
// let password = prompt("pass?","");
// 
// alert(password);

// alert( 'B' < 'b' );
// 
// alert(Number(null))
// 
// alert(Number(undefined))

// let username = prompt("Username",'')

function AgeCheck(age){
	if(age > 18){
		return true;
	}esle{
	return confirm('Got a permission?');
	}
}

function AgeCheck2(age){
	return (age>18) ? true : confirm('Got a permission?');
}

function AgeCheck3(age){
	return (age>18) || confirm('Got a permission?');
}

function min(a, b){
	return a>b ? b : a;
}

function power(x, n){
	let result = x;
	
	while(--n){
		result *= x; 
	}

	return result;
}

alert(power(2,3));

alert("first edit")