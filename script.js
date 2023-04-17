// describing all the varibles used in the frontend part
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let alertt = document.getElementById('alert');
let pass = document.getElementById('pass');
let x = document.getElementById('x');
let xx = document.getElementById('xx');
let nt = document.getElementById('nt');
let spade = document.getElementById('spade');
let heart = document.getElementById('heart');
let diamond = document.getElementById('diamond');
let tree = document.getElementById('tree');
let out_1 = document.getElementById('out_1');
let out_2 = document.getElementById('out_2');
let out_3 = document.getElementById('out_3');
let play = document.getElementById('play');
let row_1 = document.getElementById('row_value_one');
let row_2 = document.getElementById('row_value_two');
let row_3 = document.getElementById('row_value_three');
let row_4 = document.getElementById('row_value_four');
let row_5 = document.getElementById('row_value_five');
let row_6 = document.getElementById('row_value_six');
let row_7 = document.getElementById('row_value_seven');
let row_8 = document.getElementById('row_value_8');
let row_9 = document.getElementById('row_value_9');
let row_10 = document.getElementById('row_value_10');
let row_11 = document.getElementById('row_value_11');
let row_12 = document.getElementById('row_value_12');
let row_13 = document.getElementById('row_value_13');
let row_14 = document.getElementById('row_value_14');
let row_15 = document.getElementById('row_value_15');
let row_16 = document.getElementById('row_value_16');

let row_17 = document.getElementById('row_value_17');
let row_18 = document.getElementById('row_value_18');
let row_19 = document.getElementById('row_value_19');
let row_20 = document.getElementById('row_value_20');
let stop = document.getElementById('stop');
let w = document.getElementById('w');
let n = document.getElementById('n');
let s = document.getElementById('s');
let e = document.getElementById('e');
let pre = document.getElementById('pre');
let ford = document.getElementById('ford');
let i,k,l,o;

// adding the event listner to the buttons which is used in the front end

one.addEventListener('click', ()=>{
    console.log("I am 1");
    out_2.innerText = 1;
})

two.addEventListener('click', ()=>{
    console.log("I am 2");
    out_2.innerText = 2;
})
three.addEventListener('click', ()=>{
    console.log("I am 3");
    out_2.innerText = 3;
})
four.addEventListener('click', ()=>{
    console.log("I am 4");
    out_2.innerText = 4;
})
five.addEventListener('click', ()=>{
    console.log("I am 5");
    out_2.innerText = 5;
})
six.addEventListener('click', ()=>{
    console.log("I am 6");
    out_2.innerText = 6;
})
seven.addEventListener('click', ()=>{
    console.log("I am 7");
    out_2.innerText = 7;
})
alertt.addEventListener('click', ()=>{
    console.log("I am alert");
})
pass.addEventListener('click', ()=>{
    console.log("I am pass");
    alert("Pass Has been played");
})
x.addEventListener('click', ()=>{
    console.log("I am double the value");
    alert("Double the value");
})
xx.addEventListener('click', ()=>{
    console.log("I am re double the value");
    alert("Redouble the value");
})
nt.addEventListener('click', ()=>{
    console.log("I am NT");
    out_3.innerText = "NT";
})
heart.addEventListener('click', ()=>{
    console.log("I am heart");
    out_3.innerText = "❤️";
})
spade.addEventListener('click', ()=>{
    console.log("I am spade");
    out_3.innerText = "♠";
})
diamond.addEventListener('click', ()=>{
    console.log("I am diamond");
    out_3.innerText = "♦";
})

tree.addEventListener('click', ()=>{
    console.log("I am tree");
    out_3.innerText = "♣";
})

   
alertt.addEventListener('click', ()=>{
    alert("Alerting message goes here");
})


stop.addEventListener('click', ()=>{
    alert("Stop Playing This Game");
})

w.addEventListener('click', ()=>{
    console.log("W");
    alert("The Dealer Is W");
   let j = w.textContent;
   out_1.innerText = j;
   i = 0;
})

