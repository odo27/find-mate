let cScore = 0;
let fcScore = 0;
let rcScore = 0;

function calResult(testNum, selectArr) {
  // test1
  if (testNum == 0) {
    // declaration of variable for using result algorithm
    let c = 0;
    let fc = 0;
    let rc = 0;
    // indexs of zero, one are birthdate, gender
    // so It's independent variable with result algorithm
    // In selectArr, It included them, loop starts with idx = 2
    // But array of score start from Q1 to Q11,
    // It have to start with idx = 0 in loop
    for (let i = 2; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i-2].point[selectArr[reqIdx[testNum][i]]]
      if (score[testNum][i-2].code == 'c') {
        c += point;
      }
      else if (score[testNum][i-2].code == 'fc') {
        fc += point;
      }
      else {
        rc += point;
      }
    }

    cScore = c;
    fcScore = fc;
    rcScore = rc;

    // result algorithm
    if (((c * 0.9 + rc * 0.1) >= 0) & (fc <= 0)) {
      return 0
    }
    else if (((c * 0.9 + rc * 0.1) < 0) & (fc <= 0)) {
      return 1
    }
    else if (((c * 0.9 + rc * 0.1) >= 0) & (fc > 0)) {
      return 2
    }
    else {
      return 3
    }
  }

  // test2
  else if (testNum == 1) {
    let l = 0;
    let c = parseInt(location.href.split('?')[2]);
    let fl = 0;
    let rl = 0;
    let fc = parseInt(location.href.split('?')[3]);
    let rc = parseInt(location.href.split('?')[4]);

    for (let i = 0; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i].point[selectArr[reqIdx[testNum][i]]]
      if (score[testNum][i].code == 'l') {
        l += point;
      }
      else if (score[testNum][i].code == 'c') {
        c += point;
      }
      else if (score[testNum][i].code == 'fl') {
        fl += point;
      }
      else {
        rl += point;
      }
    }

    cScore = (c * 0.9 + rc * 0.1) * 0.75 + l * 0.15 + rc * 0.1;
    fcScore = fc * 0.75 + fl * 0.15 + rc * 0.1;
    // spring
    if (((l * 0.9 + rl * 0.1) < 0) & (fl * 0.9 + rl * 0.1 <= 0)) {
      return 0
    }
    // summer
    else if (((l * 0.9 + rl * 0.1) >= 0) & (fl * 0.9 + rl * 0.1 <= 0)) {
      return 1
    }
    // fall
    else if (((l * 0.9 + rl * 0.1) >= 0) & (fl * 0.9 + rl * 0.1 > 0)) {
      return 2
    }
    // winter
    else {
      return 3
    }
  }

  // test3
  else {

    let e = 0;
    let fe = 0;
    let re = 0;
    let c = parseInt(location.href.split('?')[3]);
    let fc = parseInt(location.href.split('?')[4]);

    for (let i = 0; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i].point[selectArr[reqIdx[testNum][i]]]
      if (score[testNum][i].code == 'e') {
        e += point;
      }
      else if (score[testNum][i].code == 'fe') {
        fe += point;
      }
      else {
        re += point;
      }
    }
    let eScore = e * 0.8 + re * 0.1 + c * 0.1;
    let feScore = fe * 0.8 + re * 0.1 + fc * 0.1;
    // warm
    if ((eScore >= 0) & (feScore <= 0)) {
      return 0
    }
    // concentrate
    else if ((eScore < 0) & (feScore <= 0)) {
      return 1
    }
    // empathy
    else if ((eScore >= 0) & (feScore > 0)) {
      return 2
    }
    // realistic
    else {
      return 3
    }
  }
}

const score = [
  //test1
  [
    //q1
    {
      code: 'c',
      point: [10, -10, 10, -10]
    },
    //q2
    {
      code: 'c',
      point: [-20, 20, -20, 20]
    },
    //q3
    {
      code: 'c',
      point: [10, -10, 10, -10]
    },
    //q4
    {
      code: 'c',
      point: [-10, 10, -10, 10]
    },
    //q5
    {
      code: 'c',
      point: [15, -15, 15, -15]
    },
    //q6
    {
      code: 'fc',
      point: [35, -35, 35, -35]
    },
    //q7
    {
      code: 'rc',
      point: [100, -100, 100, -100]
    },
    //q8
    {
      code: 'c',
      point: [-20, 20, -20, 20]
    },
    //q9
    {
      code: 'c',
      point: [-15, 15, -15, 15]
    },
    //q10
    {
      code: 'fc',
      point: [-35, 35, -35, 35]
    },
    //q11
    {
      code: 'fc',
      point: [-30, 30, -30, 30]
    }
  ],
  //test2
  [
    //q1
    {
      code: 'l',
      point: [10, -10, 10, -10]
    },
    //q2
    {
      code: 'l',
      point: [20, -20, 20, -20]
    },
    //q3
    {
      code: 'c',
      point: [-20, 20, -20, 20]
    },
    //q4
    {
      code: 'fl',
      point: [35, -35, 35, -35]
    },
    //q5
    {
      code: 'fl',
      point: [-30, 30, -30, 30]
    },
    //q6
    {
      code: 'l',
      point: [-15, 15, -15, 15]
    },
    //q7
    {
      code: 'l',
      point: [10, -10, 10, -10]
    },
    //q8
    {
      code: 'rl',
      point: [-100, 100, -100, 100]
    },
    //q9
    {
      code: 'fl',
      point: [35, -35, 35, -35]
    },
    //q10
    {
      code: 'l',
      point: [15, -15, 15, -15]
    },
    //q11
    {
      code: 'l',
      point: [-10, 10, -10, 10]
    }
  ],
  //test3
  [
    //q1
    {
      code: 'e',
      point: [-12, 12]
    },
    //q2
    {
      code: 'e',
      point: [-15, 15]
    },
    //q3
    {
      code: 'fe',
      point: [20, -20]
    },
    //q4
    {
      code: 'e',
      point: [-15, 15]
    },
    //q5
    {
      code: 'e',
      point: [-8, 8]
    },
    //q6
    {
      code: 'e',
      point: [-10, 10]
    },
    //q7
    {
      code: 'e',
      point: [-10, 10]
    },
    //q8
    {
      code: 'e',
      point: [-10, 10]
    },
    //q9
    {
      code: 'fe',
      point: [25, -25]
    },
    //q10
    {
      code: 'e',
      point: [-8, 8]
    },
    //q11
    {
      code: 're',
      point: [100, -100]
    },
    //q1
    {
      code: 'e',
      point: [-12, 12]
    },
    //q12
    {
      code: 'fe',
      point: [15, -15]
    },
    //q13
    {
      code: 'fe',
      point: [25, -25]
    },
    //q14
    {
      code: 'fe',
      point: [15, -15]
    },
    //q15
    {
      code: 'e',
      point: [-12, 12]
    }
  ]
]
