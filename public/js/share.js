const url = 'http://220.149.88.51:8080/'

function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '당신의 소울메이트는?',
      description: 'DA R D Field Data 기반으로 당신만의 소울메이트를 찾습니다.',
      imageUrl: url + 'img/test1/main/test1-main.jpg',
      link: {
        mobileWebUrl: url,
        androidExecutionParams: 'test'
      },
    },
    buttons: [{
      title: '테스트하기',
      link: {
        mobileWebUrl: url
      }
    }]
  });
}

function facebookShare() {
  FB.ui({
    method: 'share',
    href: url
  }, function(response) {});

}
