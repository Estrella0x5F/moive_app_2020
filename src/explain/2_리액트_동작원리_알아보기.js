/* index.html의 <div id = "root">와 </div> 사이가 비어 있음에도 Hello가 화면에 표시되는 이유를 알아
 * 보자. 리액트는 우리가 작성한 프로젝트 폴더에 있는 코드를 JS를 이용하여 해석하여 그 결과물을 index-
 * html로 끼워 넣는다. 자세히 설명하자면, 리액트는 index.html의 <div id = "root"></div> 중간에 넣을
 * 결과물을 프로젝트 폴더에 있는 파일을 해석하여 만들어 넣는 역할을 담당한다(아하, index.html이 최종
 * 종착지인거구나). index.js를 열어 ReactDom.render(...)라고 표시된 부분을 보면 '...'이 들어갈 자리-
 * 에 '<App />, document.getElementById('root')'가 들어 있다. 이 코드가 바로 App.js 파일에 작성한
 * 코드를 index.html의 아이디가 'root'인 엘리먼트에 넣어 주는 것이다. 만약 index.html의 div 태그의 
 * 아이디를 'root'가 아닌 다른 단어로 변경하면, App.js 컴포넌트의 ReactDOM.render(...)의 getElement-
 * ById 함수에 제공하는 문자열도 동일한 단어로 변경해야 렌더링 오류가 발생하지 않는다. App.js 컴포넌-
 * 트를 해석하여 얻은 정보들을 index.html에 차례대로 채워나가는 형식이다. 이러한 방식으로 리액트는 처-
 * 음부터 모든 html을 그려넣지 않고, 일부 html만 그리고 이후 엘리먼트를 추가하거나 제거하는 방식으로
 * 화면을 그리기 때문에 렌더링 속도가 빠르다는 장점이 있다. 
 * 
 */