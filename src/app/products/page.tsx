import React from 'react'
import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import clothesImage from '../../../public/images/clothes.png'

// 3초마다 데이터를 다시 받아오도록 명시
//export const revalidate = 3;

// promise 타입으로 반환 받기 때문에 함수에 async, sync 등의 타입을 붙여주고, 변수에 대입할 대상에 await를 붙여주어야함
export default async function ProductsPage() {

  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt='Clothes'></Image>
      <ul className={styles.product_list}>
        { products.map(({id, name}, index) => <li key={index}>
          <Link href={`/products/${id}`}>{name}</Link>
        </li>)}
      </ul>
      <MeowArticle/>
    </>
  )
}
