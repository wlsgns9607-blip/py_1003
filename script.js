const C=["1~2장 자료형","3장 제어문","4장 함수·입출력","5장 클래스·모듈·예외·내장함수"];
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
 ["입력 개수가 제각각일 때 <code>def f(*args)</code> 처럼 별(*) 하나를 붙이면 받은 값들이 <b>튜플</b>로 묶여요.","별 두 개 <code>**kwargs</code>는 <code>이름=값</code> 형태를 <b>딕셔너리</b>로 묶어요.","<code>&amp;</code>, <code>#</code>은 이런 문법이 아니에요(#은 주석이에요)."],"별 1개 = 튜플, 별 2개 = 딕셔너리"],
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
 ["일부러 오류를 일으킬 때는 <code>raise</code>(일으키다)를 써요. 예: <code>raise ValueError('잘못된 값')</code>","<code>throw</code>는 자바·JS, <code>panic</code>은 Go 언어에서 쓰는 말이에요."],"raise = 오류 일으키기"]
];
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
  $("chap").textContent=C[q[0]];
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
$("go").onclick=()=>begin(Q);
if($("prev")) $("prev").onclick=prev;
$("next").onclick=next;
if($("back-home")) $("back-home").onclick=()=>{
  if(confirm("퀴즈를 중단하고 처음 화면으로 돌아가시겠습니까?")){
    show("start");
  }
};
$("again").onclick=()=>begin(Q);
$("retryw").onclick=()=>begin(wrong.slice());
$("theme").onclick=()=>{const r=document.documentElement,d=matchMedia("(prefers-color-scheme:dark)").matches;const cur=r.dataset.theme||(d?"dark":"light");r.dataset.theme=cur=="dark"?"light":"dark"};
addEventListener("keydown",e=>{
  if($("quiz").classList.contains("hide"))return;
  if(e.key>="1"&&e.key<="4"&&!done)pick(+e.key-1);
  else if((e.key=="Enter"||e.key=="ArrowRight")&&done)next();
  else if(e.key=="ArrowLeft"&&i>0)prev();
});
