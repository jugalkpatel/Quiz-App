import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    border: string;
    label: string;
    valid: string;
    invalid: string;
  }
}
