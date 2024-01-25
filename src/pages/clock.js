import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <div className="rounded-lg w-96 h-[500px] bg-slate-400 py-3">
      <Layout>
        <div className="bg-pink-200 h-56 mt-2">Clock</div>{" "}
      </Layout>
    </div>
  );
}
