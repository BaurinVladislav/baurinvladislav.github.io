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
    if(onElement1==false){
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription1[0].innerHTML='Печень утки разварная с артишоками.';
            onElement1=true;
        }
    else if (onElement1==true){
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription1[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement1=false;
        }
}
function selectedHoverOff1(obj){
    if(onElement1==true){
        dynamicText1[0].style.color = "#d91667";
        dynamicText1[0].innerHTML='Котэ не одобряет?';
    }
    else{ 
        dynamicText1[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
    
}

function selectedHoverOn1(obj){
    if(onElement1==true){
        dynamicText1[0].style.color = "#666666";
        dynamicText1[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement1==false){
    obj.style.background = 'url(images/backCatDefaultHover.png)';
    }
}

//Для второго элемента
function selected2(obj) { 
    if(onElement2==false)
        {
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription2[0].innerHTML='Головы щучьи с чесноком да свежайшая сёмгушка.';
            onElement2 = true;
        }
        else if (onElement2==true)
        {
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription2[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement2 = false;
        }
}
function selectedHoverOff2(obj){
    if(onElement2==true){
        dynamicText2[0].style.color = "#d91667";
        dynamicText2[0].innerHTML='Котэ не одобряет?';
    }
    else{ 
        dynamicText2[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
}
function selectedHoverOn2(obj){
    if(onElement2==true){
        dynamicText2[0].style.color = "#666666";
        dynamicText2[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement2==false){
        obj.style.background = 'url(images/backCatDefaultHover.png)';
        }
}

//Для третьего элемента
function selected3(obj) { 
    if(onElement3==false)
        {
            obj.style.background = 'url(images/backCatSelected.png)';
            inscription3[0].innerHTML='Филе из цыплят с трюфелями в бульоне.';
            onElement3 = true;
        }
        else if (onElement3==true)
        {
            obj.style.background = 'url(images/backCatDefaultHover.png)';
            inscription3[0].innerHTML= "Чего сидишь? Порадуй котэ, <u>купи</u>.";
            onElement3 = false;
        }
    
}
function selectedHoverOff3(obj){
    if(onElement3==true){
        dynamicText3[0].style.color = "#d91667";
        dynamicText3[0].innerHTML='Котэ не одобряет?';
    }
    else{
        dynamicText3[0].style.color = '#666666';
        obj.style.background = 'url(images/backCatDefault.png)';
    }
}
function selectedHoverOn3(obj){
    if(onElement3==true){
        dynamicText3[0].style.color = "#666666";
        dynamicText3[0].innerHTML='Сказочное заморское яство';
    }
    else if(onElement3==false){
        obj.style.background = 'url(images/backCatDefaultHover.png)';
        }
}
