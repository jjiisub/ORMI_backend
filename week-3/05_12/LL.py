class node:
    def __init__(self, data):
        self.next = None
        self.data = data
    
    def __next__(self, next):
        self.next = next

def print_LL(h):     # LL 출력
    temp = h
    while temp.next != None:
        print(f'{temp.data} - ', end='')
        temp = temp.next


cnt = 0
head = node(cnt)
tmp = head
while cnt<=10:      # LL 생성
    cnt += 1
    tmp.next = node(cnt)
    tmp = tmp.next

print_LL(head)


tmp = head
while tmp.next != None:
    if tmp.next.data == 3:
        tmp.next = tmp.next.next
    tmp = tmp.next

print()
print_LL(head)