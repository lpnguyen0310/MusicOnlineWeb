import Title from "@/app/components/title/Title";
import Section1 from "./Section2";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <>
      <Suspense>
         <Section1 />
      </Suspense>
       
     
    </>
  );
}