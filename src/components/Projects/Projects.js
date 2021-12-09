import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

var style = {
  width: "100%",
  marginLeft: "10px",
  marginRight: "10px",
};

const Projects = () => (
 <Section nopadding  id="projects">
   <SectionDivider/>
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
      {projects.map(({id, title, tags, image, description, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
              <HeaderThree>{title}</HeaderThree>
             
              
          </TitleContent>
          <Hr/>
          <CardInfo>{description}</CardInfo>
          <div>
            <br/>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i)=> (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              { visit != null ? (
                source !=null ? (<ExternalLinks href={visit}>Code</ExternalLinks>) : (<ExternalLinks href={visit} style={style}>Code</ExternalLinks>)
                                ) : (null) }
              { source != null ? ( visit != null ? (<ExternalLinks href={source}>Source</ExternalLinks>) : (<ExternalLinks href={source} style={style}>Source</ExternalLinks>)
                                ) : (null) }
          </UtilityList>
        </BlogCard>
      ))}  
   </GridContainer>
 </Section>
);

export default Projects;