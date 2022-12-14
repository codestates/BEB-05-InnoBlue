## 팀명 : InnoBlue

* * *

## 프로젝트 소개

* * *

이 프로젝트는 Web2.0에서 블록체인 인센티브 기반으로 만들어진 커뮤니티 사이트를 개발하는 것이다.

## MySQL 로컬 서버

- 환경 변수 설정
`server` 폴더 하위에 `.env.example`을 `.env`로 수정하고, 환경 변수들을 넣어준다.
```
MYSQL_ROOT_PASSWORD=your_mysql_password
SERVER_ADDRESS=your_first_ganache_account_address
SERVER_PRIVATE_KEY=your_first_ganache_account_private_key
FAUCET_ADDRESS=your_second_ganache_account_address
FAUCET_PRIVATE_KEY=your_second_ganache_account_private_key
TOKEN_CONTRACT_ADDR=your_ganache_token_contract_address
NFT_CONTRACT_ADDR=your_ganache_nft_contract_address
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

- DB/컨트랙트 재설정
```
# db
docker stop mysql-container
docker rm mysql-container
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
docker exec -it mysql-container bash
mysql -u root -p
{패스워드 입력}
create database InnoBlue
# server 폴더에서
npx sequelize db:migrate

# contract (from truffle)
compile --all
migrate --reset
# 필요시 abi 파일 변경
# .env 파일의 컨트랙트 주소 변경
```

## REST API

### 엔드포인트
- 개발: http://localhost:4000
- 라이브: TBD

### 회원가입 API

```
POST /user/signup
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
        "address": "생성된_계정_주소"
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
GET /post/postlist
```

- Request
```
{
    "userId": number
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "userId": number,
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
    "userId": number,
    "nickname": "sample",
    "title": "sample",
    "content": "sample"
}
```

- Response
```
200 SUCCESS
{
    "message": "게시글 작성 완료! 토큰 보상이 지급되었습니다.",
    "data": {
        "userId": number,
        "token_amount": "sample"
    }
}

400 FAIL
"에러"
```

### 게시글 조회 API
```
GET /post/readpost
```

- Request
```
{
    "id": number
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "id": number
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
    "id": number
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "content": "sample",
        "id": number
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
    "id": number
}
```

- Response
```
200 SUCCESS
{
    "data": {
        "content": "sample",
        "id": number
    },
    "message": "게시글 삭제 완료"
}

400 FAIL
"에러"
```

### 유저간 토큰 전송 API
```
POST /token/token_transfer
```

- Request
```
{
    "address" : 유저_계좌,
    "email" : "토큰_주고_싶은_유저_이메일",
    "amount" : 토큰_양
}
```

- Response
```
200 SUCCESS
"토큰 전송이 완료되었습니다."

400 FAIL
"토큰 전송이 실패했습니다."
```

### ETH Faucet API
```
POST /token/faucet
```

- Request
```
{
    "id" : 유저_아이디
}
```

- Response
```
200 SUCCESS
{
    "message": "이더리움 지급 완료!",
    "data": {
        "id": "유저_주소",
        "eth_amount": "이더리움_양"
    }
}

400 FAIL
"이더리움 지급 에러 발생"
```

### 특정 유저 정보 조회 API
```
GET /user/userinfo/${userId}
```
- Response
```
200 SUCCESS
{
    "message": "유저 정보 조회 완료",
    "email": "유저_이메일",
    "nickname": "유저_닉네임",
    "address": "유저_주소",
    "token_amount": 토큰_양,
    "eth_amount": 이더리움_양,
    "createdAt": "2022-08-25T18:48:27.000Z",
    "nft_count": nft 개수,
    "post_count": post 개수,
    "nft": nft 리스트,
    "post": post 리스트
}

400 FAIL
"유저 정보 조회 실패"
```

### NFT 민팅 API
```
POST /token/mint
```
- Request
```
{
    "email": "유저 이메일",
    "title": "nft 제목",
    "tokenURI": "tokenURI"
}
```
- Response
```
201 SUCCESS
{
    message: "NFT 민팅 완료!",
    data: { id: user.email, nft_amount: nft_amount},
}
```

### 토큰 메타데이터 조회 API
```
GET /token/metadata/:tokenId
```
- Response
```
200 SUCCESS
{
    message: "nft 정보 조회 완료",
    name: nft 제목,
    image: nft 이미지 링크,
    ownerId: owner.id,
    email: owner.email,
    nickname: owner.nickname,
    price: nft.price,
    on_sale: nft.on_sale,
    createdAt: nft.createdAt
}

400 FAIL
"nft 정보 조회 실패"
```

### DB에 저장된 NFT 갯수 조회 API
```
GET /token/count
```
- Response
```
200 SUCCESS
nft갯수
```

### NFT 판매 API
```
POST /token/sell
```

- Request
```
{
    "tokenId" : tokenId,
    "price" : price
}
```

- Response
```
200 SUCCESS
"nft 판매 등록 완료"

400 FAIL
"nft 판매 등록 에러 발생"
```

### NFT 판매 취소 API
```
POST /token/cancel
```

- Request
```
{
    "tokenId" : tokenId
}
```

- Response
```
200 SUCCESS
"nft 판매 취소 완료"

400 FAIL
"nft 판매 취소 에러 발생"
```

### NFT 구매 API
```
POST /token/buy
```

- Request
```
{
    "tokenId" : tokenId,
    "price" : price,
    "address" : address,
    "owner": nft.email  
}
```

- Response
```
200 SUCCESS
"nft 구매 완료"

400 FAIL
"nft 구매 에러 발생"
```
