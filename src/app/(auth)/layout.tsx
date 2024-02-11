import type { Metadata } from "next";

// import "./globals.css";
import bg from "../../../public/bg.jpg"
import Image from "next/image";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
            <section className="" >
                <Image src={bg} alt="bg image" className="-z-50  " fill priority />
                {children}

            </section>

    );
}
