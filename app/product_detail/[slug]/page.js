import React from 'react'
import ViewPage from '@/Component/ViewPage'
import styled from 'styled-components'
import data from '@/Data.json'
import ProductDisplay from '@/Component/ProductDisplay'

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 24px;
    max-width: 1240px;
    margin: 96px auto 24px;
`

export default async function page({ params }) {
    const { slug } = await params;
    const product = data.products.find((product) => product.code === slug);
    return (
        <ViewPage>
            <Title>Product Detail</Title>
            <ProductDisplay product={product} />
        </ViewPage>
    )
}
