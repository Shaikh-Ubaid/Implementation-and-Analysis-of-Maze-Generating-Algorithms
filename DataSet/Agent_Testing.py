import json
import math
import random
from collections import deque
# Opening JSON file
Maze_Recursive_Backtrack_Json = open('Wilson.json',)
# returns JSON object as a dictionary
Maze_Recursive_Backtrack = json.load(Maze_Recursive_Backtrack_Json)


# Maze_Adlous_Broder_Json = open('AldousBroder.json',)
# # returns JSON object as a dictionary
# Maze_Adlous_Broder = json.load(Maze_Adlous_Broder_Json)

# Maze_Recursive_Backtrack_Json = open('RecursiveBacktracking.json',)
# # returns JSON object as a dictionary
# Maze_Recursive_Backtrack = json.load(Maze_Recursive_Backtrack_Json)

# Maze_Recursive_Backtrack_Json = open('RecursiveBacktracking.json',)
# # returns JSON object as a dictionary
# Maze_Recursive_Backtrack = json.load(Maze_Recursive_Backtrack_Json)


class Vertex:
    def __init__(self, n, i,j,walls):
        self.index = n
        self.i=i
        self.j=j
        self.neighbors = list()
        self.visited=False
        self.parent=-1
        self.walls=walls
    def add_neighbor(self, v):
        self.neighbors.append(v)
        # self.neighbors.sort()
    def is_dead_end(self):
        if len(self.neighbors)==1:
            return True
        return False
    def is_intersection(self):
        if len(self.neighbors)>2:
            return True
        return False

