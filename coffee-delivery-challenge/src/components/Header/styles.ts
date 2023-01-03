import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 320px) and (max-width: 1120px) {
    flex: 1;
  }

  .Logo {
    transition: all 0.1s;
    cursor: pointer;
    &:hover {
      transform: scale(120%);
    }
  }

  span {
    display: flex;
    gap: 0.75rem;

    .City {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      border-radius: 6px;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-light']};

      color: ${(props) => props.theme.purple};
      font-size: 0.875rem;

      transition: all 0.3s;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['purple-dark']};
      }

      &:hover {
        transform: scale(120%);
        border: 1px solid ${(props) => props.theme['purple-dark']};
      }
    }

    .Checkout {
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${(props) => props.theme['yellow-light']};

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 6px;
      transition: all 0.3s;

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }

      &:hover {
        transform: scale(120%);
        border: 1px solid ${(props) => props.theme['yellow-dark']};
      }
    }

    .OrderItemCount {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      top: -1rem;
      right: 1.5rem;
      height: 2rem;
      width: 2rem;

      border-radius: 50%;
      background-color: ${(props) => props.theme['yellow-dark']};

      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      line-height: 0;
    }
  }
`
