import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="rounded-lg w-96 h-[500px] bg-gray-800 py-3 m-2 overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
};
