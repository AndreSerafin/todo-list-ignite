import logo from '../../assets/todo-logo.svg';
import { Header, LogoSession, Title, TitleSpan } from './styles';

export function HeaderComponent() {
  return (
    <>
      <Header>
        <LogoSession>
          <img src={logo} alt="logo" />
          <Title>
            to<TitleSpan>do</TitleSpan>
          </Title>
        </LogoSession>
      </Header>
    </>
  );
}
