// shared/ui/Icon/icons.ts
import BookIcon from '@/shared/assets/icons/book.svg?react';
import BookmarkIcon from '@/shared/assets/icons/bookmark.svg?react';
import BroadcastIcon from '@/shared/assets/icons/broadcast.svg?react';
import ExitIcon from '@/shared/assets/icons/exit.svg?react';
import HomeIcon from '@/shared/assets/icons/home.svg?react';
import ListIcon from '@/shared/assets/icons/list.svg?react';
import NotebookIcon from '@/shared/assets/icons/notebook.svg?react';
import PencilIcon from '@/shared/assets/icons/pencil.svg?react';
import SettingsIcon from '@/shared/assets/icons/settings.svg?react';
import SidebarIcon from '@/shared/assets/icons/sidebar-icon.svg?react';
import StudentIcon from '@/shared/assets/icons/student.svg?react';
import SupportIcon from '@/shared/assets/icons/support.svg?react';
import UserHeartIcon from '@/shared/assets/icons/user-heart.svg?react';
import UserIcon from '@/shared/assets/icons/user.svg?react';
import ArrowIcon from '@/shared/assets/icons/arrow.svg?react';
import type { FC, SVGProps } from 'react';

export const iconMap = {
  settings: SettingsIcon,
  book: BookIcon,
  bookmark: BookmarkIcon,
  broadcast: BroadcastIcon,
  exit: ExitIcon,
  home: HomeIcon,
  list: ListIcon,
  notebook: NotebookIcon,
  pencil: PencilIcon,
  sidebar: SidebarIcon,
  student: StudentIcon,
  support: SupportIcon,
  userHeart: UserHeartIcon,
  user: UserIcon,
  arrow: ArrowIcon,
} satisfies Record<string, FC<SVGProps<SVGSVGElement>>>;

export type IconType = keyof typeof iconMap;
