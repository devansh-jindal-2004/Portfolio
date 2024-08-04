import HomeBtn from "@/components/HomeBtn";

export default function subPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-32 px-32">
        <HomeBtn />
        {children}
    </main>
  );
}
