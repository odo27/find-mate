const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = qnaList.length;
const select = [];
var testIdx = 0;
var g_qIdx = 0;

setScreenSize();
window.addEventListener('resize', () => setScreenSize());

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}



function goFinal() {
  window.location.href = "../html/final.html";
}

function goTest3() {
  window.location.href = "../html/test3.html";
}

function goTest2() {
  window.location.href = "../html/test2.html";
}

function goTest1() {
  window.location.href = "../html/test1.html";
}

function goResult() {

  saveDB(testIdx, select);


  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450)

    var imgBox = document.getElementById("imgBox");
    imgBox.src = resultimgList[0];
    var resultImg = document.getElementById("resultImg");
    resultImg.src = resultimgList[1];
    var resultBox1 = document.querySelector('.resultText1');
    resultBox1.innerHTML = resultText1;
    var resultBox2 = document.querySelector('.resultText2');
    resultBox2.innerHTML = resultText2;
    var resultBox3 = document.querySelector('.resultText3');
    resultBox3.innerHTML = resultText3;

  }, 450);
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.style.height = "15%";
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click", function() {
    if (qIdx + 1 == endPoint) {
      goResult();
      return;
    }
    if (qIdx == 1 && testIdx == 0) {
      var dateLayout = document.querySelector('.dateLayout');
      dateLayout.style.display = "none";
    }

    var pageImg = document.getElementById("imgId"+qIdx);
    pageImg.style.WebkitAnimation = "fadeOut 0.5s";
    pageImg.style.animation = "fadeOut 0.5s";

    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      if (qIdx == 1 && testIdx == 0) {
        select[qIdx] = document.getElementById("dateBox").value;
      } else {
        select[qIdx] = idx;
      }
      pageImg.style.display = 'none';

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      if (qIdx == 0 && testIdx == 0) {
        var dateBox = document.getElementById("dateBox");
        dateBox.value = new Date().toISOString().substring(0, 10);
        var dateLayout = document.querySelector('.dateLayout');
        dateLayout.style.display = "block";
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goPrev() {

  var prevButton = document.querySelector('.prevButton');
  prevButton.style.pointerEvents = "none";

  if(g_qIdx == 0) {
  }
  else{




    g_qIdx--;


    if (g_qIdx == 0 && testIdx == 0) {
      var dateLayout = document.querySelector('.dateLayout');
      dateLayout.style.display = "none";
    }

    var pageImg = document.getElementById("imgId"+(g_qIdx+1));
    pageImg.style.WebkitAnimation = "fadeOut 0.5s";
    pageImg.style.animation = "fadeOut 0.5s";

    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }

    setTimeout(() => {
      var pageImg = document.getElementById("imgId"+(g_qIdx+1));
      pageImg.style.display = 'none';

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      if (g_qIdx == 1 && testIdx == 0) {
        var dateLayout = document.querySelector('.dateLayout');
        dateLayout.style.display = "block";
      }

      var countPage = document.querySelector('.countPage');
      countPage.innerHTML = (g_qIdx + 1) + '/' + endPoint;
      var status = document.querySelector('.statusBar');
      status.style.width = (100 / endPoint) * g_qIdx + '%';

      var q = document.querySelector('.qBox');
      q.innerHTML = qnaList[g_qIdx].q;

      var pageImg = document.getElementById("imgId"+g_qIdx);
      pageImg.style.WebkitAnimation = "";
      pageImg.style.animation = "";
      pageImg.style.display = 'block';

      for (let i in qnaList[g_qIdx].a) {
        addAnswer(qnaList[g_qIdx].a[i].answer, g_qIdx, i);
      }
    }, 450)
  }


  setTimeout(() => {
    prevButton.style.pointerEvents = "auto";
  }, 500)
}

function goNext(qIdx) {

  g_qIdx = qIdx;
  var countPage = document.querySelector('.countPage');
  countPage.innerHTML = (qIdx + 1) + '/' + endPoint;
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * qIdx + '%';
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;

  if (document.getElementById("imgId"+qIdx)==null) {
    var imgLayout = document.querySelector('.imgLayout');
    var pageImg = document.createElement('img');
    pageImg.id = "imgId"+qIdx;
    pageImg.src = imgList[qIdx];
    pageImg.style.width = "100%";
    pageImg.style.objectFit = "cover";
    pageImg.classList.add('fadeIn');
    imgLayout.appendChild(pageImg);
  }
  else {
    var pageImg = document.getElementById("imgId"+qIdx);
    pageImg.style.WebkitAnimation = "";
    pageImg.style.animation = "";
    pageImg.style.display = 'block';
  }

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
}

function begin(testNum) {
  var startButton = document.getElementById("startButton");
  startButton.disabled = true;
  testIdx = testNum;
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
