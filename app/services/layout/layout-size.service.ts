import { BODY_MARGIN, CONTAINER_PADDING, FOOTER_HEIGHT, HEADER_HEIGHT, MainLayout } from '@/app/models/layout/layout.model';
import { CSSProperties } from 'react';

export const LayoutStyleService = <MainLayout>{
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
