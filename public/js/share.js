// this url changes when my ip address changed
// I have to change url in Kakao Developer and Facebook Developer too
const url = 'http://34.64.142.131:8080/'

// function for sharing in Kakao using Kakao api
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

// function for sharing in Facebook using Facebook api
function facebookShare() {
  FB.ui({
    method: 'share',
    href: url
  }, function(response) {});

}

// function for sharing in Twitter
function twitterShare() {
  window.open("https://twitter.com/intent/tweet?url=" + url, "find-mate");
}

function linkShare() {
  navigator.share({
    title: '당신의 소울메이트는?',
    text: 'DA R D Field Data 기반으로 당신만의 소울메이트를 찾습니다.',
    url: url
  })
}
