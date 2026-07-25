"use client";

import { rollLoot } from "@/services/loot";
import { unlockItem } from "@/services/shop";

import { useEffect, useState } from "react";

import { Player, defaultPlayer } from "@/lib/player";
import {
  GameState,
  InventoryItem,
  EquippedItems,
  Chest,
} from "@/types/game";
import { Quest } from "@/types/quest";
import { Achievement } from "@/types/achievement";

import { dailyQuests } from "@/data/dailyQuests";
import { defaultAchievements } from "@/data/achievements";
import { skills } from "@/data/skills";

import { loadGame, saveGame } from "@/lib/storage";
import { getQuestRewards } from "@/lib/rewards";
import { getTodayDate, isNewDay } from "@/lib/date";
import {
  updatePlayerEquipment,
  equipSlot,
} from "@/services/equipmentManager";

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
import { upgradeSkill } from "@/services/skills";

const defaultEquipped: EquippedItems = {
  // Cosmetic
  avatar: null,
  title: null,
  theme: null,

  // Combat
  weapon: null,
  armor: null,
  helmet: null,
  boots: null,
  ring: null,
  necklace: null,
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

  const [chests, setChests] =
    useState<Chest[]>([]);

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

      setChests(game.chests ?? []);

      setEquipped(
        game.equipped ??
          defaultEquipped
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

      setChests(game.chests ?? []);

      setEquipped(
        game.equipped ??
          defaultEquipped
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
      chests,
      lastReset,
    };

    saveGame(game);
  }, [
    player,
    quests,
    achievements,
    inventory,
    equipped,
    chests,
    lastReset,
  ]);


function completeQuest(id: number) {
  const quest = getQuest(quests, id);

  if (!quest || quest.completed) return;

  const reward = getQuestRewards(
    quest,
    player
  );

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

  // 🎁 20% Chest Drop Chance
  let updatedChests = [...chests];

  if (Math.random() <= 0.2) {
    updatedChests.push({
      id: Date.now(),
      opened: false,
    });
  }

  setPlayer(updatedPlayer);

  setQuests(updatedQuests);

  setAchievements(
    updatedAchievements
  );

  setChests(updatedChests);

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

function equipCombatItem(
  id: number,
  slot:
    | "weapon"
    | "armor"
    | "helmet"
    | "boots"
    | "ring"
    | "necklace"
) {
  const updatedEquipped = equipSlot(
    equipped,
    slot,
    id
  );

  const updatedPlayer =
    updatePlayerEquipment(
      player,
      updatedEquipped
    );

  setEquipped(updatedEquipped);
  setPlayer(updatedPlayer);
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

// 📦 Open Chest
function openChest(chestId: number) {
  const loot = rollLoot();

  const result = unlockItem(
    player,
    inventory,
    loot.itemId
  );

  setPlayer(result.player);
  setInventory(result.inventory);

  setChests((prev) =>
    prev.map((chest) =>
      chest.id === chestId
        ? {
            ...chest,
            opened: true,
          }
        : chest
    )
  );

  return loot;
}

// 📦 Remove Opened Chests
function clearOpenedChests() {
  setChests((prev) =>
    prev.filter(
      (chest) => !chest.opened
    )
  );
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
  chests,

  completeQuest,
  purchaseItem,

  equip,
  equipCombatItem,

  upgradePlayerSkill,

  openChest,
  clearOpenedChests,

  showLevelUp,
  closeLevelUp,
};;
}