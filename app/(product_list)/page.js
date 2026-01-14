'use client'

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import InputSearch from '../../Component/InputSearch'
import ProductCard from '../../Component/ProductCard'
import data from '../../Data.json'
import Loading from '../../Component/Loading'
import ViewPage from '../../Component/ViewPage'

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 24px;
    max-width: 1240px;
    margin: 96px auto 24px;
`

const ContainerProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1096px;
    margin: 40px auto;
    row-gap: 40px;
    column-gap: 24px;
    justify-content: center;
`

const NoData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

const NoDataImg = styled.img`
    width: 200px;
    height: 200px;
`

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const filteredProducts = data.products.filter((product) => {
        const lowerSearch = debouncedSearchValue.toLowerCase();
        return product.name.toLowerCase().includes(lowerSearch) ||
            product.code.toLowerCase().includes(lowerSearch);
    });

    const handleSearch = (value) => {
        setSearchValue(value);
        setLoading(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [searchValue]);

    return (
        <>
            <ViewPage>
                <Title> Product list</Title>
                <InputSearch
                    value={searchValue}
                    setValue={handleSearch}
                />
                {
                    !loading && (
                        <ContainerProduct>
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    code={product.code}
                                    image={product.image}
                                />
                            ))}
                        </ContainerProduct>
                    )
                }
                {loading && <Loading />}
                {
                    filteredProducts.length === 0 && !loading &&
                    <NoData>
                        <NoDataImg
                            src="/icon/nodata.png"
                            alt="no-data"
                        />
                    </NoData>
                }
            </ViewPage>
        </>
    );
}
