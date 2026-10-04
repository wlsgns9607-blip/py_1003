const C=["1~2장 자료형","3장 제어문","4장 함수·입출력","5장 클래스·모듈·예외·내장함수","6장 실무·데이터·고급"];
// [챕터, 문제, 코드, 보기, 정답(0부터), 쉬운 풀이(단계), 한줄 팁]
const Q=[
[0,"다음 중 파이썬의 기본 자료형이 아닌 것은?","",["int","str","array","list"],2,
 ["<code>int</code>는 정수, <code>str</code>은 문자열, <code>list</code>는 리스트예요. 모두 따로 준비하지 않아도 바로 쓸 수 있어요.","<code>array</code>는 <code>import array</code> 로 모듈을 불러와야 쓸 수 있어요. 그래서 '기본' 자료형이 아니에요."],"기본 자료형: 숫자, 문자열, 리스트, 튜플, 딕셔너리, 집합"],
[0,"다음 코드의 실행 결과는?",'a = "Life is too short"\nprint(a[3:7])',["e is","fe i","fe is","e is t"],0,
 ["글자에 번호(인덱스)를 0부터 매겨요: L=0, i=1, f=2, e=3, 공백=4, i=5, s=6","<code>[3:7]</code>은 3번부터 <b>7번 직전(6번)</b>까지예요. 끝 번호는 포함되지 않아요!","3번 e, 4번 공백, 5번 i, 6번 s 를 이어 붙이면 <code>e is</code>"],"[시작:끝] 은 '끝 번호 바로 앞까지' 가져온다고 기억하세요"],
[0,"다음 중 값이 변경 불가능한(Immutable) 자료형은?","",["리스트 (list)","튜플 (tuple)","딕셔너리 (dict)","집합 (set)"],1,
 ["Immutable은 '한번 만들면 못 바꾼다'는 뜻이에요.","리스트·딕셔너리·집합은 요소를 넣고 빼고 바꿀 수 있어요.","튜플 <code>(1, 2, 3)</code>은 만든 뒤에 수정·삭제가 안 돼요."],"튜플 = 잠겨 있는 리스트"],
[0,"딕셔너리 자료형에 대한 설명으로 옳은 것은?","",["순서가 존재하여 인덱싱([0])으로 값을 가져올 수 있다.","키(Key)는 중복될 수 있다.","키와 값(Value)의 쌍으로 이루어져 있다.","append() 메서드로 요소를 추가한다."],2,
 ["딕셔너리는 사전처럼 <code>{'이름': '홍길동'}</code> 처럼 <b>키: 값</b> 짝으로 저장해요.","값을 꺼낼 때는 번호가 아니라 키로 꺼내요: <code>d['이름']</code>","키는 중복되면 안 되고, <code>append()</code>는 리스트 전용이에요."],"사전에서 '단어(키)'로 '뜻(값)'을 찾는 것과 같아요"],
[1,"파이썬에서 조건문을 작성할 때 else if 대신 사용하는 올바른 키워드는?","",["elseif","elif","elsif","case"],1,
 ["다른 언어의 <code>else if</code>가 파이썬에서는 <code>else</code> + <code>if</code> 를 합친 <code>elif</code> 예요.","<code>elseif</code>, <code>elsif</code>는 파이썬에 없고, <code>case</code>는 조건문 키워드가 아니에요."],"if → elif → else 순서로 써요"],
[1,"다음 코드의 실행 결과로 출력되는 값은?",'s = 0\nfor i in range(1, 5):\n    s += i\nprint(s)',["6","10","15","4"],1,
 ["<code>range(1, 5)</code>는 1부터 <b>5 직전</b>까지, 즉 1, 2, 3, 4 예요.","<code>s</code>는 0에서 시작해요. 차례로 더해 보면: 0+1=1 → 1+2=3 → 3+3=6 → 6+4=10","따라서 출력은 10 이에요."],"range(a, b)는 b를 포함하지 않아요"],
[1,"반복문 실행을 중간에 강제로 빠져나갈 때 사용하는 키워드는?","",["stop","continue","break","exit"],2,
 ["반복문을 완전히 끝내고 나가는 키워드는 <code>break</code>(부수다/끊다) 예요.","<code>continue</code>는 나가는 게 아니라 '이번 차례만 건너뛰고 다음 반복으로' 가는 거예요.","<code>stop</code>은 파이썬 키워드가 아니에요."],"break = 탈출, continue = 건너뛰기"],
[2,"파이썬에서 함수를 정의할 때 사용하는 키워드는?","",["func","define","def","function"],2,
 ["함수를 만들 때는 <code>def 함수이름(매개변수):</code> 형태로 써요.","def는 define(정의하다)의 줄임말이에요."],"def add(a, b): 처럼 써요"],
[2,"함수의 입력 매개변수 개수가 정해지지 않았을 때 튜플로 묶어주는 올바른 문법은?","",["*args","**kwargs","&args","#args"],0,
 ["입력 개수가 제각각일 때 <code>def f(*args)</code> 처럼 별(*) 하나를 붙이면 받은 값들이 <b>튜플</b>로 묶여요.","별 두 개 <code>**kwargs</code>는 <code>이름=값</code> 형태를 <b>딕셔너리</b>로 묶어요.","<code>&</code>, <code>#</code>은 이런 문법이 아니에요(#은 주석이에요)."],"별 1개 = 튜플, 별 2개 = 딕셔너리"],
[2,"파일을 읽기 모드로 열 때 사용하는 올바른 모드 문자는?","",["'w'","'r'","'a'","'x'"],1,
 ["<code>r</code> = read(읽기), <code>w</code> = write(쓰기), <code>a</code> = append(뒤에 추가)","'w'로 열면 기존 내용이 지워지니 주의하세요!"],"open('a.txt', 'r')"],
[2,"파일을 연 후 블록을 벗어날 때 자동으로 파일을 닫아주는(close) 유용한 구문은?","",["auto close","with 구문","try - except","finally"],1,
 ["<code>with open('a.txt') as f:</code> 처럼 쓰면 들여쓴 부분이 끝나는 순간 파일이 <b>자동으로 닫혀요</b>.","<code>try-except</code>는 오류 처리, <code>auto close</code>는 없는 문법이에요."],"with = 알아서 닫아주는 안전장치"],
[3,"클래스 내부에서 객체의 초기 상태를 설정하는 생성자(Constructor) 메서드 이름으로 옳은 것은?","",["__init__","__start__","__create__","__main__"],0,
 ["객체를 만들 때 <b>가장 먼저 자동 실행</b>되는 메서드가 생성자예요.","파이썬에서는 이름이 정해져 있어요: 밑줄 두 개 + <code>init</code>(initialize, 초기화) + 밑줄 두 개"],"__init__ = 초기화 담당"],
[3,"클래스 메서드의 첫 번째 매개변수로 관례적으로 사용하는 이름은?","",["this","me","self","obj"],2,
 ["메서드 안에서 '나 자신(객체)'을 가리키는 이름이 필요해요.","파이썬에서는 약속처럼 <code>self</code>를 써요. (<code>this</code>는 자바·C++ 에서 쓰는 이름이에요.)"],"def hello(self): ..."],
[3,"다른 파이썬 파일에 작성된 함수나 클래스를 현재 파일로 가져올 때 사용하는 키워드는?","",["include","import","load","require"],1,
 ["다른 파일(모듈)을 불러오는 말은 <code>import</code> 예요. 예: <code>import math</code>","<code>include</code>는 C언어, <code>require</code>는 JavaScript(Node) 등에서 쓰는 말이에요."],"import 모듈이름"],
[3,"프로그램 실행 중 오류가 발생했을 때 이를 처리하여 강제 종료를 막고 예외를 처리하는 구문은?","",["try - except","if - else","open - close","start - stop"],0,
 ["<code>try:</code> 아래에 '시도할 코드'를 쓰고, 오류가 나면 <code>except:</code> 아래 코드가 실행돼요.","그래서 프로그램이 갑자기 멈추지 않고 계속 동작해요."],"try(시도) → except(오류 시 대처)"],
[3,"다음 중 파이썬 내장 함수(Built-in function)가 아닌 것은?","",["print()","len()","sqrt()","abs()"],2,
 ["내장 함수는 아무것도 불러오지 않아도 바로 쓸 수 있는 함수예요. <code>print</code>, <code>len</code>(길이), <code>abs</code>(절댓값)가 그래요.","<code>sqrt()</code>(제곱근)는 <code>import math</code> 후 <code>math.sqrt(4)</code> 처럼 써야 해요."],"import가 필요하면 내장 함수가 아니에요"],
[3,"반복 가능한 객체(리스트 등)의 요소들을 인덱스와 함께 튜플로 묶어주는 내장 함수는?","",["zip()","enumerate()","map()","filter()"],1,
 ["핵심 단서는 '<b>인덱스(번호)와 함께</b>' 예요.","<code>enumerate(['a','b'])</code> → (0,'a'), (1,'b') 처럼 번호와 값을 짝지어 줘요.","<code>zip</code>은 리스트끼리 묶는 함수라서 번호가 붙지 않아요."],"enumerate = 번호 매기기"],
[3,"두 개 이상의 리스트를 동일한 개수만큼 1:1로 묶어줄 때 사용하는 내장 함수는?","",["zip()","pack()","joint()","collect()"],0,
 ["지퍼(zipper)처럼 양쪽을 한 칸씩 맞물려 묶는다고 생각하세요.","<code>zip([1,2], ['a','b'])</code> → (1,'a'), (2,'b')","<code>pack</code>, <code>joint</code>, <code>collect</code>는 내장 함수가 아니에요."],"zip = 지퍼처럼 짝짓기"],
[3,"다음 중 파이썬에 기본 포함되지 않은 외부 라이브러리는?","",["os","sys","time","pandas"],3,
 ["<code>os</code>, <code>sys</code>, <code>time</code>은 파이썬을 설치하면 함께 들어 있는 <b>표준 라이브러리</b>예요.","<code>pandas</code>는 <code>pip install pandas</code> 로 따로 설치해야 하는 외부 라이브러리예요."],"설치(pip)가 필요하면 외부 라이브러리"],
[3,"오류를 강제로 발생시킬 때 사용하는 키워드는?","",["throw","raise","error","panic"],1,
 ["일부러 오류를 일으킬 때는 <code>raise</code>(일으키다)를 써요. 예: <code>raise ValueError('잘못된 값')</code>","<code>throw</code>는 자바·JS, <code>panic</code>은 Go 언어에서 쓰는 말이에요."],"raise = 오류 일으키기"],

// --- 추가 실무 핵심 30문항 (총 51문제) ---
[3,"requirements.txt 파일에 명시된 모든 패키지를 일괄 설치하는 명령어는?","",["pip freeze > requirements.txt","pip install -r requirements.txt","pip update requirements.txt","pip get requirements.txt"],1,
 ["실무 협업 시 프로젝트의 의존성 패키지를 한 번에 설치할 때 <code>pip install -r requirements.txt</code>를 사용해요.","-r 옵션은 파일(requirement file)로부터 패키지 목록을 읽어온다는 의미예요."],"pip install -r requirements.txt = 패키지 일괄 설치"],
[3,"파이썬 독립 가상환경(venv)을 생성하는 표준 명령어는? (myenv 이름으로 생성 시)","",["python -m venv myenv","pip venv create myenv","python create env myenv","venv new myenv"],0,
 ["파이썬 3.3 이상부터 내장된 venv 모듈을 실행(<code>-m venv</code>)하여 가상환경 폴더를 생성해요.","프로젝트마다 서로 다른 패키지 버전을 독립적으로 관리할 수 있어요."],"python -m venv 가상환경이름"],
[3,"현재 가상환경에 설치된 패키지와 버전 목록을 requirements.txt 형식으로 출력(저장)하는 명령어는?","",["pip list --export","pip freeze","pip show all","pip env"],1,
 ["<code>pip freeze</code>는 현재 환경의 패키지 상태를 <code>pandas==2.0.3</code> 형태로 정확히 출력해요.","보통 <code>pip freeze > requirements.txt</code> 로 파일에 저장해요."],"pip freeze = 설치된 패키지 버전 고정 출력"],
[0,"딕셔너리에서 존재하지 않는 키를 조회할 때 KeyError를 방지하고 기본값을 반환받는 메서드는?",'user = {"name": "홍길동"}\nage = user.get("age", 20)',["user.find('age', 20)","user.get('age', 20)","user.pop('age', 20)","user.search('age', 20)"],1,
 ["<code>user['age']</code>로 접근하면 키가 없을 때 <code>KeyError</code>가 발생해 프로그램이 멈춰요.","<code>dict.get(key, 기본값)</code>을 쓰면 키가 없어도 에러 없이 기본값을 안전하게 가져와요."],"dict.get(키, 기본값) = 안전한 키 조회"],
[0,"중첩 리스트가 포함된 객체를 복사할 때, 내부 원소까지 완전히 독립적으로 복사(깊은 복사)하는 방법은?",'import copy\na = [1, [2, 3]]\nb = copy.deepcopy(a)',["b = a","b = a.copy()","b = copy.copy(a)","b = copy.deepcopy(a)"],3,
 ["일반 얕은 복사(<code>copy()</code>)는 내부 2차원 리스트의 주소를 공유하여 원본이 변경될 위험이 있어요.","<code>copy.deepcopy()</code>는 중첩된 모든 객체를 재귀적으로 새로 복사해요."],"중첩 가변 객체는 copy.deepcopy()"],
[4,"JSON 문자열을 파이썬 딕셔너리나 리스트 객체로 변환(역직렬화)하는 json 모듈 함수는?",'import json\ndata = json.loads(\'{"name": "철수", "age": 25}\')',["json.dumps()","json.dump()","json.loads()","json.load()"],2,
 ["문자열(String)에서 읽어올 때는 끝에 's'가 붙은 <code>json.loads()</code>(Load String)를 사용해요.","반대로 파일 객체에서 직접 읽어올 때는 <code>json.load()</code>를 써요."],"loads = Load String (JSON 문자열 → 파이썬 객체)"],
[4,"파이썬 딕셔너리 객체를 JSON 형식의 문자열로 변환(직렬화)하는 json 모듈 함수는?",'import json\nobj = {"status": "ok", "code": 200}\ntext = json.dumps(obj)',["json.loads()","json.dumps()","json.read()","json.parse()"],1,
 ["파이썬 객체를 JSON 형태의 문자열(String)로 바꿀 때는 <code>json.dumps()</code>(Dump String)를 사용해요.","파일로 직접 저장할 때는 <code>json.dump()</code>를 사용해요."],"dumps = Dump String (파이썬 객체 → JSON 문자열)"],
[4,"리스트의 모든 요소에 특정 함수를 일괄 적용하여 새로운 이터레이터를 반환하는 내장 함수는?",'nums = ["1", "2", "3"]\nresult = list(map(int, nums)) # [1, 2, 3]',["filter()","reduce()","map()","apply()"],2,
 ["<code>map(함수, 반복가능객체)</code>는 요소 하나하나에 함수를 적용해 줘요.","<code>filter()</code>는 조건이 참인 것만 걸러내고, <code>map()</code>은 변환할 때 사용해요."],"map(함수, 리스트) = 일괄 변환 적용"],
[4,"이름이 없는 한 줄짜리 인라인 익명 함수를 간결하게 만들 때 사용하는 키워드는?",'square = lambda x: x ** 2\nprint(square(5)) # 25',["anonymous","lambda","func","def"],1,
 ["<code>def</code> 없이 간단한 일회용 함수를 만들 때는 <code>lambda 매개변수: 표현식</code> 문법을 써요.","<code>sorted()</code>나 <code>map()</code>의 정렬/변환 기준 인자로 자주 쓰여요."],"lambda x: x * 2 = 한 줄 익명 함수"],
[0,"리스트 원본은 그대로 유지한 채 정렬된 새로운 리스트를 반환하는 내장 함수는?",'nums = [3, 1, 4, 2]\nnew_nums = sorted(nums)',["nums.sort()","sorted(nums)","nums.order()","order(nums)"],1,
 ["<code>nums.sort()</code>는 원본 리스트 자체를 변경(In-place)하고 <code>None</code>을 반환해요.","<code>sorted(nums)</code>는 원본을 보존하고 새로 정렬된 리스트를 반환해요."],"sorted() = 새 리스트 반환, sort() = 원본 직접 수정"],
[2,"함수에서 임의 개수의 키워드 인자(key=value)를 딕셔너리 형태로 전달받는 매개변수는?",'def print_info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k}: {v}")',["*args","**kwargs","&kwargs","#kwargs"],1,
 ["위치 인자는 <code>*args</code>(튜플), 키워드 인자는 <code>**kwargs</code>(딕셔너리)로 받아요.","kwargs는 Keyword Arguments의 줄임말이에요."],"**kwargs = 키워드 인자들을 딕셔너리로 수집"],
[4,"기존 함수의 코드를 수정하지 않고 실행 전후에 부가 기능을 덧붙이기 위해 함수 위에 @를 붙여 쓰는 문법은?",'@timer\ndef heavy_task():\n    pass',["인스턴스","데코레이터","제너레이터","컴프리헨션"],1,
 ["데코레이터(Decorator)는 '장식자'라는 뜻으로, 로깅·실행시간 측정·권한 체크 등에 필수적으로 쓰여요.","함수를 인자로 받아 기능을 감싼 새로운 함수를 반환해요."],"@데코레이터 = 기존 함수 기능 확장"],
[4,"함수 내부에서 return 대신 사용되어 값을 하나씩 생성하고 메모리를 절약하는 제너레이터 키워드는?",'def count_up(n):\n    for i in range(n):\n        yield i',["return","send","yield","pass"],2,
 ["<code>yield</code>가 포함된 함수를 호출하면 제너레이터(Generator) 객체가 생성돼요.","모든 데이터를 메모리에 한 번에 올리지 않고 필요할 때마다 하나씩 산출해요."],"yield = 데이터 지연 생성 (메모리 절약)"],
[4,"OS 독립적으로 파일 및 디렉터리 경로를 객체 지향적으로 안전하게 다루기 위해 권장되는 모듈은?",'from pathlib import Path\np = Path("data") / "test.csv"',["sys","os.path","pathlib","shutil"],2,
 ["파이썬 3.4부터 도입된 <code>pathlib.Path</code>는 <code>/</code> 연산자로 경로를 결합할 수 있어 매우 직관적이에요.","윈도우와 리눅스 간의 슬래시/역슬래시 경로 차이를 알아서 처리해 줘요."],"pathlib = 모던 파이썬 경로 처리 표준"],
[4,"HTTP 요청(GET, POST 등)을 보내 외부 REST API와 통신할 때 가장 널리 사용되는 파이썬 외부 라이브러리는?",'import requests\nres = requests.get("https://api.github.com")',["requests","urllib3","http.client","socket"],0,
 ["<code>requests</code>는 파이썬에서 가장 인기 있는 HTTP 클라이언트 라이브러리예요.","<code>res.json()</code> 등으로 간편하게 응답 데이터를 파싱할 수 있어요."],"requests = HTTP API 통신 라이브러리"],
[4,"문자열 형태의 날짜 '2026-10-03'을 datetime 객체로 변환(파싱)하는 메서드는?",'from datetime import datetime\ndt = datetime.strptime("2026-10-03", "%Y-%m-%d")',["datetime.strftime()","datetime.strptime()","datetime.parse()","datetime.to_date()"],1,
 ["<code>strptime</code>은 'Parse Time'(문자열을 시간 객체로 변환)의 줄임말이에요.","반대로 datetime 객체를 문자열로 만들 때는 <code>strftime</code>('Format Time')을 써요."],"strptime = 문자열 → datetime 객체 파싱"],
[4,"datetime 객체를 원하는 형식의 포맷 문자열(예: '2026/10/03 14:00')로 변환하는 메서드는?",'from datetime import datetime\nnow = datetime.now()\ns = now.strftime("%Y/%m/%d %H:%M")',["datetime.strptime()","datetime.strftime()","datetime.format()","datetime.to_string()"],1,
 ["<code>strftime</code>은 'String Format Time'으로 datetime 객체를 특정 포맷의 문자열로 변환해요.","<code>%Y</code>(4자리연도), <code>%m</code>(월), <code>%d</code>(일), <code>%H</code>(시), <code>%M</code>(분) 형식을 지정해요."],"strftime = datetime 객체 → 지정 포맷 문자열 변환"],
[4,"리스트에서 각 요소의 등장 빈도를 세어 딕셔너리 형태로 손쉽게 계산해 주는 collections 모듈 클래스는?",'from collections import Counter\nc = Counter(["apple", "banana", "apple"]) # {"apple": 2, "banana": 1}',["defaultdict","OrderedDict","Counter","deque"],2,
 ["<code>Counter</code>는 데이터의 개수를 셀 때 매우 강력하며 <code>most_common()</code>으로 최빈값을 바로 구할 수 있어요.","반복 가능한 객체(리스트, 문자열 등)를 인자로 넣으면 즉시 빈도수가 집계돼요."],"Counter = 등장 횟수(빈도수) 자동 집계"],
[4,"양쪽 끝에서의 데이터 추가/삭제(append/pop)가 O(1) 시간복잡도로 매우 빠른 collections 모듈 자료구조는?",'from collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)\nq.pop()',["queue","deque","stack","LinkedList"],1,
 ["일반 리스트의 맨 앞 삽입(<code>insert(0)</code>)은 O(N)이지만, <code>deque</code>는 양방향 모두 O(1)이에요.","큐(Queue)나 데크(Deque)를 구현할 때 리스트 대신 반드시 사용해요."],"deque = 양방향 초고속 큐 자료구조"],
[3,"여러 개의 예외(ValueError, TypeError)를 하나의 except 절에서 묶어 처리하는 올바른 문법은?",'try:\n    pass\nexcept (ValueError, TypeError) as e:\n    pass',["except ValueError and TypeError :","except (ValueError, TypeError) :","except ValueError, TypeError :","except [ValueError, TypeError] :"],1,
 ["여러 예외를 한 번에 잡으려면 반드시 <b>괄호로 묶은 튜플 형태</b> <code>except (A, B):</code> 로 작성해야 해요.","괄호 없이 쉼표만 쓰면 구버전 파이썬 문법과 혼동될 수 있어 에러가 발생해요."],"except (오류1, 오류2): = 튜플로 묶어서 처리"],
[3,"try-except 문에서 예외 발생 여부와 상관없이 무조건 마지막에 실행되는 블록은?",'try:\n    f = open("data.txt")\nfinally:\n    print("종료")',["else","finally","finish","always"],1,
 ["<code>finally</code> 블록은 정상 실행되든, 중간에 예외가 터져서 종료되든 무조건 실행돼요.","주로 리소스 해제(파일 닫기, DB 연결 종료)에 사용돼요."],"finally = 어떤 상황에서도 반드시 실행"],
[4,"운영체제의 환경 변수(API Key, DB 비밀번호 등)를 안전하게 읽어올 때 사용하는 표준 모듈과 함수는?",'import os\napi_key = os.getenv("API_KEY", "default_val")',["sys.getenv()","os.getenv()","env.get()","config.get()"],1,
 ["보안상 중요한 민감 정보는 코드에 하드코딩하지 않고 환경 변수에 넣은 뒤 <code>os.getenv('KEY')</code>로 읽어요.","환경 변수가 없으면 None이나 지정한 기본값을 반환해요."],"os.getenv('키') = 환경 변수 안전하게 조회"],
[4,"함수의 매개변수와 반환값에 데이터 타입을 명시하여 코드 품질과 자동완성을 돕는 파이썬 기능은?",'def greeting(name: str) -> str:\n    return f"Hello {name}"',["Type Hinting(타입 힌트)","Type Casting(타입 변환)","Static Type(정적 타입)","Type Decorator"],0,
 ["파이썬 3.5부터 도입된 <code>Type Hinting</code>은 동적 언어인 파이썬에서 정적 분석 도구(mypy 등)와 IDE 지원을 극대화해 줘요.","실행 시 강제 에러를 내진 않지만 협업과 유지보수에 필수적이에요."],"name: str -> str = Type Hinting"],
[4,"Pandas DataFrame에서 특정 열 'age'의 결측치(NaN)를 0으로 대체하는 올바른 코드는?",'import pandas as pd\ndf["age"] = df["age"].fillna(0)',["df['age'].dropna(0)","df['age'].fillna(0)","df['age'].replace_nan(0)","df['age'].isnull(0)"],1,
 ["결측치(Null, NaN)를 채울 때는 <code>fillna(채울값)</code> 메서드를 사용해요.","<code>dropna()</code>는 결측치가 있는 행/열을 삭제할 때 써요."],"df.fillna(값) = 결측치 대체"],
[4,"Pandas DataFrame에서 결측치(NaN)가 하나라도 포함된 모든 행을 제거하는 코드는?",'df_clean = df.dropna()',["df.dropna()","df.fillna()","df.drop_null()","df.clear()"],0,
 ["<code>dropna()</code>는 기본적으로 <code>axis=0</code>(행 기준)으로 결측치가 있는 행을 제거해요.","모든 값이 NaN일 때만 지우고 싶다면 <code>how='all'</code> 옵션을 줘요."],"df.dropna() = 결측치 포함 행 삭제"],
[4,"Pandas에서 'team' 컬럼 기준으로 그룹화하여 'score' 컬럼의 평균을 구하는 올바른 코드는?",'avg_df = df.groupby("team")["score"].mean()',["df.groupby('team')['score'].mean()","df.pivot('team', 'score').avg()","df.group('team').mean('score')","df.filter('team').mean()"],0,
 ["데이터 집계의 핵심은 <code>df.groupby(기준컬럼)[집계컬럼].집계함수()</code> 형태예요.","<code>mean()</code>(평균), <code>sum()</code>(합계), <code>count()</code>(개수) 등을 체이닝해서 사용해요."],"df.groupby('기준')['타겟'].mean()"],
[4,"Pandas에서 행과 열을 라벨(이름) 기반으로 조회하는 속성과 정수 인덱스(순서)로 조회하는 속성은?",'df.loc["row_label", "col_name"]\ndf.iloc[0, 1]',[".loc, .iloc",".iloc, .loc",".ix, .index",".pos, .loc"],0,
 ["<code>.loc</code>은 Location(라벨/이름 기준)이고, <code>.iloc</code>은 Integer Location(정수 번호 0, 1, 2... 기준)이에요.","데이터 슬라이싱 및 필터링 시 가장 기본이 되는 속성이에요."],"loc = 이름 기준, iloc = 정수 인덱스 기준"],
[1,"리스트 [1, 2, 3, 4, 5]에서 짝수만 골라 제곱한 리스트를 만드는 리스트 컴프리헨션은?",'res = [x**2 for x in [1, 2, 3, 4, 5] if x % 2 == 0]',["[x**2 for x in nums if x % 2 == 0]","[x**2 if x % 2 == 0 for x in nums]","[for x in nums x**2 if x % 2 == 0]","[if x % 2 == 0: x**2 for x in nums]"],0,
 ["리스트 컴프리헨션에서 필터링용 <code>if</code> 조건문은 항상 <code>for</code> 문 뒤에 위치해요.","<code>[표현식 for 변수 in 반복대상 if 조건문]</code> 순서를 기억하세요."],"[결과 for i in 리스트 if 조건]"],
[0,"f-string 포맷팅에서 실수 변수 pi = 3.141592를 소수점 둘째 자리(3.14)까지만 출력하는 문법은?",'pi = 3.141592\nprint(f"{pi:.2f}")',["f'{pi:2f}'","f'{pi:.2f}'","f'{pi.round(2)}'","f'{pi%2f}'"],1,
 ["f-string에서 <code>{변수:.2f}</code> 처럼 콜론 뒤에 <code>.2f</code>를 지정하면 소수점 2자리로 반올림 표기돼요.","금액, 통계 수치 출력 시 매우 자주 쓰이는 포맷팅이에요."],"f'{num:.2f}' = 소수점 둘째 자리까지 출력"],
[3,"파이썬 파일이 모듈로 import되지 않고 터미널에서 직접 실행되었을 때 __name__ 변수에 저장되는 값은?",'if __name__ == "__main__":\n    print("직접 실행됨")',["'__init__'","'__module__'","'__main__'","'__run__'"],2,
 ["스크립트가 직접 실행될 때 파이썬은 <code>__name__</code> 특수 변수에 <code>'__main__'</code>을 할당해요.","이를 통해 모듈로 불러왔을 때는 테스트 코드가 실행되지 않도록 분기 처리해요."],"직접 실행 = '__main__', import 시 = '모듈이름'"]
];

