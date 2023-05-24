fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    num_data = data.length;
    avg_price = data.map((x) => x.price).reduce((a, c) => a + c, 0) / num_data;
    console.log(`전체 product는 ${num_data}개 입니다`);
    console.log(`전체 가격 평균은 ${avg_price.toFixed(2)}원 입니다`);
  });
