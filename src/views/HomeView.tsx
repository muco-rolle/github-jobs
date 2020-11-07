import React from 'react';
import styled from 'styled-components/macro';
import { Header, Jobs } from 'components';

export function HomeView() {
    return (
        <StyledHomeView>
            <Header />
            <div className="container">
                <Jobs />
            </div>
        </StyledHomeView>
    );
}

const StyledHomeView = styled.div`
    .container {
        width: 996px;
        max-width: 90%;
        margin: 100px auto 50px auto;
    }
`;
