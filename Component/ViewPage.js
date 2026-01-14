import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    height: auto;
    width: 100%;
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
`

export default function ViewPage({ children }) {
    return (
        <Page>{children}</Page>
    )
}
