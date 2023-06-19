const HEADER_HEIGHT = '64px';
const HEADER_PADDING = '24px';
const BODY_MARGIN = '8px';
const FOOTER_HEIGHT = '32px';

export const LayoutSizeService = {
    getHTMLHeight(): string {
        return `100%`;
    },
    getBodyHeight(): string {
        return `calc(100% - ${HEADER_PADDING})`;
    },
    getContainerHeight(): string {
        return `calc(100% - (${BODY_MARGIN} * 2))`;
    },
    getHeaderHeight(): string {
        return HEADER_HEIGHT;
    },
    getSubheaderHeight(): string {
        return HEADER_HEIGHT;
    },
    getNestedLayoutContentHeight(): string {
        return `calc(100% - ${HEADER_HEIGHT} - (${BODY_MARGIN} * 2) - ${FOOTER_HEIGHT})`;
    },
    getContainerPadding(): string {
        return HEADER_PADDING;
    }
};
