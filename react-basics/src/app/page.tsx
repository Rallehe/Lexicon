"use client"; // Each component is considered server side by default "use client" tells the component to run on client side. 
// If you wish to use server side for something. ex DB, you need to make another component without "use client"

import { CSSProperties, useState, useEffect } from "react";
import Title from "../components/title";
import Button from "@/components/button";

const msg = "Hello World!";
const styles: CSSProperties = {
  background: "red",
  color: "black",
  textDecoration: "underline",
  padding: 8,
};

const languages = [
  "Java",
  "Typescript",
  "Python",
  "C#",
  "Rust",
];



export default function HomePage() {
  // const isAuthorized = true;
  const [isAuthorized, setIsAuthorized] = useState(true);
  // const isAdmin = true;
  const [isAdmin, setIsAdmin] = useState(true);
  const [count, increment] = useCounter();

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  function useCounter() {
    const [count, setCount] = useState(0);

    function increment(amount = 1) {
      setCount((prev) => prev + amount);
    }

    return [count, increment] as const;
  }

  function signOutClick() {
    setIsAuthorized((prev) => !prev);
    setIsAdmin((prev) => !prev);
    console.log("You signed out!");

  }

  function signInClick() {
    setIsAuthorized(true);
    setIsAdmin(true);
    console.log("You signed in!")
  }

  function registerClick() {
    setIsAuthorized(true);
    setIsAdmin(false);
    console.log("You're trying to register!");
  }

  const languageList = languages.map((language, i) => (
    <li key={`${language}-${i}`}>
      {language}
    </li>));

  return (
    <div className="p-4">
      <Title className="font-bold"
        style={{ background: "green" }}>
        Hello <span>World!!!</span>
      </Title>
      <p style={styles}>My first Component</p>

      <h2>{msg}</h2>

      {/* <Button className="m-4 bg-slate-200" variant="primary">Click Me!</Button>
      <Button className="m-4" variant="outline">Click Me!</Button> */}

      <div className="flex gap-2 p-4">
        {(isAuthorized ?
          (<>
            <Button onClick={signOutClick}>Sign Out</Button>
            {isAdmin && <Button variant="outline">Admin Dashboard</Button>}
          </>)
          :
          (<>
            <Button onClick={signInClick}>Sign In</Button>
            <Button variant="outline" onClick={registerClick}>Register</Button>
          </>)
        )}
      </div>

      <ul>
        {languages.map((language, i) => (
          <li key={`${language}-${i}`}>
            {language}
          </li>))}
      </ul>

      <p style={{ color: "green" }}>Variable stored list:</p>
      <ul style={{ textDecoration: "underline", color: "green" }}>
        {languageList}
      </ul>

      <p>Connected buttons:</p>
      <Counter2 value={count} onIncrement={() => increment()} />
      <Counter2 value={count} onIncrement={() => increment()} />

      <p>Stand alone buttons:</p>
      <Counter />
      <Counter />
    </div>

  );
}

type CounterProps = {
  value: number;
  onIncrement: () => void;
}

function Counter2({ value, onIncrement }: CounterProps) {

  return (
    <div className="flex gap-2 items-center pt-1">
      <Button onClick={onIncrement}>Increment</Button>
      <div>
        {value}
      </div>
    </div>
  )
}


function Counter() {
  const [value, setValue] = useState<number | null>(null);

  function incrementValue() {
    setValue((val) => (val ?? 0) + 1); // If val is null or undefined return 0 instead
  }

  useEffect(() => {
    console.log(`Value: ${value}`);
  })

  return (
    <div className="flex gap-2 items-center pt-1">
      <Button onClick={incrementValue}>Increment</Button>
      <div>
        {value}
      </div>
    </div>
  )
}