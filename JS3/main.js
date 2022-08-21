let len=0;
let cows,bulls;

while(len>6||len<3){
    len=Math.floor(Math.random()*10);
}//случайная длина числа [3;6]

let attempts=prompt("Введите число попыток:")

let hidden = number();
for(let i=0;i<attempts;i++){
    let guess=prompt(`Компьютер загадал комбинацию цифр длиной ${len}`)
    AL(hidden,guess);
    let s="Введённая комбинация: "+guess+`<br/>`+bulls+" Быки   "+cows+" Коровы"+`<br/>`+" Осталось попыток: "+(attempts-i-1);
    document.write(`${s}<br/><br/>`);
    if (hidden==guess){
        alert("Вы выиграли!");
        break;
    }
}
alert("Попытки кончились! Попробовать ещё (F5)");


//компьютер загадывает число
function number(){
    let a='';
    for (let i=0; i<len;i++){
        do{
            c=Math.floor(Math.random()*10);
        }
        while(a.indexOf(c)>=0);//встретили эту цифру раньше?
        a=a+c;//добавляем если цифра не встречалась   
    }
    return a;   
}


//считаем быков и коров
function AL(make,attempt){
    bulls=0;
    cows=0;
    for(let i=0;i<len;i++){
        if(make[i]==attempt[i]){
            bulls++;
        }//если цифра стоит на своем месте
        else{
            if (make.indexOf(attempt[i])>=0){
                cows++;
            }
        }//если просто присутствует 
    }
}

