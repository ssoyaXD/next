import Counter from "@/components/Counter";
import Image from "next/image";
import { notFound } from "next/navigation";
import os from 'os';

export default function Home() {
  // notFound();
  console.log("안녕");
  console.log(os.hostname());
  return <>
    <h1>홈페이지 메인</h1>
    <Counter/>
    <Image src='https://hsarchives.org/archive/files/original/4330a477a216279e85081a8224742155.jpeg' 
    alt='shop'
    width={400}
    height={400}></Image>
  </>;
}
