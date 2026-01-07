'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['notifications', 'unread'],
    queryFn: async () => {
      const response = await api.get('/notifications?unread=true&limit=5');
      return response.data.data;
    },
  });

  const markAsRead = useMutation({
    mutationFn: async (id: string) => {
      await api.put(`/notifications/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const unreadCount = data?.data?.filter((n: any) => !n.read).length || 0;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {data?.data?.length === 0 ? (
              <p className="p-4 text-center text-gray-500">No notifications</p>
            ) : (
              data?.data?.map((notification: any) => (
                <div
                  key={notification._id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => {
                    if (!notification.read) {
                      markAsRead.mutate(notification._id);
                    }
                    if (notification.link) {
                      window.location.href = notification.link;
                    }
                  }}
                >
                  <p className="font-medium text-sm">{notification.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

