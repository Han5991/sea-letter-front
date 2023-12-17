import {useMutation, useQuery} from '@tanstack/react-query';
import type {AxiosError} from 'axios';
import {useCookies} from 'next-client-cookies';

import {format} from '@/utils/date';
import type {LetterForm, LetterReplyForm} from '@application/ports/letter';
import LetterService from '@services/letter';

type LetterHookProps = {
  isUpEvent?: boolean;
  letterId?: number;
};

const useLetter = (props?: LetterHookProps) => {
  const cookies = useCookies();
  const token = cookies.get('access-token');
  const repository = new LetterService(token);

  const {mutateAsync} = useMutation<void, AxiosError, LetterForm>({
    mutationFn: variables => repository.writeLetter(variables),
  });

  const {mutateAsync: sendReply} = useMutation<
    void,
    AxiosError,
    LetterReplyForm
  >({
    mutationFn: variables => repository.sendReply(variables),
  });

  const {data: id, isError: isLetterIdError} = useQuery({
    queryKey: ['letters'],
    queryFn: () => repository.getLetterId(),
    initialData: null,
    enabled: !!props?.isUpEvent,
  });

  const {data: letter, isPending: isLetterPending} = useQuery({
    queryKey: ['letters', props?.letterId],
    queryFn: () => repository.getLetter(props?.letterId!),
    enabled: !!props?.letterId,
    select: letterData => {
      const createdAt = format(new Date(letterData.createdAt!));
      return {
        ...letterData,
        createdAt,
      };
    },
  });

  return {
    sendReply,
    writeLetter: mutateAsync,
    id,
    letter,
    isLetterPending,
    isLetterIdError,
  };
};

export default useLetter;
