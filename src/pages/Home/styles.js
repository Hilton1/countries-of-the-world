import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 80px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const Countries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 75px;
`;

export const Countrie = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 8px;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    img {
      width: 100%;
      height: 160px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

    }

    .content {
      padding: 24px;

      h1 {
        font-size: 18px;
        margin-bottom: 16px;
      }

      .population, .region, .capital {
        display: flex;

        p {
          margin-left: 8px;
        }
      }
      padding-bottom: 46px;
    }
  }
`;
