// import Noise from "./components/noise";
import Navbar from "./components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full w-full overflow-auto">{children}</div>
    </>
  );
}
