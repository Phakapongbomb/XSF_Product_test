'use client'

import React from 'react'
import styled from 'styled-components'

const InputTextContainer = styled.div`
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

const InputTextInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 0 24px;
`;

const TitleInput = styled.h2`
    font-size: 16px;
    margin-bottom: 8px;
`;

export default function InputText({
    value,
    setValue,
    placeholder,
    title
}) {
    return (
        <div>
            <TitleInput>{title}</TitleInput>
            <InputTextContainer>
                <InputTextInput
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />

            </InputTextContainer>
        </div>
    )
}
