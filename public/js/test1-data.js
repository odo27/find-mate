// make object for sending this table name to server ( app.js )
var sqlObj = {
  // I take query in app.js with key: 'table'
  table : 'test1'
};
// fetch to /count using POST method with format of json
fetch("/count", {
  method : "POST",
  headers : {
    "Content-Type": "application/json"
  },
  body : JSON.stringify(sqlObj)
}).then(res=>res.json())
.then(response => document.getElementById('test1UserCount').innerHTML = '현재 총 ' + String(response) + '명이 참여했습니다.');

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
  '../img/test1/page/share/page-01.png',
  '../img/test1/page/share/page-02.png',
  '../img/test1/page/share/page-03.png',
  '../img/test1/page/share/page-04.jpg',
  '../img/test1/page/share/page-05.gif',
  '../img/test1/page/share/page-06.gif',
  '../img/test1/page/share/page-07.gif',
  '../img/test1/page/share/page-08.png',
  '../img/test1/page/share/page-09.png',
  '../img/test1/page/share/page-10.png',
  '../img/test1/page/share/page-11.gif',
  '../img/test1/page/share/page-12.gif',
  '../img/test1/page/share/page-13.gif',
  '../img/test1/page/share/page-14.png',
  '../img/test1/page/share/page-15.png',
  '../img/test1/page/share/page-16.png',
  '../img/test1/page/share/page-17.png',
  '../img/test1/page/share/page-18.png',
  '../img/test1/page/share/page-19.png',
  '../img/test1/page/share/page-20.png',
  '../img/test1/page/share/page-21.png',
  '../img/test1/page/share/page-22.png',
  '../img/test1/page/share/page-23.png',
  '../img/test1/page/share/page-24.png',
  '../img/test1/page/share/page-25.png',
  '../img/test1/page/share/page-26.png',
  '../img/test1/page/share/page-27.png'
]

// preloading images to browser for showing images faster
preloading(imgList)

// set string of test1's result
const test1case = [
  '한',
  '이',
  '차',
  '김'
]

window.addEventListener('resize', () => setAllResultSize());

function setAllResultSize() {
  var resultWidth = document.querySelector('#result').clientWidth * 0.9;
  console.log(resultWidth);
  var allTestResult = document.querySelector('.allTestResult');
  allTestResult.style.width = String(resultWidth)+'px';
}

function showAllResult() {
  console.log("show all result!!");
  var allResult = document.querySelector('#allResult');
  allResult.style.display = 'block';
  setAllResultSize();
  document.addEventListener('mouseup', function(e) {
    if (!allResult.contains(e.target)) {
      var children = document.querySelectorAll('.testResultList');
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      allResult.style.display = 'none';
    }
  })
  var allResultButtonLayout = document.querySelector('.allResultButtonLayout');
  for (let i = 0; i < 4; i++) {
    var testResult = document.createElement('button');
    testResult.classList.add('testResultList');
    testResult.classList.add('my-3');
    testResult.style.width = '100%';
    testResult.innerHTML = '당신의 소울메이트는..<br>'+test1case[i]+'씨네 집에 살고 있습니다.'
    allResultButtonLayout.appendChild(testResult);
  }
}


