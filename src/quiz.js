const quizData =
    [
        {
          id: 0,
          questionText: "Everything in React is a _____________",
          answerOptions: [
            { answerText: "Module", isCorrect: false },
            { answerText: "Component", isCorrect: true },
            { answerText: "Package", isCorrect: false },
            { answerText: "Class", isCorrect: false },
          ],
        },
        {
          id: 1,
          questionText: "In which directory React Components are saved?",
          answerOptions: [
            { answerText: "Inside js/components/", isCorrect: true },
            { answerText: "Inside vendor/components/", isCorrect: false },
            { answerText: "Inside vendor/components/", isCorrect: false },
            { answerText: "Inside vendor/", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "What is Babel?",
          answerOptions: [
            { answerText: "A transpiler.", isCorrect: false },
            { answerText: "An interpreter", isCorrect: false },
            { answerText: "A Compiler", isCorrect: false },
            { answerText: "Both Compiler and Transpilar", isCorrect: true },
          ],
        },
        {
          id: 3,
          questionText: "How many elements does a react component return?",
          answerOptions: [
            { answerText: "1 Element", isCorrect: true },
            { answerText: "2 Elements", isCorrect: false },
            { answerText: "Multiple Elements", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: 'What does the "webpack" command do?',
          answerOptions: [
            { answerText: "A module bundler", isCorrect: true },
            {
              answerText: "Runs react local development server.",
              isCorrect: false,
            },
            {
              answerText: "Transpiles all the Javascript down into one file",
              isCorrect: false,
            },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 5,
          questionText: "What is ReactJS?",
          answerOptions: [
            { answerText: "Server-side Framework", isCorrect: false },
            { answerText: "User-interface framework", isCorrect: false },
            {
              answerText: "A Library for building interaction interfaces",
              isCorrect: true,
            },
            { answerText: "None of the Above", isCorrect: false },
          ],
        },
        {
          id: 6,
          questionText: "What are the limitations of ReactJS?",
          answerOptions: [
            {
              answerText:
                "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development",
              isCorrect: false,
            },
            {
              answerText:
                "React is using inline templating and JSX. This can seem awkward to some developers",
              isCorrect: false,
            },
            { answerText: "The library of react is too large", isCorrect: false },
            { answerText: "All of these", isCorrect: true },
          ],
        },
        {
          id: 7,
          questionText: "Props are __________ into other components",
          answerOptions: [
            { answerText: "Injected", isCorrect: false }, // i think this is the correct..The correct answer to question is A) Injected, as props are injected into other components...ask Syed
            { answerText: "Methods", isCorrect: true }, //not sure
            { answerText: "Both A and B", isCorrect: false },
            { answerText: "All of these", isCorrect: false },
          ],
        },
        {
          id: 8,
          questionText:
            "Which of the following API is a MUST for every ReactJS component?", //ques:10
          answerOptions: [
            { answerText: "getInitialState", isCorrect: false },
            { answerText: "render", isCorrect: false },
            { answerText: "renderComponent", isCorrect: true },
            { answerText: "None of the Above", isCorrect: false },
          ],
        },
        {
          id: 9,
          questionText:
            "What port is the default where the webpack-dev-server will run?",
          answerOptions: [
            { answerText: "3000", isCorrect: true },
            { answerText: "3306", isCorrect: false },
            { answerText: "8080", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 10,
          questionText:
            "How can you access the state of a component from inside of a member function?",
          answerOptions: [
            { answerText: "this.getState()", isCorrect: false },
            { answerText: "this.prototype.stateValue", isCorrect: false },
            { answerText: "this.state", isCorrect: false },
            { answerText: "this.values", isCorrect: true },
          ],
        },
        {
          id: 11,
          questionText:
            "In React what is used to pass data to a component from outside?",
          answerOptions: [
            { answerText: "setState", isCorrect: false },
            { answerText: "props", isCorrect: true },
            { answerText: "PropTypes", isCorrect: false },
            { answerText: "render with arguments", isCorrect: false },
          ],
        },
        {
          id: 12,
          questionText: "What is a react.js in MVC?",
          answerOptions: [
            { answerText: "Model", isCorrect: false },
            { answerText: "Controller", isCorrect: true },
            { answerText: "Router", isCorrect: false },
            { answerText: "Middleware", isCorrect: false },
          ],
        },
        {
          id: 13,
          questionText: "ReactJS uses _____ to increase performance",
          answerOptions: [
            { answerText: "Virtual DOM", isCorrect: true },
            { answerText: "Original DOM", isCorrect: false },
            { answerText: "Both 1 & 2", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 14,
          questionText:
            "Keys are given to a list of elements in react. These keys should be -",
          answerOptions: [
            { answerText: "Unique in the DOM", isCorrect: false },
            { answerText: "Do not requires to be unique", isCorrect: false },
            { answerText: "Unique among the siblings only", isCorrect: true },
            { answerText: "All of the above", isCorrect: false },
          ],
        },
        {
          id: 15,
          questionText:
            "Which of the following is the correct data flow sequence of flux concept?",
          answerOptions: [
            { answerText: "Dispatcher->Action->Store->View", isCorrect: false },
            { answerText: "Action->Dispatcher->Store->View", isCorrect: true },
            { answerText: "Action->Dispatcher->View->Store", isCorrect: false },
            { answerText: "Action->Store->Dispatcher->View", isCorrect: false },
          ],
        },
        {
          id: 16,
          questionText: "What is the name of React.js Developer ?",
          answerOptions: [
            { answerText: "Tim Lee", isCorrect: false },
            { answerText: "Jordan Lee", isCorrect: false },
            { answerText: "Jordan mike", isCorrect: false },
            { answerText: "Jordan Walke", isCorrect: true },
          ],
        },
        {
          id: 17,
          questionText: "Who Develop React.js?",
          answerOptions: [
            { answerText: "Google", isCorrect: false },
            { answerText: "Apple", isCorrect: false },
            { answerText: "Facebook", isCorrect: true },
            { answerText: "Twitter", isCorrect: false },
          ],
        },
        {
          id: 18,
          questionText:
            ".............. helps react for keeping their data unidirectional", //20
          answerOptions: [
            { answerText: "JSX", isCorrect: false },
            { answerText: "Flux", isCorrect: true },
            { answerText: "Dom", isCorrect: false },
            { answerText: "Props", isCorrect: false },
          ],
        },
        {
          id: 19,
          questionText:
            "At the highest level, React components have lifecycle events that fall into",
          answerOptions: [
            { answerText: "Initialization", isCorrect: false },
            { answerText: "State/Property Updates", isCorrect: false },
            { answerText: "Destruction", isCorrect: false },
            { answerText: "All of these", isCorrect: true },
          ],
        },
        {
          id: 20,
          questionText:
            "If you want to import just the Component from the React library, what syntax do you use?",
          answerOptions: [
            { answerText: "import React.Component from 'react'", isCorrect: false },
            { answerText: "import [ Component ] from 'react'", isCorrect: false },
            { answerText: "import Component from 'react'", isCorrect: false },
            { answerText: "import { Component } from 'react'", isCorrect: true },
          ],
        },
        {
          id: 21,
          questionText:
            "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
          answerOptions: [
            {
              answerText: "Wrap it in the React.memo higher-order component.",
              isCorrect: true,
            },
            { answerText: "Implement the useReducer Hook.", isCorrect: false },
            {
              answerText: "Implement the shouldComponentUpdate lifecycle method.",
              isCorrect: false,
            },
            { answerText: "Implement the useMemo Hook.", isCorrect: false },
          ],
        },
        {
          id: 22,
          questionText:
            "How do you access a function fetch() from a h1 element in JSX?",
          answerOptions: [
            { answerText: "<h1>{fetch()}</h1> ", isCorrect: true },
            { answerText: "<h1>${fetch()}</h1>", isCorrect: false },
            { answerText: "<h1>{fetch}</h1>", isCorrect: false },
            { answerText: "<h1>${fetch}</h1>", isCorrect: false },
          ],
        },
        {
          id: 23,
          questionText:
            "How do you write an inline style specifying the font-size:12px and color:red; in JSX",
          answerOptions: [
            { answerText: "style={{font-size:12,color:'red'}}", isCorrect: false },
            { answerText: "style={{font-size:12,color:'red'}}", isCorrect: true },
            { answerText: "style={fontSize:'12px',color:'red'}", isCorrect: false },
            {
              answerText: "style={{font-size:12px,color:'red'}}",
              isCorrect: false,
            },
          ],
        },
        {
          id: 24,
          questionText:
            "Which method in a React Component should you override to stop the component from updating?",
          answerOptions: [
            { answerText: "willComponentUpdate", isCorrect: false },
            { answerText: "shouldComponentUpdate", isCorrect: true },
            { answerText: "componentDidUpdate", isCorrect: false },
            { answerText: "componentDidMount", isCorrect: false },
          ],
        },
        {
          id: 25,
          questionText:
            "What happens when you call setState() inside render() method?",
          answerOptions: [
            {
              answerText: "Repetitive output appears on the screen",
              isCorrect: false,
            },
            { answerText: "Nothing happens. Life goes on!", isCorrect: false },
            { answerText: "Duplicate key error", isCorrect: false },
            { answerText: "Stack overflow error", isCorrect: true },
          ],
        },
        {
          id: 26,
          questionText: "React is a ______",
          answerOptions: [
            { answerText: "Javascript library", isCorrect: true },
            { answerText: "Javascript framework", isCorrect: false },
            { answerText: "Both of above", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 27,
          questionText: "ReactJS covers _____",
          answerOptions: [
            {
              answerText: "User Iimport reactLogo from './assets/react.svg'import viteLogo from '/vite.svg'nterface layer in an application",
              isCorrect: true,
            },
            { answerText: "Data layer in an application", isCorrect: false },
            { answerText: "Both A and B", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 28,
          questionText: "Number of elements, a valid react component can return ", //30
          answerOptions: [
            { answerText: "1", isCorrect: true },
            { answerText: "2", isCorrect: false },
            { answerText: "3", isCorrect: false },
            { answerText: "4", isCorrect: false },
          ],
        },
        {
          id: 29,
          questionText: "props in react can________",
          answerOptions: [
            { answerText: "Be changed inside the component", isCorrect: false },
            { answerText: "Not be changed in the component", isCorrect: true },
            { answerText: "Be changed in side other component", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 30,
          questionText:
            "What is the testing library most often associated with React?",
          answerOptions: [
            { answerText: "Mocha", isCorrect: false },
            { answerText: "Sinon", isCorrect: false },
            { answerText: "Chai", isCorrect: false },
            { answerText: "Jest", isCorrect: true },
          ],
        },
        {id: 31,
          questionText: "What is state in react? ",
          answerOptions: [
            { answerText: "Internal storage of the component", isCorrect: true },
            { answerText: "A prement storage", isCorrect: false },
            { answerText: "Both A and B", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 32,
          questionText: "What will happen if you render an input element with disabled = {false} ",
          answerOptions: [
            { answerText: "It will be rendered as disabled", isCorrect: false },
            { answerText: "It will be rendered as enabled", isCorrect: true },
            { answerText: "It will not be rendered at all", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 33,
          questionText: "How do you handle passing through the component tree without having to pass props down manually at every level?",
          answerOptions: [
            { answerText: "React Send", isCorrect: false },
            { answerText: "React Pinpoint", isCorrect: false },
            { answerText: "React Router", isCorrect: false },
            { answerText: "React Context", isCorrect: true },
          ],
        },
        {
          id: 34,
          questionText: "What are two ways data gets handled in react?",
          answerOptions: [
            { answerText: "state & props", isCorrect: true },
            { answerText: "services & components", isCorrect: false },
            { answerText: "state & services", isCorrect: false },
            { answerText: "state & component", isCorrect: false },
          ],
        },
        {
          id: 35,
          questionText: "What can you use to handle code splitting?",
          answerOptions: [
            { answerText: "React.split", isCorrect: false },
            { answerText: "React.lazy", isCorrect: true },
            { answerText: "React.memo", isCorrect: false },
            { answerText: "React.fallback", isCorrect: false },
          ],
        },
        {
          id: 36,
          questionText: "How do you set a default value for an uncontrolled form field?",
          answerOptions: [
            { answerText: "Use the value property", isCorrect: false },
            { answerText: "Use the defaultValue property", isCorrect: true },
            { answerText: "Use the default property", isCorrect: false },
            { answerText: "It assigns one automatically", isCorrect: false },
          ],
        },
        {
          id: 37,
          questionText: "What do you call a React component that catches JavaScript errors anywhere in the child component tree?",
          answerOptions: [
            { answerText: "error bosses", isCorrect: false },
            { answerText: "error catchers", isCorrect: false },
            { answerText: "error helpers", isCorrect: false },
            { answerText: "error boundaries", isCorrect: true },
          ],
        },
        {
          id: 38,
          questionText: "Why might you use a ref?",
          answerOptions: [
            { answerText: "to directly access the DOM node ", isCorrect: true },
            { answerText: "to refer to another JS file", isCorrect: false },
            { answerText: "to bind the function", isCorrect: false },
            { answerText: "to call a function", isCorrect: false },
          ],
        },
        {
          id: 39,
          questionText: "Why is it a good idea to pass a function to setState instead of an object?",//40
          answerOptions: [
            { answerText: "It is more functional than an object", isCorrect: false },
            { answerText: "It automatically updates a component", isCorrect: false },
            { answerText: "It makes sure that the object is not mutated", isCorrect: false },
            { answerText: "setState is asynchronous and might result in out of sync values.", isCorrect: true },
          ],
        },
      ]



export default quizData