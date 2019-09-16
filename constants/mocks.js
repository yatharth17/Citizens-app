const categories = [
  {
    id: "electricity",
    name: "electricity",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/electricity.png")
  },
  {
    id: "fire",
    name: "fire",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/fire.png")
  },
  {
    id: "Water",
    name: "Water",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/water.png")
  },
  {
    id: "road",
    name: "road",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/road.png")
  },
  {
    id: "police",
    name: "police",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/police.png")
  },
  {
    id: "hospital",
    name: "hospital",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/hospital.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "User_17",
  location: "New Delhi",
  email: "contact@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  PhoneNo: "9967574887",
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
