import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ className }: { className?: string }) {
    return (
        <div className={cn("fixed inset-0 z-0 pointer-events-none h-full w-full bg-clinical-white", className)}>
            <div
                className={cn(
                    "absolute inset-0",
                    "opacity-[0.15]", // Subtle opacity for the grid lines
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]",
                    // Using slate-300 (#cbd5e1) for visible but subtle lines on white
                )}
            />
            {/* Radial gradient mask to fade edges if desired, or just global. 
          The user wanted 'effect like this', usually implies the grid. 
          I will leave the grid uniform for the whole page. */}
        </div>
    );
}
