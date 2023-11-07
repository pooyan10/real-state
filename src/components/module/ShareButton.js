"use client";

import { useState, useEffect } from "react";
import { LuShare2 } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className="flex justify-center items-center gap-2 my-4 p-2 shadow-3xl shadow-blue1/30 rounded-lg">
        <LuShare2 className="text-lg text-blue1" />
        <button className="text-gray-500">اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
