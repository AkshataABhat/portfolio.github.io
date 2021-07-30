import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'IEEE-WIE-Core Committee(Design and Editorial)'},
  { text: 'IET-VIT-Core Committee(Design and Editorial)', },
  { text: 'SigmaXi-Core Commitee(Technical and Editorial)', },
  { text: 'DCoder-Developer Intern' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);


export default Acomplishments;
