"use client";

import { useEffect, useState } from "react";

import { Player, defaultPlayer } from "@/lib/player";
import {
  GameState,
  InventoryItem,
  EquippedItems,
} from "@/types/game";
import { Quest } from "@/types/quest";
import { Achievement } from "@/types/achievement";

import { dailyQuests } from "@/data/dailyQuests";
import { defaultAchievements } from "@/data/achievements";
import { skills } from "@/data/skills";

import { loadGame, saveGame } from "@/lib/storage";
import { getQuestRewards } from "@/lib/rewards";
import { getTodayDate, isNewDay } from "@/lib/date";

import { rewardPlayer } from "@/services/player";
import {
  getQuest,
  completeQuest as finishQuest,
} from "@/services/quests";
import { updateAchievementProgress } from "@/services/achievements";
import {
  buyItem,
  equipItem,
} from "@/services/shop";
import {
  upgradeSkill,
} from "@/services/skills";

const defaultEquipped: EquippedItems = {
  avatar: null,
  title: null,
  theme: null,
};

export function useGame() {
  const [player, setPlayer] =
    useState<Player>(defaultPlayer);

  const [quests, setQuests] =
    useState<Quest[]>(dailyQuests);

  const [achievements, setAchievements] =
    useState<Achievement[]>(defaultAchievements);

  const [inventory, setInventory] =
    useState<InventoryItem[]>([]);

  const [equipped, setEquipped] =
    useState<EquippedItems>(defaultEquipped);

  const [lastReset, setLastReset] =
    useState(getTodayDate());

  const [showLevelUp, setShowLevelUp] =
    useState(false);

  useEffect(() => {
    const game = loadGame();

    if (!game) return;

    const loadedPlayer = {
      ...defaultPlayer,
      ...game.player,
      skills: {
        ...defaultPlayer.skills,
        ...(game.player?.skills ?? {}),
      },
      skillPoints:
        game.player?.skillPoints ?? 0,
    };

    if (isNewDay(game.lastReset)) {
      setPlayer(loadedPlayer);

      setQuests(
        dailyQuests.map((q) => ({
          ...q,
          completed: false,
        }))
      );

      setAchievements(
        game.achievements ??
          defaultAchievements
      );

      setInventory(game.inventory ?? []);

      setEquipped(
        game.equipped ?? defaultEquipped
      );

      setLastReset(getTodayDate());
    } else {
      setPlayer(loadedPlayer);

      setQuests(game.quests);

      setAchievements(
        game.achievements ??
          defaultAchievements
      );

      setInventory(game.inventory ?? []);

      setEquipped(
        game.equipped ?? defaultEquipped
      );

      setLastReset(game.lastReset);
    }
  }, []);

  useEffect(() => {
    const game: GameState = {
      player,
      quests,
      achievements,
      inventory,
      equipped,
      lastReset,
    };

    saveGame(game);
  }, [
    player,
    quests,
    achievements,
    inventory,
    equipped,
    lastReset,
  ]);

  function completeQuest(id: number) {
    const quest = getQuest(quests, id);

    if (!quest || quest.completed) return;

    const reward =
      getQuestRewards(quest);

    const result =
      rewardPlayer(player, reward);

    const updatedPlayer =
      result.player;

    const updatedQuests =
      finishQuest(quests, id);

    const updatedAchievements =
      updateAchievementProgress(
        achievements,
        updatedPlayer,
        updatedQuests
      );

    setPlayer(updatedPlayer);

    setQuests(updatedQuests);

    setAchievements(
      updatedAchievements
    );

    if (result.leveledUp) {
      setShowLevelUp(true);
    }
  }

  function purchaseItem(
    id: number,
    price: number
  ) {
    const result = buyItem(
      player,
      inventory,
      id,
      price
    );

    if (!result) return false;

    setPlayer(result.player);

    setInventory(result.inventory);

    return true;
  }

  function equip(
    id: number,
    category:
      | "Avatar"
      | "Title"
      | "Theme"
  ) {
    const result = equipItem(
      inventory,
      equipped,
      id,
      category
    );

    setInventory(result.inventory);

    setEquipped(result.equipped);
  }

  function upgradePlayerSkill(
    skillId: string
  ) {
    const skill = skills.find(
      (s) => s.id === skillId
    );

    if (!skill) return;

    const updatedPlayer =
      upgradeSkill(
        player,
        skillId,
        skill.maxLevel
      );

    setPlayer(updatedPlayer);
  }

  function closeLevelUp() {
    setShowLevelUp(false);
  }

  return {
    player,
    quests,
    achievements,
    inventory,
    equipped,

    completeQuest,
    purchaseItem,
    equip,
    upgradePlayerSkill,

    showLevelUp,
    closeLevelUp,
  };
}