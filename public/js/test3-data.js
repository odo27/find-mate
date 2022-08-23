let resultCount;

// make object for sending this table name to server ( app.js )
var sqlObj = {
  // I take query in app.js with key: 'table'
  table : 'test3'
};
// fetch to /count using POST method with format of json
fetch("/count", {
  method : "POST",
  headers : {
    "Content-Type": "application/json"
  },
  body : JSON.stringify(sqlObj)
}).then(res=>res.json())
.then(response => document.getElementById('test3UserCount').innerHTML = '현재 총 ' + String(response) + '명이 참여했습니다.');

// fetch to /count using POST method with format of json
fetch("/resultCount", {
  method : "POST",
  headers : {
    "Content-Type": "application/json"
  },
  body : JSON.stringify(sqlObj)
}).then(res=>res.json())
.then(response => {resultCount = response;}
);

// take test1's result using url parsing
const test1resultIdx = parseInt(location.href.split('?')[1]);
// take test2's result using url parsing
const test2resultIdx = parseInt(location.href.split('?')[2]);
// make string that indicate path of a main image of pages
const pagePath = '../img/test3/page/case'+String(test1resultIdx+1)+'/case'+String(test2resultIdx+1)+'/';

// set string of test1's result
const test1case = [
  '한',
  '이',
  '차',
  '김'
]

// set string of test2's result
const test2case = [
  '봄',
  '여름',
  '가을',
  '겨울'
]

// set string of test3's result
const test3case = [
  '따뜻한',
  '집중하는',
  '공감하는',
  '현실적인'
]

// set main section's image
setMainImg(test1resultIdx, test2resultIdx);

// set testMainImg's source with test3's result
function setMainImg(resultIdx1, resultIdx2){
  document.getElementById('testMainImg').src = "../img/test3/main/case" + String(resultIdx1+1) + "/case"+ String(resultIdx2+1) + "/test3-main.png";
}

// function for loading images to browser
function preloading(imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
    let img = new Image();
    img.src = imageArray[i];
  }
}

// main image's sources of a page
const imgList = [
  '../img/test3/page/share/page-01.png',
  '../img/test3/page/share/page-02.gif',
  '../img/test3/page/share/page-03.gif',
  '../img/test3/page/share/page-04.png',
  '../img/test3/page/share/page-05.png',
  pagePath+'page-hi.png',
  pagePath+'page-fist.png',
  pagePath+'page-pocket.png',
  pagePath+'page-v.png',
  pagePath+'page-cross.png',
  pagePath+'page-fist.png',
  pagePath+'page-v.png',
  pagePath+'page-cross.png',
  pagePath+'page-pocket.png',
  pagePath+'page-cross.png',
  pagePath+'page-pocket.png',
  pagePath+'page-v.png',
  pagePath+'page-fist.png',
  pagePath+'page-cross.png',
  pagePath+'page-pocket.png',
  pagePath+'page-cross.png',
  pagePath+'page-v.png',
  pagePath+'page-fist.png',
  pagePath+'page-pocket.png',
  pagePath+'page-cross.png',
  pagePath+'page-pocket.png',
  pagePath+'page-fist.png',
  pagePath+'page-fire.png'
]

// preloading images to browser for showing images faster
preloading(imgList)

window.addEventListener('resize', () => setAllResultSize());

function setAllResultSize() {
  var resultWidth = document.querySelector('#result').clientWidth * 0.9;
  var allTestResult = document.querySelector('.allTestResult');
  allTestResult.style.width = String(resultWidth)+'px';
  allTestResult.style.height = '100%';
  var allResult = document.querySelector('#allResult');
  allResult.style.height = String(window.innerHeight * 0.8) + 'px';
  allResult.style.left = String(document.body.clientWidth * 0.5)+'px';
  allResult.style.top = String(window.innerHeight * 0.5 + window.scrollY)+'px';
  var children = document.querySelectorAll('.detailDiv');
  for (let i = 0; i < children.length; i++) {
    children[i].style.height = String(window.innerHeight * 0.3) + 'px';
  }
}

