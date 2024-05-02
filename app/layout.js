import {Inter} from "@next/font/google"
import "@/styles/global.css"
import "@/styles/reset.css"


const interFontfamily = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="{interFontFamily.className}">
      <body className="container" >{children}</body>
    </html>
  );
}
