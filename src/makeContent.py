import json
import os

# Opening JSON file
f = open('src/content.json', 'r')

# returns JSON object as
# a dictionary
data = json.loads(f.read())

print('\n-|:|------------------------------|:|-\n')
for i in data['algorithms']:
    print(f'| : {i}')
print('\n-|:|------------------------------|:|-\n')

# print(data.algorithms)

# print(data)

print(data['algorithms']['Brute Force algorithm'])
input('')

# Directory
directory = ["dir", "dir/hello"]

# Parent Directory path
parent_dir = "/home/riley/git/algroithm-math-demo/src/content"

# Path
for n in range(len(directory)):
    path = os.path.join(parent_dir, directory[n])
    print(f'({n}) : {path}')

# removes previous dir so it is a clean slate and im free to fuck up.
if (input(f"\nreset children from directory {parent_dir}? (y)es or (n)o ").lower() == 'y'):
    # os.truncate('/home/riley/git/algroithm-math-demo/src/content', 0)
    print("child folders deleted.")

# Create the directory
# 'GeeksForGeeks' in
# '/home / User / Documents'
addToDir = input(f"add to directory? (A)ll or (M)anual or (N)o: ").lower()


if (addToDir == "a"):
    for n in range(len(directory)):
        if directory[n] != 0:
            path = os.path.join(parent_dir, directory[n])
        else:
            print("special needs")
        print(f'({n}) : {path}')
        os.mkdir(path)
        print(f"({n}) : Directory {path} created")
elif (addToDir == 'm'):
    for n in range(len(directory)):
        path = os.path.join(parent_dir, directory[n])
        if (input(f'({n}) : {path}, do you want to create? (Y)es or (N)o: ').lower() == "y"):
            os.mkdir(path)
            print(f"({n}) : Directory {path} created")
        else:
            print("nothing happened")
else:
    print("nothing happened")
