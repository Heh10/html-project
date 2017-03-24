
//是否点击计算键
var tag_compute = false;

//点击按键
function button_click(click) {

	var button = click.innerText;

	switch(button) {
		case 'CE' : alert(button);
		break;
		case 'C' : alert(button);
		break;
		case '←' : alert(button);
		break;
		case '9' : number(button);
		break;
		case '8' : number(button);
		break;
		case '7' : number(button);
		break;
		case '6' : number(button);
		break;
		case '5' : number(button);
		break;
		case '4' : number(button);
		break;
		case '3' : number(button);
		break;
		case '2' : number(button);
		break;
		case '1' : number(button);
		break;
		case '0' : number(button);
		break;
		case '/' : compute(button);
		break;
		case '*' : compute(button);
		break;
		case '+' : compute(button);
		break;
		case '-' : compute(button);
		break;
		case '=' : alert(button);
		break;
		case '.' : alert(button);
		break;
	}
}

//数字输入功能
function number(num) {
	var display_bottom = document.getElementById("display_bottom");

	if(tag_compute == true) {
		display_bottom.innerText = 0;
	}

	if(display_bottom.innerText == 0 && num > 0) {

		display_bottom.innerText = num;
	}
	else if(display_bottom.innerText > 0)
	{
		display_bottom.innerText = display_bottom.innerText + num;
	}
	tag_compute = false;
}
//计算功能
function compute(num) {

	var display_bottom = document.getElementById("display_bottom");

	var display_top = document.getElementById("display_top");

	if(tag_compute == false) {
		display_top.innerText = display_top.innerText + display_bottom.innerText + num;
		tag_compute = true;
	}
	
}