import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Feature239 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <DottedDiv>
                      <div className="grid lg:grid-cols-12">
              {/* Left Content */}
              <div className="flex w-full flex-col gap-8 py-20 px-8 lg:col-span-5">

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                &ldquo;My Fate is My Own,
                <br />
                Not for the Heavens
                <br />
                to Decide.&rdquo;
              </h1>
              <p className="text-muted-foreground tracking-tight md:text-xl">
                More than a myth, Ne Zha is a symbol of self-determination. His refusal to bow to tyrannical authority, to his pre-written destiny, or even to the gods themselves, has made his story resonate for centuries. His most famous declaration captures his entire spirit:
              </p>
              <div className="flex w-full flex-col gap-4">
                <div className="text-3xl font-bold tracking-tight text-red-600">
                  我命由我不由天
                </div>
                <div className="text-sm text-muted-foreground italic">
                  (Wǒ mìng yóu wǒ bù yóu tiān)
                </div>
              </div>
            </div>
            {/* Right Content */}
            <DottedDiv className="group size-full place-self-end p-6 lg:col-span-7 flex items-center">
                              <div className="bg-muted/50 group-hover:bg-muted relative h-[700px] w-full p-4 transition-all ease-in-out">
                  {/* Bg Image div */}
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/Na Tra.jpeg"
                    alt="Ne Zha - The Rebel Prince with Wind Fire Wheels"
                    fill
                    className="object-cover"
                  />
                  <div className="bg-linear-to-t absolute inset-0 from-black/70 to-transparent"></div>
                </div>


              </div>
            </DottedDiv>
          </div>
        </DottedDiv>
      </div>
    </section>
  );
};

export { Feature239 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="-left-25 bg-muted absolute top-6 h-[1.5px] w-[115%]" />
    <div className="-left-25 bg-muted absolute bottom-6 h-[1.5px] w-[115%]" />
    <div className="-top-25 bg-muted absolute left-6 h-[130%] w-[1.5px]" />
    <div className="-top-25 bg-muted absolute right-6 h-[130%] w-[1.5px]" />
    <div className="bg-foreground absolute left-[18.5px] top-[18.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute right-[18.5px] top-[18.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[18.5px] left-[18.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[18.5px] right-[18.5px] z-10 size-2 rounded-full" />
    {children}
  </div>
);
