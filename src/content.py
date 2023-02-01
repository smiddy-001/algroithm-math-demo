import json
import os
import shutil

# Opening JSON file
f = open('src/content.json', 'r')

# CONSTANTS

SPACE_REPLCE_IN_FILES_AND_FOLDERS = "-"
PARENT_DIRECTORY = "/home/riley/git/algroithm-math-demo/public/content"


# formats thre json file, represents " " as "_" so directories with spaces can still be made, when representing I will show "_" as " "


def strip_recursive(x):
    if isinstance(x, str):
        retval = x.replace(" ", SPACE_REPLCE_IN_FILES_AND_FOLDERS).title()
        # had a problem where word's was Word'S, something to do with .title() thinking ' is a space ...
        return retval.replace("’S", "'s")
    elif isinstance(x, list):
        return [strip_recursive(v) for v in x]
    elif isinstance(x, dict):
        return dict((strip_recursive(a), strip_recursive(b))for (a, b) in x.items())
    return x


# load json file to python dictionary for manipulation
data = json.loads(f.read())

data = strip_recursive(data)
print(data)

# print('\n----------------------------  json data into list of directiories (objects inside the content.json)   ------------------------------------\n')

# rips the folders in the right direction so that when folders are made no errors occur

# expected output = ["algorithms","algorithms/bla", "algorithms/bku", "algorithms/bla/doodoo" ...ect]
dataFolderListRaw = []

for i in data.keys():
    try:
        dataFolderListRaw.append(f'{i}')
        for o in data[i].keys():
            try:
                dataFolderListRaw.append(f'{i}/{o}')
                for z in data[i][o].keys():
                    try:
                        dataFolderListRaw.append(f'{i}/{o}/{z}')
                        for p in data[i][o][z].keys():
                            dataFolderListRaw.append(f'{i}/{o}/{z}/{p}')
                            # print(f'{i}/{o}/{z}/{p}')
                    except:
                        ()
                        # dataFolderListRaw.append(f'{i}/{o}/{z}')
                        # print(f'| : {i}/{o}/{z}')
            except:
                ()
                # dataFolderListRaw.append(f'{i}/{o}')
                # print(f'| : {i}/{o}')
    except:
        ()
        # dataFolderListRaw.append(f'{i}')
        # print(f'{i}')
# print(dataFolderListRaw)
# input()
# print('\n----------------------------  json data into list of files (lists inside the content.json)   ------------------------------------\n')

# rips the folders in the right direction so that when folders are made no errors occur
# gets a list output like

# ["algorithms","algorithms/bla", "algorithms/bku", "algorithms/bla/doodoo" ...ect]

dataFileList = []

# },
#     "maths": {
#         "calculus": {
#             "integration": [
#                 "basics",
#                 "trigenometry"
#             ],
#             "differenciation": [
#                 "basics",
#                 "trigenometry"        ERROR, these ones arent working, they are read as Maths/Calculus/['Basics', 'Trigenometry'].md which makes 2 files then the directories without the files
#             ]
#         },
#         "complex numbers": [
#             "basics",
#             "conjugates"
#         ]
#     },
#     "physics": {
#         "mechanics": [
#             "basics",
#             "momentum"
#         ],

for p in data.keys():
    for i in data[p]:
        try:
            for v in range(len(data[p][i])):
                dataFileList.append(f'{p}/{i}/{data[p][i][v]}.md')
                print(f'{p}/{i}/{data[p][i][v]}.md')
        except:
            for v in data[p][i]:
                for y in range(len(data[p][i][v])):
                    dataFileList.append(f'{p}/{i}/{data[p][i][v][y]}.md')
                    print(f'{p}/{i}/{data[p][i][v][y]}.md')

# when a text item is 4 deep, problems occur... folders create on same directory level as its child :(
print('\nbug on line 111 :(')
input()
num_i = 0

# print(f'\n{dataFileListRaw}')
# print('\n--------------------------------\n|-|-|-|--| FILES |--|-|-|-|\n--------------------------------\n')

# big list WITH DUPLICATES
# print(dataFolderListRaw)


