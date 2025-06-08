# 🧠 Memoization and React Hooks

This project demonstrates how to optimize React applications using memoization and essential React hooks: `useState`, `useRef`, `useCallback`, and `useEffect`.

---

## 📦 What is Memoization?

Memoization is a performance optimization technique that **caches the results of expensive function calls** and returns the cached result when the same inputs occur again. In React, memoization helps avoid unnecessary re-renders and recalculations, especially for components or computations that are costly.


## 📝 Memoization in React

### `React.memo()`
- **Purpose:** Memoizes a functional component, preventing unnecessary re-renders if props haven't changed.
- **Example:**
  ```jsx
  import React from "react";

  const MyComponent = React.memo(({ name }) => {
    console.log("Rendered:", name);
    return <div>Hello {name}</div>;
  });
  ```

---

## 🚀 Summary

- **Memoization** helps optimize React apps by caching expensive computations and preventing unnecessary renders.
- **Hooks** like `useState`, `useRef`, `useCallback`, and `useEffect` are essential for managing state, references, memoized functions, and side effects in functional components.

For a practical example, see [`App.jsx`](src/App.jsx).


---

## 🔧 Key React Hooks for Optimization

### 1. `useState`
- **Purpose:** Adds state to functional components.
- **Usage:** Returns a stateful value and a function to update it.
- **Example:**
  ```jsx
  const [count, setCount] = useState(0);
  ```

### 2. `useRef`
- **Purpose:** Persists a mutable value across renders without causing a re-render when updated.
- **Usage:** Commonly used to access DOM elements or store mutable variables.
- **Example:**
  ```jsx
  const inputRef = useRef(null);
  ```

### 3. `useCallback`
- **Purpose:** Returns a memoized version of a callback function that only changes if one of its dependencies changes.
- **Usage:** Prevents unnecessary re-creation of functions, which can help with performance, especially when passing callbacks to memoized child components.
- **Example:**
  ```jsx
  const handleClick = useCallback(() => {
    // logic here
  }, [dependency]);
  ```

### 4. `useEffect`
- **Purpose:** Performs side effects in function components (e.g., data fetching, subscriptions, manual DOM manipulations).
- **Usage:** Runs after the render and can clean up after itself.
- **Example:**
  ```jsx
  useEffect(() => {
    // effect logic here
    return () => {
      // cleanup logic here
    };
  }, [dependency]);
  ```

---