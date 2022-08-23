let resultCount;

// make object for sending this table name to server ( app.js )
var sqlObj = {
  // I take query in app.js with key: 'table'
  table : 'test2'
};
// fetch to /count using POST method with format of json
fetch("/count", {
  method : "POST",
  headers : {
    "Content-Type": "application/json"
  },
  body : JSON.stringify(sqlObj)
}).then(res=>res.json())
.then(response => document.getElementById('test2UserCount').innerHTML = '현재 총 ' + String(response) + '명이 참여했습니다.');

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

// set main section's image
setMainImg(test1resultIdx);

// set testMainImg's source with test1's result
function setMainImg(resultIdx){
  document.getElementById('testMainImg').src = "../img/test2/main/case" + String(resultIdx+1) + "/test2-main.png";
}

// function for loading images to browser
function preloading(imageArray, resultIdx) {
  let n = imageArray[resultIdx].length;
  for (let i = 0; i < n; i++) {
    let img = new Image();
    img.src = imageArray[resultIdx][i];
  }
}

// main image's sources of a page
const imgList = [
  [
    '../img/test2/page/case1/page-01.png',
    '../img/test2/page/share/page-02.gif',
    '../img/test2/page/case1/page-03.png',
    '../img/test2/page/case1/page-04.png',
    '../img/test2/page/case1/page-05.png',
    '../img/test2/page/case1/page-06.png',
    '../img/test2/page/share/page-07.gif',
    '../img/test2/page/case1/page-08.gif',
    '../img/test2/page/share/page-09.png',
    '../img/test2/page/share/page-10.png',
    '../img/test2/page/share/page-11.png',
    '../img/test2/page/share/page-12.png',
    '../img/test2/page/share/page-13.png',
    '../img/test2/page/share/page-14.png',
    '../img/test2/page/share/page-15.png',
    '../img/test2/page/share/page-16.png',
    '../img/test2/page/share/page-17.png',
    '../img/test2/page/share/page-18.png',
    '../img/test2/page/share/page-19.png',
    '../img/test2/page/share/page-20.png',
    '../img/test2/page/share/page-21.png',
    '../img/test2/page/share/page-22.png'
  ],
  [
    '../img/test2/page/case2/page-01.png',
    '../img/test2/page/share/page-02.gif',
    '../img/test2/page/case2/page-03.png',
    '../img/test2/page/case2/page-04.png',
    '../img/test2/page/case2/page-05.png',
    '../img/test2/page/case2/page-06.png',
    '../img/test2/page/share/page-07.gif',
    '../img/test2/page/case2/page-08.gif',
    '../img/test2/page/share/page-09.png',
    '../img/test2/page/share/page-10.png',
    '../img/test2/page/share/page-11.png',
    '../img/test2/page/share/page-12.png',
    '../img/test2/page/share/page-13.png',
    '../img/test2/page/share/page-14.png',
    '../img/test2/page/share/page-15.png',
    '../img/test2/page/share/page-16.png',
    '../img/test2/page/share/page-17.png',
    '../img/test2/page/share/page-18.png',
    '../img/test2/page/share/page-19.png',
    '../img/test2/page/share/page-20.png',
    '../img/test2/page/share/page-21.png',
    '../img/test2/page/share/page-22.png'
  ],
  [
    '../img/test2/page/case3/page-01.png',
    '../img/test2/page/share/page-02.gif',
    '../img/test2/page/case3/page-03.png',
    '../img/test2/page/case3/page-04.png',
    '../img/test2/page/case3/page-05.png',
    '../img/test2/page/case3/page-06.png',
    '../img/test2/page/share/page-07.gif',
    '../img/test2/page/case3/page-08.gif',
    '../img/test2/page/share/page-09.png',
    '../img/test2/page/share/page-10.png',
    '../img/test2/page/share/page-11.png',
    '../img/test2/page/share/page-12.png',
    '../img/test2/page/share/page-13.png',
    '../img/test2/page/share/page-14.png',
    '../img/test2/page/share/page-15.png',
    '../img/test2/page/share/page-16.png',
    '../img/test2/page/share/page-17.png',
    '../img/test2/page/share/page-18.png',
    '../img/test2/page/share/page-19.png',
    '../img/test2/page/share/page-20.png',
    '../img/test2/page/share/page-21.png',
    '../img/test2/page/share/page-22.png'
  ],
  [
    '../img/test2/page/case4/page-01.png',
    '../img/test2/page/share/page-02.gif',
    '../img/test2/page/case4/page-03.png',
    '../img/test2/page/case4/page-04.png',
    '../img/test2/page/case4/page-05.png',
    '../img/test2/page/case4/page-06.png',
    '../img/test2/page/share/page-07.gif',
    '../img/test2/page/case4/page-08.gif',
    '../img/test2/page/share/page-09.png',
    '../img/test2/page/share/page-10.png',
    '../img/test2/page/share/page-11.png',
    '../img/test2/page/share/page-12.png',
    '../img/test2/page/share/page-13.png',
    '../img/test2/page/share/page-14.png',
    '../img/test2/page/share/page-15.png',
    '../img/test2/page/share/page-16.png',
    '../img/test2/page/share/page-17.png',
    '../img/test2/page/share/page-18.png',
    '../img/test2/page/share/page-19.png',
    '../img/test2/page/share/page-20.png',
    '../img/test2/page/share/page-21.png',
    '../img/test2/page/share/page-22.png'
  ]
]

