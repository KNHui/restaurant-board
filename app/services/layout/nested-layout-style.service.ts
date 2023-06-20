import { CSSProperties } from 'react';
import { NestedLayoutSizeService } from './nested-layout-size.service';
import { NestedLayoutStyle } from '@/app/models/layout/nested-layout.model';

export const NestedLayoutStyleService = <NestedLayoutStyle>{
    getBodyStyle(): CSSProperties {
        return NestedLayoutSizeService.getNestedLayoutStyle();
    },
    getContainerStyle(alignContentCenter: boolean): CSSProperties {
        const result: CSSProperties = { ...NestedLayoutSizeService.getNestedLayoutStyle(), flexGrow: '1' };

        alignContentCenter && Object.assign(
            result, {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        });
        return result;
    }
};
