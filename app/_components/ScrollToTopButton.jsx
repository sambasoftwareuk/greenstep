"use client";

import { useState, useEffect } from "react";
import { UpArrowIcon } from "../_atoms/Icons";
import Icon from "../_atoms/Icon";
import {
  CourseTagButton,
  DirectionButton,
  IconOnlyButton,
  OutlinedButton,
  PrimaryButton,
  OutlinedButtonWithIcon,
} from "../_atoms/buttons";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 100;

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - threshold;
      setVisible(nearBottom);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <OutlinedButtonWithIcon
      icon={
        <UpArrowIcon
          className="text-white translate-y-[2px] md:translate-y-0"
          size={40}
        />
      }
    />
  ) : null;
}
