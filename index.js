function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let arr = [];
  let i = 0;
  while(i<arr.length) {
    arr.push(`${facts[i]} !!!`);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr = [];

  do{
    arr.push("I love the Beatles!");
    num++;
  } while(num<15);
  return arr;
}
