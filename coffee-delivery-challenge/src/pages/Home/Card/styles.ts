import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    transform: translateY(-1.25rem);
  }

  > h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > label {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    word-break: keep-all;
    text-align: center;
  }

  > section {
    margin-top: 2rem;

    display: flex;
    gap: 1.5rem;
    align-items: center;

    .Price {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};

      strong {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
      }
    }
  }

  .CardCategories {
    display: flex;
    gap: 0.25rem;
  }

  .CartInterface {
    display: flex;
    gap: 0.5rem;
  }

  .Amount {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${(props) => props.theme['base-button']};

    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    button {
      display: flex;
      color: ${(props) => props.theme.purple};
      border: none;
      background: transparent;

      cursor: pointer;

      :hover {
        color: ${(props) => props.theme['purple-dark']};
      }

      transition: all 0.1s;

      &:active {
        transform: scale(150%);
      }
    }
  }

  .CheckoutButton {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;

      padding: 0.5rem;

      color: ${(props) => props.theme['base-card']};
      background-color: ${(props) => props.theme['purple-dark']};

      border: none;
      border-radius: 6px;

      cursor: pointer;

      :hover {
        border-radius: 6px;
        background-color: ${(props) => props.theme.purple};
        transition: all 0.1s;
      }

      &:active {
        transform: scale(125%);
      }
    }
  }
`
