import Layout from "@/components/layout/Layout";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | ایران ملک",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" font-yekan  max-w-[1200px] mx-auto text-sm sm:text-base md:text-lg">
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
