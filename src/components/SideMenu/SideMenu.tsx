import React from "react";
import { useNavigate } from "react-router";

import {
  SideMenuContainer,
  SideMenuContent,
  MenuList,
  MenuItem,
  UserIcon,
} from "./SideMenu.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { useAuth } from "../../contexts";

export type SideMenuProps = {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideMenu({ visibility, setVisibility }: SideMenuProps) {
  const navigate = useNavigate();
  const credentials = useAuth();
  return (
    <SideMenuContainer show={visibility} onClick={() => setVisibility(false)}>
      <SideMenuContent>
        <MenuList>
          {credentials?.authenticated ? (
            <MenuItem>
              <UserIcon />
              <ColumnContainer>
                <BigText>{credentials?.name}</BigText>
                <SubText>{credentials?.level}</SubText>
              </ColumnContainer>
            </MenuItem>
          ) : (
            <MenuItem onClick={() => navigate("/login")}>login</MenuItem>
          )}
          <MenuItem>about</MenuItem>
          <MenuItem>close</MenuItem>
        </MenuList>
      </SideMenuContent>
    </SideMenuContainer>
  );
}

export { SideMenu };
