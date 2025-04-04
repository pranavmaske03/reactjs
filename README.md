# Reactjs Notes

# Introduction to React

## What is React?

- React is a javascript library for building user interfaces, developed by Facebook in 2013. It is used to create fast, interactive, and scalable web applications. React follows component-based architecture, making it easy to reuse and manage code.

## Why Use React?

React is widely used for several reasons:
1. **Declarative Approach** - React makes UI development more predictable and easier to debug using a declarative programming style.
2. **Component-Based-Architecture** - The UI is broken into independent, reusable components.
3. **Virtual DOM** - React updates only the necessary parts of the page, making it more efficient than directly modifying the DOM.
4. **One-Way Data Binding** - Data flows in a single direction, making state management predictable.
5. **String Community & Ecosystem** - React has vast community support, a large number of third-party libraries, and backed my Meta.

## Key Features of React

- **JSX (Javascript XML)**: Allows writing HTML-like syntax in Javascript.
- C**omponents**: Small,reusable pieces of UI.
- **Props**: Data passed from a parent component to a child component.
- **State**: Internal data storage in a component.
- **Hooks**: Special functions that allow state and lifecycle features in functional components.
- **React Router**: Handles navigation between different pages in a React app.

# Setting Up a React Project

## There are two main ways to create a React Project:

### 1. Using Vite (Recommended)
- A fast, modern build tool for React.
- Vite is faster and more lightweight than CRA, making it the preferred choice for modern React projects.
 
### Steps to create a React App Vite
1. **Run the given command in terminal**

        npm create vite@latest my-app --template react

- `my-app` is the name of your project
- `--template react` specifies that we are using React.

2. **Navigate to the project folder**

        npm install
3. **Start the developer server**

        npm run dev

### 2. Creating a React App Using Create React App (CRA)
- **Create React App** is an older way to create React projects,but it is slower than Vite.

### Steps to create a React App with CRA
1. **Run the given command**
        
        npx create-react-app my-app

- `my-app` is the name of your project.
- `npx` downloads and runs the package without installing it globally.

2. **Navigate to the project folder**
    
         cd my-app
3. **Start the developer server**
    
         npm run start

## Difference between CRA and Vite

- Create React App (CRA) is the official tool Recommended by react for setting up a new project.
It provides a complete Webpack-based build system without requiring manual configuration.

## Features of CRA:

- Zero configuration: comes with a pre-configured Wepack setup.
- Development Server: Uses Webpack Dev Server for running the app.
- Production-Ready Build: Supports optimized builds with code splitting.
- Babel Support: Transpiles modern Javascript for browser compatibility.
- Eject Option: Allows modifying the underlying configuration when needed.

## Vite:

- Vite is modern build tool that provides faster development by using ES Modules (ESM) and native
browser support instead of building everything upfront.

## Features of Vite:

- Super Fast HMR (Hot Module Replacement): Updates UI instantly during development.
- On-Demand Compilation: Only compiles files when they are needed.
- Optimized Build: Uses Rollup for production builds.

## Understanding the Project Structure

- Vite gives us everything we need to develop a React application. Its initial file structure looks like this:

        my-app/
        │── node_modules/     # Contains installed dependencies
        │── public/           # Static assets (index.html, favicon, etc.)
        │── src/              # Main source code
        │   ├── App.jsx       # Main application component
        │   ├── main.jsx      # Entry point (for Vite)
        │   ├── index.js      # Entry point (for CRA)
        │   ├── components/   # Folder to store reusable components
        │   ├── assets/       # Folder to store images and other assets
        │── package.json      # Project metadata and dependencies
        │── vite.config.js    # Vite configuration (if using Vite)
        │── .gitignore        # Files ignored by Git
        │── README.md         # Project documentation

## Application structure

- `index.html` is the most important top-level file. Vite injects our components or code into this file so that browser can run it.

- The `public` directory contains static files that will be server directly to our browser without being processed by Vite's build tooling.

- The `src` directory is where the source code for our application lives.

- The `package.json` and `package-lock.json` files contains matadata about our project. These files are not unique to React applications: Vite populated package.json for US, and npm created package.lock.json for when we installed the app's dependencies.

# Difference between Angular and React
## Key Differences

1. **React is a Library, Angular is a Framework**
- React is a lightweight UI library that helps build user interfaces. It requires additional libraries for routing, state management, and form handling.

- Angular is a full-fledged framework that provides built-in tools for everything, including routing, state management, HTTP requests, and dependency injection.

2. **Architecture and Structure**
- React follows a component-based architecture, where each of the UI is broken into reusable components.
- Angular follows a Model-View-Controller (MVC) pattern, making it more structured but also more complex.

3. **Language Used**
- React primarily uses Javascript (JSX syntax) but also supports Typescript.
- Angular is built entirely with Typescript, which provides better type safety and tooling.

