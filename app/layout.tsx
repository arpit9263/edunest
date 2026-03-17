import type { Metadata, Viewport } from "next";
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

const SITE_NAME = "EduNest";
const SITE_URL = "https://edunest.org.in"; 
const SITE_TITLE =
"EduNest | Home Tuition in Jhansi & Indore for CBSE, ICSE, Navodaya, Sainik School";
const SITE_DESCRIPTION =
"EduNest helps parents find trusted home tutors and online tutors in Jhansi and Indore for Nursery to Class 12, CBSE, ICSE, Navodaya, Sainik School, IIT-JEE, and NEET preparation.";

export const metadata: Metadata = {
metadataBase: new URL(SITE_URL),

title: {
default: SITE_TITLE,
template: `%s | ${SITE_NAME}`,
},

description: SITE_DESCRIPTION,

keywords: [
"home tuition Jhansi",
"home tuition Indore",
"online tuition Jhansi",
"online tuition Indore",
"CBSE tutor Jhansi",
"ICSE tutor Jhansi",
"Navodaya preparation",
"Sainik School preparation",
"IIT JEE tutor",
"NEET tutor",
],

openGraph: {
type: "website",
url: SITE_URL,
title: SITE_TITLE,
description: SITE_DESCRIPTION,
siteName: SITE_NAME,
images: [
{
url: "/og-image.jpg",
width: 1200,
height: 630,
alt: "EduNest home tuition platform",
},
],
},

twitter: {
card: "summary_large_image",
title: SITE_TITLE,
description: SITE_DESCRIPTION,
images: ["/og-image.jpg"],
},

robots: {
index: true,
follow: true,
},

icons: {
icon: "/favicon.ico",
},
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
themeColor: "#1F6FB2",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en-IN">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
{children} </body> </html>
);
}
