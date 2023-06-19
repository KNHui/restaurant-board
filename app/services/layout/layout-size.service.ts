const HEADER_HEIGHT = '64px';
const HEADER_PADDING = '24px';
const SUBHEADER_HEIGHT = '64px';
const SUBHEADER_PADDING = '8px';
const SUBHEADER_MARGIN = '8px';
const BODY_MARGIN = '8px';
const CONTAINER_PADDING = '24px';

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
        return SUBHEADER_HEIGHT;
    },
    getNestedLayoutHeight(): string {
        return `calc(100% - ${SUBHEADER_HEIGHT})`;
    },
    getNestedLayoutContentHeight(): string {
        return `calc(100% - ${SUBHEADER_HEIGHT} - (${BODY_MARGIN} * 2))`;
    },
    getsubheaderPaddingBottom(): string {
        return SUBHEADER_PADDING;
    },
    getsubheaderMarginBottom(): string {
        return SUBHEADER_MARGIN;
    },
    getContainerPadding(): string {
        return CONTAINER_PADDING;
    }
};
