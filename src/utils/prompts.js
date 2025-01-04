// Generate a study material for <Topic> for <Course Type> and level of difficulty will be <Difficulty Level> with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, All results in JSON format.
// Generate exam material detail content for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not add HTMLKL, Head, body, title tag). The chapters:

// Generate exam material detail content for each chapter.
//     Make sure to include all topic points in the content.
//     make sure to give content in HTML format(Do not Add HTMLKL, Head, Body, title tag),  and make the html content more attractive The chapters:

// with the help of these course title: <CourseTitle>, coursesummary: <CourseSummary>,course notes: <CourseNotes>. Generate the flashcard on topic: <CourseTopics> in JSON format with front back content, Maximum 15

// {
//     "course_name": "Python for Beginners: Exam Study Material (Easy Level)",
//     "course_summary": "This study material provides a foundational understanding of Python programming, focusing on essential concepts and syntax suitable for beginners. It aims to prepare you for a basic Python exam by covering core topics such as data types, control flow, functions, and basic data structures. The difficulty is set to 'Easy' to cater to individuals with little to no prior programming experience.",
//     "chapters": [
    //   {
    //     "chapter_number": 1,
    //     "chapter_title": "Introduction to Python",
    //     "chapter_summary": "This chapter introduces the fundamentals of Python, including what it is, why it's popular, setting up the environment, and writing your first simple program.",
    //     "topics": [
    //       "What is Python?",
    //       "Why use Python?",
    //       "Setting up Python (Installation & Environment)",
    //       "Running your first Python program ('Hello, World!')",
    //       "Basic Syntax rules",
    //       "Comments in Python"
    //     ]
    //   },
//       {
//         "chapter_number": 2,
//         "chapter_title": "Data Types and Variables",
//         "chapter_summary": "This chapter explores fundamental data types in Python (integers, floats, strings, booleans) and how to store them in variables. You will also learn about variable naming conventions and basic operations.",
//         "topics": [
//           "Variables (Declaration & Assignment)",
//           "Integer Data Type (int)",
//           "Floating-Point Data Type (float)",
//           "String Data Type (str)",
//           "Boolean Data Type (bool)",
//           "Type Conversion (Casting)",
//           "Basic Arithmetic Operations",
//           "Variable Naming Rules",
//           "Printing variables and values"

//         ]
//       },
//       {
//         "chapter_number": 3,
//         "chapter_title": "Basic Input and Output",
//         "chapter_summary": "This chapter covers how to get user input and display output to the console. You'll learn how to interact with the user and format output for clarity.",
//         "topics": [
//           "The `input()` function",
//            "String Formatting (f-strings and .format())",
//            "Printing different data types",
//            "Using `print()` with multiple arguments",
//            "Input Type Conversion",
//            "Basic input validation"

//         ]
//       },
//       {
//         "chapter_number": 4,
//         "chapter_title": "Control Flow: Conditional Statements",
//         "chapter_summary": "This chapter introduces control flow using conditional statements (`if`, `elif`, `else`). You will learn how to make decisions in your code based on different conditions.",
//         "topics": [
//           "The `if` statement",
//           "The `if-else` statement",
//           "The `if-elif-else` statement",
//           "Logical Operators (and, or, not)",
//           "Comparison Operators (==, !=, >, <, >=, <=)"
//         ]
//       },
//          {
//         "chapter_number": 5,
//         "chapter_title": "Control Flow: Loops",
//         "chapter_summary": "This chapter covers how to repeat actions using loops (`for` and `while`). You will learn how to iterate over sequences and execute blocks of code repeatedly.",
//         "topics": [
//           "The `for` loop",
//           "Iterating over strings and lists",
//           "The `range()` function",
//           "The `while` loop",
//           "Controlling loops with `break` and `continue`",
//           "Understanding infinite loop"
//           ]
//       },
//       {
//          "chapter_number": 6,
//          "chapter_title": "Introduction to Data Structures: Lists",
//          "chapter_summary":"This chapter introduces basic Data structure 'Lists'. How to create and use them in different scenarios.",
//          "topics":[
//              "What are Lists",
//              "Creating Lists",
//              "Accessing list elements using index",
//              "Modifying List elements",
//              "Adding items to Lists (append, insert)",
//              "Removing items from list (remove,pop)",
//              "Slicing Lists",
//              "List Length",
//              "Looping through List",
//              "Basic List operations"
//          ]
//       },
//         {
//          "chapter_number": 7,
//          "chapter_title": "Introduction to Functions",
//          "chapter_summary":"This chapter introduces the concept of functions, how to define and call functions, using parameters and return values.",
//          "topics":[
//              "What are functions?",
//              "Defining a function using 'def' keyword",
//              "Calling a function",
//              "Function parameters/arguments",
//              "Return statement",
//               "Function scope",
//               "Basic Function practice"
//          ]
//       }