function showAllResult() {

  var sortable = [];
  var sum = 0;
  for (var name in resultCount) {
    sum += resultCount[name];
    sortable.push([parseInt(name), resultCount[name]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  var allResult = document.querySelector('#allResult');
  if (allResult.style.display == 'none') {
    setAllResultSize();
    document.querySelector('body').style.overflow = 'hidden';
    allResult.style.display = 'block';
    return;
  }
  allResult.style.display = 'block';
  setAllResultSize();
  document.addEventListener('mouseup', function(e) {
    if (!allResult.contains(e.target)) {
      allResult.style.display = 'none';
      document.querySelector('body').style.overflow = 'auto';
    }
  });
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.allTestResult').style.overflow = 'auto';
  var allResultButtonLayout = document.querySelector('.allResultButtonLayout');
  for (let i = 0; i < 4; i++) {
    var idx = sortable[i][0];
    var testResult = document.createElement('button');
    testResult.classList.add('testResultList');
    testResult.classList.add('my-3');
    testResult.addEventListener('click', function(e) {
      var detailDiv = document.getElementById('detailDiv' + String(i));
      if (!detailDiv.contains(e.target)) {
        if (detailDiv.style.display == 'none') {
          detailDiv.style.display = 'block';
        }
        else {
          detailDiv.style.display = 'none';
        }
      }
    });
    var topDiv = document.createElement('div');
    var imgDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    var arrowDiv = document.createElement('div');
    var detailDiv = document.createElement('div');
    var detailImgDiv = document.createElement('div');
    var detailTextDiv = document.createElement('div');
    var detailTextDiv2 = document.createElement('div');
    var detailTestBtn = document.createElement('button');
    detailTestBtn.addEventListener('click', function() {
      let finalLocation = "https://www.dancingastro.com/";
      window.location.href = finalLocation;
    });
    topDiv.classList.add('topDiv');
    imgDiv.classList.add('imgDiv');
    imgDiv.classList.add('px-3');
    imgDiv.classList.add('py-3');
    imgDiv.innerHTML = '<img src="'+imgBoxList[idx]+'" alt="" class="imgBoxList img-fluid">';
    textDiv.classList.add('textDiv');
    textDiv.innerHTML = '전체 결과 중 '+String(Math.floor(sortable[i][1]/sum*100))+'%<br>반가워요! 저는 당신의 소울메이트,<br>'+test3case[idx]+' '+test1case[test1resultIdx]+test2case[test2resultIdx]+'입니다.';
    arrowDiv.innerHTML = '>';
    detailDiv.classList.add('detailDiv');
    detailDiv.classList.add('mx-3');
    detailDiv.classList.add('mb-4');
    detailDiv.id = 'detailDiv' + String(i);
    detailDiv.style.height = String(window.innerHeight * 0.3) + 'px';
    detailDiv.style.display = 'none';
    detailImgDiv.classList.add('detailImgDiv');
    detailImgDiv.classList.add('py-4');
    detailImgDiv.innerHTML = '<img src="'+resultImgList[idx]+'" alt="" class="resultImgList img-fluid">';
    detailTextDiv.classList.add('detailTextDiv');
    detailTextDiv.classList.add('px-4');
    detailTextDiv.classList.add('pb-5');
    detailTextDiv.innerHTML = resultText2[idx];
    detailTextDiv2.classList.add('detailTextDiv2');
    detailTextDiv2.classList.add('px-4');
    detailTextDiv2.classList.add('py-5');
    detailTextDiv2.innerHTML = resultText3[idx];
    detailTestBtn.classList.add('detailTestBtn');
    detailTestBtn.classList.add('mb-5');
    detailTestBtn.classList.add('mx-auto');
    detailTestBtn.innerHTML = test3case[idx]+' '+test1case[test1resultIdx]+test2case[test2resultIdx]+'의 선물 보러가기';
    detailDiv.appendChild(detailImgDiv);
    detailDiv.appendChild(detailTextDiv);
    detailDiv.appendChild(detailTextDiv2);
    detailDiv.appendChild(detailTestBtn);
    topDiv.appendChild(imgDiv);
    topDiv.appendChild(textDiv);
    topDiv.appendChild(arrowDiv);
    testResult.appendChild(topDiv);
    testResult.appendChild(detailDiv);
    allResultButtonLayout.appendChild(testResult);
  }
}

// question and answer array of test3
const qnaList = [
  {
    q: '드디어 서로의 소울메이트를 만나셨군요!<br><b>진심으로 축하드려요:)</b>',
    a: [
      {answer: '감사합니다! 마음에 드는 분이에요!'},
      {answer: '고맙습니다. 차차 친해져볼게요.'},
    ]
  },
  {
    q: '아직 당신과 소울메이트는<br><b>서로에 대해 모르는 것이 많이 남아있을거에요.</b>',
    a: [
      {answer: '서로 더 알아볼게요.'},
      {answer: '벌써 친해진 것 같은걸요?'},
    ]
  },
  {
    q: '<b>이 곳은 삶의 방향을 잃기 전</b><br>당신의 소울메이트를 찾는 경계선<br>함께 서로에 대해 더 알아가보도록 해요.',
    a: [
      {answer: '네, 좋아요.'},
      {answer: test1case[test1resultIdx] + test2case[test2resultIdx] + '이 더 궁금해지는 걸요!'}
    ]
  },
  {
    q: '짧은 대화가 끝나면 소울메이트가<br>그대만을 위한 다양한 이야기와 콘텐츠들을<br>준비해놓았으니 기대해주세요.',
    a: [
      {answer: '좋아요!'}
    ]
  },
  {
    q: '그럼 저는 여기까지였습니다.<br>즐거웠습니다.:)',
    a: [
      {answer: test1case[test1resultIdx] + test2case[test2resultIdx] + ' 만나러 가기'}
    ]
  },
  {
    q: '반가워요!<br><b>제가 당신의 소울메이트였다니.. 감격스럽네요:)</b>',
    a: [
      {answer: '반가워요! 저도 감격스러워요!'},
      {answer: '그러게요! 서로 차차 알아가요!'}
    ]
  },
  {
    q: '<b>제가 준비한 이야기와 콘텐츠들</b>은<br>저 문 너머에 있어요. 같이 걸어갈까요?',
    a: [
      {answer: '네, 같이가요!'},
      {answer: '(콘텐츠들이 벌써 궁금한걸?)'}
    ]
  },
  {
    q: '걸어가는 동안 심심한데,<br>제 <b>이야기</b> 한 번 들어줄래요?',
    a: [
      {answer: '좋아요. 마침 적적했는걸요.'},
      {answer: '(작은 미소를 짓는다)'}
    ]
  },
  {
    q: 'Q1.<br>누구나 그렇듯,<br>저 또한 삶의 방향을 잃었던 때가 있어요.<br><b>어떤 사람</b>이 되고 싶었는지 모르겠더라고요.',
    a: [
      {answer: '(어려운 고민이지, 나도 내가 어떤 사람이 되고 싶은 지 아직 모르겠는걸)'},
      {answer: '(생각해보면 다행이야, 나는 내가 어떤 사람이<br>되고 싶은지 이야기할 수 있으니까)'}
    ]
  },
  {
    q: 'Q2.<br>치열하게 살았어요. 열심히 공부했고, 최선을 다했죠.<br>근데 다 무슨 의미였는지, <b>뭘 위해 배웟는지..</b>',
    a: [
      {answer: '(그래도 배워놓으면 다 도움이 될텐데,<br>배워야 무시 당하지 않고 사는 걸)'},
      {answer: '(결국 배운다는 건 나눌 때 의미있지.<br>나만을 위한 공부는 의미 없을지 몰라)'}
    ]
  },
  {
    q: 'Q3.<br>지금 가족을 만나기 전, 집에서 늘 외로웠어요.<br><b>가족의 기대, 시선에 부응하기 위한 삶삶을 살았죠.</b>',
    a: [
      {answer: '(나랑 비슷하네,<br>나 또한 그런 인생이 있었지)'},
      {answer: '(나랑은 다르네,<br>나는 그런 적은 없었던 거 같아)'}
    ]
  },
  {
    q: 'Q4.<br>돌이켜 생각해보면 <b>저를 위한 삶보다는,</b><br><b>남을 위한 삶을 살았던 것 같네요.</b>',
    a: [
      {answer: '(그런데 현실이 그렇지 않나?<br>결국 인정받는 삶이 가치 있는 삶이잖아)'},
      {answer: '(남한테 인정받는게 중요하지는 않지,<br>더 중요한 게 많을 테니까)'}
    ]
  },
  {
    q: 'Q5.<br>크면서 많은 것이 보이기 시작했어요.<br><b>어릴 때는 제가 생각했을 때</b><br><b>중요한 것을 기준으로만 판단했어요.</b>',
    a: [
      {answer: '(사실 그러면 끝이 없지 않나? 결국에는 하나의 고정된 기준이 필요한 법인데..)'},
      {answer: '(어떤 상황이든 맥락이 있고 입장이 있지,<br>모두를 고려하는 판단이 좋은 법이지)'},
    ]
  },
  {
    q: 'Q6.<br>얘기하다보니 궁금하네요,<br>당신은 어떤 삶을 살았나요?<br><b>누군가에게 의미 있는 삶을 살았나요?</b>',
    a: [
      {answer: '잘 모르겠어요, 제가 누군가에게<br>소중한 의미였을까요?'},
      {answer: '누군가에게는 저 또한 소중한 의미였을 것 같아요.'}
    ]
  },
  {
    q: 'Q7.<br>그렇군요...<br>지금까지 <b>특이하고 유별난 삶의 사람들을<br>많이 만났어요. 늘 많은 생각이 들더라고요.',
    a: [
      {answer: '(재밌겠다.. 나도 그런 사람들을<br>만나보고 싶어)'},
      {answer: '(피곤했겠다.. 나는 그런 사람들 보면<br>좀 불편하던데)'}
    ]
  },
  {
    q: 'Q8.<br>그런 사람들을 대할 때마다 스스로 친절해도 되는 건지, 거리를 두며 대화해야 하는 건지 어려웠어요.',
    a: [
      {answer: '(우선 거리를 둬야지! 무조건 친절하기만 해서는 잃는 것이 더 많을 수 있어)'},
      {answer: '(굳이 친절하지 않을 이유도 없지 않나? 일단 친절하게 대하고 보는거지!)'}
    ]
  },
  {
    q: 'Q9.<br>결국 사람한테 어떤 것이 중요할까 고민하고<br>나중에는 <b>그 사람의 경제적 지위나</b><br><b>재산</b>을 따지게 되더라고요.',
    a: [
      {answer: '(결국 돈이긴 하지, 숫자로 나타나는<br>것만큼 사람을 평가할 객관적인 것도 없어)'},
      {answer: '(그래도 돈이나 재산으로 사람을<br>평가하는 건 무리가 있을텐데)'}
    ]
  },
  {
    q: 'Q10.<br>결론은 모르겠어요. 그냥 <b>당연한 것부터 해볼려고요.</b><br>무단횡단 안하고, 환경도 아끼고.. 당신은 어때요?',
    a: [
      {answer: '글쎄요, 솔직히 좀 어렵기는 하네요.<br>저는 몰래 몰래 어기면서 온 것 같은데요.'},
      {answer: '저도 그래요, 사소한 것부터<br>하나하나 지키려고 노력해왔죠.'},
    ]
  },
  {
    q: 'Q11.<br>어떻든 무슨 의미겠어요. 삶의 의미가 중요하죠..<br>문득 궁금해요, <b>당신 주변에는 어떤 사람이 있나요?</b>',
    a: [
      {answer: '주변에는 제가 좋은 사람이도록<br>만드는 사람들이 더 많은것 같아요.'},
      {answer: '주변에는 제가 좋은 사람이 되기에는<br>각박하게 만드는 사람들이 더 많아요.'}
    ]
  },
  {
    q: '그렇군요, 인간관계란 참 어려운 것 같아요..<br>이야기 하다 보니 궁금한 것이 생겼어요!',
    a: [
      {answer: '뭔데요?'},
      {answer: '(궁금한 표정과 작은 미소를 짓는다)'}
    ]
  },
  {
    q: '제가 예전에 친구들하고 크게 다툰 적이 있어요.<br>이유는 서로 <b>친구를 보는 관점</b>이 달라서였거든요.',
    a: [
      {answer: '(나도 친구들하고 그것 때문에 다툰 적이 있었지)'},
      {answer: '(친구를 바라보는 관점이라..<br>다를 수 있지)'}
    ]
  },
  {
    q: 'Q12.<br>그래서 당신 생각이 궁금해요.<br><b>실질적으로 도움 되지 않는 친구가 있다면 어때요?</b>',
    a: [
      {answer: '그러면 딱 그정도 아닐까요?<br>결국 친구도 서로 도움이 되어야 하잖아요.'},
      {answer: '친구는 좀 다른 것 같아요. 실질적으로<br>도움이 되고 안되고는 친구사이에 상관없죠.'}
    ]
  },
  {
    q: 'Q13.<br>역시 그런가요.. 어렵네요.. 늘 열심히 살았어요.<br><b>주변 사람들보다 더 성공하려고 최선을 다했죠.</b>',
    a: [
      {answer: '(정말 노력하는 인생을 사셨구나..<br>나도 누구보다 성공하고 싶어!)'},
      {answer: '(열심히 사셨구나.. 나는 다른 사람보다<br>꼭 성공하고 싶고 그렇지는 않던데)'}
    ]
  },
  {
    q: 'Q14.<br>그렇게 치열하게 살면서도<br>이상하리만큼 <b>남을 위한 삶을 사는 사람들</b>도<br>만나왔어요. 싱숭생숭하더라고요.',
    a: [
      {answer: '(그런 사람 보면 솔직히 가끔 가식이라는<br>생각도 들던데, 원하는게 따로 있지 않나?)'},
      {answer: '(그런 사람들 보면 대단하지,<br>아직 살만한 세상 같기도 하고)'}
    ]
  },
  {
    q: 'Q15.<br>정답은 저도 모르겠어요. 여전히 세상이 궁금해요.<br><b>돈, 법, 질서 다 왜 필요한 걸까..</b> 그런 생각?',
    a: [
      {answer: '(돈, 법, 질서 모두 나를 지킬 수 있는 무기잖아?<br>그런 면에서 당연히 필요하지!)'},
      {answer: '(우리 모두를 위해서 필요한 게 아닐까?<br>모두가 행복하려면 꼭 있어야지)'}
    ]
  },
  {
    q: '이야기를 하다보니 어려워지네요😅<br>그래도 벌써 문 앞에 도착했어요.<br>제 이야기 들어주셔서 고마워요.',
    a: [
      {answer: '재밌었어요.'},
      {answer: '저도 더 고민하고 좋았어요.'}
    ]
  },
  {
    q: '이 문 너머에는 <b>당신을 기다리며 쌓아둔 이야기와</b><br><b>콘텐츠들이 가득해요.</b>저와 함께 지금 만나러 가요!',
    a: [
      {answer: '문 너머로 발걸음 옮기기'}
    ]
  },
  {
    q: '이제 저의 어떤 모습이 당신의<br>진정한 소울메이트일지 만나러 가요!<br><b>서로의 소울메이트를 만나 기뻐요!</b>',
    a: [
      {answer: '다음으로'}
    ]
  }
]

// case1 : Warm
// case2 : Concentrate
// case3 : Empathy
// case4 : Realistic

// paths of header image in result section of test3
const imgBoxList = [
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/imgBox-case1.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/imgBox-case2.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/imgBox-case3.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/imgBox-case4.png'
]

// paths of main image in result section of test3
const resultImgList = [
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/resultImg-case1.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/resultImg-case2.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/resultImg-case3.png',
  '../img/test3/result/case' + String(test1resultIdx+1) + '/case' + String(test2resultIdx+1) + '/resultImg-case4.png'
]

// result texts in result section of test2
var resultText1 = [
  '.<br>.<br>',
  '.<br>.<br>',
  '.<br>.<br>',
  '.<br>.<br>'
]

var resultText2 = [
  '',
  '',
  '',
  ''
]

var resultText3 = [
  '',
  '',
  '',
  ''
]
