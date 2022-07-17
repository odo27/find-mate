let reqIdx = [
  [1, 2, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24]
]

function reqQuery(testNum, selectArr) {
  let query = '(';


  for (let i = 0; i < reqIdx[testNum].length; i++) {
    if (testNum==0 && i==0) {
      query = query + "date_format('" + selectArr[reqIdx[testNum][i]] + "', '%Y-%m-%d'), "
    }
    else{
      if (i==reqIdx[testNum].length-1) {
        query = query + String(selectArr[reqIdx[testNum][i]]) + ')';
      }
      else{
        query = query + String(selectArr[reqIdx[testNum][i]]) + ', ';
      }
    }
  }
  return query;
}

function saveDB(testNum, selectArr) {

  const table = [
    'test1',
    'test2',
    'test3'
  ]

  let sql = "INSERT INTO " + table[testNum] + " VALUES " + reqQuery(testNum, selectArr);
  var sqlObj = {
    query : sql
  };

  fetch("/save", {
    method : "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(sqlObj)
  });
};
