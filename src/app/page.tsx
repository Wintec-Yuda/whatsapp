"use client";

import { PiUsersThreeFill } from "react-icons/pi";
import { FaNfcDirectional, FaPlus, FaArrowLeft } from "react-icons/fa6";
import { IoChatbubbleOutline, IoCheckmarkDone, IoVideocam } from "react-icons/io5";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdSearch, IoMdSend } from "react-icons/io";
import { MdOutlineInsertEmoticon, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import chats from "@/data/chats";
import chattings from "@/data/chattings";
import {useMediaQuery} from "usehooks-ts"
import { useEffect, useState } from "react";

interface ColorClasses {
  bg1: string;
  border1: string;
  text1: string;

  bg2: string;
  border2: string;
  text2: string;

  bg3: string;
  border3: string;
  text3: string;

  bg4: string;
  border4: string;
  text4: string;

  bg5: string;
  border5: string;
  text5: string;
}

interface ColorMap {
  [key: string]: ColorClasses;
}

const colorMap: ColorMap = {
  slate: {
    bg1: 'bg-slate-50 dark:bg-slate-950',
    border1: 'border-slate-100 dark:border-slate-900',
    text1: 'text-slate-200 dark:text-slate-800',

    bg2: 'bg-slate-300 dark:bg-slate-700',
    border2: 'border-slate-400 dark:border-slate-600',
    text2: 'text-slate-50 dark:text-slate-950',

    bg3: 'bg-slate-100 dark:bg-slate-900',
    border3: 'border-slate-200 dark:border-slate-800',
    text3: 'text-slate-300 dark:text-slate-700',

    bg4: 'bg-slate-400 dark:bg-slate-600',
    border4: 'border-slate-50 dark:border-slate-950',
    text4: 'text-slate-100 dark:text-slate-900',

    bg5: 'bg-slate-200 dark:bg-slate-800',
    border5: 'border-slate-300 dark:border-slate-700',
    text5: 'text-slate-400 dark:text-slate-600',
  },

  gray: {
    bg1: 'bg-gray-50 dark:bg-gray-950',
    border1: 'border-gray-100 dark:border-gray-900',
    text1: 'text-gray-200 dark:text-gray-800',

    bg2: 'bg-gray-300 dark:bg-gray-700',
    border2: 'border-gray-400 dark:border-gray-600',
    text2: 'text-gray-50 dark:text-gray-950',

    bg3: 'bg-gray-100 dark:bg-gray-900',
    border3: 'border-gray-200 dark:border-gray-800',
    text3: 'text-gray-300 dark:text-gray-700',

    bg4: 'bg-gray-400 dark:bg-gray-600',
    border4: 'border-gray-50 dark:border-gray-950',
    text4: 'text-gray-100 dark:text-gray-900',

    bg5: 'bg-gray-200 dark:bg-gray-800',
    border5: 'border-gray-300 dark:border-gray-700',
    text5: 'text-gray-400 dark:text-gray-600',
  },

  zinc: {
    bg1: 'bg-zinc-50 dark:bg-zinc-950',
    border1: 'border-zinc-100 dark:border-zinc-900',
    text1: 'text-zinc-200 dark:text-zinc-800',

    bg2: 'bg-zinc-300 dark:bg-zinc-700',
    border2: 'border-zinc-400 dark:border-zinc-600',
    text2: 'text-zinc-50 dark:text-zinc-950',

    bg3: 'bg-zinc-100 dark:bg-zinc-900',
    border3: 'border-zinc-200 dark:border-zinc-800',
    text3: 'text-zinc-300 dark:text-zinc-700',

    bg4: 'bg-zinc-400 dark:bg-zinc-600',
    border4: 'border-zinc-50 dark:border-zinc-950',
    text4: 'text-zinc-100 dark:text-zinc-900',

    bg5: 'bg-zinc-200 dark:bg-zinc-800',
    border5: 'border-zinc-300 dark:border-zinc-700',
    text5: 'text-zinc-400 dark:text-zinc-600',
  },

  neutral: {
    bg1: 'bg-neutral-50 dark:bg-neutral-950',
    border1: 'border-neutral-100 dark:border-neutral-900',
    text1: 'text-neutral-200 dark:text-neutral-800',

    bg2: 'bg-neutral-300 dark:bg-neutral-700',
    border2: 'border-neutral-400 dark:border-neutral-600',
    text2: 'text-neutral-50 dark:text-neutral-950',

    bg3: 'bg-neutral-100 dark:bg-neutral-900',
    border3: 'border-neutral-200 dark:border-neutral-800',
    text3: 'text-neutral-300 dark:text-neutral-700',

    bg4: 'bg-neutral-400 dark:bg-neutral-600',
    border4: 'border-neutral-50 dark:border-neutral-950',
    text4: 'text-neutral-100 dark:text-neutral-900',

    bg5: 'bg-neutral-200 dark:bg-neutral-800',
    border5: 'border-neutral-300 dark:border-neutral-700',
    text5: 'text-neutral-400 dark:text-neutral-600',
  },

  stone: {
    bg1: 'bg-stone-50 dark:bg-stone-950',
    border1: 'border-stone-100 dark:border-stone-900',
    text1: 'text-stone-200 dark:text-stone-800',

    bg2: 'bg-stone-300 dark:bg-stone-700',
    border2: 'border-stone-400 dark:border-stone-600',
    text2: 'text-stone-50 dark:text-stone-950',

    bg3: 'bg-stone-100 dark:bg-stone-900',
    border3: 'border-stone-200 dark:border-stone-800',
    text3: 'text-stone-300 dark:text-stone-700',

    bg4: 'bg-stone-400 dark:bg-stone-600',
    border4: 'border-stone-50 dark:border-stone-950',
    text4: 'text-stone-100 dark:text-stone-900',

    bg5: 'bg-stone-200 dark:bg-stone-800',
    border5: 'border-stone-300 dark:border-stone-700',
    text5: 'text-stone-400 dark:text-stone-600',
  },

  red: {
    bg1: 'bg-red-50 dark:bg-red-950',
    border1: 'border-red-100 dark:border-red-900',
    text1: 'text-red-200 dark:text-red-800',

    bg2: 'bg-red-300 dark:bg-red-700',
    border2: 'border-red-400 dark:border-red-600',
    text2: 'text-red-50 dark:text-red-950',

    bg3: 'bg-red-100 dark:bg-red-900',
    border3: 'border-red-200 dark:border-red-800',
    text3: 'text-red-300 dark:text-red-700',

    bg4: 'bg-red-400 dark:bg-red-600',
    border4: 'border-red-50 dark:border-red-950',
    text4: 'text-red-100 dark:text-red-900',

    bg5: 'bg-red-200 dark:bg-red-800',
    border5: 'border-red-300 dark:border-red-700',
    text5: 'text-red-400 dark:text-red-600',
  },

  orange: {
    bg1: 'bg-orange-50 dark:bg-orange-950',
    border1: 'border-orange-100 dark:border-orange-900',
    text1: 'text-orange-200 dark:text-orange-800',

    bg2: 'bg-orange-300 dark:bg-orange-700',
    border2: 'border-orange-400 dark:border-orange-600',
    text2: 'text-orange-50 dark:text-orange-950',

    bg3: 'bg-orange-100 dark:bg-orange-900',
    border3: 'border-orange-200 dark:border-orange-800',
    text3: 'text-orange-300 dark:text-orange-700',

    bg4: 'bg-orange-400 dark:bg-orange-600',
    border4: 'border-orange-50 dark:border-orange-950',
    text4: 'text-orange-100 dark:text-orange-900',

    bg5: 'bg-orange-200 dark:bg-orange-800',
    border5: 'border-orange-300 dark:border-orange-700',
    text5: 'text-orange-400 dark:text-orange-600',
  },

  yellow: {
    bg1: 'bg-yellow-50 dark:bg-yellow-950',
    border1: 'border-yellow-100 dark:border-yellow-900',
    text1: 'text-yellow-200 dark:text-yellow-800',

    bg2: 'bg-yellow-300 dark:bg-yellow-700',
    border2: 'border-yellow-400 dark:border-yellow-600',
    text2: 'text-yellow-50 dark:text-yellow-950',

    bg3: 'bg-yellow-100 dark:bg-yellow-900',
    border3: 'border-yellow-200 dark:border-yellow-800',
    text3: 'text-yellow-300 dark:text-yellow-700',

    bg4: 'bg-yellow-400 dark:bg-yellow-600',
    border4: 'border-yellow-50 dark:border-yellow-950',
    text4: 'text-yellow-100 dark:text-yellow-900',

    bg5: 'bg-yellow-200 dark:bg-yellow-800',
    border5: 'border-yellow-300 dark:border-yellow-700',
    text5: 'text-yellow-400 dark:text-yellow-600',
  },

  lime: {
    bg1: 'bg-lime-50 dark:bg-lime-950',
    border1: 'border-lime-100 dark:border-lime-900',
    text1: 'text-lime-200 dark:text-lime-800',

    bg2: 'bg-lime-300 dark:bg-lime-700',
    border2: 'border-lime-400 dark:border-lime-600',
    text2: 'text-lime-50 dark:text-lime-950',

    bg3: 'bg-lime-100 dark:bg-lime-900',
    border3: 'border-lime-200 dark:border-lime-800',
    text3: 'text-lime-300 dark:text-lime-700',

    bg4: 'bg-lime-400 dark:bg-lime-600',
    border4: 'border-lime-50 dark:border-lime-950',
    text4: 'text-lime-100 dark:text-lime-900',

    bg5: 'bg-lime-200 dark:bg-lime-800',
    border5: 'border-lime-300 dark:border-lime-700',
    text5: 'text-lime-400 dark:text-lime-600',
  },

  green: {
    bg1: 'bg-green-50 dark:bg-green-950',
    border1: 'border-green-100 dark:border-green-900',
    text1: 'text-green-200 dark:text-green-800',

    bg2: 'bg-green-300 dark:bg-green-700',
    border2: 'border-green-400 dark:border-green-600',
    text2: 'text-green-50 dark:text-green-950',

    bg3: 'bg-green-100 dark:bg-green-900',
    border3: 'border-green-200 dark:border-green-800',
    text3: 'text-green-300 dark:text-green-700',

    bg4: 'bg-green-400 dark:bg-green-600',
    border4: 'border-green-50 dark:border-green-950',
    text4: 'text-green-100 dark:text-green-900',

    bg5: 'bg-green-200 dark:bg-green-800',
    border5: 'border-green-300 dark:border-green-700',
    text5: 'text-green-400 dark:text-green-600',
  },

  emerald: {
    bg1: 'bg-emerald-50 dark:bg-emerald-950',
    border1: 'border-emerald-100 dark:border-emerald-900',
    text1: 'text-emerald-200 dark:text-emerald-800',

    bg2: 'bg-emerald-300 dark:bg-emerald-700',
    border2: 'border-emerald-400 dark:border-emerald-600',
    text2: 'text-emerald-50 dark:text-emerald-950',

    bg3: 'bg-emerald-100 dark:bg-emerald-900',
    border3: 'border-emerald-200 dark:border-emerald-800',
    text3: 'text-emerald-300 dark:text-emerald-700',

    bg4: 'bg-emerald-400 dark:bg-emerald-600',
    border4: 'border-emerald-50 dark:border-emerald-950',
    text4: 'text-emerald-100 dark:text-emerald-900',

    bg5: 'bg-emerald-200 dark:bg-emerald-800',
    border5: 'border-emerald-300 dark:border-emerald-700',
    text5: 'text-emerald-400 dark:text-emerald-600',
  },

  teal: {
    bg1: 'bg-teal-50 dark:bg-teal-950',
    border1: 'border-teal-100 dark:border-teal-900',
    text1: 'text-teal-200 dark:text-teal-800',

    bg2: 'bg-teal-300 dark:bg-teal-700',
    border2: 'border-teal-400 dark:border-teal-600',
    text2: 'text-teal-50 dark:text-teal-950',

    bg3: 'bg-teal-100 dark:bg-teal-900',
    border3: 'border-teal-200 dark:border-teal-800',
    text3: 'text-teal-300 dark:text-teal-700',

    bg4: 'bg-teal-400 dark:bg-teal-600',
    border4: 'border-teal-50 dark:border-teal-950',
    text4: 'text-teal-100 dark:text-teal-900',

    bg5: 'bg-teal-200 dark:bg-teal-800',
    border5: 'border-teal-300 dark:border-teal-700',
    text5: 'text-teal-400 dark:text-teal-600',
  },

  cyan: {
    bg1: 'bg-cyan-50 dark:bg-cyan-950',
    border1: 'border-cyan-100 dark:border-cyan-900',
    text1: 'text-cyan-200 dark:text-cyan-800',

    bg2: 'bg-cyan-300 dark:bg-cyan-700',
    border2: 'border-cyan-400 dark:border-cyan-600',
    text2: 'text-cyan-50 dark:text-cyan-950',

    bg3: 'bg-cyan-100 dark:bg-cyan-900',
    border3: 'border-cyan-200 dark:border-cyan-800',
    text3: 'text-cyan-300 dark:text-cyan-700',

    bg4: 'bg-cyan-400 dark:bg-cyan-600',
    border4: 'border-cyan-50 dark:border-cyan-950',
    text4: 'text-cyan-100 dark:text-cyan-900',

    bg5: 'bg-cyan-200 dark:bg-cyan-800',
    border5: 'border-cyan-300 dark:border-cyan-700',
    text5: 'text-cyan-400 dark:text-cyan-600',
  },

  sky: {
    bg1: 'bg-sky-50 dark:bg-sky-950',
    border1: 'border-sky-100 dark:border-sky-900',
    text1: 'text-sky-200 dark:text-sky-800',

    bg2: 'bg-sky-300 dark:bg-sky-700',
    border2: 'border-sky-400 dark:border-sky-600',
    text2: 'text-sky-50 dark:text-sky-950',

    bg3: 'bg-sky-100 dark:bg-sky-900',
    border3: 'border-sky-200 dark:border-sky-800',
    text3: 'text-sky-300 dark:text-sky-700',

    bg4: 'bg-sky-400 dark:bg-sky-600',
    border4: 'border-sky-50 dark:border-sky-950',
    text4: 'text-sky-100 dark:text-sky-900',

    bg5: 'bg-sky-200 dark:bg-sky-800',
    border5: 'border-sky-300 dark:border-sky-700',
    text5: 'text-sky-400 dark:text-sky-600',
  },

  blue: {
    bg1: 'bg-blue-50 dark:bg-blue-950',
    border1: 'border-blue-100 dark:border-blue-900',
    text1: 'text-blue-200 dark:text-blue-800',

    bg2: 'bg-blue-300 dark:bg-blue-700',
    border2: 'border-blue-400 dark:border-blue-600',
    text2: 'text-blue-50 dark:text-blue-950',

    bg3: 'bg-blue-100 dark:bg-blue-900',
    border3: 'border-blue-200 dark:border-blue-800',
    text3: 'text-blue-300 dark:text-blue-700',

    bg4: 'bg-blue-400 dark:bg-blue-600',
    border4: 'border-blue-50 dark:border-blue-950',
    text4: 'text-blue-100 dark:text-blue-900',

    bg5: 'bg-blue-200 dark:bg-blue-800',
    border5: 'border-blue-300 dark:border-blue-700',
    text5: 'text-blue-400 dark:text-blue-600',
  },

  indigo: {
    bg1: 'bg-indigo-50 dark:bg-indigo-950',
    border1: 'border-indigo-100 dark:border-indigo-900',
    text1: 'text-indigo-200 dark:text-indigo-800',

    bg2: 'bg-indigo-300 dark:bg-indigo-700',
    border2: 'border-indigo-400 dark:border-indigo-600',
    text2: 'text-indigo-50 dark:text-indigo-950',

    bg3: 'bg-indigo-100 dark:bg-indigo-900',
    border3: 'border-indigo-200 dark:border-indigo-800',
    text3: 'text-indigo-300 dark:text-indigo-700',

    bg4: 'bg-indigo-400 dark:bg-indigo-600',
    border4: 'border-indigo-50 dark:border-indigo-950',
    text4: 'text-indigo-100 dark:text-indigo-900',

    bg5: 'bg-indigo-200 dark:bg-indigo-800',
    border5: 'border-indigo-300 dark:border-indigo-700',
    text5: 'text-indigo-400 dark:text-indigo-600',
  },

  violet: {
    bg1: 'bg-violet-50 dark:bg-violet-950',
    border1: 'border-violet-100 dark:border-violet-900',
    text1: 'text-violet-200 dark:text-violet-800',

    bg2: 'bg-violet-300 dark:bg-violet-700',
    border2: 'border-violet-400 dark:border-violet-600',
    text2: 'text-violet-50 dark:text-violet-950',

    bg3: 'bg-violet-100 dark:bg-violet-900',
    border3: 'border-violet-200 dark:border-violet-800',
    text3: 'text-violet-300 dark:text-violet-700',

    bg4: 'bg-violet-400 dark:bg-violet-600',
    border4: 'border-violet-50 dark:border-violet-950',
    text4: 'text-violet-100 dark:text-violet-900',

    bg5: 'bg-violet-200 dark:bg-violet-800',
    border5: 'border-violet-300 dark:border-violet-700',
    text5: 'text-violet-400 dark:text-violet-600',
  },

  purple: {
    bg1: 'bg-purple-50 dark:bg-purple-950',
    border1: 'border-purple-100 dark:border-purple-900',
    text1: 'text-purple-200 dark:text-purple-800',

    bg2: 'bg-purple-300 dark:bg-purple-700',
    border2: 'border-purple-400 dark:border-purple-600',
    text2: 'text-purple-50 dark:text-purple-950',

    bg3: 'bg-purple-100 dark:bg-purple-900',
    border3: 'border-purple-200 dark:border-purple-800',
    text3: 'text-purple-300 dark:text-purple-700',

    bg4: 'bg-purple-400 dark:bg-purple-600',
    border4: 'border-purple-50 dark:border-purple-950',
    text4: 'text-purple-100 dark:text-purple-900',

    bg5: 'bg-purple-200 dark:bg-purple-800',
    border5: 'border-purple-300 dark:border-purple-700',
    text5: 'text-purple-400 dark:text-purple-600',
  },

  fuchsia: {
    bg1: 'bg-fuchsia-50 dark:bg-fuchsia-950',
    border1: 'border-fuchsia-100 dark:border-fuchsia-900',
    text1: 'text-fuchsia-200 dark:text-fuchsia-800',

    bg2: 'bg-fuchsia-300 dark:bg-fuchsia-700',
    border2: 'border-fuchsia-400 dark:border-fuchsia-600',
    text2: 'text-fuchsia-50 dark:text-fuchsia-950',

    bg3: 'bg-fuchsia-100 dark:bg-fuchsia-900',
    border3: 'border-fuchsia-200 dark:border-fuchsia-800',
    text3: 'text-fuchsia-300 dark:text-fuchsia-700',

    bg4: 'bg-fuchsia-400 dark:bg-fuchsia-600',
    border4: 'border-fuchsia-50 dark:border-fuchsia-950',
    text4: 'text-fuchsia-100 dark:text-fuchsia-900',

    bg5: 'bg-fuchsia-200 dark:bg-fuchsia-800',
    border5: 'border-fuchsia-300 dark:border-fuchsia-700',
    text5: 'text-fuchsia-400 dark:text-fuchsia-600',
  },

  pink: {
    bg1: 'bg-pink-50 dark:bg-pink-950',
    border1: 'border-pink-100 dark:border-pink-900',
    text1: 'text-pink-200 dark:text-pink-800',

    bg2: 'bg-pink-300 dark:bg-pink-700',
    border2: 'border-pink-400 dark:border-pink-600',
    text2: 'text-pink-50 dark:text-pink-950',

    bg3: 'bg-pink-100 dark:bg-pink-900',
    border3: 'border-pink-200 dark:border-pink-800',
    text3: 'text-pink-300 dark:text-pink-700',

    bg4: 'bg-pink-400 dark:bg-pink-600',
    border4: 'border-pink-50 dark:border-pink-950',
    text4: 'text-pink-100 dark:text-pink-900',

    bg5: 'bg-pink-200 dark:bg-pink-800',
    border5: 'border-pink-300 dark:border-pink-700',
    text5: 'text-pink-400 dark:text-pink-600',
  },

  rose: {
    bg1: 'bg-rose-50 dark:bg-rose-950',
    border1: 'border-rose-100 dark:border-rose-900',
    text1: 'text-rose-200 dark:text-rose-800',

    bg2: 'bg-rose-300 dark:bg-rose-700',
    border2: 'border-rose-400 dark:border-rose-600',
    text2: 'text-rose-50 dark:text-rose-950',

    bg3: 'bg-rose-100 dark:bg-rose-900',
    border3: 'border-rose-200 dark:border-rose-800',
    text3: 'text-rose-300 dark:text-rose-700',

    bg4: 'bg-rose-400 dark:bg-rose-600',
    border4: 'border-rose-50 dark:border-rose-950',
    text4: 'text-rose-100 dark:text-rose-900',

    bg5: 'bg-rose-200 dark:bg-rose-800',
    border5: 'border-rose-300 dark:border-rose-700',
    text5: 'text-rose-400 dark:text-rose-600',
  },
};

const colors = ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];

