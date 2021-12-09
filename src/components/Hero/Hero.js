import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A person with master's degree trying to find work in the programming world.
      </SectionText>
      <Button onClick={()=> window.location = "https://www.linkedin.com/in/alen-sudec-0805641a0/"}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;