# beb-05-InnoBlue
beb-05-InnoBlue


## MySQL 로컬 서버

- 환경 변수 설정
`server` 폴더 하위에 `.env.example`을 `.env`로 수정하고, 환경 변수들을 넣어준다.
```
MYSQL_ROOT_PASSWORD=MYSQL_비밀번호
SERVER_ADDRESS=가나슈_첫번째_계정_주소
SERVER_NICKNAME=server
SERVER_PASSWORD=server
SERVER_PRIVATE_KEY=가나슈_첫번째_계정_비밀키
TOKEN_CONTRACT_ADDR=가나슈_토큰_컨트랙트_배포_주소
NFT_CONTRACT_ADDR=가나슈_NFT_컨트랙트_배포_주소
```

- npm install 명령어로 모듈 설치

```
npm install
```

- 도커로 MySQL 서버 실행

```
docker pull mysql:8
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
```

- DDL/쿼리를 위한 접근
```
docker exec -it mysql-container bash
mysql -u root -p
```

- MYSQL Sequelize 사용법
```
npx sequelize db:migrate
```

- 로컬 서버 실행

```
npm start
```

## REST API

### 엔드포인트
- 개발: http://localhost:4000
- 라이브: TBD

### 회원가입 API

```
POST /user/join
```

- Request
```
{
    "email": "sample@gmail.com",
    "nickname": "sample",
    "password": "sample"
}
```


- Response
```
201 SUCCESS
{
    "message": "회원가입이 완료되었습니다.",
    "data": {
        "id": "sample@gmail.com",
        "address": "생성된 계정 주소"
    }
}

409 FAIL
"이미 가입된 회원입니다."
```

### 로그인 API

```
POST /user/login
```

- Request
```
{
    "email": "sample@gmail.com",
    "password": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "email": "sample@gmail.com",
        "password": "sample"
    },
    "message": "로그인에 성공하였습니다."
}

400 FAIL
"로그인 실패"
```

### 게시글 전체 리스트 API
```
POST /post/postlist
```

- Request
```
{
    "userId": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "userId": "sample",
    }
}

400 FAIL
"에러"
```

### 게시글 작성 API
```
POST /post/writepost
```

- Request
```
{
    "userId": "sample",
    "nickname": "sample",
    "title": "sample",
    "content": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "userId": "sample",
        "nickname": "sample",
        "title": "sample",
        "content": "sample",
    },
    "message": "게시글 작성 완료"
}

400 FAIL
"에러"
```

### 게시글 조회 API
```
POST /post/readpost
```

- Request
```
{
    "id": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "id": "sample"
    },
    "message": "게시글 조회 완료"
}

400 FAIL
"에러"
```

### 게시글 수정 API
```
POST /post/updatepost
```

- Request
```
{
    "content": "sample",
    "id": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "content": "sample",
        "id": "sample"
    },
    "message": "게시글 수정 완료"
}

400 FAIL
"에러"
```

### 게시글 삭제 API
```
POST /post/delpost
```

- Request
```
{
    "id": "sample"
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "content": "sample",
        "id": "sample"
    },
    "message": "게시글 삭제 완료"
}

400 FAIL
"에러"
```
