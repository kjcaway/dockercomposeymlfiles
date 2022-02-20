### Docker Compose Files
- 찍먹을 위한 초초간단 설정 모음


## Use
1. 이미지 pull
```bash
## 원하는 이미지 및 태그 확인후
## 만약 mysql version 8.0.22 라면 아래와 같이
docker pull mysql:8.0.22
```
2. 실행
```bash
## docker-compose.yml 파일 경로로 이동해서
docker-compose -f ./docker-compose.yml up -d
```