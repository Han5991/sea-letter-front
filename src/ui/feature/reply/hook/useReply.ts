import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {usePathname} from 'next/navigation';
import {useTheme} from 'styled-components';

import {format} from '@/utils/date';
import {useToast} from '@components/organism/Toast/hook';
import type {ApiError} from '@lib/axios';
import type {MenuInfo} from '@services/interface/user';
import ReplyService from '@services/reply';

const useReply = (letterId?: number, replyId?: number) => {
  const {showToast} = useToast();
  const {color} = useTheme();
  const path = usePathname().split('/');
  const client = useQueryClient();

  const {data: replyList} = useQuery({
    queryKey: ['replyList', letterId],
    queryFn: () => ReplyService.getReplyList(letterId!),
    initialData: [],
    enabled: !!letterId,
  });

  const {data: replyDetail} = useQuery({
    queryKey: ['replyDetail', replyId, letterId],
    queryFn: () => ReplyService.getReplyDetail(letterId!, replyId!),
    enabled: !!replyId,
    refetchOnMount: false,
    select: data => ({
      ...data,
      createdAt: format(new Date(data.createdAt!)),
    }),
  });

  const {mutateAsync: deleteReply} = useMutation<void, ApiError, number>({
    mutationFn: id => ReplyService.deleteReply(id),
    onError: error => {
      showToast({
        message: error.response!.data.message,
        color: color.secondary.brown,
        containerColor: color.white,
      });
    },
    onSuccess: () => {
      client.setQueryData<MenuInfo>(['menuInfo'], prev => {
        if (!prev) return prev;
        return {
          ...prev,
          trashCount: prev.trashCount + 1,
        };
      });
    },
  });

  const {mutateAsync: setThank} = useMutation<void, ApiError, number>({
    mutationFn: id => ReplyService.setThanks(id),
    onError: error => {
      showToast({
        message: error.response!.data.message,
        color: path[4] ? color.secondary.brown : color.primary.pointPink,
        containerColor: path[4] ? color.white : undefined,
      });
    },
  });

  return {replyList, replyDetail, deleteReply, setThank};
};

export default useReply;
