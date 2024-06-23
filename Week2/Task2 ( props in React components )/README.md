# Task02 : Learn about props in React components, how they are passed.

This document outlines the key concepts related to props in React components, including how they are passed and utilized within a React application. This was a task assigned during my internship, which I have successfully completed.

## What are Props?
* Props, short for properties, are a mechanism for passing data from parent to child components in React. They are a core concept of React and play a crucial role in creating dynamic and reusable components.

## Passing Props
Props are passed to components similarly to how attributes are passed to HTML elements. Here’s an example:

```
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello, World!";
  
  return (
    <div>
      <ChildComponent greeting={message} />
    </div>
  );
}

export default ParentComponent;
```
In the above example, greeting is a prop passed to ChildComponent.
## Accessing Props
Props are accessed within a component using this.props in class components or directly as function arguments in functional components.

*Functional Component
```
// ChildComponent.js
import React from 'react';

function ChildComponent({ greeting }) {
  return <h1>{greeting}</h1>;
}

export default ChildComponent;

```
## Default Props
Default props can be defined using the defaultProps property, ensuring that a component can render even if no props are passed.
```
ChildComponent.defaultProps = {
  greeting: "Hello, Default World!"
};

```
## Prop Types
Prop types are used to specify the expected data types for props. This is achieved using the prop-types library, which helps in type-checking during development.

```
import PropTypes from 'prop-types';

ChildComponent.propTypes = {
  greeting: PropTypes.string
};

```
## Pratice Task of Props

(screencapture-localhost-5173-2024-06-23-10_58_38 (3))


