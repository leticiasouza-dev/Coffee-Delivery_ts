import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`
    *{
        background: ${(props) => props.theme['yellow-dark']};
    }

`