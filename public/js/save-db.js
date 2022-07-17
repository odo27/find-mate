// reqIdx have important indexes of user's inputs in qnaList
let reqIdx = [
  [1, 2, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24]
]

// function of making querys that matched MySQl syntax
function reqQuery(testNum, selectArr) {
  // open bracket
  let query = '(';

  // add user's values of reqIdx in selectArr to query
  for (let i = 0; i < reqIdx[testNum].length; i++) {
    // test1's page2 is a page of saving user's birth date
    // so It needs a different format for saving birth date
    if (testNum==0 && i==0) {
      query = query + "date_format('" + selectArr[reqIdx[testNum][i]] + "', '%Y-%m-%d'), "
    }
    else{
      // if idx indicates last question, close bracket with no comma
      if (i==reqIdx[testNum].length-1) {
        query = query + String(selectArr[reqIdx[testNum][i]]) + ')';
      }
      // make query using values with comma
      else{
        query = query + String(selectArr[reqIdx[testNum][i]]) + ', ';
      }
    }
  }

  return query;
}

// fuction of saving in Database
function saveDB(testNum, selectArr) {

  // tables in custom dataset
  // My DB's tables (test1, test2, test3)
  const table = [
    'test1',
    'test2',
    'test3'
  ]

  // make query with reqQuery function
  // this variable is query inserting data to db
  let sql = "INSERT INTO " + table[testNum] + " VALUES " + reqQuery(testNum, selectArr);
  // make object for sending this query to server ( app.js )
  var sqlObj = {
    // I take query in app.js with key: 'query'
    query : sql
  };

  // fetch to /save using POST method with format of json
  fetch("/save", {
    method : "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(sqlObj)
  });
};
