import { Outlet, useNavigate } from "react-router-dom";

import {
  Header,
  NavBar,
  Tab,
  BackButton,
  StartContainer,
  BackIcon,
  TabContainer,
} from "./Start.styles";

import { useAuth } from "../../contexts";

function Start() {
  const { level } = useAuth();
  const navigate = useNavigate();

  const routes = {
    lobby: `/play/${level}`,
    leaderboard: `/play/${level}/leaderboard`,
  };

  return (
    <>
      <StartContainer>
        <Header>
          <NavBar>
            <BackButton onClick={() => navigate(-1)}>
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
  );
}

export { Start };
