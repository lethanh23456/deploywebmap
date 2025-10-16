type BasePaginatedResponse<T> = {
    data: T[];
    pagination: {
        total: number;
        page: number;
        limit: number;
    };
}

export type { BasePaginatedResponse };