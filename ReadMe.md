# 페달 발전기 발전량 아두이노-웹 통신 뷰어
이 프로젝트는 다음과 같은 기능을 수행합니다.
- 아두이노에서 계속해서 페달 발전기의 현재 발전량을 읽어들임
- 웹페이지에서 와이파이를 통해 아두이노로 요청을 보냄
- 요청을 받은 아두이노는 현재 발전량을 송신함
- 수신한 데이터를 웹페이지에서 보여줌

## pedal-generator-arduino
아두이노 백엔드

### 아두이노 스펙
아두이노와 ESP8266칩 또는 ESP8266가 내장된 아두이노<br>
WIFI ESP8266 D1 R1 보드 사용함

### How to start?

#### 라이브러리 설치 및 보드 설정
- ESP8266WebServer : 와이파이 서버
    1. 아두이노 IDE > 파일 >  환경설정 > 추가적인 보드매니저 > "http://arduino.esp8266.com/stable/package_esp8266com_index.json"입력
    1. 아두이노 IDE > 툴 > 보드 > 보드 매니저 > "ESP8266 Community" 설치
    1. 아두이노 IDE 재시작
    1. 아두이노 IDE > 툴 > 보드 > "WeMos D1 R2 & mini" 선택

- INA219_WE : 전력 측정

#### 와이파이 설정
서버가 될 아두이노와 프론트를 돌릴 컴퓨터가 같은 와이파이에 접속해야함
- pedal-generator-arduino.ino<br>
아래 코드를 접속하고자 하는 와이파이 정보로 변경
    ```
    #define STASSID "********" // 와이파이 이름
    #define STAPSK "*******" // 와이파이 비밀번호
    ```

## pedal-generator-web
컴퓨터 프론트

### 스펙
- node : 18.18.0
- npm : 9.8.1

### How to start?
#### 라이브러리 설치
    ```
    npm install
    ```

#### 프론트 서버 시작<br>
(http://localhost:3000)
    ```
    npm start
    ```

#### 아두이노 통신 설정
- ppedal-generator-web > .env<br>
아래의 코드를 접속하고자하는 아두이노의 ip주소로 변경
    ```
    REACT_APP_API_HOST = http://192.168.208.63/
    ```
    _아두이노 시작할 때, "pedal-generator-arduino > pedal-generator-arduino.ino"의 65~66번째줄에서 IP주소를 출력함_