class Graph:

    def __init__(self):
        self.vertices = {}
        self.cols=0
        
        self.dfs_flag=True
        self.dfs_cnt=-1
        self.dfs_cnt_intersection=0
        self.dfs_cnt_dead_end=0
        self.dfs_traversal=[]

        self.bfs_flag=True
        self.bfs_cnt=-1
        self.bfs_cnt_intersection=0
        self.bfs_cnt_dead_end=0
        self.bfs_traversal=[]

        self.dfs_heuristics_flag=True
        self.dfs_heuristics_cnt=-1
        self.dfs_heuristics_cnt_intersection=0
        self.dfs_heuristics_cnt_dead_end=0
        self.dfs_heuristics_traversal=[]

        self.random_walk_flag=True
        self.random_walk_cnt=-1
        self.random_walk_cnt_intersection=0
        self.random_walk_cnt_dead_end=0
        self.random_walk_traversal=[]
    
    def neutralize(self):
        for i in self.vertices.keys():
            self.vertices[i].visited=False

    def add_vertex(self, vertex):
        self.vertices[vertex.index] = vertex
        return True

    def add_edge(self, u, v):
        self.vertices[u].add_neighbor(v)
        self.vertices[v].add_neighbor(u)
        return True
    
    def construct_graph(self):
        for vertex in self.vertices.values():
            # vertex=self.vertices[key]
            if(not vertex.walls[1]):
                self.add_edge(vertex.index, vertex.index+1)
            if(not vertex.walls[2]):
                self.add_edge(vertex.index, vertex.index+self.cols)

    def cnt_dead_ends(self):
        cnt=0
        for i in self.vertices.values():
            if i.is_dead_end():
                cnt+=1
        return cnt
    
    def cnt_intersections(self):
        cnt=0
        for i in self.vertices.values():
            if i.is_intersection():
                cnt+=1
        return cnt

    def direction(self,v,parent):
        value = self.vertices[v].index - self.vertices[parent].index;
        if (value == 1):
            return "right"
        if (value == -1):
            return "left"
        if (value == self.cols) :
            return "down"
        if (value == -self.cols):
            return "up"

    def dfs(self,v,destination):
        #  visit v
        self.dfs_cnt+=1
        self.vertices[v].visited=True
        if self.vertices[v].is_intersection():
            self.dfs_cnt_intersection+=1
        if self.vertices[v].is_dead_end():
            self.dfs_cnt_dead_end+=1
        # self.vertices[v].parent=parent
        self.dfs_traversal.append(v)
        # print(self.direction(v,parent))
        if v==destination:
            self.dfs_flag=False
            print("Reached Destination DFS")
            print("No of steps need = ",self.dfs_cnt)
            print("No of intersections visited = ",self.dfs_cnt_intersection)
            print("No of dead ends visited = ",self.dfs_cnt_dead_end)


        for i in self.vertices[v].neighbors:
            if (not self.vertices[i].visited) and self.dfs_flag:
                self.dfs(i,destination)

    def bfs(self,v,destination):
        queue=deque()
        queue.append(v)
        while(len(queue) and self.bfs_flag):
            u=queue.popleft()
            self.bfs_cnt+=1
            self.vertices[u].visited=True
            if self.vertices[u].is_intersection():
                self.bfs_cnt_intersection+=1
            if self.vertices[u].is_dead_end():
                self.bfs_cnt_dead_end+=1
            # self.vertices[u].parent=parent
            self.bfs_traversal.append(u)
            if u==destination:
                self.bfs_flag=False
                print("Reached Destination BFS")
                print("No of steps need = ",self.bfs_cnt)
                print("No of intersections visited = ",self.bfs_cnt_intersection)
                print("No of dead ends visited = ",self.bfs_cnt_dead_end)
            else:
                for i in self.vertices[u].neighbors:
                    if (not self.vertices[i].visited):
                        queue.append(i)

    def dfs_heuristics(self,v,destination):
        self.dfs_heuristics_cnt+=1
        self.vertices[v].visited=True
        if self.vertices[v].is_intersection():
            self.dfs_heuristics_cnt_intersection+=1
        if self.vertices[v].is_dead_end():
            self.dfs_heuristics_cnt_dead_end+=1
        # self.vertices[v].parent=parent
        self.dfs_heuristics_traversal.append(v)
        # print(self.direction(v,parent))
        if v==destination:
            self.dfs_heuristics_flag=False
            print("Reached Destination DFS_heuristics")
            print("No of steps need = ",self.dfs_heuristics_cnt)
            print("No of intersections visited = ",self.dfs_heuristics_cnt_intersection)
            print("No of dead ends visited = ",self.dfs_heuristics_cnt_dead_end)

        for i in list(self.order_heuristics(self.vertices[v].neighbors,destination)):
            if (not self.vertices[i].visited) and self.dfs_heuristics_flag:
                self.dfs_heuristics(i,destination)

    def random_walk(self,v,destination):
        while(v!=destination):
                self.random_walk_cnt+=1
                self.vertices[v].visited=True
                if self.vertices[v].is_intersection():
                    self.random_walk_cnt_intersection+=1
                if self.vertices[v].is_dead_end():
                    self.random_walk_cnt_dead_end+=1
                self.random_walk_traversal.append(v) 
                v=random.choice(self.vertices[v].neighbors)
        print("Reached Destination Random Walk")
        print("No of steps need = ",self.random_walk_cnt)
        print("No of intersections visited = ",self.random_walk_cnt_intersection)
        print("No of dead ends visited = ",self.random_walk_cnt_dead_end)

    def order_heuristics(self,l,destination):
        array=[]
        for i in l:
            array.append([self.manhattan(i,destination),i])
        array.sort()
        l=[]
        for i in array:
            l.append(i[1])
        return l
   
    def manhattan(self,i,d):
        x1=self.vertices[i].i
        y1=self.vertices[i].j
        x2=self.vertices[d].i
        y2=self.vertices[d].j
        return abs(x1-x2)+abs(y1-y2)

    def print_graph(self):
        for key in sorted(list(self.vertices.keys())):
            print(str(key)+" : " + str(self.vertices[key].neighbors))



Graphs_Recursive_Backtrack=[]
for graph in Maze_Recursive_Backtrack:
    g = Graph()
    for i in graph:
        g.add_vertex(Vertex(i["index"],i["i"],i["j"],i["walls"]))
    g.cols=int(math.sqrt(len(graph)))
    print("columns are",g.cols)
    Graphs_Recursive_Backtrack.append(g)

