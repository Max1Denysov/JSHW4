function order(phrase) {
 let res = phrase
    .split(" ")
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
alert(res)
}
order('is2 Thi1s T4est 3a')

//------------------------------------------------------------------------
 function ticTac(deck) {
  deck = deck.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(deck)) return 2;
     else if(/111|1...1...1|1....1....1|1..1..1/.test(deck)) return 1;
     else if(/0/.test(deck)) return -1;
        return 0;
}
alert(ticTac([[0, 0, 1],
              [2, 2, 2],
              [1, 1, 0]]))
//------------------------------------------------------------------------
function meet(x, w){
  if (w == 0) { return 'Game On' }
  var res = [], total = 0
  for (let i = 0; i < x.length; i++) {
    let chair = x[i][1] - x[i][0].length
    if (Math.sign(chair) == -1) { chair = 0 }
    if (chair <= w-total) { res.push(chair) }
    else { res.push(w-total) }
    total += chair    
    if (total >= w) { return res }
  }
  return 'Not enough!'
}