# remove duplicates from bottom of list upwards, so when creating files it ensures it is aready created and wont cause issues later
# without dupess
dataFolderList = []
# goes through the list searching for dupes
for x in dataFolderListRaw:
    if x not in dataFolderList:
        dataFolderList.append(x)

# 2 arguments, filename and depth(how many / are in the file)

# print(data.algorithms)

# print(data)

# print(data['algorithms']['Brute Force algorithm'])
# input('')

# ------------------------------------------------------------ MAKE THE DIRECTORIES ---------------------------------------------------------

# Directory
# directory = dataFolderList

# Path
# print('\n - Folders - \n')
for n in range(len(dataFolderList)):
    path = os.path.join(PARENT_DIRECTORY, dataFolderList[n])
    # print(f'({n}) {path}')
# print('\n - Files - \n')
for i in range(len(dataFolderList)):
    path = os.path.join(PARENT_DIRECTORY, dataFolderList[i])
    # print(f'{directory[i]} - {len(directory[i])}')

# removes previous dir so it is a clean slate and im free to fuck up.
if (input(f"\ndelete children from directory {PARENT_DIRECTORY}? (y)es or (N)o: ").lower() == 'y'):
    # os.truncate('/home/riley/git/algroithm-math-demo/src/content', 0)
    # os.mkdir(parent_dir)
    if (input(f"\nare you sure, this will delete all files and directories? (y)es or (n)o: ").lower() == 'y'):
        shutil.rmtree(PARENT_DIRECTORY, ignore_errors=False, onerror=None)
        os.mkdir(PARENT_DIRECTORY)
        print("child folders deleted.")
    else:
        print("nothing deleted")

# Create the directory
makeDirectories = input(
    f"add folders to directory? (A)ll or (m)anual or (n)o: ").lower()
if (makeDirectories != "m" and makeDirectories != "n"):
    makeDirectories = "a"

if (makeDirectories == "a"):
    for n in range(len(dataFolderList)):
        if dataFolderList[n] != 0:
            path = os.path.join(PARENT_DIRECTORY, dataFolderList[n])
        else:
            print("something went wrong on line 146... :(")
        try:
            os.mkdir(path)
        except:
            ()
        print(f"({n}) : created : {path}")
elif (makeDirectories == 'm'):
    for n in range(len(dataFolderList)):
        path = os.path.join(PARENT_DIRECTORY, dataFolderList[n])
        createIt = input(
            f'({n}) : {path}, do you want to create? (Y)es or (n)o: ').lower()
        if createIt == "":
            createIt = "y"
        if (createIt == "y"):
            try:
                os.mkdir(path)
            except:
                ()
            print(f"({n}) : Directory {path} created")
        else:
            print("nothing happened")
else:
    print("nothing happened")

# --------------------------------------------------------------------- MAKE THE FILES INSIDE THE DIRECTORY -------------------------------------------------------------

# Path
print('\n - Folders - \n')
for n in range(len(dataFileList)):
    path = os.path.join(PARENT_DIRECTORY, dataFileList[n])
    print(f'({n}) {path}')

makeFiles = input(
    f"add files to directory? (A)ll or (m)anual or (n)o: ").lower()

if (makeFiles != "m" and makeFiles != "n"):
    makeFiles = "a"

if (makeFiles == "a"):
    for n in range(len(dataFileList)):
        if dataFileList[n] != 0:
            path = os.path.join(PARENT_DIRECTORY, dataFileList[n])
        else:
            print("special needs")
        print(f'({n}) : {path}')
        try:
            os.mknod(path)
        except:
            ()
        print(f"({n}) : Directory {path} created")
elif (makeFiles == 'm'):
    for n in range(len(dataFileList)):
        path = os.path.join(PARENT_DIRECTORY, dataFileList[n])
        if (input(f'({n}) : {path}, do you want to create? (Y)es or (N)o: ').lower() == "y"):
            try:
                os.mknod(path)
            except:
                ()
            print(f"({n}) : Directory {path} created")
        else:
            print("nothing happened")
else:
    print("nothing happened")
