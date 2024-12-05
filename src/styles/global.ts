import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`
    *{
        background: ${(props) => props.theme['background']};
        /* font-family: "Baloo 2", sans-serif; */
    }

`