var IMP = window.IMP;
// This parameter has a unique value of users
IMP.init("imp56407262");

function requestPay() {
      // IMP.request_pay(param, callback)
      // calling a payment window
      IMP.request_pay({ // param
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: "ORD20180131-0000011",
          name: "춤추는 우주인 구독하기",
          amount: 2900,
          buyer_email: "gildong@gmail.com",
          buyer_name: "홍길동",
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181"
      }, function (rsp) { // callback
          if (rsp.success) {

          } else {

          }
      });
    }
