"use client"

import { cn } from "@/utilities/style"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const MainNav= ()=>{
    const pathname = usePathname()

    const routes=[
        {
            name:"works",
            href:"/works",
            isactive:pathname === "/works"
        },
        
    ]
    return(
        <div className="flex flex-row items-center justify-between gap-4">
            {routes.map((route)=>(
                <div key={route.name}>
                    <Link href={route.href}>
                        <span className={cn("text-sm font-medium transition-colors hover:text-amber-400 text-gray-200",
                            route.isactive ? "text-amber-400" :"text-white"
                        )} >
                            {route.name}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    )
}