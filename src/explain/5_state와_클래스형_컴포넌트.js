/* - 이번 시간에는 state에 대해 알아볼 것이다(props가 다른 데서 가져오는거라면, state는 자기 자신이
 * 알아서 선언하고 쓰는 데이터로 알고있는데, 아닌가?). state는 동적 데이터, 즉 변경될 가능성이 있는
 * 데이터를 말한다. 객체를 예로 들면 객체의 구성 요소 중 일부가 있다가 없을 수도 있고, 구성 요소가 하-
 * 나였다가 둘이 될 수도 있다. props는 그런 데이터를 다룰 수 없지만, state는 다룰 수 있다. 
 * 그런데 state는 클래스형 컴포넌트에서 사용할 수 있는 개념이다. 일단 본 교재에서는 클래스형 컴포넌-
 * 트 위주의 실습을 진행할 것이다(나중에 실력이 늘면 Hook 함수를 이용하여 자유롭게 함수형 컴포넌트를
 * 만들 수도 있을 것이다).
 * 여기서 중요한 내용은 클래스형 컴포넌트가 되려면 App 클래스가 리액트가 제공하는 Component 클래스를
 * 반드시 상속받아야 한다. 그런데 상속에 대한 내용은 설명하는데 많은 시간이 걸리므로 본 교재에서는
 * 설명을 생략할 것이다. 상속에 대한 개념을 모르더라도 본 실습에는 지장이 없다(난 알지롱).
 * App 컴포넌트를 작성했다면, JSX를 반환하도록 해 보자. 유의할 점은, 클래스형 컴포넌트에서 App 컴포넌-
 * 트는 클래스이기 때문에 함수형 컴포넌트와 달리 자체적인 반환 능력이 없으므로 render() 함수를 이용-
 * 해 JSX를 반환한다는 것이다. 
 * 클래스형 컴포넌트 : render() 함수를 이용해 JSX를 반환한다. 라이프사이클 이용, 서버 사이드 렌더링 X
 * 함수형 컴포넌트 : return 문을 이용해 JSX를 반환한다. React Hooks 사용, 서버 사이드 렌더링 O
 * 리액트는 클래스형 컴포넌트의 경우 render() 함수를 찾아 자동으로 실행시켜 준다. 다시 말해 render
 * 함수는 클래스 내에 선언되어 있지만 따로 실행할 필요 없이 리액트에 의해 알아서 실행된다. 
 * 
 * [state 정의하기]
 * - 클래스형 컴포넌트를 사용하려는 이유는 동적 데이터 state를 사용하기 위함이다. state를 사용하려면
 * 다음과 같이 state = {} 라고 작성하여 state를 정의한다. state를 사용하려면 반드시 클래스형 컴포넌-
 * 트 안에서, 소문자를 이용하여 state 라고 적으면 된다. 
 * 이제 state에 count를 추가한 다음 count의 키 값을 출력해 보자. 
 * state는 동적 데이터를 저장할 수 있어야 한다. 그러려면 값을 바꿀 수 있도록 코드를 작성해야 한다. 
 * 이제 버튼을 클릭하는 등의 '사용자 동작'에 따라 state의 count를 바꿀 수 있도록 코드를 작성해 보자. 
 * 
 * [버튼을 눌러서 count state 값 변경해 보기]
 * - 다음과 같이 Add 버튼과 Minus 버튼을 추가하자. 
 * Add 버튼을 누르면 숫자가 증가, Minus 버튼을 누르면 숫자가 감소하도록 설정해 보자. 여기서 주의할
 * 점은, JS와 달리 리액트에서는 this.state.count++ 또는 this.state.count = this.state.count + 1 과 
 * 같은 코드를 허용하지 않는다는 점이다. 왜 그런지 자세히 알아보자. 
 * 리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력한다. 그런데
 * state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않는다. 이런 방식으로 리액트는 개발-
 * 자가 state를 직접 변경할 수 없도록 제한한다. 
 * state를 변경하고 싶은데 직접 변경할 경우 render() 함수가 실행되지 않게 되어 값을 바꿀 수 없다. 
 * 때문에 state를 간접적으로 변경해 주는 setState() 함수를 사용한다. 
 * 
 * [setState로 count state 변경하기]
 * - 다음과 같이 setState를 함수의 첫 번째 인자로 count 키와 키값을 넣은 객체를 전달해 보자. 
 * 이번엔 버튼을 누르니 숫자가 잘 바뀐다. 어떻게 이런 일이 가능할까? 리액트가 setState() 함수의 호출-
 * 을 감시하고 있기 때문이다. setState() 함수가 동작하면 state가 새로운 값으로 바뀌고, 이어서 render()
 * 함수를 동작시켜 화면을 업데이트하는 것이다. 
 * 실제로 개발자 도구를 열어 HTML을 확인해 보면, 버튼을 번갈아 누를 때 변경된 state의 값을 반영하려고
 * HTML만 바뀔 것이다. 이것이 '리액트의 화면 구성이 빠른 이유'이다. 필요한 부분만 바뀌기 때문이다. 
 * 게다가 새로고침이 일어나지 않으므로 화면이 깜빡거리지도 않는다.   
 * 
 * [버튼을 누르면 const state의 값을 증가 또는 감소시키기]
 * - 이제 다시 Add, Minus 버튼을 누르면 숫자를 증가시키거나 감소시키기로 했던 목적으로 돌아가자. 다음-
 * 과 같이 코드를 작성하자. 
 * 앱을 실행하면 잘 동작할 것이다. 다만 { count : this.state.count + 1 }와 같이 코드를 작성하여 sta-
 * te를 업데이트하는 방법은 별로 좋지 않다. 성능 문제가 생길 수 있기 때문이다. 그 대신 setState() 함-
 * 수의 인자로 함수를 전달하면 성능 문제 없이 state를 개선시킬 수 있다. 
 * setState() 함수는 호출되면 데이터를 통째로 갈아치우지 않고, 이전 state와 새로운 state를 비교하여
 * 바뀐 데이터만 업데이트해 준다. 그래서 변경 대상이 아닌 키와 키값은 그대로 유지가 된다. 
 * 이제 state의 사용 방법을 제데로 알았을 거라 믿는다. state는 동적 데이터를 사용할 때 반드시 도입해-
 * 야 할 요소이다. 영화 앱에서 동적 데이터를 다룰 때 state를 자주 사용할 것이다. 
 * 
 * [클래스형 컴포넌트의 일생 알아보기]
 * - 클래스형 컴포넌트를 쓰면 state와 render() 함수와 같이 직접 구현하지 않았거나 리액트가 미리 구현-
 * 해 놓은 함수를 쓸 수 있다. 클래스형 컴포넌트에는 render() 함수 외에도 여러 함수가 있는데, 그중에서-
 * 도 클래스형 컴포넌트의 일생을 만들어 주는 라이프사이클 함수를 순서대로 알아볼 것이다. 데이터를 가-
 * 져오려면 라이프사이클 함수가 꼭 필요하다. 
 * 라이프사이클 함수의 종류는 꽤 많다. 여기서는 라이프사이클 함수를 모두 공부하진 않을 것이다. 일단
 * 영화 앱을 만드는데 필요한 라이프사이클 함수에 대해 자세히 알아볼 것이다. 
 * 
 * [constructor() 함수 알아보기]
 * - constructor()는 render()함수보다 먼저 실행되는 함수이다. constructor() 함수에 전달되는 인자와
 * super(props)에 대한 내용은 설명하는데 긴 시간이 필요하므로 일단은 함수의 호출 순서가 어떤지에 대해-
 * 서만 알아보고 넘어가도록 하자(나는 알지롱). 
 * 
 * [componentDidMount() 함수 알아보기]
 * - 다음으로 알아볼 함수는 componentDidMount() 이다. componentDidMount() 함수는 이름에서 짐작할 수
 * 있듯이 컴포넌트가 처음 화면에 그려지면 실행되는 함수이다. componentDidMount() 함수는 render() 함수
 * 보다 늦게 실행된다. 여기까지 알아본 constructor()함수, render()함수, componentDidMount() 함수 이
 * 셋을 통틀어 마운트(Mount : 조직하다, 올라가다)로 분류하는 라이프사이클 함수이다. 
 * 
 * [componentDidUpdate() 함수 알아보기]
 * - componentDidUpdate() 함수는 이름에서 알 수 있듯이 화면이 업데이트되면(새로 그려지면)실행된다. 
 * 앞에서 만든 숫자 증감 앱에서 화면은 Add버튼, Minus버튼을 눌러서 setState()함수를 실행시킬 때 업데-
 * 이트 되었다. setState() 함수가 실행되면 자동으로 render() 함수가 다시 실행되면서 화면이 업데이트
 * 된다. 
 * 
 * [componentWillUnmount() 함수 알아보기]
 * - 라이프사이클 함수의 마지막 단계는 컴포넌트가 죽을 때, 즉 언마운트(Unmount)될 때이다. 언마운트로 
 * 분류한 생명주기에서 꼭 알아야 할 함수는 componentWillUnmount()이다. componentWillUnmount() 함수-
 * 는 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용한다. 
 * 
 * [영화 앱 만들기 워밍업]
 * - 클래스형 컴포넌트의 생명주기 함수를 적용하여 Movie 컴포넌트를 구성해 보자. 기존에 작성했던 App 
 * 컴포넌트의 코드를 모두 지우자. 그런 다음 영화 앱 데이터를 로딩하는 모습을 상상해 보자. 처음에는
 * 영화 앱 데이터가 없지만, 영화 앱 데이터를 로딩하면 그때는 영화 앱 데이터가 있을 것이다. 그런 상태-
 * 를 구분해 줄 변수가 필요한데, 그게 바로 isLoading state이다.  
 * isLoading state로 로딩 중 표시 기능을 만들 것이다. 우선 isLoading state를 추가해 보자. isLoading
 * state는 컴포넌트가 마운트되면 true여야 하므로(처음에는 로딩 상태이므로)다음과 같이 코드를 작성해
 * 주자. 
 * isLoading state에 따라 '로딩 중이다', '로딩이 다 됐다'와 같은 문장을 화면에 출력하면 좋을 것이다. 
 * 비구조화 할당과 삼항 연산자를 활용해서 로딩 상태를 알려주는 문장을 출력하도록 만들자. 
 * 여기서 App 컴포넌트가 그려지면(render() 함수가 실행되면)호출되는 생명주기 함수는 무엇일까? 바로 
 * componentDidMount() 함수이다. 이 함수에 setTimeout() 함수를 적용해서 영화 데이터가 로딩되는 현상-
 * 을 구현해 보려고 한다. setTimeout() 함수는 첫 번째 인자로 전달한 함수를 두 번째 인자로 전달한 값
 * (밀리 초)후에 실행해 준다. 6초 후에 isLoading state를 false로 바꿔 보자. 
 * 영화 앱을 실행한 상태라면 componentDidMount() 함수가 실행될 수 있도록 새로 고침을 하여 Loading...
 * 이 화면에 표시된 후 6초 뒤에 We are ready가 표시되는지 확인해 보자. 
 * componentDidMount() 함수에서 무엇을 해야 하는지 감이 잡힐 것이다. 바로 영화 앱을 로딩하는 것이다. 
 * 그러려면 JS의 fetch() 함수를 알아야 하는데, fetch() 함수 역시 이 책의 범위를 넘어가므로 생략하겠-
 * 다(이건 나도 모름. url 요청으로 데이터를 받아오는 함수. 한번 받아온 후 res 객체의 json() 메소드를
 * 이용하여 Promise의 형태로 반환해야 데이터 이용이 가능해진다. fetch() 함수 대신 axios를 이용하면
 * 더 편하게 데이터를 받아오는 것이 가능함. 나는 axios를 통해 가짜 API를 받아 표시하는 연습을 했으니
 * fetch() 함수는 나중에 실력이 올랐을 때 사용해도 될 듯 하다). fetch() 함수는 리액트 초보자가 다루-
 * 기 어려우므로 대신 Axios를 사용할 것이다. 아직은 Axios를 사용할 단계는 아니므로 참고만 해 두자. 
 * componentDidMount() 함수로 데이터를 로딩하여 이를 state에 저장하고, 로딩한 데이터를 movies state
 * 에 저장하기 위해 movies state를 만들자. 자료형은 당연히 배열이고, 여기에 객체 원소가 쭈루루룩
 * 들어올 것이다(객체가 아닌 배열로 저장해야 들어온 데이터들을 정리할 수 있다).
 * state를 항상 미리 계획해서 작성해 두는것은 좋은 코딩 습관이다. 나중에 setState() 함수로 movies s-
 * tate에 데이터를 추가하는 것도 가능하다. 하지만 이런 프로그래밍은 좋지 않은 방법이다. 때문에 미리
 * 데이터를 정의해 두는 것을 권장한다. 어떤 데이터를 받고 어떻게 화면에 출력할 지 미리 계획을 짜놓는 
 * 것이 가장 좋은 코딩 습관이다. 
 */