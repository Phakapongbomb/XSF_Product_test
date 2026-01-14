import React from 'react'
import ViewPage from '@/Component/ViewPage'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 24px;
    max-width: 1240px;
    margin: 96px auto 24px;
`

export default function page() {
    return (
        <ViewPage>
            <Title>Product Detail</Title>
        </ViewPage>
    )
}
