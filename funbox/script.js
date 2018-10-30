var onElement1 = false;
var onElement2 = false;
var onElement3 = false;

var dynamicText1 = document.getElementsByClassName('dynamicText1');
var dynamicText2 = document.getElementsByClassName('dynamicText2');
var dynamicText3 = document.getElementsByClassName('dynamicText3'); 

var inscription1 = document.getElementsByClassName('inscription1');
var inscription2 = document.getElementsByClassName('inscription2');
var inscription3 = document.getElementsByClassName('inscription3');

//Для первого элемента
function selected1(obj) {
    if(onElement1==false && disabledElement1==false){
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription1[0].innerHTML='Печень утки разварная с артишоками.';
            onElement1=true;
        }
    else if (onElement1==true && disabledElement1==false){
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription1[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement1=false;
        }
}
function selectedHoverOff1(obj){
    if(onElement1==true && disabledElement1==false){
        dynamicText1[0].style.color = "#d91667";
        dynamicText1[0].innerHTML='Котэ не одобряет?';
    }
    else if(disabledElement1==false){ 
        dynamicText1[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
    
}

function selectedHoverOn1(obj){
    if(onElement1==true && disabledElement1==false){
        dynamicText1[0].style.color = "#666666";
        dynamicText1[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement1==false && disabledElement1==false){
    obj.style.background = 'url(images/backCatDefaultHover.png)';
    }
}

//Для второго элемента
function selected2(obj) { 
    if(onElement2==false && disabledElement2==false)
        {
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription2[0].innerHTML='Головы щучьи с чесноком да свежайшая сёмгушка.';
            onElement2 = true;
        }
        else if (onElement2==true && disabledElement2==false)
        {
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription2[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement2 = false;
        }
}
function selectedHoverOff2(obj){
    if(onElement2==true && disabledElement2==false){
        dynamicText2[0].style.color = "#d91667";
        dynamicText2[0].innerHTML='Котэ не одобряет?';
    }
    else if(disabledElement2==false){ 
        dynamicText2[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
}
function selectedHoverOn2(obj){
    if(onElement2==true && disabledElement2==false){
        dynamicText2[0].style.color = "#666666";
        dynamicText2[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement2==false && disabledElement2==false){
        obj.style.background = 'url(images/backCatDefaultHover.png)';
        }
}

//Для третьего элемента
function selected3(obj) { 
    if(onElement3==false && disabledElement3==false)
        {
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription3[0].innerHTML='Филе из цыплят с трюфелями в бульоне.';
            onElement3 = true;
        }
        else if (onElement3==true && disabledElement3==false)
        {
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription3[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement3 = false;
        }
    
}
function selectedHoverOff3(obj){
    if(onElement3==true && disabledElement3==false){
        dynamicText3[0].style.color = "#d91667";
        dynamicText3[0].innerHTML='Котэ не одобряет?';
    }
    else if(disabledElement3==false){
        dynamicText3[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
}
function selectedHoverOn3(obj){
    console.log(obj)
    if(onElement3==true && disabledElement3==false){
        dynamicText3[0].style.color = "#666666";
        dynamicText3[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement3==false && disabledElement3==false){
        obj.style.background = 'url(images/backCatDefaultHover.png)';
        }
}
 
//Отвключение элементов (снятие позиции с продажи)
var disabledElement1 = false;// если true, значит товара нету.
var disabledElement2 = false;// если true, значит товара нету.
var disabledElement3 = true;// если true, значит товара нету.

var element3 = document.getElementById('element3');
var headerElement3 = document.getElementsByClassName('headerElement3');

function disabledElements(){
    console.log(document.getElementById('element3').txt);
    if(disabledElement1==true){
        document.getElementById('element1').style.background = 'url(images/backCatDisabled.png)';
        document.getElementsByClassName('headerElement1')[0].style.color = "#b3b3b3";
        document.getElementsByClassName('headerElement1')[1].style.color = "#b3b3b3";
        inscription3[0].innerHTML='Печалька, с фуа-гра закончился.';
        document.getElementsByClassName('inscription1')[0].style.color = "#ffff66";
    }
    if(disabledElement2==true){
        document.getElementById('element2').style.background = 'url(images/backCatDisabled.png)';
        document.getElementsByClassName('headerElement2')[0].style.color = "#b3b3b3";
        document.getElementsByClassName('headerElement2')[1].style.color = "#b3b3b3";
        inscription3[0].innerHTML='Печалька, с рыбой закончился.';
        document.getElementsByClassName('inscription2')[0].style.color = "#ffff66";
    }
    if(disabledElement3==true){
        document.getElementById('element3').style.background = 'url(images/backCatDisabled.png)';
        document.getElementsByClassName('headerElement3')[0].style.color = "#b3b3b3";
        document.getElementsByClassName('headerElement3')[1].style.color = "#b3b3b3";
        inscription3[0].innerHTML='Печалька, с курой закончился.';
        document.getElementsByClassName('inscription3')[0].style.color = "#ffff66";
    }
    
}