import React from 'react';
import styled from 'styled-components/macro';
import { Toggle } from '@geist-ui/react';
import { Sun, Moon } from '@geist-ui/react-icons';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <StyledHeader>
            <div className="logo-container">
                <Link to="/">devjobs</Link>
            </div>
            <div className="theme-toggler">
                <Sun size={20} />
                <Toggle style={{ margin: '0 20px' }} />
                <Moon size={20} />
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    height: 70px;
    background-image: linear-gradient(135deg, #1d4f91, #0e2d68);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    .logo-container {
        a {
            color: white;
            font-size: 20px;
            font-weight: 900;
        }
    }
`;
