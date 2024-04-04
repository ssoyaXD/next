import Counter from "@/components/Counter";
import { notFound } from "next/navigation";
import os from 'os';

export default function Home() {
  // notFound();
  console.log("안녕");
  console.log(os.hostname());
  return <>
    <h1>홈페이지 메인</h1>
    <Counter/>
  </>;
}
