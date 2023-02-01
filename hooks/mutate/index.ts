import toast from 'react-hot-toast';
import { QueryKey, UseMutateFunction, UseMutationOptions, useQueryClient } from 'react-query';

const capitalizeFirstLetter = (s: string): string => {
  const firstCP = s.codePointAt(0);
  if (!firstCP) {
    return s;
  }
  const index = firstCP > 0xffff ? 2 : 1;

  return String.fromCodePoint(firstCP).toUpperCase() + s.slice(index);
};

export const defaultMutateOpts = <T = object>(
  queryKey: QueryKey,
  entity: string
): UseMutationOptions<T, Error, T, { old: T | undefined }> => {
  const queryClient = useQueryClient();

  return {
    onMutate: async (updated) => {
      await queryClient.cancelQueries(queryKey);

      const old = queryClient.getQueryData<T>(queryKey);
      queryClient.setQueryData(queryKey, () => ({
        ...old,
        ...updated,
      }));

      return { old };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(queryKey, context?.old);
      console.log(err);
      toast.error(`Failed to update ${entity.toLowerCase()}`);
    },
    onSuccess: () => {
      toast.success(`${capitalizeFirstLetter(entity)} updated`);
      queryClient.invalidateQueries(queryKey);
    },
  };
};

type UseMutateFunctionWithDefaults = UseMutateFunction extends (...a: infer U) => infer R
  ? (queryKey: QueryKey, ...a: U) => R
  : never;
