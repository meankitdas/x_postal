import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const getData = () => {
    if (!user) {
      return router.push("/auth/login");
    }

    if (loading) return;
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>Your Posts</h1>
      <div>Posts</div>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
