import { PiUsersThreeFill } from "react-icons/pi";
import { FaNfcDirectional } from "react-icons/fa6";
import { IoChatbubbleOutline, IoCheckmarkDone } from "react-icons/io5";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import chats from "@/data/chats";

export default function Home() {
  return (
    <main className="py-4 px-8 bg-slate-950 min-h-screen">
      {/* left */}
      <section className="flex bg-slate-800 rounded-md">
        <aside className="w-1/3 border-r">
          <header className="px-4 py-2 flex items-center">
            <div className="w-1/2">
              <img src="/luffy.jpg" alt="luffy" className="rounded-full w-10 h-10" />
            </div>
            <div className="w-1/2 grid grid-cols-5">
              <PiUsersThreeFill size={22} />
              <FaNfcDirectional size={22} />
              <IoChatbubbleOutline size={22} />
              <FiFolderPlus size={22} />
              <HiOutlineDotsVertical size={22} />
            </div>
          </header>
          <main className="bg-slate-900">
            <div className="p-2">
              <div className="flex bg-slate-800 p-2 rounded items-center">
                <IoMdSearch size={25} className="bg-transparent" />
                <input type="text" placeholder="search" className="w-full py-1 ps-6 text-sm bg-transparent focus:outline-none" />
              </div>
              <div className="flex gap-4 p-2">
                <span className="bg-green-950 text-green-600 py-1 px-2 rounded-full text-sm">Semua</span>
                <span className="bg-slate-800 py-1 px-2 rounded-full text-sm">Belum dibaca</span>
                <span className="bg-slate-800 py-1 px-2 rounded-full text-sm">Grup</span>
              </div>
            </div>
            {/* chatting */}
            <div className="border-t overflow-y-auto max-h-[calc(100vh-12rem)]">
              {chats.map((chat) => (
                <div className="hover:bg-slate-800" key={chat.id}>
                  <div className="py-4 px-2 flex justify-between">
                    <div className="flex gap-4">
                      <img src={chat.avatar} alt="AI Robot" className="w-12 h-12 rounded-full" />
                      <div>
                        <p>{chat.name}</p>
                        <p className="text-sm text-slate-400 flex gap-2 items-center">
                          <IoCheckmarkDone className={chat.status === "done" ? "text-green-500" : "text-slate-400"} />
                          {chat.message}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 me-4">{chat.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </aside>
        {/* right */}
        <aside className="w-2/3">
          <header></header>
        </aside>
      </section>
    </main>
  );
}
