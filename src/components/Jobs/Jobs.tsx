import { Grid } from '@geist-ui/react';
import React from 'react';
import styled from 'styled-components/macro';
import { useQuery } from 'react-query';
import { Job } from './Job';
import { JobsLoader } from './JobsLoader';
import { getJobs } from 'utils';

export function Jobs() {
    const { data, isLoading } = useQuery('jobs', getJobs);

    if (isLoading) console.log('loading');

    console.log(data);

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