4. **DOM Manipulation**
- React Uses Virtual Dom : 
    - It keeps a lightweight copy of the actual DOM.
    - Only updates the changed elements, making it faster.

- Angular uses Real DOM:
    - Directly manipulates the actual DOM.
    - Frequent updates slow down performance for large applications.

4. **Data Binding**
- React uses one-way data binding, meaning data flows in a single direction. This makes state management more predictable and easier to debug.

- Angular supports two-data binding, meaning changes in the UI reflect in the component and vice versa. While convenient, it can make debugging more complex.

5 **State Management**
- React uses state management libraries like Redux,Context API, or Recoil.
- Angular manages state using services,RxJS, (Reactive Extensions for Javascript), and NgRx.

# React-DOM Library:
- react-dom is a crucial library in React that acts as the bridge between React and the browser DOM. It allows components to be rendered into actual DOM in a web page.
- When we write a react app, our UI is built using components, but those components don't directly interact with the browser. Instead, react-dom is responsible for taking those components and rendering them into the real DOM.

- React itself is a UI library focused only on building components. It does not have built-in functions to handle DOM manipulation. react-dom provides this functionality by:

 - Rendering react elements into the real DOM.
 - Managing updates efficiently using virtual DOM.
 - Enabling server-side rendering for better performance.
 - Providing userful APIs manipulating and interacting with the DOM.
 

# Difference between React and React-DOM

# 1. React:

- React is a javascript library used for building user interfaces (UI). It focuses on the UI layer of the application. React allows developers to build single-page applications (SPAs) by efficiently updating and rendering UI components when data changes.

- React is responsible for defining and managing components. It handles the rendering logic, states, and lifecycle of components.

- React provides core functionality for rendering virtual DOM, component state management, hooks, and component lifecycle management.

# 2. React-DOM:

- React-DOM is a separate package that acts as a bridge between React and the browser's DOM. It handles the actual rendering of React components into browser's DOM.

- While React provides the framework for creating components,React-DOM manages the interaction with the actual browser DOM and allows React to update the visual UI.

- ReactDOM.render(): This function is used to render React components into the DOM in the browser.

- React-DOM also ensures the changes made in the virtual DOM are reflected in the actual DOM, efficiently updating the UI when the state or data changes.

## Summary:

- React provides the core features for building the UI but doesn't know how to render components to the actual web page.

- React-DOM takes the React components and renders them into the web page by interacting with the browser's DOM, allowing the UI to be displayed the updated.


# JSX (Javascript XML)
- JSX (Javascript XML) is a syntax extension for Javascript that allows you to write HTML-like code inside the Javascript files. It is commonely used in React to describe what the UI should look like.

- JSX makes it easier to write and understand UI components in React. It provides: 
- **Better Readability** - UI elements look similar to HTML.
- **Less code** - No need to use complex React.createElement() calls.
- **Performance optimization** - JSX compiles to efficient Javascript.


- Each React component is a javascript function that may contain some markup that React renders into the browser.
React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML,
but it is a bit stricter and can display dynamic information.

# Rules of JSX

## 1. Return a single root element 

- To return multiple elements from a component, wrap them with a single parent tag.
- If we don't want to add an extra <div> to markup, we can write <> and </> instead:
- This empty tag is called a Fragment. Fragments let us group things without leaving
 any trace in the browser.

### Why do multiple JSX tags need to be wrapped?

- JSX looks like HTML, but under the hood it is transformed into plain Javascript objects. We can't 
return two objects from a function without wrapping them into an array.Because of this we can't return 
two JSX tags without wrapping them into another tag or a Fragment.

## 2. Close all the tags

- JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img/>.

## 3. camelCase all most of the things!

- JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. 
In your own components, you will often want to read those attributes into variables. 
But JavaScript has limitations on variable names. For example, their names can't contain 
dashes or be reserved words like class.

- This is why, in React, many HTML and SVG attributes are written in camelCase.

# Components in React

# Props in React

- Props are used to pass data from parent component to child component in React.
They allow components to be reusable and dynamic. Props are read-only and cannot
be modified by the child component.

## HOOKS in React

- Hooks are special functions in React that allow functional components to use state and other React features without writing 
class component.

## 1. State Hooks :
- State hooks lets a component remember information.
- components often need to change what's on the screen as a result of an interaction. Components need to remember things for ex. the current input value,current image. In React, this kind of component specific memory in called state.

- ###  ***useState:*** 

useState is a React Hook that lets us add a state variable to our component. It can be called at the top level of the component.

***Parameters***
- initialState: The value we want to be initialy. It can be value of any type, but there is a special behavior for functions. This argument is ignored after initial render.

***returns***
- The current state. During the first render, it will match the initialState you have passed.
- The set function that lets you update the state to a different value and trigger a re-render.
