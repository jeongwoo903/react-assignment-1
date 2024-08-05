## 요구사항

a. front
- react를 사용해야합니다. 패키지 매니저는 편한 것을 사용하되, gitignore설정이 잘 되어 있어야 합니다.(template 금지)
- flex를 사용해 중앙 정렬을 해야합니다.
- ToDo 라는 기본 값을 가진 h1 태그를 지닌 PageTitle 컴포넌트가 있고, props로 title을 전달 받아 값을 변경할 수 있어야 합니다.
- ToDo 라는 컴포넌트 바로 아래에는, 텍스트가 왼쪽 정렬된 TodoList(컴포넌트)가 존재합니다.
- TodoList에는 Todo 라는 컴포넌트가 존재하고, border처리 되어 다른 Todo와 구분 가능해야하며, 좌측에 checkbox가 존재하여 클릭시 텍스트에 취소선이 표기되어야하며, 서버에 update 요청이 발송되어야 합니다.
- TodoList component 아래에는 input 혹은 textArea가 존재하며, 우측에 add 버튼이 존재합니다.
버튼의 다중 클릭은 방지 되어야 하며, 클릭 후 alert 처리가 되어야합니다.
- add 버튼은 클릭시 서버로 post 요청이 발송되어야 합니다. 또한, 클릭 시 input 값은 비워지고, 잠시 비활성화 되어야 합니다(alert 전까지).
- 모든 서버로 부터 불러온 값은 useEffect를 사용해야 합니다.
- input 값을 관리할때에는 useState를 사용해야 합니다.
- theme 전환이 가능해야합니다. useContext를 사용하세요.