// question and answer array of test1
const qnaList = [
  {
    q: '반갑습니다.<br>당신의 소울메이트를 찾기 위해<br><b>가이드 T가 함께합니다.</b>',
    a: [
      {answer: '반가워요, T!'}
    ]
  },
  {
    q: '당신의 생년월일을 작성해주세요.',
    a: [
      {answer: '> 다음으로'}
    ]
  },
  {
    q: '당신의 성별을 선택해주세요.',
    a: [
      {answer: '남성'},
      {answer: '여성'},
      {answer: '기타'}
    ]
  },
  {
    q: '이제 출발하겠습니다.',
    a: [
      {answer: '소울즈 시작하기'}
    ]
  },
  {
    q: '똑똑한 사람도, 완벽한 사람도<br>삶의 방향을 잃어버리곤 합니다.',
    a: [
      {answer: '누구나 한 번쯤 그렇죠.'},
      {answer: '저 또한 지금 그런 상태에요.'}
    ]
  },
  {
    q: '이곳은 당신이 완전히 삶의 방향을 잃기 전,<br>그대를 위한 소울메이트를 찾아주는 경계선.',
    a: [
      {answer: '그런 곳이 있다고요?'}
    ]
  },
  {
    q: '당신의 소울메이트는<br>당신과 매우 비슷할 수도 다를 수도 있어요.<br>단지, 당신에게 큰 영감을 줄 뿐이죠.',
    a: [
      {answer: '저에게 딱 필요했던 사람인걸요!'},
      {answer: '누구일지 궁금해요!'}
    ]
  },
  {
    q: '그대의 소울메이트를 찾고나면 당신의 소울메이트와<br>다양한 콘텐츠를 여행할 수 있도록 준비해두었어요.',
    a: [
      {answer: '기대되는걸요!'}
    ]
  },
  {
    q: '이 곳에는 4개의 집에<br>총 16명의 (소울)메이트가 살고 있어요.',
    a: [
      {answer: '생각보다 많네요!'},
      {answer: '제 소울메이트는 어디에 살고 있을까요?'}
    ]
  },
  {
    q: '여기 메이트 모두<br>자신의 소울메이트를 찾는 중입니다.<br>당신 또한 이들 중 누군가의 소울메이트인 셈이죠.',
    a: [
      {answer: '저도 누군가의 소울메이트인 것이군요!<br>서로가 서로의 소울메이트라..'}
    ]
  },
  {
    q: '이번 테스트에서는 당신의 소울메이트가<br>어느 집에 사는지부터 찾아볼께요!',
    a: [
      {answer: '이번 테스트는 나의 소울메이트가<br>사는 집을 찾는군요!'}
    ]
  },
  {
    q: '그대의 소울메이트를 찾기 위해<br>T가 메이트님 집집마다 질문을 보냈어요.',
    a: [
      {answer: '정말요? 궁금해요!'}
    ]
  },
  {
    q: 'T의 질문에 네 집에서 답장을 보내줬어요!<br>당신이 가장 마음에 드는 답장을 골라주세요.',
    a: [
      {answer: '면접관이 된 것 같아요!'}
    ]
  },
  {
    q: '이제 시작해볼까요?',
    a: [
      {answer: '면접관이 된 것 같아요!'}
    ]
  },
  {
    q: 'Q1.<br>T:메이트님 댁에 이 분의 소울메이트가 있대요!<br>새로운 주인공을 맞이할 준비가 되었나요?',
    a: [
      {answer: '네 물론입니다!<br>저희는 언제나 자신 있어요!'},
      {answer: '잘 할 수 있을지 모르겠지만<br>최선을 다해볼게요!'},
      {answer: '벌써 무엇을 함께할 지<br>다 준비해 놓았는걸요! 바로 할 수 있어요!'},
      {answer: '부담스러우실 수 있으니, 조용히 환영할게요.<br>시간이 지나면 친해지겠죠!'}
    ]
  },
  {
    q: 'Q2.<br>T:메이트님 댁에서 처음 저희 주인공을 만나면<br>어떻게 환영해주실건가요?',
    a: [
      {answer: '어색하겠지만,<br>주인공님을 잘 환영해볼게요!'},
      {answer: '저희 집만의 목표와 신념이 있답니다!<br>저희 집에 대해 먼저 알려드리며 환영할게요!'},
      {answer: '저희 집 사람들 중 누가<br>자신의 소울메이트일 것 같은지 물어볼래요!'},
      {answer: '저희가 소중하게 여기는 것을 소개하며<br>주인공의 소울메이트를 찾아볼게요!'}
    ]
  },
  {
    q: 'T가 당신께서 더 잘 맞는 소울메이트를 만나도록<br>메이트님 댁의 개인적인 사정들도 물어봤어요!',
    a: [
      {answer: '역시 그런 게 진짜 중요한 법이죠!<br>저의 소울메이트가 있는 집, 더 궁금하네요!'}
    ]
  },
  {
    q: 'Q3.<br>T:메이트님 댁에서 집안일은 잘 이루어지고 있나요?',
    a: [
      {answer: '물론입니다!<br>다들 각자의 역할에 완전히 몰입합니다!'},
      {answer: '솔직히 가끔은 자기 역할을 안하는 사람이<br>있기도 해요. 융통성 있게 하는거죠!'},
      {answer: '다들 각자 역할은<br>착실히 해야 한다는 주의에요!'},
      {answer: '저희집은 좀 자유로운 편이라<br>역할이 있어도 일단 자기 일만 잘 하면 돼요.'}
    ]
  },
  {
    q: 'Q4.<br>T:메이트님 댁은 집안행사가 어떻게 이루어지나요?',
    a: [
      {answer: '저희 집은 짠!하고 모이는<br>번개를 주로 하는 편이에요!'},
      {answer: '저희 집은 하고 싶은 일이 생기면<br>함께 계획을 세우면서 시작해요!'},
      {answer: '저희 집은 애초에 집안행사가<br>거의 없는 편이에요.'},
      {answer: '저희 집은 각자 하고 싶은 일부터<br>서로 이야기하면서 행사를 만들어요!'}
    ]
  },
  {
    q: 'Q5.<br>T:메이트님 댁은 가장이 따로 있나요?',
    a: [
      {answer: '저희 집은 각자 알아서 잘 하는 편이라<br>\'누가 가장이다!\'는 따로 없어요.'},
      {answer: '가장 있습니다! 이번 주인공께도<br>먼저 할 일들을 알려주실거에요!'},
      {answer: '가장이 있기는 한데<br>큰 역할은 아니에요. 다들\'알아서 척척\'이죠.'},
      {answer: '가장을 이번에 뽑을까 합니다.<br>누가 없으면 잘 안하는 자유로운 영혼들..'}
    ]
  },
  {
    q: 'Q6.<br>T:혹시 메이트님 댁은<br>각자 일에 서로의 눈치를 보나요?',
    a: [
      {answer: '아마 그래도 가족들이다 보니<br>하고 싶은 대로만 하지는 않죠.'},
      {answer: '피해가 가지 않는다면<br>서로 눈치보지 않아요.'},
      {answer: '가족들 때문에 망성이게 되는 경우도<br>분명 있죠. 어디나 그럴 거에요.'},
      {answer: '글쎄요, 다들 가족 때문에<br>자신의 일까지 머뭇거리지는 하지는 않아요.'}
    ]
  },
  {
    q: 'Q7.<br>T:메이트님 댁 사람들은 어떤 사람들인가요?',
    a: [
      {answer: '저희들은 각자 강점이 있어요.<br>그래서 자신감도 넘치고요.'},
      {answer: '저희들은 모두 열심히 살아가요!<br>부족해도 포기하지 않죠.'},
      {answer: '저희들은 운이 좋은 편이라<br>부족함 없이 여유있는 편이에요.'},
      {answer: '저희들은 언제나 모자라도<br>지금의 삶에 만족하려고 노력하고 있어요.'}
    ]
  },
  {
    q: 'Q8.<br>T:메이트님 댁에서는 신년계획 세우나요?<br>어땠나요?',
    a: [
      {answer: '신년계획 세우기는 했는데 지금은 더<br>중요한 것에 집중하느라 잘 모르겠네요.'},
      {answer: '저희는 신년계획 다들 잘 지키고 있어요!'},
      {answer: '저희도 신년계획 세웠는데 다들 너무<br>어려워서 포기하고 행복하게 살아요.'},
      {answer: '저희 중 한 명은 아예 신년계획을 넘어서<br>직업으로 준비도 해요!'}
    ]
  },
  {
    q: 'Q9.<br>T:메이트님 댁은 서로 다툰 적은 없나요?',
    a: [
      {answer: '왜 없겠어요.. 어느 집안이나 그렇듯 다 있죠.. 그 때, 정말 힘들었어요. 그래도 덕분에 지금 잘 지내겠죠?'},
      {answer: '크게 다툰 적은 없는 것 같은데요? 오히려 평소에 자기 생각이 있으면 다들 잘 표현하는 편이라 서로 그 때 그 때 잘 푸는 것 같아요!'},
      {answer: '크게 다툰 적은 없던 것 같아요. 누군가는 속으로 좀 참으면서 싸우기 자체를 싫어하는 것 같기도 해요.'},
      {answer: '어느 집이나 있지 않을까요? 그래도 서로 생각도 나누고 오히려 저는 좋은 시간이었어요.'}
    ]
  },
  {
    q: 'Q10.<br>T:현실적으로,<br>메이트님 댁의 경제적인 상황은 대략 어떻게 되나요?',
    a: [
      {answer: '부족한지는 잘 모르겠는데 저희 집은<br>큰 신경을 쏟지 않아도 괜찮더라고요.'},
      {answer: '다 고만고만할거에요. 하고 싶은 일들<br>참으면서 차곡차곡 모아야죠.'},
      {answer: '다 비슷할걸요? 돈에 신경쓰기보다는<br>각자 하고 싶은 일하면서 사는 편이에요.'},
      {answer: '부족하지는 않은데 그래도 열심히 더<br>모아야죠! 버티다보면 나중에 편할거에요.'}
    ]
  },
  {
    q: 'Q11.<br>T:메이트님 댁에서는<br>다른 집이나 친구들과 교류를 하기도 하나요?',
    a: [
      {answer: '자주 하죠. 서로 근황도 나누고요.'},
      {answer: '자주 모이는 편이죠! 근데 또 막상<br>만나고 오면 기가 꺽여 오기도 해요.'},
      {answer: '자주 해요. 친구들한테서<br>무조건 에너지를 얻는 편이거든요!'},
      {answer: '잘 안하죠. 교류 하고 오면 하려던 것도<br>눈치보게 되고 포기했던 때가 있어요.'}
    ]
  },
  {
    q: 'T가 당신의 소울메이트가 사는 집을 찾았어요.<br>다음 테스트에서는<br>누가 당신의 소울메이트인지 찾아볼게요!',
    a: [
      {answer: '나의 소울메이트가 사는 집으로 가기!'}
    ]
  }
]

