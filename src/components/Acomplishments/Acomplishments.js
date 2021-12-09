import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

var box = {
  height: "160px",
};

const data = [
  { text: "Master's degree of Business informatics"},
  { number: 11, extra: "+", text: 'Projects'},
  { number: 1, text : "Prototype web app made for EFOS" },
  { number: 60, extra: "+", text: 'Days of frontend internship @BambooLab'}
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index} style={box}>
          <BoxNum>{card.number}{card.extra}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
