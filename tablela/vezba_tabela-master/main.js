var prvaR = document.getElementsByClassName('installment-1');
var prvaRLst = []; //sav sadrzaj placene prve rate,odnosno cifre u koloni 1 u polju sa zelenom pozadinom
var prvaRsum = 0; //ukupan zbir placene prve rate
var prvaRataUkupno = document.getElementsByClassName('ukm-1')[0];

var drugaR = document.getElementsByClassName('installment-2');
var drugaRLst = [];
var drugaRsum = 0; //ukupan zbir placene druge rate
var drugaRataUkupno = document.getElementsByClassName('ukm-2')[0];
var drugaRLstNepl = [];
var drugaRNplsum = 0; //zbir neplacenih drugih rate ali gde su placene prve


var trecaR = document.getElementsByClassName('installment-3');
var trecaRLst = [];
var trecaRsum = 0; //ukupan zbir placene druge rate
var trecaRataUkupno = document.getElementsByClassName('ukm-3')[0];
var trecaRLstNepl = [];
var trecaRNplsum = 0; //zbir neplacenih drugih rate ali gde su placene prve



//Ukupno placeno prvih rata
for (var i = 0; i < prvaR.length; i++) {
  if (prvaR[i].classList.contains("placeno")) {
    var prvaRcontent = prvaR[i].textContent; //sadrzaj iz klase paid
    var prvaRnmbr = parseFloat(prvaRcontent); //konvertovanje sadrzaja u broj
    var prvaRpush = prvaRLst.push(prvaRnmbr); //ubacivanje brojeva u listu

  }

}

for (var i = 0; i < prvaRLst.length; i++) { //loop ukupno placenih prvih rata
  prvaRsum += prvaRLst[i];
}

prvaRataUkupno.innerHTML = prvaRsum;





//Ukupnan zbir drugih rata i takodje zbir neplacenih drugih rata ali gde je placena prva
for (var i = 0; i < drugaR.length; i++) {
  if (drugaR[i].classList.contains("placeno")) {
    var drugaRcontent = drugaR[i].textContent;
    var drugaRnmbr = parseFloat(drugaRcontent);
    var drugaRpush = drugaRLst.push(drugaRnmbr);
  }

  var prev = drugaR[i].previousElementSibling;
  if (prev.classList.contains("placeno")) { //ako prethodni element ima klasu placeno
    if (drugaR[i].classList.contains("neplaceno")) { //ako element iz kolone 2 ima klasu neplaceno
      var drugaRNeplcontent = drugaR[i].textContent;
      var drugaRNepnmbr = parseFloat(drugaRNeplcontent);
      var drugaRpushNPL = drugaRLstNepl.push(drugaRNepnmbr);

    }
  }
}
for (var i = 0; i < drugaRLst.length; i++) { //loop ukupno placenih drugih rata
  drugaRsum += drugaRLst[i];
}

for (var i = 0; i < drugaRLstNepl.length; i++) { //loop ukupno neplacenih drugih rata ali gde je placena prva
  drugaRNplsum += drugaRLstNepl[i];
}
drugaRataUkupno.innerHTML = drugaRsum + '(' + drugaRNplsum + ')';




//Ukupnan zbir trecih rata i takodje zbir neplacenih trecih rata ali gde je placena druga

for (var i = 0; i < trecaR.length; i++) {
  if (trecaR[i].classList.contains("placeno")) {
    var trecaRcontent = trecaR[i].textContent;
    var trecaRnmbr = parseFloat(trecaRcontent);
    var trecaRpush = trecaRLst.push(trecaRnmbr);
  }

  var prev = trecaR[i].previousElementSibling;
  if (prev.classList.contains("placeno")) { //ako prethodni element ima klasu placeno
    if (trecaR[i].classList.contains("neplaceno")) { //ako element iz kolone 2 ima klasu neplaceno
      var trecaRNeplcontent = trecaR[i].textContent;
      var trecaRNepnmbr = parseFloat(trecaRNeplcontent);
      var trecaRpushNPL = trecaRLstNepl.push(trecaRNepnmbr);

    }
  }
}
for (var i = 0; i < trecaRLst.length; i++) { //loop ukupno placenih drugih rata
  trecaRsum += trecaRLst[i];
}

for (var i = 0; i < trecaRLstNepl.length; i++) { //loop ukupno neplacenih drugih rata ali gde je placena prva
  trecaRNplsum += trecaRLstNepl[i];
}
trecaRataUkupno.innerHTML = trecaRsum + '(' + trecaRNplsum + ')';
