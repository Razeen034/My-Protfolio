"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const COMMANDS: Record<string, string> = {
  help: "Commands: help, clear, about, goto [page] (home, about, projects, contact, github)",
  about: "I'm a developer building AI agents on M3. Type 'goto about' to see the full page.",
};

export default function Terminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["M3 Console v1.0.0. Type 'help' to start."]);
  
  // 1. Create a Ref for the input element
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Function to force focus whenever the terminal is clicked
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // Auto-focus on mount
    focusInput();
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const fullInput = input.toLowerCase().trim();
      const args = fullInput.split(" ");
      const cmd = args[0];
      const newHistory = [...history, `> ${input}`];

      if (cmd === "goto") {
        const destination = args[1];
        if (destination === "about") {
          newHistory.push("Redirecting to /about...");
          setHistory(newHistory);
          setTimeout(() => router.push("/about"), 500);
          return;
        } else if (destination === "projects") {
          newHistory.push("Redirecting to /projects...");
          setHistory(newHistory);
          setTimeout(() => router.push("/projects"), 500);
          return;
        } else if (destination === "home") {
          newHistory.push("Redirecting to /...");
          setHistory(newHistory);
          setTimeout(() => router.push("/"), 500);
          return;
        } else if (destination === "contact") {
          newHistory.push("Email me at: contact@example.com");
        } else if (destination === "github") {
          newHistory.push("Opening GitHub in a new tab...");
          setHistory(newHistory);
          setTimeout(() => window.open("https://github.com", "_blank"), 500);
          return;
        } else {
          newHistory.push(`Error: Page '${destination}' not found.`);
        }
      } else if (cmd === "clear") {
        setHistory([]);
      } else if (COMMANDS[cmd]) {
        newHistory.push(COMMANDS[cmd]);
      } else if (input !== "") {
        newHistory.push(`Command not found. Type 'help'.`);
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div 
      // 3. Add onClick here so the whole box is "clickable"
      onClick={focusInput}
      className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl h-[350px] flex flex-col font-mono text-sm cursor-text"
    >
      <div className="bg-slate-800 px-4 py-2 flex gap-1.5 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-slate-500 text-[10px] ml-2 uppercase tracking-widest">m3-local-terminal</span>
      </div>

      <div ref={scrollRef} className="p-4 flex-1 overflow-y-auto space-y-1 scrollbar-hide">
        {history.map((line, i) => (
          <p key={i} className={line.startsWith(">") ? "text-blue-400" : "text-slate-300"}>
            {line}
          </p>
        ))}
        <div className="flex gap-2 items-center">
          <span className="text-green-400">➜</span>
          <input
            // 4. Attach the ref here
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none flex-1 text-white border-none focus:ring-0 p-0"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}