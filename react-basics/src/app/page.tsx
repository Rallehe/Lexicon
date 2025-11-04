"use client"; // Each component is considered server side by default "use client" tells the component to run on client side. 
// If you wish to use server side for something. ex DB, you need to make another component without "use client"

import { CSSProperties } from "react";
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
  const isAuthorized = false;
  const isAdmin = true;

  function handleClick() {
    console.log("Clicked");
    confirm("Are you sure you want to click this button?");
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

      <Button className="m-4 bg-slate-200" variant="primary">Click Me!</Button>
      <Button className="m-4" variant="outline" onClick={handleClick}>Click Me!</Button>

      <div className="flex gap-2 p-4">
        {(isAuthorized ?
          (<>
            <Button>Sign Out</Button>
            {isAdmin && <Button variant="outline">Admin Dashboard</Button>}
          </>)
          :
          (<>
            <Button onClick={() => {
              console.log("Clicked!");
            }}>Sign In</Button>
            <Button variant="outline">Register</Button>
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
    </div>
  );
}