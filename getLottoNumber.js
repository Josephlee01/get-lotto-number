
const makeLottoNumber = () => {
  const lotto = new Array;
  
  for (let i=0; i<6; i++){
    let lottoNumber = Math.floor(Math.random()*45+1) 
    for (let j in lotto){
      if (lottoNumber == lotto[j]){
        lottoNumber = Math.floor(Math.random()*45+1)
      } 
    }
    lotto.push(lottoNumber);
  }
  lotto.sort((a,b)=> a-b);
  document.querySelector('.number').innerHTML = lotto.join('&nbsp;&nbsp;')

  document.querySelector('.form1').innerHTML = `추천 로또번호는`
  document.querySelector('.form2').innerHTML = `입니다.`
}


const print = () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener("click", makeLottoNumber);
}

print();
