# Algo_py.ipynb
# Q1.

# Sol 1
# print(str([i for i in range(1, 10001)]).count('8'))

# Sol 2
# print(str(list(range(1, 10001))).count('8'))

# Q2.
S = [2, 3, 4, 8, 13, 17, 20]
L = sorted([i for i in zip(S,S[1:])], key=lambda x:abs(x[0]-x[1]))
m = abs(L[0][0]-L[0][1])
ans = list(filter(lambda x:abs(x[0]-x[1]) == m, L))
print(ans)