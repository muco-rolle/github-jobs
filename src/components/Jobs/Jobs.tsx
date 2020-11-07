import { Grid } from '@geist-ui/react';
import React from 'react';
import styled from 'styled-components/macro';
import { Job } from './Job';
import { JobsLoader } from './JobsLoader';

export function Jobs() {
    return (
        <StyledJobs>
            <Grid.Container gap={2}>
                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>
                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>

                <Grid xs={24} sm={12} md={8}>
                    <JobsLoader />
                </Grid>
            </Grid.Container>
        </StyledJobs>
    );
}

const StyledJobs = styled.div``;
