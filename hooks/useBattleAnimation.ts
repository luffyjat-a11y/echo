"use client";

import { useState } from "react";

export function useBattleAnimation() {
  const [showEffect, setShowEffect] =
    useState(false);

  const [critical, setCritical] =
    useState(false);

  const [damage, setDamage] =
    useState(0);

  function play(
    amount: number,
    crit: boolean
  ) {
    setDamage(amount);
    setCritical(crit);
    setShowEffect(true);

    setTimeout(() => {
      setShowEffect(false);
    }, 900);
  }

  return {
    showEffect,
    critical,
    damage,
    play,
  };
}