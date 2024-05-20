import Sidebar from "./_components/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen flex">
      <Sidebar /> {children}
    </div>
  );
}
