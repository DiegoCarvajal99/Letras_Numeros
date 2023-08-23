const btnA1 = document.getElementById("a1");
const btnB2 = document.getElementById("b2");
const btnC3 = document.getElementById("c3");
const btnD4 = document.getElementById("d4");
const btnE5 = document.getElementById("e5");
const btnF6 = document.getElementById("f6");
const btnG7 = document.getElementById("g7");
const btnH8 = document.getElementById("h8");
const btnI9 = document.getElementById("i9");
const btnCl = document.getElementById("cl");
const btnJ0 = document.getElementById("j0");
const btnCn = document.getElementById("cn");

let lblLetras = document.getElementById("letras");
let lblNumeros = document.getElementById("numeros");

let grupoLetras = "";
let grupoNumeros = "";

function setA1() {
  if (grupoLetras === "") {
    lblLetras.innerHTML = "A";
    grupoLetras = "A";
  } else {
    if (grupoLetras === "ABCDEFGHIJ") {
      lblNumeros.innerHTML = "1";
      grupoNumeros = "1";
    } else {
    }
  }
 
}

function setB2() {
  if (grupoLetras === "A") {
    lblLetras.innerHTML = "AB";
    grupoLetras += "B";
    
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "1" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "12";
        grupoNumeros += "2";
      } else {
        alert("Faltan numeros");
      }
    }
  }
 
}

function setC3() {
  if (grupoLetras === "AB") {
    lblLetras.innerHTML = "ABC";
    grupoLetras += "C";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "12" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "123";
        grupoNumeros += "3";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setD4() {
  if (grupoLetras === "ABC") {
    lblLetras.innerHTML = "ABCD";
    grupoLetras += "D";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "123" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "1234";
        grupoNumeros += "4";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setE5() {
  if (grupoLetras === "ABCD") {
    lblLetras.innerHTML = "ABCDE";
    grupoLetras += "E";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "1234" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "12345";
        grupoNumeros += "5";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setF6() {
  if (grupoLetras === "ABCDE") {
    lblLetras.innerHTML = "ABCDEF";
    grupoLetras += "F";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "12345" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "123456";
        grupoNumeros += "6";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setG7() {
  if (grupoLetras === "ABCDEF") {
    lblLetras.innerHTML = "ABCDEFG";
    grupoLetras += "G";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "123456" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "1234567";
        grupoNumeros += "7";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setH8() {
  if (grupoLetras === "ABCDEFG") {
    lblLetras.innerHTML = "ABCDEFGH";
    grupoLetras += "H";
  }else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "1234567" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "12345678";
        grupoNumeros += "8";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setI9() {
  if (grupoLetras === "ABCDEFGH") {
    lblLetras.innerHTML = "ABCDEFGHI";
    grupoLetras += "I";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "12345678" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "123456789";
        grupoNumeros += "9";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setJ0() {
  if (grupoLetras === "ABCDEFGHI") {
    lblLetras.innerHTML = "ABCDEFGHIJ";
    grupoLetras += "J";
  } else {
    if(grupoNumeros === ""){
      alert("Faltan letras");
    }else{
      if (grupoNumeros === "123456789" && grupoLetras === "ABCDEFGHIJ"){
        lblNumeros.innerHTML = "1234567890";
        grupoNumeros += "0";
      } else {
        alert("Faltan numeros");
      }
    }
  }
}

function setCL(){
  if(grupoLetras === "ABCDEFGHIJ"){
    lblLetras.innerHTML = "";
    grupoLetras = "";
  }
}

function setCN(){
  if(grupoNumeros === "1234567890"){
    lblNumeros.innerHTML = "";
    grupoNumeros = "";
  }
}

btnA1.onclick = function () {
  setA1();
};

btnB2.onclick = function () {
  setB2();
};

btnC3.onclick = function () {
  setC3();
};

btnD4.onclick = function () {
  setD4();
};

btnE5.onclick = function () {
  setE5();
};

btnF6.onclick = function () {
  setF6();
};

btnG7.onclick = function () {
  setG7();
};

btnH8.onclick = function () {
  setH8();
};

btnI9.onclick = function () {
  setI9();
};

btnJ0.onclick = function () {
  setJ0();
};

btnCl.onclick = function(){
  setCL();
}

btnCn.onclick = function(){
  setCN();
}