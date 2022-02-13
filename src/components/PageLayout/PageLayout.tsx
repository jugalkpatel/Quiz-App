import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  WidthContainer,
  Container,
  secondaryFont,
} from "../../styles/common.styles";

export type PageLayoutProps = {
  children: JSX.Element;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      {children}
      <WidthContainer>
        <Outlet />
      </WidthContainer>
      <Toaster toastOptions={{ style: { fontFamily: secondaryFont } }} />
    </Container>
  );
}

export { PageLayout };
