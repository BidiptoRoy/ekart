class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    // this way when a new object is created and the constructor function is called then that function call will not appear in this stackTrace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
