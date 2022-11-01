import styled from 'styled-components';

export const Container = styled.header`
background: ${({ theme }) => theme.colors.elements} ;
  padding: 16px 80px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 800;
    font-size: 24px;
  }
  .darkMode {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    color: white;

    span {
      margin-right: 8px;
    }
  }
`;