// preloading images to browser for showing images faster
preloading(imgList, test1resultIdx)


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
      let test3location = "../html/test3.html?"+String(test1resultIdx)+"?"+String(sortable[i][0])+"?"+String(cScore)+"?"+String(fcScore);
      window.location.href = test3location;
    });
    topDiv.classList.add('topDiv');
    imgDiv.classList.add('imgDiv');
    imgDiv.classList.add('px-3');
    imgDiv.classList.add('py-3');
    imgDiv.innerHTML = '<img src="'+imgBoxList[idx]+'" alt="" class="imgBoxList img-fluid">';
    textDiv.classList.add('textDiv');
    textDiv.innerHTML = '전체 결과 중 '+String(Math.floor(sortable[i][1]/sum*100))+'%<br>반가워요! 저는 당신의 소울메이트,<br>'+test1case[test1resultIdx]+test2case[idx]+'입니다.';
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
    detailTestBtn.innerHTML = test1case[test1resultIdx]+test2case[idx]+'에 대해 더 알아가기';
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


// set string of test1's result
const resultCase = [
  '한',
  '이',
  '차',
  '김'
]

// question and answer array of test2
const qnaList = [
  {
    q: '그대의 소울메이트가 사는 집을 찾았군요!<br><b>집이 마음에 드시나요?</b>',
    a: [
      {answer: '마음에 들어요!'},
      {answer: '아직 잘 모르겠어요. 더 살펴볼래요.'}
    ]
  },
  {
    q: '당신의 <b>소울메이트</b>가 있을 '+resultCase[test1resultIdx]+'씨 식구들이<br>인사를 하고 싶다고 찾아왔어요.',
    a: [
      {answer: '들어볼래요!'}
    ]
  },
  {
    q: '<b>'+resultCase[test1resultIdx]+'봄입니다.</b>🌱<br>소울메이트가 찾아온다니 새로운 기분이네요.<br>저희 집에서 편안히 찾아보다 가세요.:)',
    a: [
      {answer: '다음으로'}
    ]
  },
  {
    q: '<b>'+resultCase[test1resultIdx]+'여름입니다</b>🌞<br>우리가 서로의 소울메이트라면 좋겠네요.<br>같이 여러가지 해보면서 재미있게 찾아봐요!',
    a: [
      {answer: '다음으로'}
    ]
  },
  {
    q: '<b>'+resultCase[test1resultIdx]+'가을입니다</b>🎑<br>우리가 서로의 소울메이트라면 통하는게 있겠죠!<br>함께 노력하면 금방 찾을거에요!',
    a: [
      {answer: '다음으로'},
      {answer: '저 또한 지금 그런 상태에요.'}
    ]
  },
  {
    q: '<b>'+resultCase[test1resultIdx]+'겨울입니다⛄</b><br>지내다 보면 서로의 소울메이트를 만날거에요.<br>소울메이트를 만난다니... 꼭 응원할게요!',
    a: [
      {answer: '다음으로'}
    ]
  },
  {
    q: '이 중에 당신의 소울메이트가 있어요.<br>T가 이번에는 <b>블라인드 테스트<b>를 준비했습니다.',
    a: [
      {answer: '면접관이 된 이 기분!'}
    ]
  },
  {
    q: 'T의 질문에 대한 메이트들의 익명답변 중<br><b>마음에 드는 답변을 골라주세요.</b>',
    a: [
      {answer: '이번 테스트도 재밌겠어요!'}
    ]
  },
  {
    q: '이들 중 누가 <b>당신의 소울메이트</b>일까요?<br>이제 시작해볼까요?',
    a: [
      {answer: '시작하기'}
    ]
  },
  {
    q: 'T:메이트 여러분들 모두 반가워요.<br><b>주인공의 소울메이트를 찾기위해</b><br><b>블라인드 테스트를 시작할게요.</b>',
    a: [
      {answer: '네, 좋아요.'},
      {answer: '저는 준비 되었어요!'},
      {answer: '은근 긴장되네요.'},
      {answer: '얼른 시작하면 좋겠어요!'}
    ]
  },
  {
    q: 'Q1.<br>T:메이트 여러분들 준비됐나요? 긴장되시죠.. 이런 자리 어색하실텐데.. 자신 있나요?',
    a: [
      {answer: '네 물론입니다! 평소에도 자신감 넘치는 편이거든요!'},
      {answer: '평소에 자신감이 넘치는 건 아니지만.. 열심히 해볼게요!'},
      {answer: '저는 저를 되게 믿는 편이에요! 잘 하리라 생각해요!'},
      {answer: '계속 자존감을 높이고 싶었는데 말처럼 쉽지 만은 않은 것 같아요. 그래도 오랜만에 이런 자리니 최선을 다할게요!'}
    ]
  },
  {
    q: 'Q2.<br>T:메이트 여러분들은 각자 <b>좋아하는게</b> 있나요?',
    a: [
      {answer: '네 저는 있어요!'},
      {answer: '요즘 그것에 고민이 많아요.<br>잘 모르겠더라고요.'},
      {answer: '사소한 것도 말해도 괜찮은가요?'},
      {answer: '갑작스러워서 생각을 좀 해봐야 할 것 같아요.'}
    ]
  },
  {
    q: 'Q3.<br>T:메이트 여러분들은 언제 가장 <b>행복</b>한가요?',
    a: [
      {answer: '그냥 돈을 많이 벌거나, 로또 당첨?<br>아니면 엄청 맛있는 음식을 먹거나요!'},
      {answer: '저는 좋아하는 날씨나, 음악이 들릴 때<br>혼자 엄청 행복해지고는 해요!'},
      {answer: '옛날에 엄청 원하던 시험에 붙은 때가 있어요.<br>그 때 기억이 나는 것 같아요.'},
      {answer: '저는 스스로 힐링할 때 가장 행복해요!<br>그 때 자신감도 좀 차오르더라고요.'}
    ]
  },
  {
    q: 'Q4.<br>T:그렇다면 그 <b>행복</b>을 요즘도 누리고 계신가요?',
    a: [
      {answer: '스스로 여유가 좀 되어야 하는데<br>일에 집중하고 있어서 미뤄두는 거죠.'},
      {answer: '네, 무엇이든 마음만 먹으면<br>할 수 있다고 생각해요! 저 하기에 달려있죠.'},
      {answer: '결국 어떤 일이든 현실이에요,<br>조금씩 참으며 사는 게 인생이라 생각해요.'},
      {answer: '사실 행복을 챙긴다는 게 어렵지만은<br>않은 것 같아요. 나머지는 핑계일 지 몰라요.'}
    ]
  },
  {
    q: 'Q5.<br>T:메이트 여러분들은 <b>친구</b>들과 어떻게 지내나요?',
    a: [
      {answer: '친구들 많아요!<br>아직도 연락 자주 주고 받아요.'},
      {answer: '어릴 땐 몰랐는데 점점 유행만 따르는 것<br>같아서 독고다이 느낌으로 살아요.'},
      {answer: '다 친했는데 아무래도 크면서<br>좀 멀어졌어요. 그래도 가끔 안부 물어요.'},
      {answer: '좋은 친구들 많죠. 친구들 보면서<br>현실적이고 평균적인 삶도 살필 수 있고요.'}
    ]
  },
  {
    q: 'Q6.<br>T:메이트 여러분들이 일을 선택할 때 <b>가장 중요하게 생각하는 것</b>은 무엇인가요?',
    a: [
      {answer: '보상이나 보수, 돈이죠.'},
      {answer: '그 일이 저에게 재미있는 일인지<br>먼저 살펴요.'},
      {answer: '그 일이 주는 성취감이나 필요성이요.'},
      {answer: '제가 갖고 있는 가치나 신념입니다.'}
    ]
  },
  {
    q: 'Q7.<br>T:메이트 여러분들은 <b>완전히 새로운 분야</b>에 발을 들이는 것에 대해 어떻게 생각하시나요?',
    a: [
      {answer: '저는 언제나 환영입니다!'},
      {answer: '어떤 것이냐에 따라 다르죠?<br>그래도 완전히 새로운 건 걱정이 되네요.'},
      {answer: '일단 해보고 고를 것 같아요.<br>해봐야 알 수 있을 것 같아요.'},
      {answer: '좋긴 한데 요즘 여유가 너무 없어서<br>고민을 더 하다가 고를 것 같아요.'}
    ]
  },
  {
    q: 'Q8.<br>T:메이트 여러분들은 <b>좋아하는 일</b>을 하고 있나요?',
    a: [
      {answer: '네, 하고 있어요, 근데 좀 어렵기는 해요.<br>돈도 들고 시간도 들고 하니까요.'},
      {answer: '네, 하고 있어요!<br>할 수 있도록 도와주는 사람도 많고요.'},
      {answer: '금방 할 수 있을 것이라 봐요.<br>모두가 안된다고 해도 더 준비하면 돼요!'},
      {answer: '언제든 할 수 있다고 봐요.<br>여건이 안되는 것도 아니니까요.'}
    ]
  },
  {
    q: 'Q9.<br>T:메이트 여러분들은 <b>각자 집</b>에서 어떤가요?',
    a: [
      {answer: '밖에서랑 비슷한 것 같아요.<br>오히려 가족들로부터 종종 위축되기도 해요.'},
      {answer: '저는 가족에게서 에너지를 얻어요.<br>집에 다녀오면 기분도 좋아지고요.'},
      {answer: '집은 좋은데, 혼자 있는 것이 좋아요.<br>저는 가족들 눈치를 좀 보거든요.'},
      {answer: '가족들과 친한 편은 아니에요.<br>서로 신경 안쓰고 알아서 잘 사는 느낌이죠.'}
    ]
  },
  {
    q: 'Q10.<br>T:메이트 여러분들은<br>어떤 사람이 <b>좋은 사람</b>이라고 생각하나요?',
    a: [
      {answer: '스스로 행복한 사람이 아닐까요?<br>그리고 그 행복을 나눠주는 사람이요.'},
      {answer: '저는 능력이 먼저라고 생각해요.<br>이상보다는 이성적인 고민이 더 중요하죠.'},
      {answer: '다양한 감수성을 지니고<br>여러 공감을 할 수 있는 사람이요.'},
      {answer: '거창한 것은 모르겠고 현실적으로<br>남한테 피해 안주는 사람이 최고같아요.'}
    ]
  },
  {
    q: 'Q11.<br>T:메이트 여러분들은 어떤 <b>목표</b>가 있나요?',
    a: [
      {answer: '우선 성공하고 인정 받고 싶어요!<br>그래야 하고 싶은 것도 해보죠!'},
      {answer: '나중에 세계여행을 다니면서<br>책을 써보고 싶은 목표가 있어요.'},
      {answer: '저는 20대 때 1억 모으기가 목표에요!'},
      {answer: '지금 이 순간에 최선을 다하면서<br>스스로 행복하려는 모든 순간이 목표에요.'}
    ]
  },
  {
    q: '메이트님들의 블라인드테스트가 끝났습니다.<br><b>T가 당신의 소울메이트가 누구인지 찾았습니다!</b>',
    a: [
      {answer: '나의 소울메이트 만나러 가기'}
    ]
  }
]

