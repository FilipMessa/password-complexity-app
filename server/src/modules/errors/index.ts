export class AppError extends Error {
  statusCode: number;
  type: string;
  constructor(type: string, message: string, status: number) {
    super(message);
    this.type = type;
    this.statusCode = status;
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Requested resources was not found.') {
    super('Not Found', message, 404);
  }
}

export class InternalServerError extends AppError {
  constructor(message = '502: Internal Server Error') {
    super('Internal Server Error', message, 502);
  }
}

export class BadRequest extends AppError {
  constructor(message: string) {
    super('Bad Request', message, 400);
  }
}
