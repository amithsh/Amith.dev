"use client"

import Animate from "@/components/Animate";
import Workpage from "./works/page";
import ClientOnly from "@/components/Clientonly";

export default function Home() {
  return (
    <ClientOnly>
      <div>
        <Animate />
        <Workpage />
      </div>
    </ClientOnly>
  );
}
