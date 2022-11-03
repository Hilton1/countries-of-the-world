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

    ::placeholder {
      color: ${({ theme }) => theme.colors.input};
    }
  }
`;
