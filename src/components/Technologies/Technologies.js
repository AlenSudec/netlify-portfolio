import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Through several years, I've worked on mobile applications, both for iOS and Android, tried my hand in game development with Unity 2D and Unity 3D, after which I started working on websites in MVC framework and dabbling in few noSQL and SQL databases. After which I decided to primarily focus on Front-end technologies, and finished Frontend internship. The internship focused around using HTML and SCSS to properly build and style a website. As my final project, I've used Embedded Ruby, a templating system, and SCSS to properly structurize and style the website.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            SaSS, SCSS, React.js, Vue.js, JavaScript, D3.js, Ejs and Erb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, SQL and noSQL Databases (PostgreSQL, SQLite, MongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"/>
        <ListContainer>
          <ListTitle>Mobile development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Android Studio
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
