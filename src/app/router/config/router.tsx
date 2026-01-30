import AppLayout from '@/app/layouts/AppLayout';
import { QuestionsPage } from '@/pages/question';
import { createBrowserRouter } from 'react-router';
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <QuestionsPage />,
      },
    ],
  },
]);
