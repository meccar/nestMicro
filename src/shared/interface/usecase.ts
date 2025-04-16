export interface IUsecase<Input = unknown, Output = unknown> {
  execute(...input: Input extends any[] ? Input : [Input]): Promise<Output>;
}
