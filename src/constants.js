export const LANGUAGE_VERSIONS = {
  java: "15.0.2",
  python: "3.10.0",
  cpp: "10.2.0",
  javascript: "18.15.0",
  csharp: "6.12.0",
  c: "10.2.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `function greet() {\n\tconsole.log("Hello World");\n}\ngreet();\n`,
  c: `#include <stdio.h>\nint main() {\n\tprintf("Hello World\\n");\n\treturn 0;\n}\n`,
  python: `print("Hello World")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\nnamespace HelloWorld\n{\n\tclass Program {\n\t\tstatic void Main() {\n\t\t\tConsole.WriteLine("Hello World");\n\t\t}\n\t}\n}\n',
  cpp: `#include <iostream>\nusing namespace std;\nint main() {\n\tcout << "Hello World" << endl;\n\treturn 0;\n}\n`,
  php: `<?php\n echo "Hello World";\n?>`,
};
