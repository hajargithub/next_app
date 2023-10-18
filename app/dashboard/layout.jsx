import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard for my site ",
  description: "Welcome to my dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Welcome to the back office</h1>
        <div className="container m-10">{children}</div>
      </body>
    </html>
  );
}
