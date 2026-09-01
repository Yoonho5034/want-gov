import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.f-racle.com"),

  title: {
    default: "내일내집 | 정책대출 상담",

    template: "내일내집",
  },
  description:
    "디딤돌대출, 신생아특례 디딤돌대출, 보금자리론 등 내 조건에 맞는 정책대출을 계약 전에 확인해보세요.",
  keywords: [
    "내일내집",
    "정책대출",
    "주택담보대출",
    "디딤돌대출",
    "신생아특례대출",
    "신생아특례 디딤돌대출",
    "보금자리론",
    "주택구입대출",
    "내집마련",
    "대출상담",
  ],

  authors: [
    {
      name: "내일내집",
    },
  ],

  creator: "내일내집",
  publisher: "내일내집",
  openGraph: {
    title: "내일내집 | 내 집 마련 전 대출부터",
    description:
      "집을 계약하기 전에 내 조건에 맞는 정책대출과 예상한도를 확인해보세요.",
    url: "https://www.f-racle.com",
    siteName: "내일내집",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image2.png",

        width: 1200,

        height: 630,

        alt: "내일내집 정책대출 상담",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "내일내집 | 정책대출 상담",

    description:
      "디딤돌·신생아특례·보금자리론, 계약 전에 내 조건부터 확인하세요.",

    images: ["/og-image2.png"],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.f-racle.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
