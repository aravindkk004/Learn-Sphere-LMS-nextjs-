import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and level of difficulty will be Easy with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter, All results in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course_title": "Introduction to Python Programming (Easy)",\n  "course_summary": "This course provides a beginner-friendly introduction to Python programming. It covers fundamental concepts like variables, data types, operators, control flow, and basic data structures. The focus is on building a solid foundation for further learning and practical application. The difficulty is considered \'Easy\' and assumes no prior programming experience.",\n  "chapters": [\n    {\n      "chapter_number": 1,\n      "chapter_title": "Getting Started with Python",\n      "chapter_summary": "This chapter introduces the basics of Python, including how to set up the environment and execute your first Python program. You\'ll learn about the interactive mode and writing simple scripts.",\n      "topics": [\n        "What is Python?",\n        "Why Python?",\n        "Setting up the Python environment (Installation)",\n        "Running Python interactively",\n        "Writing and executing a basic Python script",\n        "The \'print()\' function"\n        ]\n    },\n    {\n      "chapter_number": 2,\n      "chapter_title": "Variables and Data Types",\n      "chapter_summary": "This chapter covers variables, how to declare them, and the different fundamental data types available in Python (integers, floats, strings, and booleans).",\n       "topics": [\n        "What are variables?",\n        "Variable naming rules",\n        "Integer (int) data type",\n        "Float (float) data type",\n        "String (str) data type",\n        "Boolean (bool) data type",\n        "Type conversion (casting)"\n        ]\n    },\n    {\n      "chapter_number": 3,\n      "chapter_title": "Operators in Python",\n      "chapter_summary": "This chapter explains various operators used in Python, including arithmetic, comparison, and logical operators. You\'ll understand how to perform basic calculations and comparisons.",\n      "topics": [\n        "Arithmetic operators (+, -, *, /, %, //, **)",\n        "Assignment operators (=, +=, -=, etc.)",\n        "Comparison operators (==, !=, >, <, >=, <=)",\n        "Logical operators (and, or, not)",\n        "Operator precedence",\n         "Examples of using operators"\n      ]\n    },\n    {\n      "chapter_number": 4,\n       "chapter_title": "Control Flow: Conditional Statements",\n      "chapter_summary": "This chapter teaches how to control the flow of your program using conditional statements (if, elif, else). You\'ll learn how to make decisions based on conditions.",\n      "topics": [\n        "The \'if\' statement",\n        "The \'if-else\' statement",\n        "The \'if-elif-else\' statement",\n        "Nested if statements",\n        "Examples of using conditional statements"\n      ]\n    },\n    {\n       "chapter_number": 5,\n      "chapter_title": "Control Flow: Loops",\n      "chapter_summary": "This chapter covers different looping constructs in Python: for loops and while loops. You\'ll learn how to repeat code blocks multiple times.",\n       "topics": [\n        "The \'for\' loop",\n        "Iterating over sequences (strings, lists)",\n         "The \'range()\' function",\n         "The \'while\' loop",\n        "Loop control: \'break\' and \'continue\'",\n        "Examples of using loops"\n      ]\n    },\n       {\n      "chapter_number": 6,\n      "chapter_title": "Introduction to Lists",\n      "chapter_summary": "This chapter introduces Lists, which are used to store a collection of items. You\'ll learn how to create lists, access items, modify them, and perform basic operations.",\n      "topics": [\n        "What are lists?",\n        "Creating lists",\n         "Accessing list items (indexing)",\n         "Modifying list items",\n         "List slicing",\n        "Common list methods (append, insert, remove, etc.)",\n        "Iterating through lists"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter, Make sure to includes all topic print in the content, make sure to give content in HTML format (Do not Add HTMLKl, Head, Body, title tag). The chapters: {\n        "chapter_number": 1,\n        "chapter_title": "Introduction to Python",\n        "chapter_summary": "This chapter introduces the fundamentals of Python, including what it is, why it\'s popular, setting up the environment, and writing your first simple program.",\n        "topics": [\n          "What is Python?",\n          "Why use Python?",\n          "Setting up Python (Installation & Environment)",\n          "Running your first Python program (\'Hello, World!\')",\n          "Basic Syntax rules",\n          "Comments in Python"\n        ]\n      },',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```html\n   <h2>Chapter 1: Introduction to Python</h2>\n    <p><strong>Chapter Summary:</strong> This chapter introduces the fundamentals of Python, including what it is, why it's popular, setting up the environment, and writing your first simple program.</p>\n\n    <h3>Topics:</h3>\n    <hr>\n    <h4>1. What is Python?</h4>\n    <ul>\n        <li><strong>Definition:</strong> Understanding Python as a high-level, interpreted, general-purpose programming language.</li>\n        <li><strong>Key Features:</strong>  Discussion of readability, dynamic typing, and its multi-paradigm support (object-oriented, procedural, and functional).</li>\n        <li><strong>Use Cases Overview:</strong> Brief examples of where Python is used (web development, data science, scripting, etc.).</li>\n    </ul>\n    <p><strong>Exam Material:</strong> Questions might ask for a definition of Python, its key characteristics, and identify its suitability for various types of applications. </p>\n\n    <hr>\n    <h4>2. Why Use Python?</h4>\n    <ul>\n        <li><strong>Ease of Learning:</strong> Focus on Python's clear syntax and readability.</li>\n        <li><strong>Large Community & Resources:</strong> Highlighting the supportive community, extensive libraries, and readily available documentation.</li>\n        <li><strong>Versatility:</strong>  Understanding Python's usage in different domains such as data analysis, web development, and automation.</li>\n        <li><strong>Rapid Development:</strong> Emphasize how Python's concise syntax speeds up development processes.</li>\n        <li><strong>Cross-Platform Compatibility:</strong>  Python's ability to run on multiple operating systems (Windows, macOS, Linux).</li>\n    </ul>\n    <p><strong>Exam Material:</strong> Questions will assess understanding of the benefits of learning and using Python and the reasons for its popularity. Expect questions on its use in different fields and cross-platform compatibility. </p>\n\n    <hr>\n    <h4>3. Setting up Python (Installation & Environment)</h4>\n    <ul>\n        <li><strong>Downloading Python:</strong>  Guidance on where and how to download the appropriate Python version from the official website.</li>\n         <li><strong>Installation Process:</strong> Explanation of the installation steps on different operating systems.</li>\n        <li><strong>Setting up the Environment:</strong> Discussion on setting up path variables, virtual environments using `venv` or `conda` (optional for entry-level).</li>\n          <li><strong>Importance of IDE or Text Editor:</strong> Introduce Integrated Development Environments (IDEs) like VS Code, PyCharm or Text editors like Sublime Text.</li>\n        </ul>\n    <p><strong>Exam Material:</strong> Questions might focus on steps to download and install Python, understand setting environment variables, and the purpose of virtual environments. Basic concepts on the purpose of IDEs or text editors are also expected. Expect practical questions relating to environment setup</p>\n\n    <hr>\n    <h4>4. Running Your First Python Program ('Hello, World!')</h4>\n    <ul>\n      <li><strong>Writing Code:</strong>  Creating a simple `print(\"Hello, World!\")` program in a text file.</li>\n      <li><strong>Executing Code:</strong> Instruction on how to execute the Python script using the command line.</li>\n      <li><strong>Understanding Output:</strong> Explanation of what happens when the script is executed and the expected output.</li>\n\n    </ul>\n     <p><strong>Exam Material:</strong> Questions will revolve around creating and running a simple Python script. Expect to be tested on how to execute and what the expected output will be.</p>\n   <hr>\n    <h4>5. Basic Syntax Rules</h4>\n    <ul>\n        <li><strong>Indentation:</strong>  Importance of indentation in Python and using spaces for blocks of code.</li>\n        <li><strong>Case Sensitivity:</strong> Understanding Python is case-sensitive and variables `myVar` and `MyVar` are different.</li>\n          <li><strong>Statements:</strong> How to write and understand the basic code statements in Python.</li>\n          <li><strong>Keywords:</strong> Introduction to keywords, which are reserved words in Python and cannot be used as variable names</li>\n    </ul>\n    <p><strong>Exam Material:</strong> Questions will assess understanding of indentation, code formatting,  Python's case sensitivity, and statements. Expect to be asked about the importance of each aspect and consequences of violating it. Also, knowledge about keywords and their usage will be tested.</p>\n   <hr>\n    <h4>6. Comments in Python</h4>\n    <ul>\n        <li><strong>Single-line Comments:</strong> Using the `#` symbol for single-line comments.</li>\n        <li><strong>Multi-line Comments:</strong> Using triple quotes (`'''` or `\"\"\"`) for multi-line comments.</li>\n        <li><strong>Importance of Comments:</strong> How comments help to make code understandable and enhance its readability.</li>\n\n    </ul>\n    <p><strong>Exam Material:</strong> Questions will cover writing and using single-line and multi-line comments and their purpose within the code. Knowledge of the types of comments and where to use them is expected.</p>\n```\n",
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
