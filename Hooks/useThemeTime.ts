'use client';
import { useEffect, useState } from "react";

export const useThemeTime = () => {
    const [theme, setTheme] = useState<string>('bg-stone-50')

    useEffect(() => {
        const hour = new Date().getHours();

        setTheme('bg-[#e4e0d5]');

        // if (hour >= 5 && hour < 12) {
        //     setTheme('bg-[#F5E6BE]');
        // } else if (hour >= 12 && hour < 18) {
        //     setTheme('bg-[#F5F5F4]');
        // } else {
        //     setTheme('bg-[#0C0A09]');
        // }
    }, []);

    return theme;

}