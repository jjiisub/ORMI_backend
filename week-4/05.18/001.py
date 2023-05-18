# dp 예제
'''
6
10
20
15
25
10
20
'''
def ll_print(head):
     curr = head
     while curr:
          print(curr.score)
          curr = curr.next

s = []
# num = int(input())
# for i in range(num):
#     s.append(int(input()))
s = [10, 20, 15, 25, 10, 20]

class Node:
     def __init__(self, score):
        self.score = score
        self.sum = 0
        self.next = None
        self.pre = None
        self.flag = False

head = Node(0)
curr = head
for score in s:
    curr.next = Node(score)
    curr.next.pre = curr
    curr = curr.next

ll_print(head)

curr = head.next
curr.flag = 1
curr.sum = curr.score
curr = curr.next

while curr:
    if curr.pre:
        pass