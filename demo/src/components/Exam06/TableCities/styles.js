import styled from "styled-components";
import { Button } from "antd";
// styled.[name]
export const Actions = styled.div`
  button {
    margin-right: 8px;
  }
`;

export const Country = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 1rem;
  align-items: center;

  img {
    display: block;
  }

  h6 {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  padding-top: 100%;
`;

export const ButtonAction = styled(Button)`
  color: #000000;
  background-color: #f8b195;
  border-color: #f8b195;

  &:hover {
    color: #000000 !important;
    background-color: #f5956f;
    border-color: #f5956f !important;
  }

  &:active,
  &:focus {
    color: #000000 !important;
    background-color: #f4875d;
    border-color: #f4875d !important;
  }
`;
export const Population = styled.div`
  color: ${(props) => props.color};
  font-weight: 700;
`;
