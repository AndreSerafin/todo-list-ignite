import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 12.5rem;
  justify-content: center;
  align-items: center;
  background: var(--gray-700);
`;

export const LogoSession = styled.div`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  padding-bottom: 0.3125rem;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.26;
  color: var(--blue);
`;

export const TitleSpan = styled.span`
  color: var(--purpledark);
`;
