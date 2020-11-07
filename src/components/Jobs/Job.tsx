import { Text } from '@geist-ui/react';
import React from 'react';
import styled from 'styled-components/macro';
import { color } from 'utils';

interface JobProps {
    id: string;
    type: string;
    title: string;
    url: string;
    createdAt: string;
    company: string;
    companyUrl: string;
    location: string;
    jobDescription: string;
    applyDescription: string;
    companyLogo: string;
}
export function Job() {
    return (
        <StyledJob>
            <div className="compony-logo"></div>
            <div className="post">
                <span className="created_at">5h ago</span>
                <span className="separator"></span>
                <span className="type">Full time</span>
            </div>
            <Text h4>Senior Software Engineer</Text>
            <Text className="company">soft</Text>
            <Text className="location">Russia</Text>
        </StyledJob>
    );
}

const StyledJob = styled.div`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    h4 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    p {
        margin: 0;
    }

    .location {
        margin-top: 30px;
        color: ${color('success')};
    }

    .post {
        display: flex;
        align-items: center;
    }

    .company {
        color: ${color('accents_5')};
    }
    .created_at,
    .type {
        color: ${color('accents_5')};
        font-size: 14px;
    }

    .separator {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background: ${color('successLight')};
        margin: 0 10px;
    }
`;
