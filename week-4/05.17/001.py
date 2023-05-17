# advanced

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        init = Node('init')
        self.head = init
        self.tail = init
        self.count = 0
    
    def __iter__(self):
        curr = self.head
        curr = curr.next
        while curr:
            yield curr.data
            curr = curr.next
    
    def __len__(self):
        return self.count

    def __str__(self):
        res = '<'
        curr = self.head
        curr = curr.next
        while True:
            res += f'{curr.data}, '
            if curr == self.tail: break
            curr = curr.next
        return res[:-2]+ '>'
    
    def append(self, data):
        newNode = Node(data)
        self.tail.next = newNode
        self.tail = newNode
        self.count += 1
    
    def pop(self):
        curr = self.head
        while curr.next != self.tail:
            curr = curr.next
        res = curr.next.data
        self.tail = curr
        curr.next = None
        return res
    
    def find(self, data):
        index = -1
        curr = self.head
        while curr :
            if curr.data == data:
                return index
            index += 1
            curr = curr.next
        return -1
            

l = LinkedList()
l.append(90)
l.append(2)
l.append(77)
l.append(35)
l.append(21)

for i in l:
    print(i)