import { CSSProperties } from "react";
import Title from "../components/title";

const msg = "Hello World!";
const styles: CSSProperties = {
  background: "red",
  color: "black",
  textDecoration: "underline",
  padding: 8,
};

export default function HomePage() {
  return (
    <>
      <Title />
      <p style={styles}>My first Component</p>
      <h2>{msg}</h2>
    </>
  );
}


