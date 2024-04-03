import React from 'react'
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  }
}

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