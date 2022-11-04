import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    padding: 18px 24px;
    color: ${({ theme }) => theme.colors.input};
  }
  input {
    background: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.input};
    padding: 18px 74px;
    width: 480px;
    font-size: 14px;
    border: none;

    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);


    ::placeholder {
      color: ${({ theme }) => theme.colors.input};
    }
  }

  @media(max-width: 850px) {
    input {
      margin-bottom: 40px;
    }
  }

  @media(max-width: 660px) {
    input {
      max-width: 340px;
    }
  }
`;
