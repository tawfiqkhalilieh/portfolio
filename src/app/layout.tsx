import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/components/providers/router-provider";
import { Theme } from "@/components/providers/themes";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Tawfiq Khalilieh",
    description: "Personal portfolio of Tawfiq Khalilieh, a software engineer specializing in web development and modern technologies.",
    keywords: [
        "Tawfiq Khalilieh",
        "Portfolio",
        "Software Engineer",
        "Web Developer",
        "Full-Stack Developer",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX",
        "iHelp",
        "Loop"
    ]
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
