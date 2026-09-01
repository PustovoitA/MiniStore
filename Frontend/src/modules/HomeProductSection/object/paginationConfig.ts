
export const paginationConfig = {
    totalPages: 3,
    limitProductsOnPage: 5,
    maxProducts: 15,
} as const

export type paginationConfig = typeof paginationConfig[keyof typeof paginationConfig]