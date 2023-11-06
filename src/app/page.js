"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { MicrosoftButton } from "@/components/component/microsoft-button";
import Link from "next/link";
import { Button, Alert } from "@mantine/core";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <Alert variant="light" color="blue" title="Alert title" icon={<AlertCircle />}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore
        necessitatibus placeat saepe.
      </Alert>
      {session?.role === "admin" && <>User Role: Admin</>}
      {session?.role === "college" && <>User Role: College</>}
      {session?.role === "faculty" && <>User Role: Faculty</>}
      {session?.role === "undergrad" && <>User Role: Undergrad Student</>}
      {session?.role === "grad" && <>User Role: Grad Student</>}
      {session?.role === "cashier" && <>User Role: Cashier</>}
      {session ? (
        <>
          <Image src={session?.user?.image} alt="profile picture" width={40} height={40} />
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <MicrosoftButton
            microsoftSignIn={() => {
              console.log("logging in?");
              signIn();
            }}
          />
        </>
      )}
      <Button component={Link} href="/hello">
        Next link button
      </Button>
    </>
  );
}
