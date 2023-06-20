import { CONTAINER_PADDING, FOOTER_HEIGHT } from '@/app/models/layout/layout.model';
import { NestedLayoutSize, SUBHEADER_HEIGHT, SUBHEADER_MARGIN, SUBHEADER_PADDING } from '@/app/models/layout/nested-layout.model';
import { CSSProperties } from 'react';

export const NestedLayoutSizeService = <NestedLayoutSize>{
    getNestedLayoutStyle(): CSSProperties {
        return {
            position: 'relative',
            height: 'auto',
            minHeight: `calc(100% - ${SUBHEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
            paddingLeft: CONTAINER_PADDING,
            paddingRight: CONTAINER_PADDING
        }
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
