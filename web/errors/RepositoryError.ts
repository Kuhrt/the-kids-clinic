export default class RepositoryError extends Error {
  constructor(
    message: string,
    public code: number
  ) {
    super(message);
    this.name = 'RepositoryError';
    Object.setPrototypeOf(this, RepositoryError.prototype);
  }
}
