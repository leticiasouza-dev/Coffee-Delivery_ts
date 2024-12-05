import { temas } from './../styles/themes/default';
import { temas } from "../styles/themes/default";

import 'styled-components';

type TiposDeTemas = typeof temas;

declare module 'styles-components'{
    export interface DefaultTheme  extends TiposDeTemas{}
}
