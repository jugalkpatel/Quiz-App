import { Outlet } from "react-router-dom";

import {
  Header,
  NavBar,
  Tab,
  BackButton,
  StartContainer,
  BackIcon,
  TabContainer,
} from "./Start.styles";

import { useAuth, QuizProvider } from "../../contexts";

function Start() {
  const { level } = useAuth();

  const routes = {
    lobby: `/play/${level}`,
    leaderboard: `/play/${level}/leaderboard`,
  };

  return (
    <QuizProvider>
      <>
        <StartContainer>
          <Header>
            <NavBar>
              <BackButton to="/">
                <BackIcon />
                back to home
              </BackButton>

              <TabContainer>
                {Object.keys(routes).map((routeName) => (
                  <Tab
                    key={routeName}
                    to={routes[routeName as keyof typeof routes]}
                    end
                  >
                    {routeName}
                  </Tab>
                ))}
              </TabContainer>
            </NavBar>
          </Header>

          <Outlet />
        </StartContainer>
      </>
    </QuizProvider>
  );
}

export { Start };
