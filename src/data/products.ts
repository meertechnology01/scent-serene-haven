
export type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Incense Sticks",
    description: "Hand-rolled natural incense sticks with a calming lavender scent",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=2000",
    category: "Incense"
  },
  {
    id: 2,
    title: "Meditation Cushion",
    description: "Comfortable meditation cushion with organic cotton cover",
    price: "₦5,800",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000",
    category: "Meditation"
  },
  {
    id: 3,
    title: "Sacred Geometry Wall Art",
    description: "Handcrafted sacred geometry wooden wall hanging",
    price: "₦7,200",
    image: "https://images.unsplash.com/photo-1531501410720-c8d437636169?q=80&w=2000",
    category: "Decor"
  },
  {
    id: 4,
    title: "Selenite Crystal Wand",
    description: "Natural selenite crystal wand for energy cleansing",
    price: "₦3,200",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000",
    category: "Crystals"
  },
  {
    id: 5,
    title: "Chakra Bracelet",
    description: "7 chakra balancing natural stone beaded bracelet",
    price: "₦2,900",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343c?q=80&w=2000",
    category: "Jewelry"
  },
  {
    id: 6,
    title: "Essential Oil Diffuser",
    description: "Ultrasonic aromatherapy diffuser with color-changing lights",
    price: "₦6,500",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2000",
    category: "Aromatherapy"
  },
  {
    id: 7,
    title: "Meditation Singing Bowl",
    description: "Handcrafted Tibetan singing bowl for sound healing",
    price: "₦9,800",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2000",
    category: "Sound Healing"
  },
  {
    id: 8,
    title: "Sage Smudge Stick",
    description: "Organic white sage bundle for space clearing",
    price: "₦1,800",
    image: "https://images.unsplash.com/photo-1597416963412-7d7959bfe4b9?q=80&w=2000",
    category: "Cleansing"
  },
  {
    id: 9,
    title: "Tarot Card Deck",
    description: "Beautifully illustrated 78-card tarot deck with guidebook",
    price: "₦4,500",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2000",
    category: "Divination"
  },
  {
    id: 10,
    title: "Zen Garden Set",
    description: "Mini desktop zen garden with fine sand and natural stones",
    price: "₦3,900",
    image: "https://images.unsplash.com/photo-1587588354456-ae376af71a25?q=80&w=2000",
    category: "Decor"
  },
  {
    id: 11,
    title: "Amethyst Crystal Cluster",
    description: "Natural amethyst crystal cluster for spiritual growth",
    price: "₦8,200",
    image: "https://images.unsplash.com/photo-1563699182-58775c8a755b?q=80&w=2000",
    category: "Crystals"
  },
  {
    id: 12,
    title: "Wooden Prayer Beads",
    description: "Hand-carved sandalwood prayer beads with 108 beads",
    price: "₦3,400",
    image: "https://images.unsplash.com/photo-1607962500453-46dc78577c6c?q=80&w=2000",
    category: "Meditation"
  },
  {
    id: 13,
    title: "Himalayan Salt Lamp",
    description: "Natural Himalayan salt lamp with wooden base and dimmer",
    price: "₦5,200",
    image: "https://images.unsplash.com/photo-1563245420-529dafe052f6?q=80&w=2000",
    category: "Home"
  },
  {
    id: 14,
    title: "Flower of Life Necklace",
    description: "Sterling silver sacred geometry Flower of Life pendant",
    price: "₦4,800",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000",
    category: "Jewelry"
  },
  {
    id: 15,
    title: "Meditation Cushion Set",
    description: "Zafu and zabuton meditation cushion set with cotton covers",
    price: "₦12,500",
    image: "https://images.unsplash.com/photo-1510041438263-a390eff2d8cd?q=80&w=2000",
    category: "Meditation"
  },
  {
    id: 16,
    title: "Chakra Healing Crystals Set",
    description: "Complete set of 7 chakra tumbled stones with pouch",
    price: "₦4,200",
    image: "https://images.unsplash.com/photo-1624628639856-100bf817a0f8?q=80&w=2000",
    category: "Crystals"
  },
  {
    id: 17,
    title: "Handmade Meditation Journal",
    description: "Leather-bound journal with handmade paper for spiritual reflections",
    price: "₦3,800",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=80&w=2000",
    category: "Books"
  },
  {
    id: 18,
    title: "Palo Santo Wood Sticks",
    description: "Sustainably harvested palo santo wood for energy cleansing",
    price: "₦2,100",
    image: "https://images.unsplash.com/photo-1630573733521-9ec42f97e7ed?q=80&w=2000",
    category: "Cleansing"
  },
  {
    id: 19,
    title: "Handmade Dreamcatcher",
    description: "Traditional Native American dreamcatcher with feathers",
    price: "₦4,600",
    image: "https://images.unsplash.com/photo-1534577403868-27b186c434cc?q=80&w=2000",
    category: "Decor"
  },
  {
    id: 20,
    title: "Essential Oils Set",
    description: "Collection of 6 pure essential oils for aromatherapy",
    price: "₦8,900",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=2000",
    category: "Aromatherapy"
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
