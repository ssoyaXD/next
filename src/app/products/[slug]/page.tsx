import React from 'react'
import { notFound } from "next/navigation";
import { getProduct, getProducts } from '@/service/products';

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
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1>{product.name} 제품 설명 페이지</h1>
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