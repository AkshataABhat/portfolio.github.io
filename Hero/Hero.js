import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello World!<br />
          Akshata Bhat's<br/> Portfolio.
        </SectionTitle>
        <SectionText>
          Computer Science Undergraduate at VIT, Vellore.      </SectionText>
        <Button onClick={()=>window.location="https://www.linkedin.com/in/akshata-b-342a261bb/"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;