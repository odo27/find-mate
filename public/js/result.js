// global variables for sending values to html of next tests
let cScore = 0;
let fcScore = 0;
let rcScore = 0;

// function for calculating user's inputs using result algorithms
function calResult(testNum, selectArr) {
  // test1 ( finding houses )
  if (testNum == 0) {
    // declaration of variables for using test1's result algorithms
    let c = 0;
    let fc = 0;
    let rc = 0;
    // indexs of ( 0, 1 ) are birthdate, gender in test1
    // so It's independent variable with result algorithms
    // In selectArr, It included them, loop starts with idx = 2
    // But array of score start from Q1 to Q11,
    // It have to start with idx = 0 in loop
    for (let i = 2; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i-2].point[selectArr[reqIdx[testNum][i]]]
      // if code equals c, c increases that points
      if (score[testNum][i-2].code == 'c') {
        c += point;
      }
      // if code equals fc, fc increases that points
      else if (score[testNum][i-2].code == 'fc') {
        fc += point;
      }
      // if code equlas rc, rc increases that points
      else {
        rc += point;
      }
    }

    // global variables get test1's scores to sending them
    cScore = c;
    fcScore = fc;
    rcScore = rc;

    // result algorithms of test1
    // Hans House
    if (((c * 0.9 + rc * 0.1) >= 0) & (fc <= 0)) {
      return 0
    }
    // Lees House
    else if (((c * 0.9 + rc * 0.1) < 0) & (fc <= 0)) {
      return 1
    }
    // Chas House
    else if (((c * 0.9 + rc * 0.1) >= 0) & (fc > 0)) {
      return 2
    }
    // Kims House
    else {
      return 3
    }
  }

  // test2 ( finding names )
  else if (testNum == 1) {
    // declaration of variables for using test2's result algorithms
    let l = 0;
    // taking test1's cScore using url parsing
    let c = parseInt(location.href.split('?')[2]);
    let fl = 0;
    let rl = 0;
    // taking test1's fcScore using url parsing
    let fc = parseInt(location.href.split('?')[3]);
    // taking test1's rcScore using url parsing
    let rc = parseInt(location.href.split('?')[4]);

    // Test2 have selectArr consist of no independent variables
    // So algorithms have to use whole indexes
    // This array start from Q1 to Q11
    for (let i = 0; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i].point[selectArr[reqIdx[testNum][i]]]
      // if code equals l, l increases that points
      if (score[testNum][i].code == 'l') {
        l += point;
      }
      // if code equals c, c increases that points
      // code c start with test1's cScore not zero
      else if (score[testNum][i].code == 'c') {
        c += point;
      }
      // if code equals fl, fl increases that points
      else if (score[testNum][i].code == 'fl') {
        fl += point;
      }
      // if code equals rl, rl increases that points
      else {
        rl += point;
      }
    }

    // cScore get new value calculating values like ( c, rc, l )
    cScore = (c * 0.9 + rc * 0.1) * 0.75 + l * 0.15 + rc * 0.1;
    // fcScore get new value calculating values like (fc, fl, rc)
    fcScore = fc * 0.75 + fl * 0.15 + rc * 0.1;

    // result algorithms of test2
    // Spring
    if (((l * 0.9 + rl * 0.1) < 0) & (fl * 0.9 + rl * 0.1 <= 0)) {
      return 0
    }
    // Summer
    else if (((l * 0.9 + rl * 0.1) >= 0) & (fl * 0.9 + rl * 0.1 <= 0)) {
      return 1
    }
    // Fall
    else if (((l * 0.9 + rl * 0.1) >= 0) & (fl * 0.9 + rl * 0.1 > 0)) {
      return 2
    }
    // Winter
    else {
      return 3
    }
  }

  // test3 ( finding characteristics )
  else {

    // declaration of variables for using test3's result algorithms
    let e = 0;
    let fe = 0;
    let re = 0;
    // taking test2's cScore using url parsing
    let c = parseInt(location.href.split('?')[3]);
    // taking test2's fcScore using url parsing
    let fc = parseInt(location.href.split('?')[4]);

    // Test3 have selectArr consist of no independent variables
    // So algorithms have to use whole indexes
    // This array start from Q1 to Q15
    for (let i = 0; i < reqIdx[testNum].length; i++) {
      let point = score[testNum][i].point[selectArr[reqIdx[testNum][i]]]
      // if code equals e, e increases that points
      if (score[testNum][i].code == 'e') {
        e += point;
      }
      // if code equals fe, fe increases that points
      else if (score[testNum][i].code == 'fe') {
        fe += point;
      }
      // if code equals re, re increases that points
      else {
        re += point;
      }
    }
    let eScore = e * 0.8 + re * 0.1 + c * 0.1;
    let feScore = fe * 0.8 + re * 0.1 + fc * 0.1;
    // Warm
    if ((eScore >= 0) & (feScore <= 0)) {
      return 0
    }
    // Concentrate
    else if ((eScore < 0) & (feScore <= 0)) {
      return 1
    }
    // Empathy
    else if ((eScore >= 0) & (feScore > 0)) {
      return 2
    }
    // Realistic
    else {
      return 3
    }
  }
}

// score have points of each questions in each tests
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