n.addEventListener('click', ()=>{
    console.log("N");
    alert("The Dealer Is N");
    let j = n.textContent;
   out_1.innerText = j;
   k =0;
})
s.addEventListener('click', ()=>{
    console.log("S");
    alert("The Dealer Is S");
    let j = s.textContent;
   out_1.innerText = j;
   l = 0;
})
e.addEventListener('click', ()=>{
    console.log("E");
    alert("The Dealer Is E");
    let j = e.textContent;
   out_1.innerText = j;
   o = 0;
})


// making the play event run through if else conditions

play.addEventListener('click', ()=>{
   i++;
   k++;
   l++;
   o++;
   console.log(i);
   console.log(k);
   console.log(l);
   console.log(o);
  
   if(i <=20){
   if(out_1.textContent == 'W' && i==1 ){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
  row_1.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==2){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
  row_2.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==3){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
    row_3.innerText = j1;
    out_2.innerText = "";
    out_3.innerText = "";
   }else if(i==4){
    
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
  row_4.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==5){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
  row_5.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==6){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
  row_6.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==7){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
  row_7.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==8){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
  row_8.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==9){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
  row_9.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==10){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
  row_10.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==11){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
  row_11.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==12){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
  row_12.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==13){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
  row_13.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==14){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
  row_14.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==15){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
  row_15.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==16){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
  row_16.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==17){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
  row_17.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==18){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
  row_18.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==19){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
  row_19.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
   }else {
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
  row_20.innerText = j1;
  out_2.innerText = "";
  out_3.innerText = "";
  i=0;

  row_1.innerText = "";
  row_2.innerText = "";
  row_3.innerText = "";
  row_4.innerText = "";
  row_5.innerText = "";
  row_6.innerText = "";
  row_7.innerText = "";
  row_8.innerText = "";
  row_9.innerText = "";
  row_10.innerText = "";
  row_11.innerText = "";
  row_12.innerText = "";
  row_13.innerText = "";
  row_14.innerText = "";
  row_15.innerText = "";
  row_16.innerText = "";
  row_17.innerText = "";
  row_18.innerText = "";
  row_19.innerText = "";
  row_20.innerText = "";
   }
}

if(l <= 20){
    if(out_1.textContent == 'S'  && l==1 ){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_4.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==2){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_5.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==3){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        row_6.innerText = j1;
        out_2.innerText = "";
        out_3.innerText = "";
       }else if(l==4){
        
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_7.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==5){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_8.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==6){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_9.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==7){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_10.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==8){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_11.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==9){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_12.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==10){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_13.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==11){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_14.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==12){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_15.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==13){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_16.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==14){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_17.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==15){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_18.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==16){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_19.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==17){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_20.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==18){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_1.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==19){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_2.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else {
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_3.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
      l=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}

if(o <=20){
    if(out_1.textContent == 'E'  && o==1){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_3.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==2){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_4.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==3){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        row_5.innerText = j1;
        out_2.innerText = "";
        out_3.innerText = "";
       }else if(o==4){
        
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_6.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==5){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_7.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==6){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_8.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==7){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_9.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==8){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_10.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==9){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_11.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==10){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_12.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==11){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_13.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==12){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_14.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==13){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_15.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==14){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_16.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==15){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_17.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==16){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_18.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==17){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_19.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==18){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_20.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==19){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_1.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else {
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_2.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
      o=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}

if(k <=20){
    if(out_1.textContent == 'N'  && k==1){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_2.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==2){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_3.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==3){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        row_4.innerText = j1;
        out_2.innerText = "";
        out_3.innerText = "";
       }else if(k==4){
        
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_5.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==5){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_6.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==6){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_7.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==7){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_8.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==8){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_9.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==9){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_10.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==10){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_11.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==11){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_12.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==12){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_13.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==13){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_14.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==14){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_15.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==15){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_16.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==16){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_17.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==17){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
      row_18.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==18){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      row_19.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==19){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      row_20.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
       }else{
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      row_1.innerText = j1;
      out_2.innerText = "";
      out_3.innerText = "";
      k=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}
}

)


// previous and froward btn event listner

pre.addEventListener('click', ()=>{
  console.log("this is the previous button");
 
})

ford.addEventListener('click', ()=>{
  console.log("this is the forward button");
  if(row_20.textContent = ""){
    console.log("this is the previous button under the if statement");
}else {
console.log("this else part pevious");
}
})


