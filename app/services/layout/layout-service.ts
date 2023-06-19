const BODY_MARGIN = '8px';
const HEADER_HEIGHT = '64px';

export const LayoutHeightService = {
    getContainerHeight(): string {
        return `calc(100% - (${BODY_MARGIN} * 2))`;
    },
    getHeaderHeight(): string {
        return HEADER_HEIGHT;
    },
    getBodyHeight(): string {
        return `calc(100% - ${HEADER_HEIGHT} - (${BODY_MARGIN} * 2))`;
    }
};
