# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React issue where the cleanup function in a `useEffect` hook is not called when the component is unmounted.  The bug is related to situations where the component unmounts before the `useEffect` callback has completed its work.  This can lead to memory leaks or unexpected behavior.  The solution provides a corrected implementation that ensures proper cleanup.

## Bug

The original `bug.js` file contains a `useEffect` hook that logs messages to the console. The cleanup function is designed to log a message indicating that the component is being unmounted. However, if the component unmounts quickly, this cleanup may not be executed.

## Solution

The `bugSolution.js` file provides a solution using a technique that handles component unmounts efficiently and prevents unexpected behavior.  Specifically it addresses the race condition that can prevent the useEffect cleanup from running.