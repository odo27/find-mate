// this variables get main section and qna section
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

// endPoint is numbers of each test's question
const endPoint = qnaList.length;
// this array save user's inputs
const select = [];

// this variables declare for making prevButton
var testIdx = 0;
var g_qIdx = 0;

// this variavble declare for sending test's result to other tests
let resultIdx = 0;

setScreenSize();
// when window size changed
// this Listener makes screensize proper with divice
window.addEventListener('resize', () => setScreenSize());

// viewport height changed innerHeight of viewport
// because of increasing cs in safari and other mobile devices
function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}


// function for going final page
function goFinal() {
  window.location.href = "../html/final.html";
}

// function for going test3 page
function goTest3() {
  // get test1resultIdx in test2's url
  const test1resultIdx = parseInt(location.href.split('?')[1]);
  // make url with test1result, test2result, cScore, fcScore
  let test3location = "../html/test3.html?"+String(test1resultIdx)+"?"+String(resultIdx)+"?"+String(cScore)+"?"+String(fcScore);
  window.location.href = test3location;
}

// function for going test2 page
function goTest2() {
  // make url with test1result, cScore, fcScore, rcScore
  let test2location = "../html/test2.html?"+String(resultIdx)+"?"+String(cScore)+"?"+String(fcScore)+"?"+String(rcScore);
  window.location.href = test2location;
}

// function for going test1 page
function goTest1() {
  window.location.href = "../html/test1.html";
}

// function for going result section
function goResult() {

  // save in DB with important values in user's inputs
  saveDB(testIdx, select);
  // get result using result algorithm
  resultIdx = calResult(testIdx, select);

  // if it's test2, goTest3 button take proper texts in the button
  if (testIdx==1) {
    document.getElementById('goTest3Btn').innerHTML = test1case[parseInt(location.href.split('?')[1])] + test2case[resultIdx] + '에 대해 더 알아가기'
  }

  // if it's test3, goFinal button take proper texts in the button
  else if (testIdx==2) {
    document.getElementById('goFinalBtn').innerHTML = test3case[resultIdx] + ' ' + test1case[parseInt(location.href.split('?')[1])] + test2case[parseInt(location.href.split('?')[2])] + '의 선물 보러가기'
  }

  // for going result section smoothly, qna section fade out with animation
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450)

    // set images and texts using a result of algorithm
    var imgBox = document.getElementById("imgBox");
    imgBox.src = imgBoxList[resultIdx];
    var resultImg = document.getElementById("resultImg");
    resultImg.src = resultImgList[resultIdx];
    var resultBox1 = document.querySelector('.resultText1');
    resultBox1.innerHTML = resultText1[resultIdx];
    var resultBox2 = document.querySelector('.resultText2');
    resultBox2.innerHTML = resultText2[resultIdx];
    var resultBox3 = document.querySelector('.resultText3');
    resultBox3.innerHTML = resultText3[resultIdx];

  }, 450);
}

// function for adding answer texts matched with questions
function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  // adding css into a button
  answer.style.height = "15%";
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  // adding a button into buttonBox
  a.appendChild(answer);
  // adding texts into a button
  answer.innerHTML = answerText;
  // waiting user's clicking
  answer.addEventListener("click", function() {
    // if last question, calling goResult function
    if (qIdx + 1 == endPoint) {
      goResult();
      return;
    }
    // after birth date page, delete dateLayout
    if (qIdx == 1 && testIdx == 0) {
      var dateLayout = document.querySelector('.dateLayout');
      dateLayout.style.display = "none";
    }

    // if button clicked, image fade out with animations
    var pageImg = document.getElementById("imgId"+qIdx);
    pageImg.style.WebkitAnimation = "fadeOut 0.5s";
    pageImg.style.animation = "fadeOut 0.5s";

    // if button clicked, answerbox fade out with animations
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      // make each button diabled
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      // after birth date page, save values of date in select array
      if (qIdx == 1 && testIdx == 0) {
        select[qIdx] = document.getElementById("dateBox").value;
      }
      // save values of user in select array
      else {
        select[qIdx] = idx;
      }
      // delete page's main image
      pageImg.style.display = 'none';

      // delete answer buttons
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      // if it's a birth date page,
      // set datebox's value to today, show the dateLayout
      if (qIdx == 0 && testIdx == 0) {
        var dateBox = document.getElementById("dateBox");
        dateBox.value = new Date().toISOString().substring(0, 10);
        var dateLayout = document.querySelector('.dateLayout');
        dateLayout.style.display = "block";
      }
      // calling goNext function
      goNext(++qIdx);
    }, 450)
  }, false);
}

