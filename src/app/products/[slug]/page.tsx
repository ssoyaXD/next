import React from 'react'
import { notFound, redirect } from "next/navigation";
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

// 3초마다 데이터를 다시 받아오도록 명시
// 해당 선언을 하는 것만으로 렌더링 방식을 ISR로 변경 가능
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  }
}

// 상위 metadata의 description 등을 쓰되, title만 동적으로 변경
export function generateMetadata({params}: Props) {
  return{
    title: `제품의 이름: ${params.slug}`
  }
};

// 매개변수에 params: {slug}로 선언해주면, params.slug로 접근해야했던 데이터가 slug로 접근 가능해짐
export default async function ProductDetailPage({params: {slug}}: Props) {
  const product = await getProduct(slug);

  // 만일, 제품을 찾지 못했을 경우엔 미리 만들어둔 Not Found 페이지를 출력
  if(!product) {
    redirect('/products');
    //notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={`/images/${product.image}`} alt={product.name} width='300' height='300'></Image>
      <GoProductsButton/>
    </div>
  )
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id
  }))
}