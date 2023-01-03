import styled from 'styled-components'

export const KeypointCircleContainer = styled.span`
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  color: ${(props) => props.theme.white};
  background-color: aqua;

  border-radius: 50%;
  line-height: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
