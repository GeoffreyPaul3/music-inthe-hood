import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-1 min-w[350px]">{children}</main>
    </div>
  );
}
