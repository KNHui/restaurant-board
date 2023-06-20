import { BODY_MARGIN, CONTAINER_PADDING, FOOTER_HEIGHT, HEADER_HEIGHT } from '@/app/models/layout/layout';
import { CSSProperties } from 'react';

export const LayoutSizeService = {
    getHeaderHeight(): string {
        return HEADER_HEIGHT;
    },
    getBodyStyle(): CSSProperties {
        return {
            height: '1px',
            minHeight: `calc(100% - (${BODY_MARGIN} * 2))`
        };
    },
    getContainerStyle(): CSSProperties {
        return {
            height: '1px',
            minHeight: `calc(100% - (${BODY_MARGIN} * 2) - ${FOOTER_HEIGHT})`,
        };
    },
    getFooterStyle(): CSSProperties {
        return {
            position: 'relative',
            paddingLeft: CONTAINER_PADDING,
            paddingRight: CONTAINER_PADDING
        }
    }
};
