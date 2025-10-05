import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-white w-4/5 mx-auto sm:max-w-96 sm:text-2xl">
          <h1 className="text-4xl font-bold">Dan&apos;s Computer<br />Repair Shop</h1>
          <address>
            555 Gateway Lane<br />
            Kansas City, KS 55555
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href={'tel:9322375446'} className="hover:underline">
            +91 93223 75446
          </Link>
        </div>
      </main>
    </div>
  )
}