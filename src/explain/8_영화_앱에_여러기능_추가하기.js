/* [react-router-dom 설치하고 프로젝트 폴저 정리하기]
 * 가장 처음으로 만들 기능은 네비게이션 기능이다. 네이게이션 기능으로 Home, About 메뉴를 추가할 건데,
 * Home은 영화 앱 화면으로 이동시켜주고, About은 개발자 자기 소개 화면으로 이동시켜줄 것이다. 이때
 * '화면 이동을 시켜주는 장치'로 라우터를 사용한다. 라우터는 간단히 화면 이동을 시켜주는 장치라고 이-
 * 해하면 된다. 라우터는 react-router-dom 패키지를 이용하면 쉽게 도입할 수 있다. 
 * 
 * [라우터 만들어 보기]
 * - 라우터란 페이지를 이동할 때 새로고침을 진행하지 않고 오직 주소만 변경하여 페이지의 새로운 내용을
 * 표시해 주는 기능을 수행한다. react-router-dom은 여러 종류의 라우터를 제공하는데, 우리의 프로젝트
 * 에서는 HashRouter와 Route 컴포넌트를 사용할 것이다. 
 * 
 * [HashRouter와 Route 컴포넌트 사용하기]
 * - App 컴포넌트에 HashRouter와 Route 컴포넌트를 import한 다음, HashRouter 컴포넌트가 Route 컴포넌-
 * 트를 감싸 반환하도록 App.js를 수정해 보자. 그리고 컴포넌트를 임포트하는 코드와 사용한 코드는 잠시
 * 지워두자. 
 * HashRoute가 제대로 사용되었다면 앱이 실행되는 주소에 #/이 붙을 것이다. Route에는 2가지 props를 전-
 * 달할 수 있는데 하나는 URL을 위한 path props이고, 다른 하나는 URL에 맞는 컴포넌트를 불러 주기 위한-
 * component props이다. path, component props를 통해 사용자가 접속한 URL을 보고, 그에 맞는 컴포넌트-
 * 를 화면에 그릴 수 있게 되는 것이다(컴포넌트를 부를 주소, 실제로 부를 컴포넌트 라고 이해하면 될듯)
 * 
 * [Route 컴포넌트에 path, component props 추가하기]
 * - About 컴포넌트를 import하고 path, component props에 URL과 About 컴포넌트를 전달하자. 
 * localhost:3000 에 접속하면 주소 뒤에 /#/가 붙으면서 영화 앱 화면이 나타난다. 그런데 about에 접속-
 * 해 보면 About 컴포넌트와 Movie 컴포넌트가 함께 출력된다. 
 * /about에 접속하면 About 컴포넌트만 보여야 하는데 Movie 컴포넌트가 같이 보이는 문제가 있다. 
 * 문제의 이유는 라우터가 URL을 찾는 방식에 있다. 라우터는 사용자가 /home/introduction에 접속하면 /, 
 * /home, /home/introduction 순서로 path props가 있는지 찾는다. 그런데 path props에는 /home과 /home-
 * /introduction이 모두 있다. 때문에 /home/introduction으로 접속한 경우 Home, Introduction 컴포넌트-
 * 가 모두 그려지는 것이다. 
 * 
 * [App.js 다시 원래대로 돌리기]
 * - 이 현상을 해결하려면 Route 컴포넌트에 exact props를 추가하면 된다. exact props는 Route 컴포넌트-
 * 가 prth props와 정확하게 일치하는 URL에만 반응하도록 만들어 준다. 
 * exact props를 추가했더니 이제는 /about에 접속하면 About 컴포넌트만 출력됨을 알 수 있다. path prop-
 * s가 정확히 / 인 경우에만 Home 컴포넌트만 출력되도록 설정되었기 때문이다. 
 * 마지막으로 About 컴포넌트의 모양을 다듬기 위해 스타일을 적용하자. 
 * 
 * [네비게이션 메뉴 만들기]
 * - 라우터를 준비했으니 네비게이션을 통해 다른 화면으로 이동하는 기능을 구현하자. 여기서는 라우터를
 * 이용해 간단한 네비게이션을 만들어 볼 것이다. Home과 About이라는 2개의 버튼을 만들고, 각각의 버튼-
 * 을 눌렀을 때 적절한 화면을 보여주도록 클론 코딩할 것이다. 
 * 
 * [Navigation 컴포넌트 만들기]
 * - components 폴더에 Navigation.js 파일을 만들고 2개의 a 엘리먼트를 반환하도록 JSX를 작성하자.(SP-
 * A를 만들 때와는 다르네. SPA를 쓸 땐 절대로 a 태그를 쓰면 안 되는데)
 * 하지-만!(역시 내 예상이 맞았군)a 태그로 만든 링크는 이동할 때 마다 리액트가 죽고, 새 페이지가 열리-
 * 는 문제가 있다. a 엘리먼트의 href 속성은 페이지 전체를 다시 그린다. 때문에 이 상태로는 필요한 부-
 * 분만 다시 그려주는 리액트의 장점을 활용하기 힘들어진다. 이 문제를 해결하려면 링크를 만들 때 a 태그
 * 대신 react-router-dom에서 제공하는 Link 컴포넌트를 사용한다(또한 HashRouter가 제대로 작동하지 않-
 * 아 /about#/으로 주소가 표시되는 문제도 있다).
 * 수정하니 네비게이션이 제대로 만들어져 페이지 전체가 다시 새로고침되지 않는다. 주의할 점은, Link, 
 * Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 한다는 것이다(내가 이전에 배운 책에서는 Hash-
 * Router를 사용하지 않았던걸로 기억함. 라우터 종류가 많다고 하니 필요한 것만 골라서 쓰면 되겠지)
 * 이제 영화 카드를 누르면 상세 정보가 나오는 기능을 추가하자. 
 * 
 * [영화 상세 정보 기능 만들어 보기]
 * - Home에서 볼 수 있는 영화 정보는 아주 일부분이다. 영화 API를 통해 더 많은 정보를 받고 있으므로 이-
 * 를 활용해 보자. 여기서는 영화 카드를 누르면 상세 정보를 보여주는 기능을 만들 것이다. 
 * 그런데 이 기능을 만들기 위해서는 route props를 반드시 이해해야 한다. 다시 말해 직접 넘겨주지 않아-
 * 도 기본으로 넘어가는 route props라는 것이 있고, 이것을 이용해야 영화 데이터를 상세 정보 컴포넌트에
 * 전달할 수 있다.
 * react-router-dom이 Route 컴포넌트가 그려줄 컴포넌트에 전달하는 props가 바로 route props이다. 어떤
 * 값이 route props로 전달되는지 다 알 필요는 없다. 중요한 건 Route 컴포넌트가 그려줄 컴포넌트에는 항-
 * 상 이 props가 전달되고, 이 props에 우리 마음대로 데이터를 담아 보내줄 수 있다는 사실이다. 그럼 ro-
 * ute props에 데이터를 담아 보내보자. 
 * 
 * [route props에 데이터 담아 보내기]
 * - route props에 데이터를 담아 보내려면 Navigation 컴포넌트에 있는 Link 컴포넌트의 to props의 구조-
 * 를 조금 바꿔야 한다. 아래와 같이 Navigation 컴포넌트 /about 으로 보내주는 Link 컴포넌트의 to prop-
 * s를 수정해 보자. 
 * 코드에서 보듯 to props에 객체를 전달했다. pathname은 URL을 의미하고, state는 우리가 route props에
 * 보내줄 데이터를 의미한다.
 * Movie 컴포넌트에 Link 컴포넌트를 임포트하고, Link 컴포넌트에 to props를 작성하면 된다. 이때 Link
 * 컴포넌트의 위치에 주의하자. 
 * 이제 영화 카드를 누르면 /movie-detail로 이동하게 될 것이다. 그러면 이제 /movie-detail로 이동했을 
 * 때 보여줄 화면을 만들어 보자. 
 * 
 * [Detail 컴포넌트 만들기]
 * - Detail 컴포넌트를 routes 폴더에 추가하자.
 * 영화 카드를 누르면 Detail 컴포넌트로 이동하고, 영화와 관련된 데이터들을 route props로 제공해 봤다. 
 * 그런데 영화 카드를 누르지 않고 주소창에 '/movie-detail'을 입력하여 이동할 경우 Detail 컴포넌트로
 * 영화 관련 데이터가 넘어오지 못한다. 이런 경우 사용자를 강제로 Home으로 돌려보내야 하는데, 이를 '리-
 * 다이렉트 기능'이라고 부른다. Detail 컴포넌트를 수정하여 리다이렉트 기능을 추가해 보자. 
 * 
 * [리다이렉트 기능 만들어 보기]
 * - 리다이렉트 기능을 위해서는 route props의 history 키를 활용해야 한다. history 키에는 push, go,
 * goBack, goFoward와 같은 키가 있는데 그 키에는 URL을 변경해 주는 함수들이 들어 있다. 리다이렉트 기-
 * 능은 이 함수들을 이용해 만든다. 
 * 위의 push, go, goBack, goFoward 키들이 모두 URL을 변경해 주는 함수이다. 이 중 지정한 URL로 보내 
 * 주는 push()함수를 사용할 것이다. 그 전에 Detail 컴포넌트를 클래스형 컴포넌트로 변경해 주자. comp-
 * onentDidMount() 라이프사이클 함수를 사용해 Detail 컴포넌트가 마운트될 때 push() 함수를 실행되게 
 * 할 것이다.
 * 여기까지 코드를 작성하고 다시 생각해 보자. 사용자가 URL을 직접 입력해서 /movie-detail로 이동하면
 * location 키의 state 키가 비게 되는데, 그런 경우에만 history 키의 push() 함수를 사용할 것이다. 
 * 
 * [push()함수 사용하기]
 * - location 안의 state가 undefined이면 history의 push()함수에 '/'를 인자로 제공하면 Home 컴포넌트-
 * 로 돌아오게 된다. 리다이렉트 기능을 구현했으니, 영화 카드를 누르면 표시할 영화 상세 정보 페이지를
 * 만들어보자. 
 * 우선 영화 제목부터 출력해 보자. console.log() 함수를 통해 Movie 컴포넌트로부터 전달받은 영화 데이-
 * 터는 location.state에 들어 있음을 확인했다. 이제 hello가 아닌 location.state.title을 출력해 보자. 
 * 이제 첫 화면에서 영화 카드를 누르면 영화 제목이 등장할 것이다. 
 * 그런데 또 다시 /movie-detail로 바로 이동하면 오류가 발생한다. componentDidMount() 라이프사이클 함-
 * 수가 제대로 작동하지 않는다. 그 이유는 함수 실행 순서로 인해 Detail 컴포넌트는 render() -> compon-
 * enetDidMount()의 순서로 함수를 실행하기 때문이다. render() 함수 내에서 location.state.title을 사-
 * 용하려는데, location.state가 아까와 마찬가지로 undefined이기 때문이다. 
 * 그러므로 render() 함수에도 componentDidMount() 라이프사이클 함수에 작성한 리다이렉트 코드를 추가-
 * 해 주어야 한다. 
 * (뒷부분이 좀 알쏭달쏭하네. 익숙해지겠지?)location.state가 없으면 render()함수가 null을 반환하도록
 * 만들어서 문제 없이 실행되도록 만들었다. 그러면 바로 componentDidMount()함수가 실행되어 리다이렉트
 * 기능이 동작하게 된다. 영화 상세 페이지에 필요한 정보는 우리가 직접 입력해 보자. 드디어 영화 앱을
 * 완성했다! 지금까지 클론 코딩을 진행하느라 정말 수고많았다. 
 * 
 */