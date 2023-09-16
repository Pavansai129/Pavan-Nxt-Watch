import styled from 'styled-components'

export const GamingBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  margin-top: 100px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