// case1 : Spring
// case2 : Summer
// case3 : Fall
// case4 : Winter

// paths of header image in result section of test1
const imgBoxList = [
  '../img/test2/result/case' + String(test1resultIdx+1) + '/imgBox-case1.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/imgBox-case2.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/imgBox-case3.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/imgBox-case4.png'
]

// paths of main image in result section of test1
const resultImgList = [
  '../img/test2/result/case' + String(test1resultIdx+1) + '/resultImg-case1.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/resultImg-case2.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/resultImg-case3.png',
  '../img/test2/result/case' + String(test1resultIdx+1) + '/resultImg-case4.png'
]

// result texts in result section of test2
var resultText1 = [
  '반가워요! 저는 당신의 소울메이트,<br>' + resultCase[test1resultIdx] + '봄입니다.',
  '반가워요! 저는 당신의 소울메이트,<br>' + resultCase[test1resultIdx] + '여름입니다.',
  '반가워요! 저는 당신의 소울메이트,<br>' + resultCase[test1resultIdx] + '가을입니다.',
  '반가워요! 저는 당신의 소울메이트,<br>' + resultCase[test1resultIdx] + '겨울입니다.'
]

var resultText2 = [
  '<b>'+resultCase[test1resultIdx]+'봄</b>🌱은, 이런 사람입니다.<br><br><b>감성</b>에 휘둘리는 편은 아닙니다.<br>스스로 <b>무엇을 좋아하는지</b> 문득 <b>궁금해합니다.</b><br><b>좋아하는 것</b>을 하며 <b>현실적인 조건</b>을 함께 채울 수 있다고<br>생각합니다.',
  '<b>'+resultCase[test1resultIdx]+'여름</b>🌞은, 이런 사람입니다.<br><br><b>감수성</b>이 풍부한 편입니다.<br>스스로 <b>무엇을 좋아하는지</b> 잘 <b>알고 있습니다.</b><br><b>좋아하는 것</b>을 하며 <b>현실적인 조건</b>을 함께 채울 수 있다고<br>생각합니다.',
  '<b>'+resultCase[test1resultIdx]+'가을</b>🎑은, 이런 사람입니다.<br><br><b>감수성</b>이 풍부한 편입니다.<br>스스로 <b>무엇을 좋아하는지</b> 잘 <b>알고 있습니다.</b><br><b>좋아하는 것</b>을 하려면 <b>현실적인 조건</b>부터 채워야 한다고<br>생각합니다.',
  '<b>'+resultCase[test1resultIdx]+'겨울</b>⛄은, 이런 사람입니다.<br><br><b>감성</b>에 휘둘리는 편은 아닙니다.<br>스스로 <b>무엇을 좋아하는지</b> 문득 <b>궁금해합니다.</b><br><b>좋아하는 것</b>을 하려면 <b>현실적인 조건</b>부터 채워야 한다고<br>생각합니다.'
]

