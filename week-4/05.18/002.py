# advanced
class Stack:
    def __init__(self):
        self.data = []

    def push(self, data):
        self.data.append(data)

    def pop(self):
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

class Queue:
    def __init__(self):
        self.data = []
    
    def push(self, data):
        self.data.append(data)

    def pop(self):
        return self.data.pop(0)

    def is_empty(self):
        return len(self.data) == 0

class Node:
    def __init__(self, data):
        self.data = data
        # self.child = [] # binary tree가 아니거나 graph 인 경우
        self.left = None
        self.right = None

class Tree:
    def __init__(self, data):
        init = Node(data)
        self.root = init
        self.count = 1

    def __len__(self):
        return self.count
    
    def insert(self, data):
        curr = self.root
        while curr:
            if data == curr.data:
                return -1
            elif data < curr.data:
                if curr.left is None:
                    curr.left = Node(data)
                    break
                curr = curr.left
            elif data > curr.data:
                if curr.right is None:
                    curr.right = Node(data)
                    break
                curr = curr.right
        self.count += 1
        return

    def DFS(self):
        print('DFS', end = ' ')
        s = Stack()
        s.push(self.root)
        while not s.is_empty():
            curr = s.pop()
            print(curr.data, end=' ')
            if curr.right is not None:
                s.push(curr.right)
            if curr.left is not None:
                s.push(curr.left)
        print()

    def BFS(self):
        print('BFS', end =' ')
        q = Queue()
        q.push(self.root)
        while not q.is_empty():
            curr = q.pop()
            print(curr.data, end=' ')
            if curr.left is not None:
                q.push(curr.left)
            if curr.right is not None:
                q.push(curr.right)
        print()

t = Tree(5)
data = [3,8,1,4,6,9]

for elem in data:
    t.insert(elem)

# print(t.count)
t.DFS()
t.BFS()