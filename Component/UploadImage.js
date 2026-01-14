"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`

const DropzoneContainer = styled.div`
    width: 100%;
    height: 350px;
    border: 2px dashed #D9D9D9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: border .2s ease-in-out;
    margin-bottom: 8px;

    &:hover {
        border-color: #2196f3;
    }
`

const DropzoneText = styled.p`
    color: #6C6C70;
    font-size: 14px;
    text-align: center;
`
const DropzoneTextSub = styled.p`
    color: #6C6C70;
    font-size: 12px;
    text-align: center;
`

const DropzoneTextLink = styled.span`
    color: #005FCC;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    margin: 0 4px;
`

const PreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

const PreviewImageWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ddd;
`

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const RemoveButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: rgba(255, 0, 0, 0.8);
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
    transition: background-color .2s ease-in-out;

    &:hover {
        background-color: red;
    }
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 8px;
`

const IconUpload = styled.img`
    width: 26px;
    height: 27px;
    margin-bottom: 24px;
`
const CountFile = styled.p`
    color: #6C6C70;
    font-size: 12px;
    text-align: right;
`

export default function UploadImage({ files, setFiles }) {
    const [error, setError] = useState('');

    const onDrop = useCallback((acceptedFiles, fileRejections) => {

        setError('');

        if (fileRejections.length > 0) {
            const messages = fileRejections.map(({ file, errors }) => {
                return errors.map(e => {
                    if (e.code === 'file-too-large') return `file is too large (max 50MB)`;
                    if (e.code === 'file-invalid-type') return `file is not supported (JPG/PNG only)`;
                    if (e.code === 'too-many-files') return `Too many files (max 6)`;
                    return e.message;
                }).join(', ');
            });
            setError(messages.join('. '));
        }

        if (files.length + acceptedFiles.length > 6) {
            setError('You can only upload a maximum of 6 files.');
            return;
        }

        const newFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setFiles(prev => [...prev, ...newFiles]);

    }, [files]);

    const removeFile = (file) => {
        const newFiles = [...files];
        newFiles.splice(newFiles.indexOf(file), 1);
        setFiles(newFiles);
        URL.revokeObjectURL(file.preview);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        maxSize: 52428800, // 50MB
        maxFiles: 6
    });

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <Container>
            <DropzoneContainer {...getRootProps()}>
                <input {...getInputProps()} />
                <IconUpload
                    src="/icon/upload.svg"
                    alt="upload"
                    width={26}
                    height={27}
                />
                {
                    isDragActive ?
                        <DropzoneText>Drop the files here ...</DropzoneText>
                        :
                        <>
                            <DropzoneText>
                                Drag & Drop or
                                <DropzoneTextLink>Choose file</DropzoneTextLink>
                                to upload
                            </DropzoneText>
                            <DropzoneTextSub style={{
                                marginTop: '16px', color: '#6C6C70'
                            }}>
                                JPG. or PNG Maximum file size 50MB.
                            </DropzoneTextSub>
                        </>
                }
            </DropzoneContainer>
            <CountFile>Image upload ({files.length}/6)</CountFile>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <PreviewContainer>
                {files.map((file, index) => (
                    <PreviewImageWrapper key={`${file.name}-${index}`}>
                        <PreviewImage
                            src={file.preview}
                            alt={`preview-${index}`}
                        />
                        <RemoveButton onClick={() => removeFile(file)}>x</RemoveButton>
                    </PreviewImageWrapper>
                ))}
            </PreviewContainer>
        </Container>
    )
}
