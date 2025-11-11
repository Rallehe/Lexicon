import IncrementButton from "@/components/increment-button";
import MyAlert from "@/components/my-alert";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">
        Welcome to my home page
      </h1>
      <h2>
        This page is all about home stuff
      </h2>
      <IncrementButton text="Increment by 1"></IncrementButton>
      <IncrementButton text="Increment by 2" incrementBy={2}></IncrementButton>
      <MyAlert text="Success!" />
      <MyAlert text="Warning!" />
      <MyAlert text="Error!" />
    </div>
  )
}