"use client";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import WelcomeMessage from "./welcomeMessage";
export default function Home({ searchParams }) {

  const { base, session } = searchParams;
  const [username, setUsername] = useState(session);
  const [workSpace, setWorkSpace] = useState(base);

  return (
    <>

      <iframe
        src={`https://work.pecha.tools/${base}/?session=${session}`}
        className="w-screen h-screen"
      />
      <Sidebar>
        <WelcomeMessage username={username} workSpace={workSpace} />
        <iframe className="h-full" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5gDbwko0iKrR46GjJgsmMgGQXc6EiC9xBugl8BvV66pPz-czBeyO1DfVsti0jg-EJqTZ7dSUCu_qC/pubhtml?widget=true&amp;headers=false"></iframe>
      </Sidebar>
    </>
  );
}
