import Link from 'next/link';
import React from 'react';

import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" , marginBottom:"20px",marginLeft:"40px"}}>
          <Span>Akshata Bhat</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies
          
          </NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/AkshataABhat">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/akshata-b-342a261bb/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://medium.com/@akshatabhat.a2020">
          <AiFillMediumCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/bhat20_bhat?s=08">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
       
      </Div3>
    </Container>
);

export default Header;
