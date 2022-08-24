var IMP = window.IMP;
// This parameter has a unique value of users
IMP.init("imp56407262");

function requestPay() {
  IMP.request_pay({
    pg: "html5_inicis",
  	amount : 1000,
  	buyer_name : '홍길동',
  	name : '결제테스트'
  }, function(response) {
  	// callback function after payment
  	if ( response.success ) { // payment success
  		console.log(response);
  	} else {
  		alert('결제실패 : ' + response.error_msg);
  	}
  })
}
