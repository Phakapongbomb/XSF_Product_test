'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { formatCurrency } from '../utils/format'

const ContainerProduct = styled.div`
    display: flex;
    width: 100%;
    max-width: 1096px;
    margin: 40px auto;
    row-gap: 40px;
    column-gap: 60px;
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0 24px;
    }
`

const ContainerImage = styled.div`
    width: 50%;
    max-height: 850px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 1024px) {
        width: 100%;
    }
`

const ContainerInfo = styled.div`
    width: 50%;
    max-width: 1096px;
    margin: 40px auto;
    row-gap: 40px;
    column-gap: 24px;
    justify-content: center;
    @media (max-width: 1024px) {
        width: 100%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 400px;
    border-radius: 16px;
`

const ContainerImageSmall = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 100%;
    gap: 20px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

const ImageSmall = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 8px;
    border: ${({ $active }) => $active ? '2px solid #E13B30' : 'none'};
    opacity: ${({ $active }) => $active ? '1' : '0.6'};
    transition: all 0.3s ease;
    &:hover {
        opacity: 1;
    }
`

const Code = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #D9D9D9;
`

const Name = styled.p`
    font-size: 48px;
    font-weight: 600;
    margin: 24px 0;
`

const Price = styled.p`
    font-size: 28px;
    font-weight: 600;
    color: #E13B30;
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #666;
    line-height: 1.6;
`

const TitleDescription = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 16px 0;
`

const Dast = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border: 1px dashed #D9D9D9;
    margin: 24px 0;
`

export default function ProductDisplay({ product }) {
    const [activeImage, setActiveImage] = useState(product.image[0]);

    return (
        <ContainerProduct>
            <ContainerImage>
                <Image src={activeImage} alt={product.name} />
                <ContainerImageSmall>
                    {product.image.map((image, index) => {
                        console.log(image, activeImage);

                        return (
                            <ImageSmall
                                key={index}
                                src={image}
                                alt={product.name}
                                $active={activeImage === image}
                                onClick={() => setActiveImage(image)}
                            />
                        )
                    })}
                </ContainerImageSmall>
            </ContainerImage>
            <ContainerInfo>
                <Code>{product.code}</Code>
                <Name>{product.name}</Name>
                <Price>฿ {formatCurrency(product.price)}</Price>
                <Dast></Dast>
                <TitleDescription>Description</TitleDescription>
                <Description>{product.description}</Description>
            </ContainerInfo>
        </ContainerProduct>
    )
}
