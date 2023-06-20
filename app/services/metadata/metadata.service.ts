const title = 'AWESOME FOOD STORE';
const description = 'This is a Restaurant Directory Board Service.';

export const MetadataService = {
    getTitle: (
        subtitle?: string
    ) => typeof subtitle === 'string' ? `${title} | ${subtitle}` : title,
    getDescription: () => description,
};
