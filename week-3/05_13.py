import json

date = [8, 9, 10, 11, 12]
day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']


with open('a.txt','w') as ipf:
    a = json.dumps(dict(zip(day,date)), indent=2)
    ipf.write(a)

f = open('a.txt', 'a')
f.write('\n\nhello? zz')
f.close()