const lottoForm = document.querySelector("#lotto");
const pensionForm = document.querySelector("#pension");
const btn = document.querySelector(".btn-lotto");
const btnPension = document.querySelector(".btn-pension");

const result = document.querySelector(".result");

const makeLottoNumber = (e) => {
  e.preventDefault();
  const lotto = [];
  for (let i = 0; i < 6; i++) {
    let lottoNumber = Math.floor(Math.random() * 45 + 1);
    for (let j in lotto) {
      if (lottoNumber === lotto[j]) {
        lottoNumber = Math.floor(Math.random() * 45 + 1);
      }
    }
    lotto.push(lottoNumber);
  }
  lotto.sort((a, b) => a - b);
  printLottoResult(lotto);
};

const printLottoResult = (lotto) => {
  const lottoPrint = lotto.join(" ");
  result.innerText = `${lottoPrint}`;
  pensionForm.classList.add("hidden");
};

btn.innerText = `로또 1게임 생성`;
btn.addEventListener("click", makeLottoNumber);

const makePensionNumber = (e) => {
  e.preventDefault();
  const pension = [];
  for (let i = 0; i < 6; i++) {
    let pensionNumber = Math.floor(Math.random() * 10);
    pension.push(pensionNumber);
  }
  printPensionResult(pension);
};

btn.innerText = `로또 1게임 생성`;
btn.addEventListener("click", makeLottoNumber);

const printPensionResult = (pension) => {
  const pensionPrint = pension.join(" ");
  result.innerText = `각 조의 ${pensionPrint}`;
  pensionForm.classList.add("hidden");
};

btnPension.innerText = `연금복권 1게임 생성`;
btnPension.addEventListener("click", makePensionNumber);
