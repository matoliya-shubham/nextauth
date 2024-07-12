"use client";

import Router, { useRouter } from "next/navigation";

interface LoginButtonprops {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonprops) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal Later</span>;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
