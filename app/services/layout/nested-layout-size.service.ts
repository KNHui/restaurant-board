import { BODY_MARGIN, CONTAINER_PADDING, FOOTER_HEIGHT } from '@/app/models/layout/layout';
import { SUBHEADER_HEIGHT, SUBHEADER_MARGIN, SUBHEADER_PADDING } from '@/app/models/layout/nested-layout';
import { CSSProperties } from 'react';

export const NestedLayoutSizeService = {
    getSubheaderHeight(): string {
        return SUBHEADER_HEIGHT;
    },
    getNestedLayoutStyle(): CSSProperties {
        return {
            position: 'relative',
            height: 'auto',
            minHeight: `calc(100% - ${SUBHEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
            paddingLeft: CONTAINER_PADDING,
            paddingRight: CONTAINER_PADDING
        }
    },
    getNestedLayoutContentStyle(): CSSProperties {
        return {
            position: 'relative',
            height: `calc(100% - ${SUBHEADER_HEIGHT} - (${BODY_MARGIN} * 2))`
        };
    },
    getSubheaderPaddingBottom(): string {
        return SUBHEADER_PADDING;
    },
    getSubheaderMarginBottom(): string {
        return SUBHEADER_MARGIN;
    },
    getContainerPadding(): string {
        return CONTAINER_PADDING;
    }
};
