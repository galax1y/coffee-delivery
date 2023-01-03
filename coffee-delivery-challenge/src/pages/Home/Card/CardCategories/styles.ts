import styled from 'styled-components'

export const CardCategoriesContainer = styled.sub`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme['yellow-light']};

  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  line-height: 1.3;
`
