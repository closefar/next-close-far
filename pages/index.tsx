import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-28 py-9 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-9 gap-3">
        <h1 className="font-medium text-[2.5rem]">
          Mint and Collect Everlasting Lives
        </h1>
        <h3>Learn More...</h3>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h4>Latest Closeups</h4>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div key={id}>
              <Link
                className="flex-auto cursor-pointer"
                href={`/details/${id}`}
              >
                <div className="relative">
                  <Image
                    className="h-auto w-full"
                    src={`/${id}.jpg`}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="w-full h-full text-white flex justify-center items-center text-2xl bg-black absolute top-0 right-0 hover:opacity-90 opacity-0 z-10">
                    O Watch
                  </div>
                  <div className="w-[94%] h-[94%] border absolute top-[3%] left-[3%]"></div>
                </div>
              </Link>
              <div className="flex gap-1 items-end">
                <p className="text-2xl">30.00</p>
                <Image
                  className="h-5 w-5"
                  src={"/flow.ico"}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
