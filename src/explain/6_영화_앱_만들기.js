/* - 영화 앱을 만들기 위해 fetch() 함수 대신 사용하기 더 쉬운 axios를 사용하기로 했다. 터미널에 명령-
 * 어를 입력하여 axios를 설치해 주자. axios를 설치했다면, 이제 우리가 사요할 영화 API를 알아볼 차례-
 * 이다. 이 책에서는 YTS라는 곳에서 제공하는 영화 데이터 API를 사용할 것이다. 
 * 
 * [YTS 영화 데이터 API 살펴보기]
 * - 크롬 브라우저 주소 입력 창에 yts.lt/api라고 입력하면 YTS 영화 데이터 API 사이트에 접속할 수 있-
 * 다. 여기서 우리는 'List Movies API'라는 기능을 사용할 것이다. List Movies를 눌러보자. 
 * API는 그림에서 보듯 특정 주소(Endpoint라고 적힌 곳의 주소 참고)를 입력하면 그 주소에 맞는 결과를
 * 보내 준다. 그리고 추가로 특정 주소에 조건(Endpoint Parameter라고 적힌 곳 참고)을 붙여 입력하면 그
 * 조건까지 고려한 결과를 보내준다. 우리는 Endpoint의 가장 위에 있는 주소를 사용할 것이다. 이 주소는
 * 최신 영화 20개에 대한 데이터를 기본으로 보내 준다. 
 * 
 * [영화 목록 데이터 확인해보기]
 * - 정말 그런지 API를 바로 사용해 보자. 크롬 브라우저 주소 창에 있는 Endpoint의 주소 중 .json으로
 * 끝나는 주소를 입력해 보자. 
 * (뭔가 줄텍스트가 엄청나게 뜬다. 하지만 나는 이제 이게 무슨 용도인지, 어떻게 가공하는지 알고있지)
 * 그러면 복잡해 보이는 텍스트가 화면에 표시되는 것을 볼 수 있다. 이건 JSON 데이터이다. 그냥 간단하-
 * 게 JS의 객체와 비슷한 데이터라고 이해하면 된다. 지금은 JSON 데이터에 줄바꿈이 없어서 보기가 어렵-
 * 다. JSON 데이터를 좀 더 편하게 보려면 크롬 브라우저의 'JSON Viewer'라는 확장 도구를 설치하면 된다. 
 * 설치 후 페이지를 새로고침하면, 데이터 관련 정보가 잘 정리되어 보여질 것이다. 하나씩 살펴보자. sta-
 * tus 키값은 응답 상태 메시지이다. API의 응답 상태가 정상이므로 "ok"이라고 문자열을 보내주고 있다. 
 * data 키값에 영화 데이터가 포함되어 있다. movie_count 키값은 API가 보내준 영화 데이터의 개수이고, 
 * limit 키값은 보내준 데이터의 개수이다. 이런 식으로 사용할 API의 데이터를 살펴보는 것이 중요하다. 
 * movies 키값이 API에서 보내준 영화 데이터의 알맹이다. 화면에서 보듯 movies는 배열이고, 그 안에 객-
 * 체가 들어 있다. 객체에는 id, url, imdb_code, title, ...와 같은 키값이 보인다. 
 * (객체 안에 배열, 배열 안에 객체, 객체 안에 또 객체, 배열... 이것들을 가공해야 한단 말이지)
 * 그런데 YTS에는 문제가 하나 있다. YTS에서 영화 토렌트 파일을 업로드하고 있는데, 이는 불법이다. 그-
 * 러다 보니 매번 접속해야 하는 주소가 변경된다. 이 책이 나온 주소가 바뀌면 영화 앱을 만들기 곤란해-
 * 질 것이다. 그래서 본 교재를 통해 학습할 수 있도록 YTS proxy API를 만들었다. 앞으로 이것을 '노마드
 * 코더 영화 API'라 부를 것이다. 이건 불법이 아니므로 사용해도 괜찮다. 
 * 
 * [노마드 코더 영화 API 사용하기]
 * - 노마드 코더 영화 API 깃허브에 접속해보면 README.md에 간단한 소개 글이 적혀있을 것이다. How to u-
 * se를 읽어 보자. 
 * YTS의 endpoint /list_movies.json을 쓰려면 yts-proxy.now.sh에 /list_movies.json을 붙이면 된다고
 * 설명하고 있다. 만약 YTS의 다른 endpoint와 함께 노마드 코더 영화 API를 쓰려면 yts-proxy.now.sh에 
 * endpoint를 붙이기만 하면 된다. 다음 표를 보면 노마드 코더 영화 API를 어떻게 써야 할지 대충 감이
 * 올 것이다. 
 * yts-proxy.now.sh/list_movies.json을 입력하면 액션 05에서 본 것과 같은 결과를 얻을 수 있을 것이다. 
 * API가 무엇이고, 어떻게 사용하는지 알아보았다. 
 * 
 * [영화 정보 더 자세히 살펴보기]
 * - 마지막으로 영화 정보를 더 자세히 보여주는 노마드 코더 영화 API를 사용해 보자. yts-proxy.now.sh/
 * movie_details.json을 입력하면 된다. 그런데 이렇게만 검색하면 아무것도 나오지 않는다. 영화 정보를
 * 더 자세히 보여주는 API가 movie_id 라는 조건을 요구하기 때문이다. 
 * 
 * [영화 정보를 더 자세히 보기 위해 조건 추가하기]
 * - yts.mx/api#movie_details에 접속하면 movie_details Endpoint는 movie_id가 필수임을 알 수 있다. 
 * 즉, movie_id를 yts-proxy.now.sh/movie_details.json에 추가해야 한다. 
 * Examples에 있는 주소를 참고하면 movie_id를 어떻게 추가해야 하는지 알 수 있다. 
 * 
 * [movie_id가 10인 영화 정보 살펴보기]
 * - 우리는 노마드 코더 영화 API를 사용할 것이므로 yts-proxy.now.sh 로 시작하는 주소를 쓰면 된다. y-
 * ts-proxy.now.sh/movie_details.json 을 입력한 다음 ?movie_id=10을 이어 분이면 아이디가 10인 영화의
 * 자세한 정보가 나타날 것이다. 
 * 이런 식으로 영화 정보를 하나하나 자세히 가져오면 year, rating, runtime, genres, ... 등과 같은 정-
 * 보도 영화 앱에 출력할 수 있을 것이다. 그러면 우리의 영화 앱에서 API를 사용하려면 어떻게 해야 할까?
 * App.js 파일 맨 위에 axios를 import한 다음, componentDidMount() 함수에서 axios로 API를 호출하면 된-
 * 다. 
 * 
 * [노마드 코더 영화 API를 영화 앱에서 호출하기]
 * - axios.get() 함수의 인자에 URL을 전달하여 API를 호출했다. 그리고 setTimeout()은 이제 지우자. 
 * 리액트 앱을 실행하면 화면에 Loading...만 표시되고 있지만 이미 axios가 동작하고 있는 상태이다. 개-
 * 발자 도구를 열어 Network 탭을 연 다음 페이지를 새로고침해 보자. 그러면 Network 탭의 내용 중 Name
 * 이라는 항목에 list_movies.json 이라고 나온 부분이 나오는데, 이는 axios가 API를 호출하고 있기 때문-
 * 에 생긴 것이다. 
 * Network 탭을 보니 axios로 얻은 데이터로 아무것도 안할 뿐 axios는 분명 잘 동작하고 있다. 이제 axio-
 * s를 활용한 API 호출에 성공했으니 이제 우리에게 필요한 영화 데이터를 추출하면 된다. 
 * 그 전에 axios.get()의 실행이 분리될 수 있도록 새 함수를 만들자. axios는 네트워크를 사용하므로 느-
 * 리게 동작하기 때문에 axios.get()이 반환한 영화 데이터를 잡으려면 JS에게 axios.get()을 포함하고 있-
 * 는 함수의 실행이 끝날 때까지 시간이 걸릴 수 있다고 알려야 하기 때문이다. 
 * 
 * [getMovies() 함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기]
 * - getMovies() 함수를 만들고, 그 함수 안에서 axios.get() 이 실행되도록 만들자. axios.get()이 반환-
 * 한 값은 movies 에 저장했다. 
 * 이제 componentDidMount() 함수가 실행되면 this.getMovies() 가 실행될 것이다. 이때 JS에게 'getMovi-
 * es() 함수는 시간이 좀 필요하다'라고 말해야만 axios.get()이 반환한 데이터를 제대로 잡을 수 있다. 
 * 그렇게 하기 위해 async, await라는 두 가지 키워드를 사용한다. 
 * 
 * [getMovies()에 async를 붙이고, axios.get()에 await 붙이기]
 * - JS에게 'getMovies() 함수는 시간이 필요하다'라고 말하려면 async를 () 앞에 붙이고 실제 시간이 필-
 * 요한 대상인 axios.get() 앞에 await를 붙이면 된다. movies에 있는 값이 궁금하면 console.log()로 출-
 * 력해 봐도 좋다. 
 * async 키워드는 JS에게 getMovies() 함수가 비동기라고 알려주는 것이다. 그리고 await 키워드는 JS에게
 * '비동기로 지정한 함수 내부의 await가 붙은 함수의 실행 완료를 기다렸다가 끝나면 계속 진행해 줘'라고
 * 전달하는 역할을 한다. 여기서 집중해야 할 내용은 'API에서 데이터를 받아오는 axios.get()을 실행하려-
 * 면 시간이 필요하고, 그 사실을 JS에게 알려야만 데이터를 잡을 수 있으므로 async, await를 사용했다'
 * 는 것이다. 바로 다음 내용에서 axios.get()으로 잡은 영화 데이터를 출력해 볼 것이다. 
 * 
 * [영화 데이터 화면에 그리기]
 * - 우리는 API로 받아온 영화 데이터 중에서 data 키에 집중할 것이다. 우리에게 필요한 영화 데이터가 들-
 * 어있기 때문이다. 
 * data 키를 또 펼쳐보면 그 안에 또다시 data 키가 들어 있을 것이다. 자세히 살펴보면 그 안에 movies
 * 배열이 들어 있다. 
 * movies 키 안에 우리에게 필요한 영화 데이터가 들어 있다. id(아이디), url(주소), imdb_code, title(-
 * 제목), title_english(영어 제목)와 같은 키가 들어 있다. data -> data -> movies 순서대로 객체에 접-
 * 근하면 원하는 데이터를 추출할 수 있을 것이다(API를 받은 뒤, 그 API의 데이터를 어떻게 받아야 할 지
 * 확인하는 작업인듯)
 * 
 * [객체에 있는 movies 키에 접근하기]
 * - 그러면 정말로 원하는 데이터를 추출하기 위해 movies 변수에 있는 movies 키의 값을 추출해 보자. mo-
 * voies.data.data.movies와 같이 수정한 다음 Console 탭을 열어 보면 movies 변수에는 이제 배열이 들어
 * 있음을 알 수 있다. 배열에는 객체가 20개 들어 있다. 이제 우리가 원하는 진짜 영화 데이터만 추출하게
 * 되었다. 
 * 
 * [객체에 있는 movies 키에 조금 더 똑똑하게 접근하기]
 * - 다만, movies.data.data.movies와 같은 방법으로 객체에 접근하는 것은 깔끔하지 않다. ES6을 사용한-
 * 다면(사용하지 않는다면...묵념)비구조화 할당을 사용하는 게 좋다. 다음과 같이 비구조화 할당을 사용하-
 * 도록 코드를 수정하여 movies 키에 접근해 보자. 
 * 비구조화 할당은 props를 공부하면서 사용했던 문법이니 더 자세히 설명하진 않겠다. 영화 데이터를 받-
 * 아오고 비구조화 할당을 통해 데이터를 추려냈다면, 이제 이 영화 데이터를 state에 저장해야 한다. 
 * 
 * [movies state에 영화 데이터 저장하기]
 * - this.setState({ movies : movies })와 같이 작성하면 movies state에 영화 데이터를 저장할 수 있다. 
 * console.log()는 이제 사용하지 않을 것이므로 지워주자. 
 * 참고로 movies state와 axios.get()의 결과를 저장할 변수 movies의 이름이 같다고 해서 둘을 혼동하면
 * 안 된다. 하나는 state고 하나는 axios.get()의 결과를 담을 변수이다. 
 * ES6에서는 객체의 키와 대입할 변수의 아름이 같다면 코드를 축약할 수 있다. { movies : movies }는 키-
 * 와 대입할 변수의 이름이 같으므로 { movies }로 축약할 수 있다. 
 * 
 * [isLoading state true에서 false로 업데이트하기]
 * - 영화 앱 데이터 로딩이 완료되었다면 화면에 Loading... 대신 We are ready 가 표시되도록 해 보자. 
 * 이를 진행하려면 isLoading state 를 true에서 false로 업데이트해 주면 된다. 
 * 영화 앱을 실행해 보면 처음에는 isLoading...이 화면에 나타나닥, 조금 뒤에 We are ready로 바뀌는 것-
 * 을 볼 수 있다. 영화 데이터를 가져오는 데 성공했고, 로딩 상태 변경까지 성공했다. 다만 아직도 영화
 * 데이터를 출력하고 있지는 않다. 단순히 문자열 We are ready를 출력하고 있을 뿐이다. movies state를
 * 화면에 그리기 위해 Movie 컴포넌트를 추가해줄 필요가 있다. 
 * src 폴더에 Movies.js 파일을 새로 만들고 다음과 같이 Movie 컴포넌트의 기본 골격을 작성해 보자. 아직-
 * 은 출력할 내용이 없으므로 h1 태그를 반환하도록 만들어 보자. 
 * Movie 컴포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성할 것-
 * 이다(함수형도 state 사용이 가능하지만, 여기서는 다루지 않을 듯)또, Movie에 넘어와야 하는 영화 데-
 * 이터를 정의하고 관리하기 위해 prop-types를 사용했다. 
 * 가장 중요한 건 영화 데이터이다. 그러니까 Movie.propTypes의 내용을 우선 채울 것이다. Movie.propTy-
 * pes의 내용을 채우기 이ㅜ해 노마드 코더 용화 API로 받은 데이터를 다시 한번 살펴보자. 
 * 
 * [영화 데이터 다시 살펴보기]
 * - [Console] 탭에 출력된 내용은 확인하기 불편하므로 yts-proxy.now.sh/list_movies.json 에 접속해서
 * 우리가 사용할 영화 데이터를 다시 확인해 보자. 
 * 노마드 코더 영화 API가 보내 준 영화 데이터 중 필요한 것만 골라서 영화 앱에 반영할 것이다. id, tit-
 * le, rating과 같은 것 들을 이용할 것이다. 
 * 
 * [Movie.propTypes 작성하기]
 * - 우선 id를 Movie.propTypes에 추가해 보자. year, title, summary, poster를 각각 Movie.propTypes에
 * 추가해 주자. 자료형이 틀리지 않도록 주의하자. 
 * 여기서 poster props는 영화 포스터 이미지 주소를 저장하기 위한 문자열이다. 즉 이미지 관련 데이터는
 * 문자열(이미지 주소)로 정의해 준다. 
 * yts-proxy.now.sh/list_movies.json 에 접속한 다음 스크롤을 조금만 내리면 medium_cover_image 키를 
 * 찾을 수 있다. 키와 키값을 자세히 살펴보면 medium_cover_image 키값에 영화 포스터 이미지가 저장되어
 * 있는 주소가 있다. 이 갑승ㄹ 사용하면 영화 포스터 이미지도 쉽게 출력할 수 있을 것이다. 다만 props
 * 의 이름을 이해하기 쉽도록 API에서 정해준 medium_cover_image가 아니라 poster라고 지정했다. 
 * 이제 Movie에서 필요한 prop-types를 다 추가했다. 그런데 우리가 만들 영화 앱이 그냥 영화 포스터와 정-
 * 보를 출력해 준다면 매력이 떨어질 것이다. 평점(rating)순서로 정렬해서 보여주는 영화 앱이면 매력이
 * 올라갈 것이다.
 * 
 * [노마드코더 영화 API 정렬 기능 사용해 보기]
 * - 바로 노마드 코더 영화 API에 구현되어 있는 정렬 기능을 사용하면 된다. API 문서를 살펴보면 yts.lt/
 * api#list_movies에 접속한 다음 Endpoint Parameters를 확인해 보면 sort_by라는 parameter가 보일 것-
 * 이다. 
 * Parameter의 이름에서 볼 수 있듯 sort_by를 사용하면 영화 데이터를 정렬할 수 있다. 그러면 Parameter
 * 를 사용하려면 어떻게 해야 할까? 문서에서 제공하는 Examples를 보면 된다. 
 * Examples를 보자. Examples에는 quality가 3D인 영화만 불러오는 URL이 적혀 있다. 오른쪽엔 Parameter(
 * quality)와 Parameter에 넘겨줄 값(3D)을 = 으로 이어서 작성하면 된다. 이런 식으로 sort_by를 사용하-
 * 면 된다. 
 * yts-proxy.now.sh/list_movies.json?sort_by=rating에 접속해 보면 평점 내림차순으로 영화 데이터를
 * 보여 줄 것이다(체크박스를 누르면 평점순으로 보여주는 기능을 추가하는게 사람들이 쓰기 편한 앱이 될-
 * 것같은데. 그건 나중에 실력이 올랐을 때 구현하면 되니).
 * 
 * [axios.get() 수정하기] 
 * - 이제 새로운 URL로 영화 데이터를 불러와야 하므로 axios.get()에 yts-proxy.now.sh/list_movies.jso-
 * n?sort_by=rating을 전달하자. 
 * 이제 평점 내림차순으로 영화 데이터를 가져올 수 있게 되었으므로 App 컴포넌트에서 Movie 컴포넌트로
 * id, title, year, summary, poster props를 넘겨주면 된다.Movie 컴포넌트가 이 props를 받아 출력할
 * 수 있도록 Movie 컴포넌트를 마저 완성해 보자. 
 * 자, 이제 Movie 컴포넌트를 작성했다. App 컴포넌트에서 Movie 컴포넌트를 그리면 title이 출력되도록
 * 만들 것이다. 이를 위해 map() 함수를 사용하자. 
 * 
 * [App 컴포넌트에서 Movie 컴포넌트 그리기]
 * - 비구조화 할당으로 this.state에 있는 movies를 얻은 다음, App 컴포넌트에서 We are ready를 출력하-
 * 고 있는 자리(로딩이 다 되면 실행되는 자리)에 movies.map() 을 사용하자. 
 * (왠진 모르지만 혼자서 뚝딱 만들어버렸다)지금까지 만든 내용을 정리해 보자. 우리는 노마드 코더 영화
 * API를 통해 영화 데이터를 가져왔다. 이때 axios.get() 함수를 사용했는데 이는 시간이 필요한 함수이므-
 * 로 async, await를 사용했다. 그리고 state에 영화 데이터가 저장되면(업데이트되면)isLoading...을 보여
 * 주던 화면을 Movie 컴포넌트를 보여 주도록 만들었다. 다음 단원부터는 영화 앱을 예쁘게 꾸며 보고(이게
 * 가장 힘들 듯하다. 로직은 배워서 설계하면 되지만 예쁜 디자인은 그럴 수 없으니까), 나머지 props도
 * 출력하도록 만들 것이다. 
 * 
 */