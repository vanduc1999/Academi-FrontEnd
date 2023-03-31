import styled from "styled-components";


export const  Layout = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 1fr;
`;

export const Main = styled.main`
  max-height: calc(100vh - 9.23rem);
  padding: 1rem;
  overflow-y: auto;
`;

export const Sidebar = styled.div`
  background-color: #f3f4f6;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: start;
  color: #171e2d;
  font-weight: 700;
  padding: 1rem;

  &:hover{
    background-color: #1118271a;
  }
  &.active{
    background-color: #e2e4e7;
  }
  .anticon{
    font-size:  1.5rem;
    margin-right: 0.5rem;
  }

  span{
    display: inline-block;
    line-height: 1.5rem;
  }
`

export const Content = styled.div`
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f1f3 ;
  padding: 1rem;
  margin-bottom:  1rem;
`;

export const Logo = styled.a`
  font-size:  1.75rem;
  font-weight: 700;
  line-height: 4rem;
  padding-left: 1rem;
  padding-right:  1rem ;
  margin-bottom:  1rem;
`;

export const Footer = styled.footer`
  border-top:  1px solid #f0f1f3;
  text-align: center;
  padding: 1rem;
`;

