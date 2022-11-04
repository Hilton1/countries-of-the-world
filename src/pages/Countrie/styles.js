import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 80px;
`;

export const Header = styled.header`
  margin-bottom: 80px;

  a {
    background: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    max-width: 140px;

    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 30px;

    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
  }
`;
