import "@/style/globals.css";
import Header from "@/components/header"
export const metadata = {
  title: "연습",
  description: "연습용입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
