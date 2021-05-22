# Algo-Project
**Link to animations [here](https://shaikh-ubaid.github.io/Algo-Project/)**

**Link to other version [here](https://github.com/Shaikh-Ubaid/Maze-Generator-VanillaJS)**

**Link to research paper selected [here](http://ipsitransactions.org/journals/papers/tir/2019jan/p5.pdf)**

### Proposal [here](https://github.com/Shaikh-Ubaid/Algo-Project/blob/master/180001050_Project_Proposal.pdf)

### Presentation [here](https://github.com/Shaikh-Ubaid/Algo-Project/blob/master/Maze%20Generating%20Algorithms.pdf)

### Report [here](https://github.com/Shaikh-Ubaid/Algo-Project/blob/master/Maze%20Generation%20Algorithms%20Report.pdf)

<html>
    <body class="c149">
        <h1 class="c40 c138 title" id="h.nj23sjpj5u97"><span class="c7 c50">Implementation and Analysis of Maze Generating Algorithms</span></h1>
        <p class="c17 c4 subtitle" id="h.ml9asl4g9utg"><span class="c65"></span></p>
        <h3 class="c89 c40 subtitle" id="h.qy0ehwns5zow"><span class="c119">Submitted by </span><span class="c123 c152 c119 c164">Shaikh Ubaid (180001050)</span></h3>
        <h3 class="c89 c40"><span class="c45 c7">Computer Science and Engineering</span></h3>
        <h3 class="c89 c40"><span class="c7 c45">2nd Year</span></h3>
        <h3 class="c90 c40"><span class="c74 c7">&nbsp;03-06-2020</span></h3>
        <h3 class="c90 c40 c4"><span class="c74 c7"></span></h3>
        <h3 class="c40 c89"><span class="c45 c75">Under the Guidance of</span></h3>
        <h3 class="c89 c40"><span class="c75 c45">Dr. Kapil Ahuja</span></h3>
        <p class="c90 c40"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 209.83px; height: 225.33px;"><img alt="" src="images/image1.png" style="width: 209.83px; height: 225.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <h3 class="c90 c40 c4"><span class="c20 c7"></span></h3>
        <h3 class="c90 c40"><span class="c20 c7">Department of Computer Science and Engineering</span></h3>
        <h3 class="c90 c40"><span class="c20 c7">Indian Institute of Technology Indore</span></h3>
        <h3 class="c40 c90"><span class="c20 c7">Spring 2020</span></h3>
        <h1 class="c18" id="h.fyg1ep860f2c"><span class="c16 c7">ACKNOWLEDGEMENT</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c54 c7">I am highly indebted to Dr. Kapil Ahuja, Associate Professor, IIT Indore for his guidance and constant supervision as well as for providing an opportunity to work on Algorithm Analysis in real life.</span></p>
        <p class="c8 c40"><span class="c7 c54">I am thankful to the TAs, Mr. Rohit Aggrawal and Mr. Siddharth Gupta, who guided me and supported me from the initial to the final level.</span></p>
        <p class="c8 c40"><span class="c146">&nbsp;I have gained a lot of knowledge through this project, and I have had an enriching experience in this research project.</span><span class="c7 c74">&nbsp;</span></p>
        <hr style="page-break-before:always;display:none;">
        <h1 class="c18 c98" id="h.wj14q9h13cwi"><span class="c16 c7"></span></h1>
        <h1 class="c18" id="h.47fdhnjr701o"><span class="c16 c7">OVERVIEW &amp; PURPOSE</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ul class="c118 lst-kix_exhzh0b3bbrg-0 start">
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">Goal- The main goal of this project is to rank different maze generating algorithms according to the difficulty of the generated mazes.&#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">Following our main goal, we implement and analyse four maze generating algorithms. &#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">For the purpose of evaluating and ranking maze generating algorithms, we devise four agents which solve mazes and report the results. &#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">To assess the level of difficulty of a maze we inspect several features such as the number of visited intersections, dead ends, and overall steps of the agents. </span></li>
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">According to agents performances, we rank maze generating algorithms. </span></li>
            <li class="c12 c49 li-bullet-0">
                <span class="c88">The best performing algorithms are derived from algorithms for finding uniform spanning trees in graphs.</span>
                <hr style="page-break-before:always;display:none;">
            </li>
        </ul>
        <h1 class="c18" id="h.hg94dsx5ju2m"><span class="c16 c7">CONTENT</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_yjsac9wfgreq-0 start" start="1">
            <li class="c38 li-bullet-0">
                <h2 id="h.ausbyoedw97e" style="display:inline"><span class="c5">Introduction&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.ausbyoedw97e-1" style="display:inline"><span class="c5">Generating Mazes&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.ausbyoedw97e-2" style="display:inline"><span class="c5">Solving Agents&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.ausbyoedw97e-3" style="display:inline"><span class="c5">Analysis&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.l61hleojx2y9" style="display:inline"><span class="c5">Discussion&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.l61hleojx2y9-4" style="display:inline"><span class="c5">Results&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.l61hleojx2y9-5" style="display:inline"><span class="c5">Proposed Modification&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.l61hleojx2y9-6" style="display:inline"><span class="c5">Conclusion&#8203; and Future</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.l61hleojx2y9-7" style="display:inline"><span class="c5">References&#8203;</span></h2>
            </li>
            <li class="c38 li-bullet-0">
                <h2 id="h.w6dmlseeekal" style="display:inline"><span class="c5">Appendix</span></h2>
            </li>
        </ol>
        <hr style="page-break-before:always;display:none;">
        <h1 class="c18 c98" id="h.ru2b6xnbv2oz"><span class="c16 c7"></span></h1>
        <h1 class="c18" id="h.9xwpen9yb1k"><span class="c16 c7">1. INTRODUCTION</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h2 class="c55 c40" id="h.230pduxyxzag"><span class="c5">1.1 History</span></h2>
        <p class="c93"><span class="c15">Mazes are closely related to labyrinths which have been known since ancient times. Usually, they were built with naturally occurring materials. Originally they have had a spiritual connotation. Their later purpose was mainly amusement. In modern times, mazes became intriguing for scientists, especially for mathematicians.</span><span class="c51 c7">&nbsp;</span></p>
        <p class="c93"><span class="c51">&nbsp;</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 311.15px; height: 218.00px;"><img alt="" src="images/image4.png" style="width: 311.15px; height: 218.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 296.00px; height: 211.04px;"><img alt="" src="images/image2.png" style="width: 296.00px; height: 211.04px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <h2 class="c55 c40" id="h.6qxcl5aukey8"><span class="c5">1.2 Uses</span></h2>
        <p class="c93"><span class="c15">Mazes are used in various fields besides entertainment purposes, mazes are also used in psychology studies</span><span>&nbsp;</span><span class="c15">of human and animal behaviour to determine space awareness and also intelligence. Among others, mazes can be used in physics, for example in the study of crystal structures.</span><span class="c7 c51">&nbsp;</span></p>
        <p class="c4 c93"><span class="c51 c7"></span></p>
        <p class="c93 c4"><span class="c7 c66 c123 c207"></span></p>
        <hr style="page-break-before:always;display:none;">
        <h2 class="c63 c176" id="h.d0gj5yj3devc"><span class="c7 c123 c152 c195"></span></h2>
        <h2 class="c55 c40" id="h.gb2scjtexdgk"><span class="c5">1.3 Project Flow</span></h2>
        <p class="c8 c40 c4"><span class="c11 c7"></span></p>
        <p class="c8 c40"><span class="c11">We describe and analyse four maze generating algorithms. Our algorithms are originally used in graph theory. By </span><span class="c152 c180">using a specialisation</span><span class="c11 c7">&nbsp;method we implemented them to generate mazes.</span></p>
        <p class="c8 c40"><span class="c110">Perfect maze - A so-called &#39;perfect&#39; maze has every path connected to every other path, so there are no unreachable areas. Also, there are no path loops or isolated walls. There is always one unique path between any two points in the maze</span><span class="c15 c7">. </span></p>
        <p class="c8 c40"><span class="c11 c7">We generate mazes which are represented as trees only. Our focus is on 2D and planar mazes that do not contain overpasses</span></p>
        <p class="c8 c40"><span class="c11 c7">We devise four types of agents that walk across the mazes to help us analyse the difficulty of each maze type. They tell us the number of steps they take from the beginning to the end as well as the number of visited intersections and dead ends. </span></p>
        <p class="c40 c68"><span class="c11">Finally, we analyse the relation between the properties of mazes and attributes that agents provide us with. The final goal is to determine which algorithms are giving us the most difficult mazes</span><span class="c101">.</span><span class="c11 c7">&nbsp;</span></p>
        <p class="c162 c40"><span class="c11">In the next section, we describe </span><span class="c101">four</span><span class="c11">&nbsp;maze generating algorithms. In section 3 we establish the maze solving agents and their properties. In section 4 we analyse mazes. In section 5 we </span><span class="c152 c180">have a discussion</span><span class="c11 c7">. In section 6, we present the results.</span></p>
        <p class="c40 c4 c162"><span class="c11 c7"></span></p>
        <p class="c162 c40"><span class="c14">Note: The codes for all the algorithms, agents, data structure discussed in this report are given in the Appendix at the end of the report.</span>
        <hr style="page-break-before:always;display:none;">
        </p>
        <h1 class="c18" id="h.9xi95hv1qbe0"><span class="c16 c7">2. GENERATING MAZES</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c151"><span class="c37">Let us first explain the data structure that we are using to represent maze. We start with the square</span><span class="c37 c67">&nbsp;</span><span class="c20 c7">grid graph. Initially, all the edges (connections) represent walls. The algorithms convert specific walls into passages. After the algorithms do their job, the subgraph made out of passages represents a tree-like structured maze. In general, mazes can contain loops, overpasses, etc., but we focused on simple ones. </span></p>
        <p class="c190"><span class="c20 c7">&nbsp; &nbsp; &nbsp; </span></p>
        <p class="c8 c151"><span class="c20 c7">Every maze has properties which we use in the analysis, such as size, number of intersections, number of branches, average branch length and length of the dead ends (branches that do not split further). </span></p>
        <p class="c4 c158"><span class="c7 c66 c123 c37"></span></p>
        <p class="c4 c114"><span class="c7 c66 c37 c123"></span></p>
        <p class="c8"><span class="c7 c14 c123 c152">Note- All mazes analysed are square.</span></p>
        <h1 class="c18 c98" id="h.4nh9x5rv9rz7"><span class="c16 c7"></span></h1>
        <hr style="page-break-before:always;display:none;">
        <h1 class="c18 c98" id="h.mznplfwmxzvh"><span class="c16 c7"></span></h1>
        <h3 class="c138 c40" id="h.2jnddq140jez"><span class="c59 c7">2.1 Recursive Backtracking (RB)</span></h3>
        <p class="c8 c40"><span class="c15 c7">&nbsp;</span></p>
        <p class="c8 c40"><span class="c15 c7">Firstly, we implement the depth-first search (DFS) algorithm also called backtracking. The main idea of DFS is to go forward as much as possible, then backtrack to the first branch that has unvisited paths and repeats until everything is searched. We use randomised DFS to obtain random (non-trivial) mazes. Basic implementation of DFS uses recursion. However, we implemented it using an explicit stack to avoid stack overflow error caused by large mazes having long paths.</span></p>
        <p class="c17 subtitle" id="h.uir49wso01g"><span class="c65">Pseudo Code/Steps:-</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_lbdc15ts2ijp-0 start" start="1">
            <li class="c12 c49 li-bullet-0"><span class="c15 c7">Choose a starting point in the field. (used the 1st grid in implementation)&#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c15 c7">Randomly choose a wall at that point and carve a passage through to the adjacent cell, but only if the adjacent cell has not been visited yet. This becomes the new current cell.&#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c15 c7">If all adjacent cells have been visited, back up to the last cell that has uncarved walls and repeats.&#8203;</span></li>
            <li class="c12 c49 li-bullet-0"><span class="c15 c7">The algorithm ends when the process has backed all the way up to the starting point.&#8203;</span></li>
        </ol>
        <p class="c12"><span>As this algorithm visits every cell of the gird, its complexity turns out to be O(n</span><span class="c67">2</span><span class="c15 c7">) where n is the size of the grid.&#8203;</span></p>
        <p class="c4 c12"><span class="c15 c7"></span></p>
        <p class="c94"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 322.50px; height: 296.08px;"><img alt="" src="images/image7.png" style="width: 322.50px; height: 296.08px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c94"><span class="c15">Figure 1: Maze generated by Recursive Backtracking Algorithm</span>
        <hr style="page-break-before:always;display:none;">
        </p>
        <h3 class="c141 c197" id="h.m176k828e5xq"><span class="c7 c59">2.2 Aldous-Broder Algorithm (AB)</span></h3>
        <h3 class="c138 c40" id="h.8acnxe639oga"><span class="c59 c7">&nbsp;</span></h3>
        <p class="c8 c40"><span class="c15 c7">Aldous-Broder uses a random walk until all vertices are visited. During the walk, suitable connections between the vertices are created (under certain criteria). This algorithm is originally used to find uniform spanning tree in the graph. </span></p>
        <p class="c17 subtitle" id="h.m3hgvavgy6wq"><span class="c65">Pseudo Code/Steps:-</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_fhyslkkskglc-0 start" start="1">
            <li class="c38 li-bullet-0"><span class="c15 c7">Choose a vertex. Any vertex.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Choose a connected neighbour of the vertex and travel to it. If the neighbour has not yet been visited, add the travelled edge to the spanning tree.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Repeat step 2 until all vertices have been visited.&#8203;</span></li>
        </ol>
        <p class="c41"><span class="c7 c44">As this algorithm and the next one are random walking, their worst-case complexities could be infinite. Hence we study their time comparison graphs.</span></p>
        <h1 class="c40 c159" id="h.xm5ikzcf0pwi"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 336.00px; height: 336.00px;"><img alt="" src="images/image8.png" style="width: 336.00px; height: 336.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></h1>
        <p class="c90 c40"><span class="c15 c7">Figure 2: Maze generated by Aldous Broder Algorithm</span></p>
        <h3 class="c138 c40" id="h.tjvv4w6e5460"><span class="c59 c7">2.3 Wilson&rsquo;s Algorithm (W) </span></h3>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Wilson&rsquo;s algorithm is originally used to find a uniform spanning tree in the graph. The algorithm is very similar to Aldous-Broder with slightly better asymptotic time-complexity in theory. In practice, Wilson turns out to be slower because it uses dictionaries unlike the Aldous-Broder, which uses only arrays. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c17 subtitle" id="h.5tjyaom93w0w"><span class="c65">Pseudo Code/Steps:-</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_hymzl8xfxc9-0 start" start="1">
            <li class="c38 li-bullet-0"><span class="c15 c7">Choose any vertex at random and add it to the UST.(Uniform Spanning Tree)&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Select any vertex that is not already in the UST and perform a random walk until you encounter a vertex that is in the UST.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Add the vertices and edges touched in the random walk to the UST.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Repeat 2 and 3 until all vertices have been added to the UST.&#8203;</span></li>
        </ol>
        <p class="c41 c4 c141"><span class="c15 c7"></span></p>
        <p class="c167"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 340.50px; height: 340.50px;"><img alt="" src="images/image3.png" style="width: 340.50px; height: 340.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c4 c167"><span class="c15 c7"></span></p>
        <p class="c90 c40"><span class="c15 c7">Figure 3: Maze generated by Wilson Algorithm</span></p>
        <h3 class="c138 c40" id="h.vfa93ak1z2mw"><span class="c59 c7">2.4 Hunt and Kill (HK) </span></h3>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">The Hunt and Kill algorithm uses the idea of the recursive backtrack but it starts from a random unvisited vertex whenever it hits the dead end. It does not backtrack to the last vertex with unvisited neighbours. There is an iterative version of this, which starts from the first unvisited vertex which has a visited neighbour. </span></p>
        <p class="c17 subtitle" id="h.ajzg25wikast"><span class="c65">Pseudo Code/Steps:-</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_4i77ten1ov0t-0 start" start="1">
            <li class="c38 li-bullet-0"><span class="c15 c7">Choose a starting location.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Perform a random walk, carving passages to unvisited neighbours, until the current cell has no unvisited neighbours.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Enter &ldquo;hunt&rdquo; mode, where you scan the grid looking for an unvisited cell that is adjacent to a visited cell. If found, carve a passage between the two and let the formerly unvisited cell be the new starting location.&#8203;</span></li>
            <li class="c38 li-bullet-0"><span class="c15 c7">Repeat steps 2 and 3 until the hunt mode scans the entire grid and finds no unvisited cells.&#8203;</span></li>
        </ol>
        <p class="c22"><span>Again this algorithm visits each cell once, hence time complexity is O(n</span><span class="c67">2</span><span class="c15 c7">)&#8203;</span></p>
        <p class="c22 c4"><span class="c15 c7"></span></p>
        <p class="c89 c40"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 263.00px; height: 263.00px;"><img alt="" src="images/image5.png" style="width: 263.00px; height: 263.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c90 c40"><span class="c15 c7">Figure 4: Maze generated by Hunt and Kill Algorithm</span></p>
        <h1 class="c18" id="h.4umnbibcx9ag"><span class="c16 c7">3. Solving Agents </span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8"><span class="c20 c7">Agents help us understand how difficult a particular maze is to solve. Agents produce various attributes of mazes with which we will later analyse the difficulty of the mazes. </span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c41 c196"><span class="c20 c7">These attributes are: </span></p>
        <p class="c22"><span class="c20 c7">&bull; number of steps needed from the start to the end of maze</span></p>
        <p class="c22"><span class="c20 c7">&bull; number of visited cells</span></p>
        <p class="c22"><span class="c20 c7">&bull; number of visited intersections</span></p>
        <p class="c22"><span class="c20 c7">&bull; number of visited dead ends</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h3 class="c48 c40" id="h.4kbhq9u4v2v6"><span class="c59 c7">3.1 Random Walk (RW) Agent </span></h3>
        <p class="c8 c40"><span class="c15 c7">The agent walks randomly from a vertex to its random neighbour until it gets to the end of the maze. In particular, when located in a node, an agent selects a neighbouring node uniformly at random and moves into it. It repeats this procedure until it finds the end. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h3 class="c48 c40" id="h.hjyjjsipfhn1"><span class="c59 c7">3.2 Depth First Search (DFS) Agent </span></h3>
        <p class="c8 c40"><span class="c15 c7">This agent walks as far as it can until it hits a dead end. The agent then backtracks to the first node with unvisited neighbours. It keeps repeating the walk until it comes to the end of the maze. The precedence of agent&rsquo;s turns at intersections are manually predefined: west, north, east, south. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h3 class="c40 c48" id="h.t106lcx7hn6i"><span class="c59 c7">3.3 Heuristic Depth First Search (HDFS) Agent </span></h3>
        <p class="c8 c40"><span class="c15 c7">Similar to the DFS agent, but selects the preferred directions with a simple heuristic. In particular neighbours with lower Manhattan distance to the end of the maze are preferred.</span></p>
        <p class="c8 c40"><span class="c15 c7">&nbsp;</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h3 class="c48 c40" id="h.lzu3dtpsnmmz"><span class="c59 c7">3.4 Breadth-First Search (BFS) Agent </span></h3>
        <p class="c8 c40"><span>This agent uses the idea of BFS to solve the maze but instead of the queue to visit the nodes the agent first visits the nodes closest to the end of the maze. This agent resembles a human solver which can freely jump from one path to another (at least when solving printed mazes).</span>
        <hr style="page-break-before:always;display:none;">
        </p>
        <h1 class="c18" id="h.dz18gowmgv4j"><span class="c16 c7">4. Analysis </span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">In this section, we analyse the difficulty of the mazes constructed by the above four generating algorithms. We analyse the properties of mazes and results of solving agents to determine the difficulty of mazes. For the sake of completeness we also experimentally analyse the time performance of algorithms. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <h2 class="c55 c63 c40" id="h.qquis51pw2zn"><span class="c5"></span></h2>
        <h2 class="c55 c63 c40" id="h.k64mv4grakm"><span class="c5"></span></h2>
        <h2 class="c55 c40" id="h.daqhvn24nb2s"><span class="c5">4.1 Maze Generating Time </span></h2>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c14">We analyse the execution time of maze generating algorithms with respect to the maze size</span><span class="c37">. We did not bother to consider the number of nodes of the maze which would be a true measure. We used only the length of the side of the square grid graph because we are interested in relations among performances of different algorithms. The result is shown in Figure 5 on the next page</span><span class="c15 c7">.&#8203;</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span>&nbsp;</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 641.00px; height: 400.33px;"><img alt="" src="images/image6.png" style="width: 641.00px; height: 400.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c8 c40"><span class="c20 c7">Figure 5: Running time of the maze generating algorithms with respect to the maze size. </span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c17 c4 subtitle" id="h.b1753st4ezph"><span class="c20 c135"></span></p>
        <p class="c17 subtitle" id="h.l8pxk61144l9"><span class="c20 c135">Conclusions from the Graph:</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c37">Some algorithms stand out performance-wise. They are either exceptionally slower or faster than we would expect.</span><span class="c7 c37 c84">&nbsp;</span></p>
        <p class="c8 c40"><span class="c37">Wilson algorithm is very similar to Aldous-Broder with slightly better asymptotic time-complexity in theory. In practice, Wilson turns out to be slower because it uses dictionaries unlike the Aldous-Broder, which uses only arrays. </span></p>
        <p class="c8 c40"><span class="c37">We have</span><span class="c20 c7">&nbsp;Aldous- Broder algorithm which is surprisingly fast. It is simple and uses primitives instead of higher data structures. </span></p>
        <p class="c8 c40"><span class="c20 c7">As both Recursive Backtracking and Hunt and Kill algorithms basically use DFS, their time complexity curves are similar.</span></p>
        <h2 class="c55 c40" id="h.pp87x8puuizx"><span class="c5">4.2 Maze Properties </span></h2>
        <p class="c8 c4"><span class="c15 c7"></span></p>
        <p class="c8"><span class="c15 c7">To analyse the difficulty of a maze, we consider the following properties: </span></p>
        <p class="c8 c40"><span class="c15 c7">&bull; size s </span></p>
        <p class="c8 c40"><span>&bull; number of intersections n</span><span class="c95">i</span><span>; </span><span class="c15 c7">intersections are vertices with more than two neighbours </span></p>
        <p class="c8 c40"><span>&bull; number of dead ends n</span><span class="c95">de</span><span>;</span><span class="c15 c7">&nbsp;dead ends are vertices with only one neighbour. </span></p>
        <p class="c8"><span>The bigger n</span><span class="c95">i</span><span class="c15 c7">, the more difficult it is to solve the maze. The same goes for dead ends. </span></p>
        <p class="c8 c4"><span class="c15 c7"></span></p>
        <p class="c8"><span>I generated 100 mazes (of size 20 &times; 20) of each type and calculated the number of intersections and dead ends. The average results are shown in Table 1. </span></p>
        <p class="c36 c4"><span class="c51 c7"></span></p>
        <p class="c36"><span class="c51 c7">&nbsp;</span></p>
        <a id="t.3ed52e236ff54f21ee353674a1eb139e03c04f82"></a><a id="t.0"></a>
        <table class="c193">
            <tbody>
                <tr class="c47">
                    <td class="c183" colspan="1" rowspan="1">
                        <p class="c19"><span class="c7 c34">&#8203;</span></p>
                    </td>
                    <td class="c132" colspan="1" rowspan="1">
                        <p class="c19"><span class="c34 c7">No of Intersections Generated &#8203;</span></p>
                    </td>
                    <td class="c191" colspan="1" rowspan="1">
                        <p class="c19"><span class="c34 c7">No of Dead Ends Generated&#8203;</span></p>
                    </td>
                    <td class="c175" colspan="1" rowspan="1">
                        <p class="c19"><span class="c34 c7">Score&#8203;</span></p>
                    </td>
                    <td class="c128" colspan="1" rowspan="1">
                        <p class="c19"><span class="c34 c7">Rank&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c206" colspan="1" rowspan="1">
                        <p class="c19"><span class="c32 c7">AldousBroder&#8203;</span></p>
                    </td>
                    <td class="c173" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">10173&#8203;</span></p>
                    </td>
                    <td class="c136" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">11709&#8203;</span></p>
                    </td>
                    <td class="c150" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">2&#8203;</span></p>
                    </td>
                    <td class="c78" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c117" colspan="1" rowspan="1">
                        <p class="c19"><span class="c32 c7">Wilson&#8203;</span></p>
                    </td>
                    <td class="c116" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">10147&#8203;</span></p>
                    </td>
                    <td class="c27" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">11663&#8203;</span></p>
                    </td>
                    <td class="c130" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">2&#8203;</span></p>
                    </td>
                    <td class="c62" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c171" colspan="1" rowspan="1">
                        <p class="c19"><span class="c32 c7">RecursiveBacktracking&#8203;</span></p>
                    </td>
                    <td class="c192" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">3973&#8203;</span></p>
                    </td>
                    <td class="c179" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">4216&#8203;</span></p>
                    </td>
                    <td class="c86" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">0.753029337&#8203;</span></p>
                    </td>
                    <td class="c76" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">2&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c117" colspan="1" rowspan="1">
                        <p class="c19"><span class="c32 c7">HuntAndKill&#8203;</span></p>
                    </td>
                    <td class="c116" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">3728&#8203;</span></p>
                    </td>
                    <td class="c27" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">3938&#8203;</span></p>
                    </td>
                    <td class="c130" colspan="1" rowspan="1">
                        <p class="c13"><span class="c7 c32">0.7027827249&#8203;</span></p>
                    </td>
                    <td class="c62" colspan="1" rowspan="1">
                        <p class="c13"><span class="c32 c7">3&#8203;</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="c36 c4"><span class="c51 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 1: Average number of intersections and dead ends of the mazes. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c7 c15"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 1 indicates that certain mazes generated with similar algorithms behave similarly. In particular, Aldous-Broder and Wilson have practically the same number of intersections and dead ends. They both originate from algorithms for finding uniform spanning tree. </span></p>
        <p class="c8 c40"><span>Hunt and Kill and Recursive backtrack have notably smaller values of n</span><span class="c95">i </span><span>and n</span><span class="c95">de</span><span>&nbsp;than other mazes. These algorithms</span><span class="c95">&nbsp;</span><span class="c15 c7">originate from DFS. </span></p>
        <p class="c8 c40"><span class="c15 c7">The larger number of intersections and dead ends means more difficult maze, one can deviate from a correct path easily. </span></p>
        <p class="c8 c40"><span class="c15 c7">Aldous Broder and Wilson perform best in this case. </span></p>
        <hr style="page-break-before:always;display:none;">
        <h2 class="c63 c40 c172" id="h.g2712wt5r13k"><span class="c5"></span></h2>
        <h2 class="c55 c40" id="h.5eoykyrth3kh"><span class="c5">4.3 Agent Performance </span></h2>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8"><span class="c15 c7">Maze solving agents give us another set of maze properties: </span></p>
        <p class="c8 c40"><span class="c15 c7">&bull; number of steps s that agent needed to get from the beginning to the end </span></p>
        <p class="c8 c40"><span>&bull; number of visited intersections i</span><span class="c15 c92">v, </span></p>
        <p class="c8 c40"><span>&bull; number of visited dead ends de</span><span class="c15 c92">v. </span></p>
        <p class="c4 c166 subtitle" id="h.eux7jrxyomhp"><span class="c65"></span></p>
        <p class="c17 subtitle" id="h.ffha716tu49"><span class="c65">4.3.0 Ranking</span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span>We ranked maze generating algorithms according to the performances of the maze solving agents. To rank maze generating algorithms we devised a simple method. For every algorithm i, we calculated score s</span><span class="c95">i: </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c90 c40"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 304.00px; height: 49.00px;"><img alt="" src="images/image10.jpg" style="width: 304.00px; height: 49.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c8 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">&nbsp;</span></p>
        <p class="c8 c40"><span>where A</span><span class="c95">i </span><span>represents the value of the score of an agent</span><span class="c95">&nbsp;</span><span>A for algorithm i, and max(A) represents the maximum value that the agent scored among all generating algorithms. According to the score s</span><span class="c95">i</span><span>, we ranked generating algorithms. Algorithm</span><span class="c95">&nbsp;</span><span class="c15 c7">with the biggest (best) score has rank 1, etc. </span></p>
        <p class="c40 c4 c133 subtitle" id="h.b04u2928iofn"><span class="c65"></span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c17 c4 subtitle" id="h.enullr7x3c0h"><span class="c65"></span></p>
        <p class="c17 subtitle" id="h.45g5ekuqluvv"><span class="c65">4.3.1 Number of Steps </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">The basic measure is the number of steps an agent makes from the start to the end. A step is defined as a transition from a node to the adjacent node. </span></p>
        <p class="c58"><span class="c51 c7">&nbsp;</span></p>
        <a id="t.33b0ecefb57ad44a6c924bb0bb4d856d9e7d3573"></a><a id="t.1"></a>
        <table class="c91">
            <tbody>
                <tr class="c47">
                    <td class="c60" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">&#8203;</span></p>
                    </td>
                    <td class="c120" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">DFS&#8203;</span></p>
                    </td>
                    <td class="c120" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">BFS&#8203;</span></p>
                    </td>
                    <td class="c105" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">HeuristicsDFS&#8203;</span></p>
                    </td>
                    <td class="c186" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">RandomWalk&#8203;</span></p>
                    </td>
                    <td class="c134" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Score&#8203;</span></p>
                    </td>
                    <td class="c24" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Rank&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c154">
                    <td class="c81" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">RecursiveBacktracking&#8203;</span></p>
                    </td>
                    <td class="c33" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">33940&#8203;</span></p>
                    </td>
                    <td class="c33" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">24038&#8203;</span></p>
                    </td>
                    <td class="c129" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">16199&#8203;</span></p>
                    </td>
                    <td class="c85" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4819386&#8203;</span></p>
                    </td>
                    <td class="c42" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.693617267&#8203;</span></p>
                    </td>
                    <td class="c96" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c70" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">Wilson&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">29585&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">33568&#8203;</span></p>
                    </td>
                    <td class="c77" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">13346&#8203;</span></p>
                    </td>
                    <td class="c174" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1715718&#8203;</span></p>
                    </td>
                    <td class="c71" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.03706382&#8203;</span></p>
                    </td>
                    <td class="c39" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c125" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">AldousBroder&#8203;</span></p>
                    </td>
                    <td class="c97" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">29654&#8203;</span></p>
                    </td>
                    <td class="c97" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">34062&#8203;</span></p>
                    </td>
                    <td class="c43" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">12055&#8203;</span></p>
                    </td>
                    <td class="c184" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1994888&#8203;</span></p>
                    </td>
                    <td class="c121" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.886127007&#8203;</span></p>
                    </td>
                    <td class="c168" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c70" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">HuntAndKill&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">17055&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">34656&#8203;</span></p>
                    </td>
                    <td class="c77" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">11427&#8203;</span></p>
                    </td>
                    <td class="c174" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1976270&#8203;</span></p>
                    </td>
                    <td class="c71" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2.617985094&#8203;</span></p>
                    </td>
                    <td class="c39" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="c8 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 2: Average number of steps needed from the start to the end. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c17 c4 subtitle" id="h.cae71i8sexio"><span class="c65"></span></p>
        <p class="c17 subtitle" id="h.jbevpe8p14vg"><span class="c65">4.3.2 Visited Intersections</span></p>
        <p class="c17 subtitle" id="h.df3942sniv2y"><span class="c65">&nbsp;</span></p>
        <p class="c8 c40"><span class="c15 c7">Next, we analyse how many intersections agents visit. The more intersections that an agent visits the better chance to miss the right path. Hence, the generating algorithm is more difficult. </span></p>
        <p class="c4 c204"><span class="c51 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">&nbsp;</span></p>
        <a id="t.33b0ecefb57ad44a6c924bb0bb4d856d9e7d3573"></a><a id="t.2"></a>
        <table class="c91">
            <tbody>
                <tr class="c47">
                    <td class="c60" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">&#8203;</span></p>
                    </td>
                    <td class="c120" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">DFS&#8203;</span></p>
                    </td>
                    <td class="c120" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">BFS&#8203;</span></p>
                    </td>
                    <td class="c105" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">HeuristicsDFS&#8203;</span></p>
                    </td>
                    <td class="c186" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">RandomWalk&#8203;</span></p>
                    </td>
                    <td class="c134" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Score&#8203;</span></p>
                    </td>
                    <td class="c24" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Rank&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c154">
                    <td class="c81" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">RecursiveBacktracking&#8203;</span></p>
                    </td>
                    <td class="c33" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">33940&#8203;</span></p>
                    </td>
                    <td class="c33" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">24038&#8203;</span></p>
                    </td>
                    <td class="c129" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">16199&#8203;</span></p>
                    </td>
                    <td class="c85" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4819386&#8203;</span></p>
                    </td>
                    <td class="c42" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.693617267&#8203;</span></p>
                    </td>
                    <td class="c96" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c70" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">Wilson&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">29585&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">33568&#8203;</span></p>
                    </td>
                    <td class="c77" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">13346&#8203;</span></p>
                    </td>
                    <td class="c174" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1715718&#8203;</span></p>
                    </td>
                    <td class="c71" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.03706382&#8203;</span></p>
                    </td>
                    <td class="c39" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c125" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">AldousBroder&#8203;</span></p>
                    </td>
                    <td class="c97" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">29654&#8203;</span></p>
                    </td>
                    <td class="c97" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">34062&#8203;</span></p>
                    </td>
                    <td class="c43" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">12055&#8203;</span></p>
                    </td>
                    <td class="c184" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1994888&#8203;</span></p>
                    </td>
                    <td class="c121" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.886127007&#8203;</span></p>
                    </td>
                    <td class="c168" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c70" colspan="1" rowspan="1">
                        <p class="c19"><span class="c7 c9">HuntAndKill&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">17055&#8203;</span></p>
                    </td>
                    <td class="c56" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">34656&#8203;</span></p>
                    </td>
                    <td class="c77" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">11427&#8203;</span></p>
                    </td>
                    <td class="c174" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1976270&#8203;</span></p>
                    </td>
                    <td class="c71" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2.617985094&#8203;</span></p>
                    </td>
                    <td class="c39" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="c4 c8"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 3: Average number of visited intersections of each agent. </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">We used the same ranking technique as in section 4.3.1. Unlike the number of steps, here Hunt and Kill performs badly. The best performing algorithms are Aldous-Broder and Wilson, whose original idea is finding uniform spanning trees in graphs.</span></p>
        <p class="c4 c102 subtitle" id="h.izxzytvgoabj"><span class="c65"></span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c17 c4 subtitle" id="h.317z80k9zenp"><span class="c65"></span></p>
        <p class="c17 subtitle" id="h.jnii2eh96wqk"><span class="c65">4.3.3 Visited Dead Ends </span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span>The last property that we analyse is the number of dead ends that agents visit on average. </span></p>
        <p class="c153"><span class="c51 c7">&nbsp;</span></p>
        <a id="t.6e76576537e28adfc097fbf3479917bf60d8c619"></a><a id="t.3"></a>
        <table class="c91">
            <tbody>
                <tr class="c47">
                    <td class="c144" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">&#8203;</span></p>
                    </td>
                    <td class="c53" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">DFS&#8203;</span></p>
                    </td>
                    <td class="c53" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">BFS&#8203;</span></p>
                    </td>
                    <td class="c170" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">HeuristicsDFS&#8203;</span></p>
                    </td>
                    <td class="c107" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">RandomWalk&#8203;</span></p>
                    </td>
                    <td class="c112" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Score&#8203;</span></p>
                    </td>
                    <td class="c124" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Rank&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c169" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">AldousBroder&#8203;</span></p>
                    </td>
                    <td class="c72" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">8187&#8203;</span></p>
                    </td>
                    <td class="c72" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">9718&#8203;</span></p>
                    </td>
                    <td class="c61" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2718&#8203;</span></p>
                    </td>
                    <td class="c79" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">294181&#8203;</span></p>
                    </td>
                    <td class="c115" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.892024943&#8203;</span></p>
                    </td>
                    <td class="c46" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c104" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">Wilson&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">8059&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">9557&#8203;</span></p>
                    </td>
                    <td class="c156" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3047&#8203;</span></p>
                    </td>
                    <td class="c137" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">253293&#8203;</span></p>
                    </td>
                    <td class="c99" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.828809001&#8203;</span></p>
                    </td>
                    <td class="c148" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c126" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">RecursiveBacktracking&#8203;</span></p>
                    </td>
                    <td class="c82" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3188&#8203;</span></p>
                    </td>
                    <td class="c82" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2120&#8203;</span></p>
                    </td>
                    <td class="c131" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">627&#8203;</span></p>
                    </td>
                    <td class="c140" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">219894&#8203;</span></p>
                    </td>
                    <td class="c201" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.367494267&#8203;</span></p>
                    </td>
                    <td class="c199" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c104" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">HuntAndKill&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1213&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3343&#8203;</span></p>
                    </td>
                    <td class="c156" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">855&#8203;</span></p>
                    </td>
                    <td class="c137" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">97047&#8203;</span></p>
                    </td>
                    <td class="c99" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1.102655158&#8203;</span></p>
                    </td>
                    <td class="c148" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="c153 c4"><span class="c51 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 4: Average number of visited dead ends of each agent. </span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c4 c182"><span class="c51 c7"></span></p>
        <h1 class="c18" id="h.j9o3gvpbhao"><span class="c16 c7">5. Discussion </span></h1>
        <p class="c4 c113"><span class="c51 c7"></span></p>
        <p class="c8 c40"><span class="c74 c7">Our goal was to rank the maze generating algorithms from those that generate the most difficult mazes to those that generate the least difficult mazes. </span></p>
        <p class="c8 c40 c4"><span class="c74 c7"></span></p>
        <p class="c8 c40"><span class="c74 c7">We did that with the help of two criteria: </span></p>
        <ol class="c118 lst-kix_nbbwavntwgua-0 start" start="1">
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">maze properties and </span></li>
            <li class="c12 c49 li-bullet-0"><span class="c74 c7">solving agents performances. </span></li>
        </ol>
        <hr style="page-break-before:always;display:none;">
        <h1 class="c18 c98" id="h.ohjlvwboqelq"><span class="c16 c7"></span></h1>
        <h1 class="c18" id="h.xmwj379pgjua"><span class="c16 c7">6. Results</span></h1>
        <p class="c8 c40"><span class="c37">We ranked the algorithms according to the criteria. The final ranking of difficulty level: For every measure, we ranked algorithms. Finally, we calculated the average of all the ranks which gives us the final order in Table 5.</span><span class="c15 c7">&nbsp;</span></p>
        <p class="c8 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">&nbsp;</span></p>
        <a id="t.c533082b5f33401754fce1a7e973e08b5f1e7dbe"></a><a id="t.4"></a>
        <table class="c122">
            <tbody>
                <tr class="c108">
                    <td class="c145" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">&#8203;</span></p>
                    </td>
                    <td class="c127" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Steps were taken by different agents&#8203;</span></p>
                    </td>
                    <td class="c200" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Intersections Visited by different agents&#8203;</span></p>
                    </td>
                    <td class="c143" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Dead Ends&#8203;</span></p>
                        <p class="c19"><span class="c7 c26">Visited by different agents&#8203;</span></p>
                    </td>
                    <td class="c189" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">TotalIntersections and Dead EndsGenerated&#8203;</span></p>
                    </td>
                    <td class="c155" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Average&#8203;</span></p>
                    </td>
                    <td class="c53" colspan="1" rowspan="1">
                        <p class="c19"><span class="c26 c7">Rank&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c109" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">AldousBroder&#8203;</span></p>
                    </td>
                    <td class="c139" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                    <td class="c208" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                    <td class="c161" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                    <td class="c181" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                    <td class="c64" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1.5&#8203;</span></p>
                    </td>
                    <td class="c72" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c178" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">Wilson&#8203;</span></p>
                    </td>
                    <td class="c177" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                    <td class="c100" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                    <td class="c31" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                    <td class="c188" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                    <td class="c187" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1.75&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c157" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">RecursiveBacktracking&#8203;</span></p>
                    </td>
                    <td class="c57" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">1&#8203;</span></p>
                    </td>
                    <td class="c83" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                    <td class="c163" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                    <td class="c87" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2&#8203;</span></p>
                    </td>
                    <td class="c205" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">2.25&#8203;</span></p>
                    </td>
                    <td class="c82" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                </tr>
                <tr class="c21">
                    <td class="c178" colspan="1" rowspan="1">
                        <p class="c19"><span class="c9 c7">HuntAndKill&#8203;</span></p>
                    </td>
                    <td class="c177" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                    <td class="c100" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                    <td class="c31" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                    <td class="c188" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3&#8203;</span></p>
                    </td>
                    <td class="c187" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">3.75&#8203;</span></p>
                    </td>
                    <td class="c35" colspan="1" rowspan="1">
                        <p class="c13"><span class="c9 c7">4&#8203;</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c15 c7">Table 5: Ranking of algorithms by the level of the difficulty of Mazes generated. </span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c4 c194"><span class="c51 c7"></span></p>
        <p class="c8 c40"><span class="c88 c203">Having established the ranking of the algorithms</span><span>&nbsp;</span><span class="c20 c7">we can now find the properties that distinguish among the various levels of difficulty of the algorithms.</span></p>
        <p class="c8 c40"><span class="c20 c7">&nbsp;</span></p>
        <p class="c8 c40"><span class="c20 c7">The number of intersections is correlated to the difficulty of mazes. More intersections mean that the maze is more difficult and that there is more chance to miss the correct path. The type of algorithm contributes to the level of the difficulty: </span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">&bull; Best results are achieved by Aldous- Broder and Wilson. They originate from algorithms for finding uniform spanning trees in graphs. We speculate that agents have difficulty navigating through the maze because the paths are unbiased in any direction. </span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">&bull; The worst performing pair is Recursive Backtracking, and Hunt and Kill algorithms. They originate from the graph search algorithms. On the other hand, most solving agents use the same approach which enables them to solve the maze easily. Therefore the mazes are generated in a way that suits the solving agents. </span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c8 c40 c4"><span class="c92 c106 c66"></span></p>
        <h1 class="c18" id="h.2718fdqc4va7"><span class="c7 c16">7. Combining Aldous Broder and Wilson</span></h1>
        <p class="c8 c40"><span class="c20 c7">Problem Tackled</span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">In Wilson&rsquo;s Algorithm, it takes too much time initially to find paths to already visited vertices as it uses loop-erased random walk and its loops are frequently erased in the beginning as the number of visited vertices is less in the beginning and hence, finding a path to a visited vertex is difficult. </span></p>
        <p class="c8 c40"><span class="c20 c7">In Aldous Broder, it takes too much time in the end to visit the unvisited vertices, as it is a random walking algorithm and does not have any sense of direction/attraction towards the unvisited vertices located in corners.</span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">Solution proposed</span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">The idea is to combine both Aldous-Broder and Wilson&rsquo;s Algorithm. Doing AB until about 30% of the field is filled, and then switching to Wilson&#39;s which empirically improves the odds quite a bit.</span></p>
        <p class="c8 c40 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c7 c20">Why this solution is better</span></p>
        <p class="c8 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">As we will be doing Aldous Broder initially, it won&rsquo;t take much time to fill about 30% of the maze (that is visiting at least 30% of the available vertices) as this algorithm is fast in the beginning. Then we switch to Wilson&rsquo;s Algorithm, which will also work fast as it has started from a state where the density of visited vertices is more. Aldous Broder is not good at the end and Wilson is not good at the beginning. So we use Aldous at the beginning and later Wilson so that the drawbacks of both are eliminated and the benefits of both are combined.</span></p>
        <p class="c8 c4"><span class="c20 c7"></span></p>
        <p class="c8 c40 c4"><span class="c15 c92"></span></p>
        <p class="c41"><span class="c20 c7">Graph After Combining both the Algorithms</span></p>
        <p class="c41 c4"><span class="c20 c7"></span></p>
        <p class="c41"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 606.00px; height: 374.33px;"><img alt="" src="images/image9.png" style="width: 638.48px; height: 411.97px; margin-left: -23.40px; margin-top: -24.18px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
        <p class="c8 c40"><span>Here, we can see clearly that the Combined Algorithm takes much less time as compared to Aldous Broder and Wilson&rsquo;s Algorithm.</span></p>
        <p class="c28 c4"><span class="c92 c66 c106"></span></p>
        <p class="c28"><span class="c202">Note:</span><span class="c66">&nbsp;Code for Combined Algorithm is given in the Appendix.</span>
        <hr style="page-break-before:always;display:none;">
        </p>
        <h1 class="c18" id="h.rxerrl1hc9r1"><span>8</span><span class="c16 c7">. Conclusion and Future</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <p class="c8 c40"><span class="c20 c7">In our project, we studied and analysed two different approaches of generating mazes and were able to rank them by levels of difficulty. Nevertheless, both two considered types were somehow kindred since they are used for finding trees in graphs. In the future, it would be useful to take into consideration algorithms with a completely different approach and then compare the results. </span></p>
        <p class="c8 c40"><span class="c37">As a continuation of our work, it would be worthwhile looking into more complex mazes such as spatial, braided, overlapping, etc.</span><span class="c15 c7">&nbsp;</span></p>
        <hr style="page-break-before:always;display:none;">
        <p class="c4 c147"><span class="c51 c7"></span></p>
        <h1 class="c160" id="h.wmio8ehnb7q8"><span class="c16 c7">9. References</span></h1>
        <p class="c8 c40 c4"><span class="c15 c7"></span></p>
        <ol class="c118 lst-kix_ynz5qdcgvs96-0 start" start="1">
            <li class="c38 li-bullet-0"><span class="c37">Gabrov&#711;sek, Peter, &ldquo;</span><span class="c111 c37"><a class="c25" href="https://www.google.com/url?q=http://ipsitransactions.org/journals/papers/tir/2019jan/p5.pdf&amp;sa=D&amp;source=editors&amp;ust=1621719518791000&amp;usg=AOvVaw1ZRUAfmMXv7Nfq7lhd4ioX">Analysis of Maze Generating Algorithms</a></span><span class="c20 c7">&rdquo;, The IPSI BgD Transactions on Internet Research, January 2019 Volume 15 Number 1 (ISSN 1820-4503).</span></li>
            <li class="c38 li-bullet-0"><span class="c37">Wikipedia contributors. &ldquo;</span><span class="c111 c37"><a class="c25" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DMaze_generation_algorithm%26oldid%3D959964520.&amp;sa=D&amp;source=editors&amp;ust=1621719518792000&amp;usg=AOvVaw2LfpbHZtUGMNTX44SkhXTN">Maze generation algorithm</a></span><span class="c20 c7">&rdquo; [Internet]. Wikipedia, The Free Encyclopedia; 2020 May 31.</span></li>
            <li class="c38 li-bullet-0"><span class="c37">A. Karlsson, &ldquo;</span><span class="c111 c37"><a class="c25" href="https://www.google.com/url?q=http://urn.kb.se/resolve?urn%3Durn:nbn:se:bth-16839&amp;sa=D&amp;source=editors&amp;ust=1621719518793000&amp;usg=AOvVaw3MAYQjkxgZeMBcZ69wR04V">Evaluation of the Complexity of Procedurally Generated Maze Algorithms</a></span><span class="c20 c7">,&rdquo; Dissertation, 2018.</span></li>
            <li class="c38 li-bullet-0"><span class="c37">Jamis Buck, </span><span class="c37 c111"><a class="c25" href="https://www.google.com/url?q=http://weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap&amp;sa=D&amp;source=editors&amp;ust=1621719518794000&amp;usg=AOvVaw3iztl9VkVq68kSijbXrvqX">&quot;Maze Generation: Algorithm Recap&rdquo;,</a></span><span class="c20 c7">&nbsp;the Buckblog 7 February 2011.</span></li>
            <li class="c38 li-bullet-0"><span class="c37">Ms. Shivani H. Shah, Ms. Jagruti M. Mohite, Mr. Anoop G. Musale, Mr. Jay L. Borade, &ldquo;</span><span class="c111 c37"><a class="c25" href="https://www.google.com/url?q=https://www.ijser.org/researchpaper/Survey-Paper-on-Maze-Generation-Algorithms-for-Puzzle-Solving-Games.pdf&amp;sa=D&amp;source=editors&amp;ust=1621719518794000&amp;usg=AOvVaw2e1x-lcsf-8ELgAx3MyXpS">Survey Paper on Maze Generation Algorithms for Puzzle Solving Games</a></span><span class="c20 c7">&rdquo;, International Journal of Scientific &amp; Engineering Research, Volume 8, Issue 2, February-2017 (ISSN 2229-5518).</span></li>
        </ol>
        <div>
            <h4 class="c40 c165" id="h.37o5xb65948r"><span>&nbsp; </span></h4>
        </div>
    </body>
</html>
