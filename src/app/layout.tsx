import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Header from "../component/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ngoại hạng anh",
  description: `Tra cứu lịch thi đấu, kết quả, và tin tức mới nhất về bóng đá. Cập nhật nhanh các trận đấu của Premier League, La Liga, Serie A, và nhiều giải đấu khác. Bóng đá, Lịch thi đấu bóng đá, Kết quả bóng đá, Tin tức bóng đá, Premier League, La Liga, Serie A, Champions League, Đội hình bóng đá, Cầu thủ bóng đá, Soi kèo bóng đá, Dự đoán bóng đá, Highlights bóng đá, Tin chuyển nhượng bóng đá, Bảng xếp hạng bóng đá, Manchester United, Manchester City, Liverpool, Chelsea, Arsenal, Tottenham Hotspur, Leicester City, Everton, West Ham United, Aston Villa, Newcastle United, Leeds United, Southampton, Crystal Palace, Wolverhampton Wanderers, Brighton & Hove Albion, Burnley, Fulham, Sheffield United, Brentford, Erling Haaland, Mohamed Salah, Harry Kane, Kevin De Bruyne, Marcus Rashford, Bukayo Saka, Bruno Fernandes, Jack Grealish, Son Heung-min, Raheem Sterling, Declan Rice, Casemiro, Virgil van Dijk, Trent Alexander-Arnold, Alisson Becker, Ederson, Mason Mount, Kai Havertz, Gabriel Jesus, Martin Ødegaard, James Maddison, Wilfried Zaha, Kieran Trippier, James Ward-Prowse, Ollie Watkins, Youri Tielemans, Thiago Silva, Reece James, Phil Foden, Jadon Sancho, Riyad Mahrez, N'Golo Kanté, Kalvin Phillips, Ruben Dias, João Cancelo, Aymeric Laporte, Hugo Lloris, Emiliano Martínez, Nick Pope, Alexander Isak, Richarlison, Darwin Núñez, Casemiro, Christian Eriksen, Raphaël Varane, Joël Matip, Fabinho, Thiago Alcântara, John Stones, Rodri, İlkay Gündoğan, Bernardo Silva, Ben Chilwell, Mateo Kovačić, Edouard Mendy, Pierre-Emerick Aubameyang, ${new Date()}, `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