export default function Home() {
  const [isChat, setIsChat] = useState(false);
  const [color, setColor] = useState('slate');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const matches = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (!matches) {
      setIsChat(false);
    }
  }, [matches]);

  const handleChat = () => {
    setIsChat(true);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <main className={`py-6 px-8 ${colorMap[color].bg1} min-h-screen text-black dark:text-white`}>
      {/* theme color */}
      <div className={`fixed -top-12 -right-12 rounded-full w-40 h-40 ${colorMap[color].bg1}`}>
        <select
          name="theme"
          id="theme"
          className={`text-black dark:text-white ${colorMap[color].bg5} absolute bottom-16 right-14`}
          onChange={handleThemeChange}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* theme mode */}
      <div className={`fixed -top-7 -left-7 w-20 h-20 ${colorMap[color].bg1} rounded-full`}>
        <button
          className={`text-black dark:text-white ${colorMap[color].bg1} rounded-full absolute bottom-3 right-3`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <MdDarkMode size={35} className={`${colorMap[color].bg5} rounded-full p-1`} /> : <MdOutlineLightMode size={35} className={`${colorMap[color].bg5} rounded-full p-1`} />}
        </button>
      </div>

      {/* left */}
      <section className={`flex ${colorMap[color].bg4} rounded-md`}>
        <aside className={`w-full lg:w-1/3 border-r ${colorMap[color].border1} ${isChat ? "hidden" : "block"}`}>
          <header className="px-4 py-2 flex items-center justify-between">
            <div className="">
              <img src="/luffy.jpg" alt="luffy" className="rounded-full w-10 h-10" />
            </div>
            <div className="grid grid-cols-5 gap-4 me-20 md:me-0">
              <PiUsersThreeFill size={22} />
              <FaNfcDirectional size={22} />
              <IoChatbubbleOutline size={22} />
              <FiFolderPlus size={22} />
              <HiOutlineDotsVertical size={22} />
            </div>
          </header>
          <main className={`${colorMap[color].bg4}`}>
            <div className="p-2">
              <div className={`flex ${colorMap[color].bg3} ${colorMap[color].bg2} p-2 rounded items-center`}>
                <IoMdSearch size={25} className="bg-transparent" />
                <input type="text" placeholder="search" className="w-full py-1 ps-6 text-sm bg-transparent focus:outline-none" />
              </div>
              <div className="flex gap-4 p-2">
                <span className={`${colorMap[color].bg1} text-green-600 py-1 px-2 rounded-full text-sm`}>Semua</span>
                <span className={`${colorMap[color].bg3} ${colorMap[color].bg2} py-1 px-2 rounded-full text-sm`}>Belum dibaca</span>
                <span className={`${colorMap[color].bg3} ${colorMap[color].bg2} py-1 px-2 rounded-full text-sm`}>Grup</span>
              </div>
            </div>
            {/* chatting */}
            <div className={`border-t ${colorMap[color].border1} overflow-y-auto max-h-[calc(100vh-13rem)]`}>
              {chats.map((chat) => (
                <div className={`${colorMap[color].bg2} cursor-pointer md:cursor-default`} key={chat.id} onClick={matches? handleChat : undefined} >
                  <div className="py-4 px-2 flex justify-between">
                    <div className="flex gap-4">
                      <img src={chat.avatar} alt="AI Robot" className="w-12 h-12 rounded-full" />
                      <div>
                        <p>{chat.name}</p>
                        <p className={`text-sm ${colorMap[color].text5} flex gap-2 items-center`}>
                          <IoCheckmarkDone className={chat.status === "done" ? "text-green-500" : `${colorMap[color].text5}`} />
                          {chat.message}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm ${colorMap[color].text5} me-4`}>{chat.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </aside>
        {/* right */}
        <aside className={`${isChat ? "block z-10 w-full" : "hidden"} z-0 md:block lg:w-2/3`}>
          <header className="px-4 py-1 flex items-center justify-between me-20">
            <div className="flex gap-4 items-center">
              <FaArrowLeft size={22} onClick={() => setIsChat(false)} className={`${isChat ? "block" : "hidden"} cursor-pointer`} />
              <img src="/ai.jpg" alt="luffy" className="rounded-full w-10 h-10" />
              <div>
                <p>Chat GTP</p>
                <p className={`text-sm ${colorMap[color].text5}`}>Online</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <IoVideocam size={22} />
              <IoMdSearch size={22} />
              <HiOutlineDotsVertical size={22} />
            </div>
          </header>
          <main className={`${colorMap[color].bg2} overflow-y-auto max-h-[calc(100vh-6rem)]`}>
            {chattings.map((chatting, index) => (
              <div key={index} className="space-y-8 flex gap-4 justify-between px-10 py-2">
                <div>
                  <p className={`py-2 px-4 ${colorMap[color].bg3} rounded text-justify`}>{chatting.sender}</p>
                </div>
                <div>
                  <p className={`py-2 px-4 ${colorMap[color].bg3} rounded text-justify`}>{chatting.receiver}</p>
                </div>
              </div>
            ))}
            <div className={`sticky bottom-0 flex gap-6 ${colorMap[color].bg4} ${colorMap[color].bg2} py-4 px-6 items-center backdrop-blur-xl`}>
              <MdOutlineInsertEmoticon size={30} />
              <FaPlus size={25} />
              <input type="text" className={`w-full focus:outline-none ${colorMap[color].bg3} px-4 py-1 rounded`} placeholder="Type here..." />
              <IoMdSend size={32} />
            </div>
          </main>
        </aside>
      </section>
    </main>
  );
}