//     ]
//   }

//   <h2>Chapter 1: Introduction to Python</h2>
//   <p><strong>Chapter Summary:</strong> This chapter introduces the fundamentals of Python, including what it is, why it's popular, setting up the environment, and writing your first simple program.</p>

//   <h3>Topics:</h3>
//   <hr>
//   <h4>1. What is Python?</h4>
//   <ul>
//       <li><strong>Definition:</strong> Understanding Python as a high-level, interpreted, general-purpose programming language.</li>
//       <li><strong>Key Features:</strong>  Discussion of readability, dynamic typing, and its multi-paradigm support (object-oriented, procedural, and functional).</li>
//       <li><strong>Use Cases Overview:</strong> Brief examples of where Python is used (web development, data science, scripting, etc.).</li>
//   </ul>
//   <p><strong>Exam Material:</strong> Questions might ask for a definition of Python, its key characteristics, and identify its suitability for various types of applications. </p>

//   <hr>
//   <h4>2. Why Use Python?</h4>
//   <ul>
//       <li><strong>Ease of Learning:</strong> Focus on Python's clear syntax and readability.</li>
//       <li><strong>Large Community & Resources:</strong> Highlighting the supportive community, extensive libraries, and readily available documentation.</li>
//       <li><strong>Versatility:</strong>  Understanding Python's usage in different domains such as data analysis, web development, and automation.</li>
//       <li><strong>Rapid Development:</strong> Emphasize how Python's concise syntax speeds up development processes.</li>
//       <li><strong>Cross-Platform Compatibility:</strong>  Python's ability to run on multiple operating systems (Windows, macOS, Linux).</li>
//   </ul>
//   <p><strong>Exam Material:</strong> Questions will assess understanding of the benefits of learning and using Python and the reasons for its popularity. Expect questions on its use in different fields and cross-platform compatibility. </p>

//   <hr>
//   <h4>3. Setting up Python (Installation & Environment)</h4>
//   <ul>
//       <li><strong>Downloading Python:</strong>  Guidance on where and how to download the appropriate Python version from the official website.</li>
//        <li><strong>Installation Process:</strong> Explanation of the installation steps on different operating systems.</li>
//       <li><strong>Setting up the Environment:</strong> Discussion on setting up path variables, virtual environments using `venv` or `conda` (optional for entry-level).</li>
//         <li><strong>Importance of IDE or Text Editor:</strong> Introduce Integrated Development Environments (IDEs) like VS Code, PyCharm or Text editors like Sublime Text.</li>
//       </ul>
//   <p><strong>Exam Material:</strong> Questions might focus on steps to download and install Python, understand setting environment variables, and the purpose of virtual environments. Basic concepts on the purpose of IDEs or text editors are also expected. Expect practical questions relating to environment setup</p>

//   <hr>
//   <h4>4. Running Your First Python Program ('Hello, World!')</h4>
//   <ul>
//     <li><strong>Writing Code:</strong>  Creating a simple `print("Hello, World!")` program in a text file.</li>
//     <li><strong>Executing Code:</strong> Instruction on how to execute the Python script using the command line.</li>
//     <li><strong>Understanding Output:</strong> Explanation of what happens when the script is executed and the expected output.</li>

