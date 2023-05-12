import json

d = {}
d["one"] = 1
d["two"] = 2
d["three"] = 3

f = open("result.txt", "w")

# json.dump(d, f, indent=2)
f.write(json.dumps(d, indent=4))

f.close()
