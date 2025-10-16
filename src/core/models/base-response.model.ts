type BaseResponse<T> = {
    status: number;
    message: string;
    data?: T;
}

export type { BaseResponse };
