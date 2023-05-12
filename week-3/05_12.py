# Q1.
원주율 = 3.141592
print(int(원주율))

# Q2.
# b

# Q3.
my_name = '김춘식'
print(f'안녕하세요. {my_name}입니다')

# Q4.
# c

# Q5.
num = int(input('숫자 입력 : '))

def divisor(num):
    ans = []
    for i in range(1, num+1):
        if num%i == 0: ans.append(i)
    return ans
print(divisor(num))

# Q6.
def solution(l, a):
    print(l.count(a))
    return None

solution(['a', 'b', 'c' ,'a', 'a'], 'a')

# Q7.
def solution(l):
    return sorted(l, key=lambda x:x[1], reverse=True)

print(solution([[10,5],[20,3],[30,4],[40,1]]))

# Q8.
def solution(l):
    return [[abs(a-b)] for a,b in l]

print(solution([[10,5],[20,3],[30,4],[40,1]]))

# Q9.
def solution(s):
    return sum(map(int, list(s)))

print(solution('11123'))

# Q10.
def solution(s):
    return s.replace('!', '').replace(' ', '')

print(solution('!hello!war    ld!    '))