//   </ul>
//    <p><strong>Exam Material:</strong> Questions will revolve around creating and running a simple Python script. Expect to be tested on how to execute and what the expected output will be.</p>
//  <hr>
//   <h4>5. Basic Syntax Rules</h4>
//   <ul>
//       <li><strong>Indentation:</strong>  Importance of indentation in Python and using spaces for blocks of code.</li>
//       <li><strong>Case Sensitivity:</strong> Understanding Python is case-sensitive and variables `myVar` and `MyVar` are different.</li>
//         <li><strong>Statements:</strong> How to write and understand the basic code statements in Python.</li>
//         <li><strong>Keywords:</strong> Introduction to keywords, which are reserved words in Python and cannot be used as variable names</li>
//   </ul>
//   <p><strong>Exam Material:</strong> Questions will assess understanding of indentation, code formatting,  Python's case sensitivity, and statements. Expect to be asked about the importance of each aspect and consequences of violating it. Also, knowledge about keywords and their usage will be tested.</p>
//  <hr>
//   <h4>6. Comments in Python</h4>
//   <ul>
//       <li><strong>Single-line Comments:</strong> Using the `#` symbol for single-line comments.</li>
//       <li><strong>Multi-line Comments:</strong> Using triple quotes (`'''` or `"""`) for multi-line comments.</li>
//       <li><strong>Importance of Comments:</strong> How comments help to make code understandable and enhance its readability.</li>

//   </ul>
//   <p><strong>Exam Material:</strong> Questions will cover writing and using single-line and multi-line comments and their purpose within the code. Knowledge of the types of comments and where to use them is expected.</p>

// with the help of these course title: <Title>, coursesummary: <Summary> ,course notes: <Notes>. Generate the flashcard on topic: <Topics>. with the difficulty level <DifficultyLevel> moderate in JSON format with front back content, Maximum 15




