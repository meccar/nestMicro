export function Transaction() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const transactionService = (this as any).transactionService;

      if (!transactionService) {
        throw new Error(
          'TransactionService must be injected in the class to use the Transaction decorator',
        );
      }

      return transactionService.runInTransaction(async (entityManager) => {
        return originalMethod.apply(this, [...args, entityManager]);
      });
    };

    return descriptor;
  };
}
