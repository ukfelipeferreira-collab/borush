import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #6d30ed 0%, #a259e6 100%);
  min-height: 100vh;
  color: #fff;
  padding: 32px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;

  .import,
  .update {
    background: #37c978;
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    margin-right: 12px;
  }
  .update {
    background: #6b6bfa;
    margin-right: 0;
  }
`;

export const StatCards = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  justify-content: center;

  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .stat-icon {
      font-size: 32px;
    }
    .stat-value {
      font-weight: bold;
      font-size: 22px;
    }
    .stat-label {
      font-size: 14px;
    }
  }
`;

export const TeamRanking = styled.div`
  margin-top: 40px;

  .team-card {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 12px;

      .trophy {
        color: #ffd700;
        font-size: 24px;
      }
      .team-rank {
        font-weight: bold;
        font-size: 18px;
      }
      .team-name {
        font-size: 18px;
        font-weight: bold;
      }
      .team-comp {
        font-size: 14px;
        color: #eee;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 10px;

      .team-points {
        font-weight: bold;
        font-size: 20px;
      }
      .details {
        background: #a259e6;
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 7px 14px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
