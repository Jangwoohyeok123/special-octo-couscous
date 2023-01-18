[npx 이후 npm run start를 한 상황]
=> desktop 이후 경로중 디렉토리 또는 파일의 이름중 대문자가 섞여있는 경우 에러가 생긴다.


[[Login] is not a <Route> component]
=> Routes 아래에는 Route component만 가능하다. <Login/> component는 에러를 일으킨다. 
=> Route 컴포넌트의 element속성으로 component를 매칭시켜야 한다.

원인)
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

해결)
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}