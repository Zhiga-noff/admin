import '../assets/styles/globals.css';

import {SidebarProvider} from '@/context/SidebarContext';
import {ThemeProvider} from '@/context/ThemeContext';

import {gilroy} from "@/constant/fonts";

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
        <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
