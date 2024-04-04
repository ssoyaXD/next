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

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1>{params.slug} 제품 설명 페이지</h1>
    </div>
  )
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = ['shirt', 'pants', 'skirt', 'shoes'];
  return products.map(product => ({
    slug: product
  }))
}