function shuffle(array) {
  const arr = array.slice();
  for (let idx = arr.length - 1; idx > 0; idx--) {
    const j = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[j]] = [arr[j], arr[idx]];
  }
  return arr;
}

const $=id=>document.getElementById(id),L="ABCD";
let list,i,score,wrong,done,answers;
function show(id){["start","quiz","result"].forEach(s=>$(s).classList.toggle("hide",s!==id))}
function calcScore(){
  return answers.reduce((acc, ans, idx)=>(ans!==null && ans===list[idx][4]?acc+1:acc), 0);
}
function begin(arr){
  list=arr;
  i=0;
  answers=new Array(list.length).fill(null);
  wrong=[];
  show("quiz");
  render();
}
function render(){
  const q=list[i];
  const ans=answers[i];
  done = (ans !== null);
  const currentScore = calcScore();

  $("no").textContent=`${i+1} / ${list.length}`;
  $("sc").textContent=`정답 ${currentScore}개`;
  $("pb").style.width=((done ? i + 1 : i)/list.length*100)+"%";
  $("chap").textContent=C[q[0]] || "실무 핵심";
  $("qt").textContent=q[1];
  
  const c=$("code");
  c.classList.toggle("hide",!q[2]);
  c.textContent=q[2];
  
  $("opts").innerHTML="";
  q[3].forEach((t,k)=>{
    const b=document.createElement("button");
    b.className="opt";
    b.innerHTML=`<b>${k+1}</b><span></span>`;
    b.lastChild.textContent=t;
    if(done){
      b.disabled=true;
      if(k===q[4]) b.classList.add("ok");
      if(ans===k && ans!==q[4]) b.classList.add("no");
    } else {
      b.onclick=()=>pick(k);
    }
    $("opts").append(b);
  });

  const fb=$("fb");
  if(done){
    const ok = (ans === q[4]);
    const steps="<ol>"+q[5].map(s=>`<li>${s}</li>`).join("")+"</ol>";
    if(ok){
      fb.className="fb ok";
      fb.innerHTML=`<h3>⭕ 정답이에요!</h3>왜 맞을까요?${steps}`;
    } else {
      fb.className="fb no";
      fb.innerHTML=`<h3>❌ 아쉬워요. 정답은 ${q[4]+1}번 <code></code> 이에요</h3>💡 이렇게 풀어보세요${steps}<div class="tip">📌 기억하기: ${q[6]}</div>`;
      fb.querySelector("code").textContent=q[3][q[4]];
    }
    $("next").style.display="inline-block";
  } else {
    fb.className="fb";
    fb.innerHTML="";
    $("next").style.display="none";
  }

  const prevBtn=$("prev");
  if(prevBtn){
    prevBtn.style.display = i > 0 ? "inline-block" : "none";
  }

  $("next").textContent=i===list.length-1?"결과 보기":"다음 문제 →";
}
function pick(k){
  if(done)return;
  done=true;
  answers[i]=k;
  const q=list[i],ok=k===q[4],bs=[...$("opts").children];
  bs.forEach(b=>b.disabled=true);
  bs[q[4]].classList.add("ok");
  const steps="<ol>"+q[5].map(s=>`<li>${s}</li>`).join("")+"</ol>";
  const fb=$("fb");
  if(ok){
    $("sc").textContent=`정답 ${calcScore()}개`;
    fb.className="fb ok";
    fb.innerHTML=`<h3>⭕ 정답이에요!</h3>왜 맞을까요?${steps}`;
    fx(true,bs[k]);
  } else {
    bs[k].classList.add("no");
    fb.className="fb no";
    fb.innerHTML=`<h3>❌ 아쉬워요. 정답은 ${q[4]+1}번 <code></code> 이에요</h3>💡 이렇게 풀어보세요${steps}<div class="tip">📌 기억하기: ${q[6]}</div>`;
    fb.querySelector("code").textContent=q[3][q[4]];
    fx(false);
  }
  $("pb").style.width=((i+1)/list.length*100)+"%";
  $("next").style.display="inline-block";
  fb.scrollIntoView({behavior:"smooth",block:"nearest"});
}
function fx(ok,el){
  const f=$("fx"),col=ok?"#12a150":"#e03131";
  f.innerHTML=ok?`<svg viewBox="0 0 100 100"><circle class="circle" cx="50" cy="50" r="42" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round"/></svg>`
   :`<svg viewBox="0 0 100 100"><path d="M22 22L78 78M78 22L22 78" fill="none" stroke="${col}" stroke-width="12" stroke-linecap="round"/></svg>`;
  const s=f.firstChild;void s.getBoundingClientRect();s.classList.add("go");
  if(ok&&!matchMedia("(prefers-reduced-motion:reduce)").matches)burst();
}
function burst(){
  const cols=["#12a150","#3b5bdb","#f59f00","#e64980","#15aabf"],cx=innerWidth/2,cy=innerHeight/2;
  for(let n=0;n<28;n++){
    const d=document.createElement("i");d.className="dot";d.style.background=cols[n%5];d.style.left=cx+"px";d.style.top=cy+"px";document.body.append(d);
    const a=Math.random()*Math.PI*2,r=110+Math.random()*160;
    d.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r+60}px) scale(.3)`,opacity:0}],{duration:800+Math.random()*400,easing:"cubic-bezier(.2,.8,.3,1)"}).onfinish=()=>d.remove();
  }
}
function prev(){
  if(i > 0){
    i--;
    render();
  }
}
function next(){
  if(++i<list.length)return render();
  const finalScore=calcScore();
  wrong=list.filter((q,idx)=>answers[idx]!==q[4]);
  const t=list.length,p=Math.round(finalScore/t*100);
  show("result");$("rs").textContent=`${finalScore} / ${t}`;
  $("rm").textContent=p==100?"🎉 완벽해요! 시험 준비 끝!":p>=80?"👏 훌륭해요! 틀린 문제만 한 번 더 복습해 보세요.":p>=50?"👍 좋은 출발이에요. 풀이를 다시 읽고 도전해 보세요.":"💪 괜찮아요! 풀이를 읽으며 천천히 다시 해봐요.";
  $("retryw").style.display=wrong.length?"":"none";
  $("pb").style.width="100%";
}
$("go").onclick=()=>begin(shuffle(Q));
if($("prev")) $("prev").onclick=prev;
$("next").onclick=next;
if($("back-home")) $("back-home").onclick=()=>{
  if(confirm("퀴즈를 중단하고 처음 화면으로 돌아가시겠습니까?")){
    show("start");
  }
};
$("again").onclick=()=>begin(shuffle(Q));
$("retryw").onclick=()=>begin(shuffle(wrong));
$("theme").onclick=()=>{const r=document.documentElement,d=matchMedia("(prefers-color-scheme:dark)").matches;const cur=r.dataset.theme||(d?"dark":"light");r.dataset.theme=cur=="dark"?"light":"dark"};
addEventListener("keydown",e=>{
  if($("quiz").classList.contains("hide"))return;
  if(e.key>="1"&&e.key<="4"&&!done)pick(+e.key-1);
  else if((e.key=="Enter"||e.key=="ArrowRight")&&done)next();
  else if(e.key=="ArrowLeft"&&i>0)prev();
});

// 시작 화면의 문항 수 표시를 Q 배열 길이에 맞춰 자동 동기화
document.addEventListener("DOMContentLoaded", () => {
  const startBig = document.querySelector("#start .big");
  if(startBig) startBig.textContent = `${Q.length}문제`;
  const subText = document.querySelector(".sub");
  if(subText) subText.textContent = `파이썬 기초·실무 핵심 ${Q.length}문항 · 틀리면 초보자용 풀이를 알려드려요`;
});
