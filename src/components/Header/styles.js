import styled from 'styled-components';

export const Container = styled.header`
background: ${({ theme }) => theme.colors.elements} ;
  padding: 16px 80px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 48px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);


  a {
    font-weight: 800;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  .darkMode {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};

    span {
      margin-right: 8px;
    }
  }
`;
