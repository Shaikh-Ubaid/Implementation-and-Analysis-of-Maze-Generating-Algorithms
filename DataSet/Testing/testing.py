import json 
  
# Opening JSON file 
f = open('RecursiveBacktracking.json',) 
  
# returns JSON object as  
# a dictionary 
data = json.load(f) 
  
# Iterating through the json 
# list 
for i in data: 
    print(i["walls"]) 
  
# Closing file 
f.close()