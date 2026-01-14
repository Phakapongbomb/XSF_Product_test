'use client'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

const Product = styled.div`
    width: 200px;
    height: 335px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0px 4px 10px 0px #0000001A;
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`
const Image = styled.img`
    width: 100%;
    max-width: 200px;
    height: 200px;
    object-fit: cover;
    @media (max-width: 767px) {
        max-width: none;
        object-fit: cover;
    }
`

const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    @media (max-width: 767px) {
        padding: 12px;
    }
`

const ProductName = styled.h3`
    font-size: 16px;
    @media (max-width: 767px) {
        font-size: 18px;
    }
`

const ProductPrice = styled.p`
    font-size: 20px;
    color: #E13B30;
    margin-top: auto;
    text-align: right;
`

const ProductCode = styled.p`
    color: #666;
`

const ProductImg = styled.div`
    width: 100%;
    max-width: 200px;
    height: 200px;
    position: relative;
    @media (max-width: 767px) {
        max-width: none;
    }
`

const GroupSlide = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 200px;
    height: 2px;
    display: flex;
    justify-content: center;
    gap:4px;
    z-index: 1;
`

const Slide = styled.div`
    width: 100%;
    max-width: 16px;
    height: 2px;
    background-color: ${({ $active }) => $active ? '#E13B30' : '#666'};
    border-radius: 2px;
`

export default function ProductCard({
    name,
    price,
    code,
    image,
}) {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Product>
            <ProductImg>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    ref={swiperRef}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {
                        image.map((item, index) => (
                            <SwiperSlide key={`${name}-${index}`}>
                                <Image src={item} alt={name} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {
                    image.length > 1 && (
                        <GroupSlide>
                            {
                                image.map((item, index) => (
                                    <Slide $active={index === activeIndex} key={`${name}-${index}`}></Slide>
                                ))
                            }
                        </GroupSlide>
                    )
                }
            </ProductImg>
            <ProductDetail>
                <ProductName>{name}</ProductName>
                <ProductCode>{code}</ProductCode>
                <ProductPrice>฿{price}</ProductPrice>
            </ProductDetail>
        </Product>
    )
}