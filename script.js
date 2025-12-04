

const main = document.querySelector('.main');
const idalmainsoge = document.querySelector('.idalmain_soge');

main.addEventListener('click', () => {
    idalmainsoge.classList.add('active'); // 오른쪽에서 왼쪽으로 등장
});

const members = document.querySelector('.members');
const membersbutton = document.querySelector('.membersbutton');

idalmainsoge.addEventListener('click', () => {
    members.classList.add('active'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
membersbutton.addEventListener('click', () => {
    members.classList.remove('active'); // 다시 오른쪽으로 이동
});

// 희진 메인용

const heejin = document.querySelector('.heejin');
const heejinmain = document.querySelector('.heejinmain');
const heejinbutton = document.querySelector('.heejinbutton');

heejin.addEventListener('click', () => {
    heejinmain.classList.add('active'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
heejinbutton.addEventListener('click', () => {
    heejinmain.classList.remove('active'); // 다시 오른쪽으로 이동
});

// 현진 메인용

const hyunjin = document.querySelector('.hyunjin');
const hyunjinmain = document.querySelector('.hyunjinmain');
const hyunjinbutton = document.querySelector('.hyunjinbutton');

hyunjin.addEventListener('click', () => {
    hyunjinmain.classList.add('activetwo'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
hyunjinbutton.addEventListener('click', () => {
    hyunjinmain.classList.remove('activetwo'); // 다시 오른쪽으로 이동
});

// 하슬 메인용
const haseul = document.querySelector('.haseul');
const haseulmain = document.querySelector('.haseulmain');
const haseulbutton = document.querySelector('.haseulbutton');

haseul.addEventListener('click', () => {
    haseulmain.classList.add('activethree'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
haseulbutton.addEventListener('click', () => {
    haseulmain.classList.remove('activethree'); // 다시 오른쪽으로 이동
});

//여진 메인용
const yeojin = document.querySelector('.yeojin');
const yeojinmain = document.querySelector('.yeojinmain');
const yeojinbutton = document.querySelector('.yeojinbutton');

yeojin.addEventListener('click', () => {
    yeojinmain.classList.add('activefour'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
yeojinbutton.addEventListener('click', () => {
    yeojinmain.classList.remove('activefour'); // 다시 오른쪽으로 이동
});
//비비 메인용
const vivi = document.querySelector('.vivi');
const vivimain = document.querySelector('.vivimain');
const vivibutton = document.querySelector('.vivibutton');

vivi.addEventListener('click', () => {
    vivimain.classList.add('activefive'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
vivibutton.addEventListener('click', () => {
    vivimain.classList.remove('activefive'); // 다시 오른쪽으로 이동
});

//김립 메인용
const kimlip = document.querySelector('.kimlip');
const kimlipmain = document.querySelector('.kimlipmain');
const kimlipbutton = document.querySelector('.kimlipbutton');

kimlip.addEventListener('click', () => {
    kimlipmain.classList.add('activesix'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
kimlipbutton.addEventListener('click', () => {
    kimlipmain.classList.remove('activesix'); // 다시 오른쪽으로 이동
});

//진솔 메인용
const jinsoul = document.querySelector('.jinsoul');
const jinsoulmain = document.querySelector('.jinsoulmain');
const jinsoulbutton = document.querySelector('.jinsoulbutton');

jinsoul.addEventListener('click', () => {
    jinsoulmain.classList.add('activeseven'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
jinsoulbutton.addEventListener('click', () => {
    jinsoulmain.classList.remove('activeseven'); // 다시 오른쪽으로 이동
});

//최리 메인용
const choerry = document.querySelector('.choerry');
const choerrymain = document.querySelector('.choerrymain');
const choerrybutton = document.querySelector('.choerrybutton');

choerry.addEventListener('click', () => {
    choerrymain.classList.add('activeeight'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
choerrybutton.addEventListener('click', () => {
    choerrymain.classList.remove('activeeight'); // 다시 오른쪽으로 이동
});

//이브 메인용
const eve = document.querySelector('.eve');
const evemain = document.querySelector('.evemain');
const evebutton = document.querySelector('.evebutton');

eve.addEventListener('click', () => {
    evemain.classList.add('activenine'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
evebutton.addEventListener('click', () => {
    evemain.classList.remove('activenine'); // 다시 오른쪽으로 이동
});
//츄 메인용
const chew = document.querySelector('.chew');
const chewmain = document.querySelector('.chewmain');
const chewbutton = document.querySelector('.chewbutton');

chew.addEventListener('click', () => {
    chewmain.classList.add('activeten'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
chewbutton.addEventListener('click', () => {
    chewmain.classList.remove('activeten'); // 다시 오른쪽으로 이동
});

//고원 메인용
const gowon = document.querySelector('.gowon');
const gowonmain = document.querySelector('.gowonmain');
const gowonbutton = document.querySelector('.gowonbutton');

gowon.addEventListener('click', () => {
    gowonmain.classList.add('activeeleven'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
gowonbutton.addEventListener('click', () => {
    gowonmain.classList.remove('activeeleven'); // 다시 오른쪽으로 이동
});

//올리비아 혜 메인용
const olivia = document.querySelector('.olivia');
const oliviamain = document.querySelector('.oliviamain');
const oliviabutton = document.querySelector('.oliviabutton');

olivia.addEventListener('click', () => {
    oliviamain.classList.add('activetwelve'); // 오른쪽에서 왼쪽으로 등장
});

// overlay 클릭 시 사라지게
oliviabutton.addEventListener('click', () => {
    oliviamain.classList.remove('activetwelve'); // 다시 오른쪽으로 이동
});
