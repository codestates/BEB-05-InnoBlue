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
