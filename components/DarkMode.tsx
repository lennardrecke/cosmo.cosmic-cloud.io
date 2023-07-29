"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { Moon, Sun } from "lucide-react";

export const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center mx-5 rounded-full w-fit px-2 bg-slate-300 dark:bg-gray-900">
      <Moon className="w-4 h-4 mr-2 text-primary" />
      <Switch
        checked={theme !== "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Sun className="w-4 h-4 ml-2 text-primary" />
    </div>
  );
};
