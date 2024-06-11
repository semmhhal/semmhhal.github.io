export class ErrorResponse extends Error {
    status?: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.status = statusCode
    }
}

export interface IResponse<T = unknown> {
    success: boolean,
    data: T
}

export interface BodyWithToken {
    tokenData: IToken
}

export interface IToken {
    _id: string, fullname: string, email: string
}