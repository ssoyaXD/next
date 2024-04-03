import React from 'react'
import { notFound } from "next/navigation";

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

export default function ProductDetailPage({params}: Props) {
  if(params.slug === 'nothing') {
    notFound();
  }
  return (
    <div>
      <h1>{params.slug} 제품 설명 페이지</h1>
    </div>
  )
}

export function generateStaticParams() {
  const products = ['shirt', 'pants', 'skirt', 'shoes'];
  return products.map(product => ({
    slug: product
  }))
}