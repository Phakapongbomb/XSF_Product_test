'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 80px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 100%;
    margin-bottom: 24px;
`

const Logo = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`

const NavLinks = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: ${({ $isActive }) => $isActive ? '#E13B30' : '#666'};
    transition: color 0.3s ease;
    
    &:hover {
        color: #E13B30;
    }
`

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Upload Product', path: '/upload_product' },
    ];

    return (
        <Navbar>
            <Logo>My Store</Logo>
            <NavLinks>
                {navItems.map((item) => (
                    <StyledLink
                        key={item.path}
                        href={item.path}
                        $isActive={pathname === item.path}
                    >
                        {item.name}
                    </StyledLink>
                ))}
            </NavLinks>
        </Navbar>
    )
}