// case1 : Hans House
// case2 : Lees House
// case3 : Chas House
// case4 : Kims House

// paths of header image in result section of test1
const imgBoxList = [
  '../img/test1/result/share/imgBox-case1.png',
  '../img/test1/result/share/imgBox-case2.png',
  '../img/test1/result/share/imgBox-case3.png',
  '../img/test1/result/share/imgBox-case4.png'
]

// paths of main image in result section of test1
const resultImgList = [
  '../img/test1/result/share/resultImg-case1.png',
  '../img/test1/result/share/resultImg-case2.png',
  '../img/test1/result/share/resultImg-case3.png',
  '../img/test1/result/share/resultImg-case4.png'
]

// result texts in result section of test1
var resultText1 = [
  '당신의 소울메이트는..<br>한씨네 집에 살고 있습니다.',
  '당신의 소울메이트는..<br>이씨네 집에 살고 있습니다.',
  '당신의 소울메이트는..<br>차씨네 집에 살고 있습니다.',
  '당신의 소울메이트는..<br>김씨네 집에 살고 있습니다.'
]

var resultText2 = [
  '<b>우리 집 가훈</b><br>"위대한 도전은 이곳에서 시작한다."<br><br><b>한봄, 한여름, 한가을, 한겨울이</b><br><b>오손도손 살고 있습니다.</b>',
  '<b>우리 집 가훈</b><br>"물 흐르듯이 살자."<br><br><b>이봄, 이여름, 이가을, 이겨울이</b><br><b>오손도손 살고 있습니다.</b>',
  '<b>우리 집 가훈</b><br>"역경이 있어도 열정은 잃지 말자"<br><br><b>차봄, 차여름, 차가을, 차겨울이</b><br><b>오손도손 살고 있습니다.</b>',
  '<b>우리 집 가훈</b><br>"무모함에 낭비하는 시간은 사치다."<br><br><b>김봄, 김여름, 김가을, 김겨울이</b><br><b>오손도손 살고 있습니다.</b>'
]