var resultText3 = [
  '당신의 소울메이트가 어떤 사람인지<br>더 궁금하지 않나요?<br><br>당신의 소울메이트,<br>생각보다 더 매력적인 사람일걸요?<br><br><b>천천히 서로에 대해 더 알아가야 합니다.</b><br><br>'+resultCase[test1resultIdx]+'봄도 아직 당신에 대해<br>모르는 것이 많으니까요.<br><br>소울메이트를 찾기 위한<br>👇<b>마지막 테스트로 넘어갑니다</b>👇',
  '당신의 소울메이트가 어떤 사람인지<br>더 궁금하지 않나요?<br><br>당신의 소울메이트,<br>생각보다 더 매력적인 사람일걸요?<br><br><b>천천히 서로에 대해 더 알아가야 합니다.</b><br><br>'+resultCase[test1resultIdx]+'여름도 아직 당신에 대해<br>모르는 것이 많으니까요.<br><br>소울메이트를 찾기 위한<br>👇<b>마지막 테스트로 넘어갑니다</b>👇',
  '당신의 소울메이트가 어떤 사람인지<br>더 궁금하지 않나요?<br><br>당신의 소울메이트,<br>생각보다 더 매력적인 사람일걸요?<br><br><b>천천히 서로에 대해 더 알아가야 합니다.</b><br><br>'+resultCase[test1resultIdx]+'가을도 아직 당신에 대해<br>모르는 것이 많으니까요.<br><br>소울메이트를 찾기 위한<br>👇<b>마지막 테스트로 넘어갑니다</b>👇',
  '당신의 소울메이트가 어떤 사람인지<br>더 궁금하지 않나요?<br><br>당신의 소울메이트,<br>생각보다 더 매력적인 사람일걸요?<br><br><b>천천히 서로에 대해 더 알아가야 합니다.</b><br><br>'+resultCase[test1resultIdx]+'겨울도 아직 당신에 대해<br>모르는 것이 많으니까요.<br><br>소울메이트를 찾기 위한<br>👇<b>마지막 테스트로 넘어갑니다</b>👇',
]
