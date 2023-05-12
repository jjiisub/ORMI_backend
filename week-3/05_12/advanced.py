import requests
from bs4 import BeautifulSoup

response = requests.get('https://paullab.co.kr/stock.html')

response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')
inner = soup.select(".table-hover")[0].select("tbody>tr")[1:]

total = sum([int(elem.select("td")[-1].text.replace(',', '')) for elem in inner])
print(format(total, ','), end='원')