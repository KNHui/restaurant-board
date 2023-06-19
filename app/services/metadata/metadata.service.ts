const title = 'AWESOME FOOD STORE';
const description = 'This is a Restaurant Directory Board Project and Next.js project bootstrapped with create-next-app';

export const MetadataService = {
    getTitle: (
        subTitle?: string
    ) => typeof subTitle === 'string' ? `${title} | ${subTitle}` : title,
    getDescription: () => description,
};
