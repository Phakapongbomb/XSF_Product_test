'use client'

import React from 'react'
import styled from 'styled-components'

const InputSearchContainer = styled.div`
    width: 100%;
    height: 56px;
    border: 1px solid #D9D9D9;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 24px;
    position: relative;
`;

const InputSearchInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 0 48px;
`;

const IconSearch = styled.img`
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
`;

export default function InputSearch({
    value,
    setValue,
    placeholder = 'Name, Catalogue, Code',
}) {
    return (
        <InputSearchContainer>
            <IconSearch
                src="/icon/Searching.svg.svg"
                alt='Searching'
            />
            <InputSearchInput
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </InputSearchContainer>
    )
}
