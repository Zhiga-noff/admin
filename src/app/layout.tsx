'use client';

import '../assets/styles/globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

import { gilroy } from '@/constant/fonts';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

// const outfit = Outfit({
//     subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={gilroy.variable}>
      <body className={`${gilroy.variable} dark:bg-gray-900`}>
        <Provider store={store}>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