{/* <div class="chapter-container">
<h2 class="chapter-title">Chapter 1: Introduction to Python</h2>
<p class="chapter-summary">
    This chapter introduces the fundamentals of Python, including what it is, why it's popular,
    setting up the environment, and writing your first simple program.
</p>

<div class="topic-container">
    <h3 class="topic-heading">What is Python?</h3>
    <p class="topic-content">
        Python is a high-level, interpreted, general-purpose programming language. It's known for its
        readability, often using English-like keywords, making it easier to learn and use. Python supports
        multiple programming paradigms, including procedural, object-oriented, and functional programming.
        It's dynamically typed and has automatic memory management (garbage collection).
    </p>
</div>


<div class="topic-container">
    <h3 class="topic-heading">Why Use Python?</h3>
    <ul class="topic-list">
        <li>
            <strong>Beginner-Friendly:</strong> Its clear syntax and readability make it easy for beginners to learn.
        </li>
        <li>
           <strong>Versatile:</strong> Python is used in web development, data analysis, machine learning, automation,
            scripting, and more.
        </li>
        <li>
            <strong>Large Community:</strong> A vast and active community means there's plenty of support,
             tutorials, and ready-to-use libraries available.
        </li>
        <li>
            <strong>Extensive Libraries:</strong> Python has a wide range of powerful built-in and third-party libraries,
            such as NumPy, Pandas, TensorFlow, and Django.
         </li>
        <li>
            <strong>Cross-Platform:</strong> Python works across different operating systems (Windows, macOS, Linux).
        </li>
        <li>
            <strong>Rapid Development:</strong> It enables quick prototyping and development due to its simplicity.
        </li>
    </ul>
 </div>

 <div class="topic-container">
    <h3 class="topic-heading">Setting Up Python (Installation & Environment)</h3>
    <p class="topic-content">
        To start using Python, you need to:
    </p>
      <ul class="topic-list">
        <li>
             <strong>Download Python:</strong> Get the latest version from the official Python website (<a href="https://www.python.org" target="_blank">python.org</a>).
        </li>
         <li>
             <strong>Installation:</strong> Run the installer, ensuring to check the box that adds Python to the system PATH.
        </li>
        <li>
           <strong>Verify Installation:</strong> Open a terminal or command prompt and type <code>python --version</code>
            or <code>python3 --version</code> to check if Python is installed successfully.
        </li>
        <li>
          <strong>Virtual Environments (Recommended):</strong> It's best to create virtual environments for different projects.
           Use <code>python -m venv myenv</code> (or <code>python3 -m venv myenv</code>) to create a new virtual environment, and activate it using <code>source myenv/bin/activate</code> (on macOS/Linux) or <code>myenv\Scripts\activate</code> (on Windows).
         </li>

      </ul>
</div>

<div class="topic-container">
    <h3 class="topic-heading">Running Your First Python Program ('Hello, World!')</h3>
     <p class="topic-content">
        Create a file named <code>hello.py</code> (or any name with the extension .py) and write the following code inside:
    </p>
      <pre class="code-snippet">
          <code>
            print("Hello, World!")
        </code>
     </pre>
    <p class="topic-content">
          To run the program, navigate to the directory where you saved it, and use the command <code>python hello.py</code>
        or <code>python3 hello.py</code> in the terminal.
    </p>
</div>

 <div class="topic-container">
    <h3 class="topic-heading">Basic Syntax Rules</h3>
     <ul class="topic-list">
        <li>
            <strong>Indentation:</strong> Python uses indentation (spaces or tabs) to define blocks of code, such as loops and functions. Incorrect indentation leads to errors.
        </li>
         <li>
             <strong>Case Sensitivity:</strong> Python is case-sensitive; variables named <code>myVar</code> and <code>myvar</code> are different.
        </li>
         <li>
           <strong>Statements:</strong> Each line of code usually represents one statement.
        </li>
        <li>
             <strong>Line Breaks:</strong> End a statement with a new line by default. Can use <code>\</code> to continue code over multiple lines.
        </li>
        <li>
            <strong>Keywords:</strong> There are reserved keywords in Python (e.g., if, else, for, while, def, import) that cannot be used as variable names.
         </li>
    </ul>

</div>

 <div class="topic-container">
    <h3 class="topic-heading">Comments in Python</h3>
    <p class="topic-content">
         Comments are used to explain the code and are ignored by Python. Use them to increase code readability.
    </p>
    <ul class="topic-list">
         <li>
            <strong>Single-line comments:</strong> Start with a hash symbol (<code>#</code>) and continue to the end of the line.
        </li>
         <li>
            <strong>Multi-line comments:</strong> Can use triple quotes (<code>'''</code> or <code>"""</code>) to create multi-line comments or docstrings.

         </li>
    </ul>

     <pre class="code-snippet">
        <code>
            # This is a single-line comment

            '''
            This is a
            multi-line
            comment
            '''

            """
            This is another
            multi-line comment
            using double quotes
            """
        </code>
    </pre>
</div>
</div>
<style>
.chapter-container {
font-family: 'Arial', sans-serif;
margin: 20px;
padding: 20px;
background-color: #f9f9f9;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.chapter-title {
color: #333;
border-bottom: 2px solid #eee;
padding-bottom: 10px;
margin-bottom: 20px;
text-align:center;
}
.chapter-summary{
 color: #555;
line-height: 1.6;
 margin-bottom: 25px;
 text-align:center;
}
.topic-container{
margin-bottom: 20px;
padding: 15px;
background-color: #fff;
border-radius: 6px;
box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.topic-heading{
color: #007BFF;
border-bottom: 1px solid #eee;
padding-bottom: 8px;
margin-bottom: 15px;
}
.topic-content{
color: #444;
line-height: 1.6;
}
.topic-list{
color:#444;
line-height:1.6;
margin-left: 25px;
list-style-type: disc;
}

.code-snippet{ 
 display: flex;
 justify-content: start;
background-color: #f0f0f0;
border-radius: 5px;
/*padding: 10px;*/
overflow-x: auto;
font-family: 'Courier New', Courier, monospace;
margin-top: 10px;
 margin-bottom: 15px;

}
.code-snippet code {
  display: block;
  white-space: pre;
}

</style> */}