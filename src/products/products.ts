const products = [
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 1001,
    amount: 3,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  },
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 1005,
    amount: 3,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  },
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 100,
    amount: 0,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  },
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 1006,
    amount: 2,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  },
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 1000,
    amount: 1,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  },
  {
    title: "Dubový test lakovaný",
    description: "Morbi tellus urna, sagittis hendrerit auctor eu, porttitor at ipsum. Praesent nec vehicula elit. Quisque et imperdiet diam, ac eleifend augue. Pellentesque vitae dui et ex iaculis egestas nec ut erat. In venenatis libero eget eros mattis, ac commodo ex gravida. Nunc aliquam ante et odio viverra posuere.",
    price: 1000,
    amount: 3,
    thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_thumbnail.jpg",
    detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_01.jpg",
    detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684004048/truhlarslama.cz/products/test_dub_lak_01/test_dub_lak_01_detail_02.jpg",
  }
]

export default products;