var resultText3 = [
  '한씨네 집<br>편안하고 차분한 한옥집입니다.<br>여기에는 <b>네 명의 메이트</b>가 살고 있어요!<br>당신의 메이트를 찾아서<br>어서 다음 테스트를 하러 가요!<br><br>다음 테스트를 마치면 한씨네 가족들 중<br><b>누가 내 소울메이트인지</b> 확인할 수 있어요.',
  '이씨네 집<br>익숙하고 포근한 가정집입니다.<br>여기에는 <b>네 명의 메이트</b>가 살고 있어요!<br>당신의 메이트를 찾아서<br>어서 다음 테스트를 하러 가요!<br><br>다음 테스트를 마치면 이씨네 가족들 중<br><b>누가 내 소울메이트인지</b> 확인할 수 있어요.',
  '차씨네 집<br>아늑하면서도 감성있는 주택입니다.<br>여기에는 <b>네 명의 메이트</b>가 살고 있어요!<br>당신의 메이트를 찾아서<br>어서 다음 테스트를 하러 가요!<br><br>다음 테스트를 마치면 차씨네 가족들 중<br><b>누가 내 소울메이트인지</b> 확인할 수 있어요.',
  '김씨네 집<br>튼튼하고 안전한 개인주택입니다.<br>여기에는 <b>네 명의 메이트</b>가 살고 있어요!<br>당신의 메이트를 찾아서<br>어서 다음 테스트를 하러 가요!<br><br>다음 테스트를 마치면 김씨네 가족들 중<br><b>누가 내 소울메이트인지</b> 확인할 수 있어요.',
]
