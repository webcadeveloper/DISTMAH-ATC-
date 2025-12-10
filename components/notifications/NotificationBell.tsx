'use client';

import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: string;
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  async function fetchNotifications() {
    try {
      const res = await fetch('/api/notifications?limit=5');
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications || []);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  }

  async function markAsRead(id: string) {
    try {
      const res = await fetch(`/api/notifications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        fetchNotifications();
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  }

  async function markAllAsRead() {
    try {
      const res = await fetch('/api/notifications/mark-all-read', {
        method: 'POST',
      });

      if (res.ok) {
        fetchNotifications();
      }
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  }

  function formatTime(dateString: string) {
    try {
      return formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
        locale: es,
      });
    } catch {
      return '';
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-neutral-700" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96 max-h-[500px] overflow-y-auto">
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900">Notificaciones</h3>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Marcar todas como leídas
            </button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <Bell className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <p className="text-neutral-500 text-sm">No hay notificaciones</p>
          </div>
        ) : (
          <>
            {notifications.map((notif) => (
              <DropdownMenuItem
                key={notif.id}
                className={`cursor-pointer ${notif.read ? 'bg-white' : 'bg-blue-50'}`}
                onClick={() => {
                  markAsRead(notif.id);
                  if (notif.link) {
                    setIsOpen(false);
                    window.location.href = notif.link;
                  }
                }}
              >
                <div className="w-full py-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-900 text-sm mb-1">
                        {notif.title}
                      </p>
                      <p className="text-neutral-600 text-sm line-clamp-2">
                        {notif.message}
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        {formatTime(notif.createdAt)}
                      </p>
                    </div>
                    {!notif.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <Link href="/estudiante/notificaciones" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 text-center text-sm text-blue-600 hover:text-blue-800 hover:bg-neutral-50 cursor-pointer font-medium">
                Ver todas las notificaciones
              </div>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
