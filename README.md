# beb-05-InnoBlue
beb-05-InnoBlue

## MySQL 로컬 서버

- 서버 실행

```
docker pull mysql:8
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
```

- DDL/쿼리를 위한 접근
```
docker exec -it mysql-container bash
mysql -u root -p
```

- 초기 DDL
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
FLUSH PRIVILEGES;

create database `innoblue`;
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nickname` varchar(255),
  `password` varchar(255),
  `address` varchar(255),
  `token_amount` int,
	`eth_amount` int,
  `created_at` timestamp
);
```
