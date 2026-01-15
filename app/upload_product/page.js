'use client'
import React, { useEffect, useState } from 'react'
import ViewPage from '../../Component/ViewPage'
import styled from 'styled-components'
import UploadImage from '../../Component/UploadImage'
import InputText from '@/Component/InputText'

const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 24px;
    max-width: 1240px;
    margin: 96px auto 24px;
`

const ContainerProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 924px;
    margin: 32px auto;
    /* border: 1px solid red; */
    height: auto;
`

const TitleInput = styled.p`
    margin-bottom: 10px;
    width: 100%;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 40px auto;
    width: 100%;
    max-width: 924px;
`

const ButtonCancel = styled.button`
    width: 100%;
    max-width: 200px;
    height: 48px;
    border: 1px solid #E13B30;
    background-color: white;
    color: #E13B30;
    border-radius: 99px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #FFF5F5;
    }
`

const ButtonConfirm = styled.button`
    width: 100%;
    max-width: 200px;
    height: 48px;
    border: none;
    background-color: #E13B30;
    color: white;
    border-radius: 99px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #C12A20;
    }
`

export default function page() {
    const [files, setFiles] = useState([]);
    const [data, setData] = useState({
        name: '',
        code: '',
        price: '',
    })
    const { name, code, price } = data

    const onChange = (value) => {
        if (value.name === 'price' && !/^\d*$/.test(value.value)) {
            return
        }
        setData({ ...data, [value.name]: value.value })
    }

    return (
        <ViewPage>
            <Title>Upload Product</Title>

            <ContainerProduct>
                <TitleInput>Upload image</TitleInput>
                <UploadImage files={files} setFiles={setFiles} />
            </ContainerProduct>

            <ContainerProduct style={{ gap: '24px', flexDirection: 'column' }}>
                <InputText
                    title='Product name'
                    placeholder='Product name'
                    value={name}
                    setValue={(val) => onChange({ name: 'name', value: val })}
                />
                <InputText
                    title='Code'
                    placeholder='Code'
                    value={code}
                    setValue={(val) => onChange({ name: 'code', value: val })}
                />
                <InputText
                    title='Price'
                    placeholder='1000'
                    value={price}
                    setValue={(val) => onChange({ name: 'price', value: val })}
                />
            </ContainerProduct>
            <ButtonGroup>
                <ButtonCancel>ยกเลิก</ButtonCancel>
                <ButtonConfirm>ยืนยัน</ButtonConfirm>
            </ButtonGroup>
        </ViewPage>
    )
}
