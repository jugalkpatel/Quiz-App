import { Outlet, useLocation } from "react-router-dom";

import {
  NavBar,
  Tab,
  BackButton,
  BackIcon,
  TabContainer,
} from "./Start.styles";

import { QuizProvider } from "../../contexts";
import { obtainLevel } from "../../utils";

function Start() {
  const { pathname } = useLocation();
  const level = obtainLevel(pathname);

  const routes = {
    lobby: `/play/${level}`,
    leaderboard: `/play/${level}/leaderboard`,
  };

  return (
    <QuizProvider>
      <>
        <NavBar>
          {/* <BackButton to="/">
              <BackIcon />
              back to home
            </BackButton> */}

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

        <Outlet />
      </>
    </QuizProvider>
  );
}

export { Start };
