import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 80px;

  @media (max-width: 1250px) {
    margin: 0 24px;
  }
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .image_container {
    max-width: 560px;

    img {
      width: 100%;
    }
  }

  .info_country {
    h1 {
      margin-bottom: 24px;
    }

    .description {
      display: flex;
      justify-content: space-between;
      margin-bottom: 64px;

      .info {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
      }
    }


    .border_coutries_container {
      display: flex;

      p {
        font-weight: bold;
        margin-right: 16px;
      }

      .border_countries {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin-bottom: 32px;

        a {
          padding: 4px 20px;
          background: ${({ theme }) => theme.colors.elements};
          text-align: center;
          border-radius: 4px;
          text-decoration: none;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image_container {
      margin-bottom: 48px;
      width: 100%;
    }

    .info_country {
      width: 100%;
      .description {
        flex-direction: column;

        .left_description {
          margin-bottom: 32px;
        }
      }

      .border_coutries_container {
        display: block;

        p {
          margin-bottom: 16px;
        }
      }
    }
  }
`;
