/* @flow */

import {Link} from 'react-router';
import React from 'react';

import {
  ContentContainer,
  Main,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
  WorkList,
} from '../components';
import works from '../data/works';

const Homepage = (): React$Element<any> => (
  <Main>
    <PageHelmet mixpanelTitle="Home" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <WorkList works={works} compact />
      <div className="tr">
        <Link to="/work/" className="f4 f3-l">
          Посмотрите, что еще мы сделали ➞
        </Link>
      </div>
    </ContentContainer>
    <Separator />
    <PageFooter />
  </Main>
);

export default Homepage;