// function for going previous pages
function goPrev() {

  // if prevButton clicked, make it disabled for preventing double clicked
  var prevButton = document.querySelector('.prevButton');
  prevButton.style.pointerEvents = "none";

  // if it's a first page, can't go to a previous page
  if(g_qIdx == 0) {
  }
  else{
    // idx minus one
    g_qIdx--;

    // the birthdate page goes to a previous page
    // delete a dateLayout
    if (g_qIdx == 0 && testIdx == 0) {
      var dateLayout = document.querySelector('.dateLayout');
      dateLayout.style.display = "none";
    }

    // this page's image fade out with a animation
    var pageImg = document.getElementById("imgId"+(g_qIdx+1));
    pageImg.style.WebkitAnimation = "fadeOut 0.5s";
    pageImg.style.animation = "fadeOut 0.5s";

    // make answer button disabled and fade out with a animation
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }

    setTimeout(() => {
      // delete a main image
      var pageImg = document.getElementById("imgId"+(g_qIdx+1));
      pageImg.style.display = 'none';

      // delete answer buttons
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }

      // if previous page is a birth date page,
      // show the dateLayout
      if (g_qIdx == 1 && testIdx == 0) {
        var dateLayout = document.querySelector('.dateLayout');
        dateLayout.style.display = "block";
      }

      // set page count to g_idx
      var countPage = document.querySelector('.countPage');
      countPage.innerHTML = (g_qIdx + 1) + '/' + endPoint;
      // set status bar to g_idx
      var status = document.querySelector('.statusBar');
      status.style.width = (100 / endPoint) * g_qIdx + '%';

      // set question to previous question
      var q = document.querySelector('.qBox');
      q.innerHTML = qnaList[g_qIdx].q;

      // get the previous imageLayout
      // the previous image has animation property 'fade out'
      // so It looks like updated twice
      var pageImg = document.getElementById("imgId"+g_qIdx);
      // delete animation propertys
      pageImg.style.WebkitAnimation = "";
      pageImg.style.animation = "";
      // show the previous image Layout
      pageImg.style.display = 'block';

      // call addAnswer function showing answer buttons
      for (let i in qnaList[g_qIdx].a) {
        addAnswer(qnaList[g_qIdx].a[i].answer, g_qIdx, i);
      }
    }, 450)
  }

  // able a previous button
  setTimeout(() => {
    prevButton.style.pointerEvents = "auto";
  }, 500)
}

// function for going to next page
function goNext(qIdx) {

  // update g_idx to qIdx for goPrev function
  g_qIdx = qIdx;
  // set page count to qIdx
  var countPage = document.querySelector('.countPage');
  countPage.innerHTML = (qIdx + 1) + '/' + endPoint;
  // set status bar to g_idx
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * qIdx + '%';
    // set question to next question
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;

  // if this page made first time
  if (document.getElementById("imgId"+qIdx)==null) {
    var imgLayout = document.querySelector('.imgLayout');
    // create a image element
    var pageImg = document.createElement('img');
    // set pageImg's id to imgId# using for goPrev function
    pageImg.id = "imgId"+qIdx;
    // Test1
    if (testIdx == 0) {
      // set images source imgList's qIdx
      pageImg.src = imgList[qIdx];
    }
    // Test2
    else if (testIdx == 1) {
      pageImg.src = imgList[test1resultIdx][qIdx];
    }
    // Test3
    else {
      pageImg.src = imgList[qIdx];
    }
    // add css to main images
    pageImg.style.width = "100%";
    pageImg.style.objectFit = "cover";
    pageImg.classList.add('fadeIn');
    imgLayout.appendChild(pageImg);
  }
  // if this page made before
  // for example, you visit this page, then click prev buttons
  // and visit this page twice and more
  // this page created before, don't make a new element
  else {
    var pageImg = document.getElementById("imgId"+qIdx);
    // prevent showing twice
    pageImg.style.WebkitAnimation = "";
    pageImg.style.animation = "";
    // just show this layout
    pageImg.style.display = 'block';
  }

  // create answer button using addAnswer function
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
}

// function for starting test
// testNum parameter indicates a number like test1, test2, test3
function begin(testNum) {
  // if start button clicked, disable it
  var startButton = document.getElementById("startButton");
  startButton.disabled = true;
  // set global variable testIdx to testNum
  testIdx = testNum;
  // main section fade out with animation
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    // qna section fade in with animation
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    // delete main section, show qna section
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450)
    // show Q1
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
