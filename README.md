# Team Project

## 소개

​ - 사용자로부터 정보(이름,주소,카드정보,나이등)를 입력받아 회원가입, 로그인, 로그아웃 기능을 구현

​ - 사용자의 권한(role 설정에 따른)에 접근 가능한 메뉴 구현

​ - 관리자 계정 로그인 시 관리자 전용페이지 구현

-**기술 스택**: React, styled-components, react-daum-postcode

-**배포 주소**: https://gifted-hawking-710a23.netlify.app

-**권한별 ID/PW** : admin/a(관리자), frontend/a(프론트엔드), backend/a(백엔드), server/a(서버), customservice/a(고객관리), HRresource/a(인사관리)

-**협업 도구**: slack, notion, github

## 요구사항

---

- [공통]
  Data는 Local Storage에 저장
  관리자 계정 임의 설정가능

- [회원가입페이지]
  사용자로 부터 이름, 주소(Daum API), 카드정보, 나이등의 정보를 입력받아 회원가입 기능이 되는 회원가입 페이지를 구현하기

- [로그인페이지]
  계정과 비밀번호만 입력하여 로그인이 기능이 되는 페이지 구현하기

- [메인페이지]
  로그인된 계정은 자신에게 허용된 메뉴만 보이기

- [관리자페이지]
  관리자 로그인시, 계정정보 시각화 하기(테이블 Component페이지 만들기, Data Table 구현, 페이지네이션 구현)

---

## 설치 및 시작방법

```
npm install

npm run start
```
