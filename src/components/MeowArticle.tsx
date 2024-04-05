'use client';
import styles from "./MeowArticle.module.css";
import React, { useEffect, useState } from 'react'

export default function MeowArticle() {
    const [text, setText] = useState("데이터 준비중...");
    // component 가 mount 될 때, 딱 한번만 실행시키기 위해서 useEffect 사용
    useEffect(() => {
        // res로 응답을 받아오면 받아온 데이터를 json으로 만들고, data를 setText에 대입
        // 받아오는 fetch 데이터의 구조를 참조하여 data.data[0] => 즉, data 객체안의 data 배열에서 0번째 data를 가져옴
        fetch('https:meowfacts.herokuapp.com')
        .then(res => res.json())
        .then(data => setText(data.data[0]));
    }, [])
  return (
    <article className={styles.article}>
        {text}
      </article>
  )
}

  