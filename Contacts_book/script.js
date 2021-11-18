class Contact
	{
constructor( id,name,surname,age,mob_phone)
{
	
	this._name=name;
	this._surname=surname;
	this._age=age;
	this._mob_phone=mob_phone;
	
	this._id=id;

}
//Chenge_form(){}
Checking_Age(Age){
	this._age=Age;
	if(this._age<=0){alert("----Возраст = 0---");}
	if(this._age>100){alert("----Возраст больше 100---");}
	
}
Checking_input()
{//name
	let Temp_name=/^(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?([A-z]|[А-я]){2,}$/;
	//phone
	let Temp_phone=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	let name=document.getElementById("userName").value;
		let phone=document.getElementById("userPhone").value;

	//surname
	let Temp_surname=/^(([A-z]|[А-я])+)?([\-]?[\,]?[\.]?[\s]?)?([A-z]|[А-я]){2,}$/;///^([A-zА-я]{1}')?[A-zА-я]{1}[A-zА-я]+$/;
	//let name=document.getElementById("Uname1").value;
		let surname=document.getElementById("userSurName").value;


	//++++++++++++++++++++++
	if(!Temp_name.test(name)){
			alert("----FALSE---");
		return false;}	
		this._name=name;
		if(!Temp_surname.test(surname)){
			alert("----FALSE---");
		return false;}	
		this._surname=surname;
	if(!Temp_phone.test(phone)){
			alert("----FALSE---");
		return false;}	
		this._mob_phone=phone;
	
	
	
	alert("----TRUE---");
		//alert(Temp_surname.test(surname));
	//alert(Temp_phone.test(phone));
	//alert(Temp_name.test(name));

	return true;
}

  }

	

	class ContactsBook extends Contact
	{
		constructor(id,name,surname,age,mob_phone)
		{
		super(id,name,surname,age,mob_phone);
		}
		
	
			}
			
		

let button=document.getElementById("addContact");
let counter=1;
let counter2=1;
let form=document.getElementById("formBook");



button.onclick=function()
{ 
	
	counter2++;

	if( typeof(counter)==undefined){counter=1;}

	let divka=document.createElement("div");
	//name
	let label_n=document.createElement("label");
	label_n.innerText=`${counter2} Имя: `;//
	label_n.htmlFor="userName"+counter;
	divka.appendChild(label_n);
	//
//input name
let input_n=document.createElement("input");

input_n.id="userName"+counter;

input_n.name="userName"+counter;
input_n.type="text";
divka.appendChild(input_n);


//s_name
let label_s=document.createElement("label");
label_s.innerText=` Фамилия: `;//
label_s.htmlFor="userSurName"+counter;
divka.appendChild(label_s);
//
//input s_name
let input_s=document.createElement("input");
input_s.id="userSurName"+counter;
input_s.name="userSurName"+counter;
input_s.type="text";
divka.appendChild(input_s);

//age
let label_a =document.createElement("label");
label_a.innerText=` Возраст: `;//
label_a.htmlFor="userAge"+counter;
divka.appendChild(label_a);
//
//input age
let input_a=document.createElement("input");
input_a.id="userAge"+counter;
input_a.name="userAge"+counter;
input_a.type="text";
divka.appendChild(input_a);

//phone
	let label1=document.createElement("label");
	label1.innerText=` Телефон: `;//
	label1.htmlFor="userPhone"+counter;
	divka.appendChild(label1);
	//input number
	let input1=document.createElement("input");
	input1.id="userPhone"+counter;
	input1.name="userPhone"+counter;
	input1.type="text";
	divka.appendChild(input1);
//
	
	
	let label2=document.createElement("label");
	label2.innerText=" Тип: ";//
	label2.htmlFor="userType"+counter;
divka.appendChild(label2);
	//
	
	let o1=document.createElement("option");
	o1.innerText="Мобильный";
	let o2=document.createElement("option");
		o2.innerText="Домашний";
	
	o1.vale="Mobile"+counter;
	o2.vale="Home"+counter;
	
	let select1=document.createElement("select");
	
	select1.name="userType"+counter;
	
	select1.appendChild(o1);
	select1.appendChild(o2);
	
	divka.appendChild(select1);
	
	//
	
	let label3=document.createElement("label");
	label3.innerText=" Приоритет ";//
	label3.htmlFor="userPriority"+counter;
		divka.appendChild(label3);
	//radio
	
	let input2=document.createElement("input");
	input2.type="radio";
	input2.value=1;
	
	input2.name="userPriority";
	
	divka.appendChild(input2);
	//

	let removeButton=document.createElement("input");
	removeButton.type="button";
	removeButton.id="bt_del";
	removeButton.value="X";
	removeButton.addEventListener("click",Delete);
	divka.appendChild(removeButton);

	
	form.appendChild(divka);

	counter++;


	
}
function myFunc()
{ 
	let con=counter2;
	let n = $("#userName").val();
	let s=$("#userSurName").val();
		let a=$('#userAge').val();
		let p=$('#userPhone').val();
		let obj2=new ContactsBook(1,n,s,a,p);
	//ПРОВЕРКА	
		//alert(obj2._id+"=="+obj2._name+"=="+obj2._surname+"=="+obj2._age+"=="+obj2._mob_phone);
		
	
		
	for(var i=0;i<counter2; i++)
	{ 	
		 n = $("#userName"+(i)).val();
	s=$("#userSurName"+(i)).val();
		 a=$('#userAge'+(i)).val();
		 p=$('#userPhone'+(i)).val();

	
	}
	let obj=new ContactsBook(counter2,n,s,a,p);
	//ПРОВЕРКА		
	//alert(obj._id+"=="+obj._name+"=="+obj._surname+"=="+obj._age+"=="+obj._mob_phone);
	
obj2.Checking_Age(a);
obj.Checking_Age(a);
obj2.Checking_input();
obj.Checking_input();

}

let  button2=document.getElementById("Removelast");

function Delete(e)
{
	let divka=e.target.closest('div');
	
	form.removeChild(divka);
	counter2--;
}




		