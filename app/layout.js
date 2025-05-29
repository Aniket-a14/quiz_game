import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PAQuiz - Safe Learning for Kids",
  keywords: [
    "PAQuiz",
    "Kids Learning",
    "Child Safety",
    "Educational Quizzes",
    "Safe Learning",
    "Parent Approved",
    "Kid Friendly",
    "Interactive Learning",
  ],
  creator: "PAQuiz Team",
  description: "PAQuiz is a safe, interactive learning platform designed for kids aged 6-16, focusing on educational quizzes that promote values like kindness, safety, and social awareness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