# objs = [MyClass() for i in range(10)]
# Graphs_Recursive_Backtrack=[Graph() for i in range(len(Maze_Recursive_Backtrack))]
# for index in range(len(Maze_Recursive_Backtrack)):
#     for i in Maze_Recursive_Backtrack[index]:
#         Graphs_Recursive_Backtrack[index].add_vertex(Vertex(i["index"],i["i"],i["j"],i["walls"]))
    # Graphs_Recursive_Backtrack.append(g)
# print(Graphs_Recursive_Backtrack)

for g in Graphs_Recursive_Backtrack:
    g.construct_graph()
    # g.print_graph()
    print("No of intersections is ", g.cnt_intersections())
    print("No of dead ends is ",g.cnt_dead_ends())
    print("---------------------------------------------------------")
    end=g.cols**2-1
    g.dfs(0,end)
    g.neutralize()
    g.bfs(0,399)
    g.neutralize()
    g.random_walk(0,99)
    g.neutralize()
    g.dfs_heuristics(0,99)
    print("#########################################################")
    # print(g.dfs_traversal)
    # print(g.bfs_traversal)
    # print(g.random_walk_traversal)
    # print(g.dfs_heuristics_traversal)


cnt_intersections=0
cnt_dead_ends=0

dfs_cnt=0
dfs_cnt_intersection=0
dfs_cnt_dead_end=0

bfs_cnt=0
bfs_cnt_intersection=0
bfs_cnt_dead_end=0

dfs_heuristics_cnt=0
dfs_heuristics_cnt_intersection=0
dfs_heuristics_cnt_dead_end=0

random_walk_cnt=0
random_walk_cnt_intersection=0
random_walk_cnt_dead_end=0

for g in Graphs_Recursive_Backtrack:
    cnt_intersections+=g.cnt_intersections()
    cnt_dead_ends+=g.cnt_dead_ends()

    dfs_cnt+=g.dfs_cnt
    dfs_cnt_intersection+=g.dfs_cnt_intersection
    dfs_cnt_dead_end+=g.dfs_cnt_dead_end

    bfs_cnt+=g.bfs_cnt
    bfs_cnt_intersection+=g.bfs_cnt_intersection
    bfs_cnt_dead_end+=g.bfs_cnt_dead_end

    dfs_heuristics_cnt+=g.dfs_heuristics_cnt
    dfs_heuristics_cnt_intersection+=g.dfs_heuristics_cnt_intersection
    dfs_heuristics_cnt_dead_end+=g.dfs_heuristics_cnt_dead_end

    random_walk_cnt+=g.random_walk_cnt
    random_walk_cnt_intersection+=g.random_walk_cnt_intersection
    random_walk_cnt_dead_end+=g.random_walk_cnt_dead_end

print("\n\n\n")
print("-------------  Conclusion is as folllows ------------------- ")

print("cnt_intersections",cnt_intersections)
print("cnt_dead_ends",cnt_dead_ends)

print("dfs_cnt",dfs_cnt)
print("dfs_cnt_intersection",dfs_cnt_intersection)
print("dfs_cnt_dead_end",dfs_cnt_dead_end)

print("bfs_cnt",bfs_cnt)
print("bfs_cnt_intersection",bfs_cnt_intersection)
print("bfs_cnt_dead_end",bfs_cnt_dead_end)

print("dfs_heuristics_cnt",dfs_heuristics_cnt)
print("dfs_heuristics_cnt_intersection",dfs_heuristics_cnt_intersection)
print("dfs_heuristics_cnt_dead_end",dfs_heuristics_cnt_dead_end)

print("random_walk_cnt",random_walk_cnt)
print("random_walk_cnt_intersection",random_walk_cnt_intersection)
print("random_walk_cnt_dead_end",random_walk_cnt_dead_end)