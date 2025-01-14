// import Noise from "./components/noise";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow">
      {/* <Noise /> */}
      {children}
    </div>
  );
}
