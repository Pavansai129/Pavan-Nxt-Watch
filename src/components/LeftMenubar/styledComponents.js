import styled from 'styled-components'

export const LeftMenubarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  flex-grow: 1;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
`
