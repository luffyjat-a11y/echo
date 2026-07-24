export type ShopItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: "Avatar" | "Title" | "Theme";
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
};

export const shopItems: ShopItem[] = [
  {
    id: 1,
    name: "Warrior Avatar",
    description: "Unlock a warrior profile avatar.",
    price: 150,
    icon: "🛡️",
    category: "Avatar",
    rarity: "Common",
  },
  {
    id: 2,
    name: "Shadow Title",
    description: "Earn the title Shadow Walker.",
    price: 250,
    icon: "🌑",
    category: "Title",
    rarity: "Epic",
  },
  {
    id: 3,
    name: "Purple Theme",
    description: "Unlock the royal purple dashboard theme.",
    price: 200,
    icon: "💜",
    category: "Theme",
    rarity: "Rare",
  },
  {
    id: 4,
    name: "Dragon Avatar",
    description: "Become the legendary Dragon Lord.",
    price: 500,
    icon: "🐉",
    category: "Avatar",
    rarity: "Legendary",
  },
  {
    id: 5,
    name: "Phoenix Title",
    description: "Rise again with the mythical Phoenix title.",
    price: 700,
    icon: "🔥",
    category: "Title",
    rarity: "Legendary",
  },
  {
    id: 6,
    name: "Crimson Theme",
    description: "A powerful red theme inspired by ancient warriors.",
    price: 350,
    icon: "❤️",
    category: "Theme",
    rarity: "Epic",
  },
];