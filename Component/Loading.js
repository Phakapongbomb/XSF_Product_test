import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    margin: 100px auto;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`

export default function Loading() {
    return (
        <LoadingSpinner />
    )
}
