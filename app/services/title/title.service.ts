const title = 'AWESOME FOOD STORE';

export const TitleService = {
    getTitle: (
        subTitle?: string
    ) => typeof subTitle === 'string' ? `${title} | ${subTitle}` : title,
};
