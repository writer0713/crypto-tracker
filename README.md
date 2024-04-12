# Crypto Tracker

### 참고

- [React JS 마스터 클래스 by. nomadcoder](https://nomadcoders.co/react-masterclass)

### 사용한 기술

- vite
- react.js@v18
- typescript
- tailwindcss@v3
- react-router-dom@v6
- tanstack/react-query@v5
- apexcharts.js@v3
- zustand@v4

### 사용한 API

- coins : https://api.coinpaprika.com/v1/coins/
- coin details : https://api.coinpaprika.com/v1/coins/btc-bitcoin
- coin tickers : https://api.coinpaprika.com/v1/tickers/btc-bitcoin
- coin ohlcv : https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin
- coin icon : https://cryptoicon-api.pages.dev/btc-bitcoin

### TODOS

- [ ] 라이트모드, 다크모드 구현
- [x] router 로 `coins` 와 `coin details` 페이지 나누기
- [x] nested router 로 coin details 내부에서 `chart` 와 `price` 나누기
- [x] coins 페이지에서 coins 데이터 뿌려주기
- [x] coins 페이지 styling
- [x] coins 페이지 => coin 페이지 연결하기
- [x] coin 페이지 coin 데이터 뿌려주기
- [x] coin 페이지 styling
- [x] coin 페이지에서 tab 으로 `chart` 와 `price` 보여주기
- [x] coin 페이지에서 `chart` 구현
- [x] coin 페이지에서 `price` 구현
- [x] 홈 버튼 추가
- [x] chart 를 candleStick 형식으로 변경
