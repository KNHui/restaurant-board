import { CSSProperties } from "react";

export const HEADER_HEIGHT = '64px';
export const BODY_MARGIN = '8px';
export const CONTAINER_PADDING = '24px';
export const FOOTER_HEIGHT = '24px';

export interface RootLayout {
    getBodyStyle(): CSSProperties;
    getContainerStyle(): CSSProperties;
};

export interface MainLayout extends RootLayout {
    getHeaderHeight(): string;
    getBodyStyle(): CSSProperties;
    getContainerStyle(): CSSProperties;
    getFooterStyle(): CSSProperties;
};
