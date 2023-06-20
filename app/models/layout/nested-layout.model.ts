import { CSSProperties } from "react";
import { RootLayout } from "./layout.model";

export const SUBHEADER_HEIGHT = '48px';
export const SUBHEADER_PADDING = '8px';
export const SUBHEADER_MARGIN = '8px';

export interface NestedLayoutStyle extends RootLayout {
    getBodyStyle(): CSSProperties;
    getContainerStyle(alignContentCenter?: boolean): CSSProperties;
};

export interface NestedLayoutSize {
    getNestedLayoutStyle(): CSSProperties;
    getSubheaderPaddingBottom(): string;
    getSubheaderMarginBottom(): string;
    getContainerPadding(): string;
};
