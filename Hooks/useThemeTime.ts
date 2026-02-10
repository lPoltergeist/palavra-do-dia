'use client';
import { useEffect, useState } from "react";

export const useThemeTime = () => {
    const [theme, setTheme] = useState<string>('bg-stone-50')

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            setTheme('bg-[#FCFAF7]');
        } else if (hour >= 12 && hour < 18) {
            setTheme('bg-[#F5F5F4]');
        } else {
            setTheme('bg-[#0C0A09]');
        }
    }, []);

    return theme;

}