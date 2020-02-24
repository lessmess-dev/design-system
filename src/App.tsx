import * as React from 'react';
import { Page } from 'react-figma';
import {ColorsFrame} from "./frames/ColorsFrame";

export const App = () => {
    return (
        <Page isCurrent name="Styleguide">
            <ColorsFrame />
        </Page>
    );
};
