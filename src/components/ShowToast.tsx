"use client";

import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

type SimpleToastStatus = "success" | "error" | "loading";

type ShowToastProps = {
  status: SimpleToastStatus;
  message: string;
};

const ShowToast = ({ status, message }: ShowToastProps) => {
  const hasShown = useRef(false);

  useEffect(() => {
    if (!hasShown.current && message) {
      toast[status](message);
      hasShown.current = true;
    }
  }, [status, message]);

  return null;
};

export default ShowToast;
