import { Hash } from "lucide-react";

interface ChatWelcomeProps {
    name: string;
    type: "channel" | "conversation";
};

export const ChatWelcome = ({
    name,
    type
}: ChatWelcomeProps) => {
    return (
        <div className="space-y-2 px-4 mb-4">
           {type === "channel" && (
            <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
                <Hash className="h-12 w-12 text-white" />
            </div>
           )}
           <p className="text-x1 md:text-3xl font-bold">
                {type === "channel" ? "Welcome to #" : ""}{name}
           </p>
           <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                {type === "channel"
                    ? `Este es el comienzo del canal #${name}.`
                    : `Este es el comienzo de la conversacion con ${name}.`
                }
           </p>
        </div>
    )
}