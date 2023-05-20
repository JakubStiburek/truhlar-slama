const products = [
    {
        id: "podlozka_buk_olej_01",
        title: "Buková podložka pod hrnec - olej",
        description: "Rozebíratelná podložka nejen pod horké nádobí. Ochrání váš stůl i pracovní desku před poškozením horkým dnem. Ošetřena přírodním olejem na dřevo. Délka 18 cm. Výška 2,5 cm.",
        price: 135,
        amount: 1,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430203/truhlarslama.cz/products/podlozka_buk_olej_01/podlozka_buk_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430203/truhlarslama.cz/products/podlozka_buk_olej_01/podlozka_buk_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430203/truhlarslama.cz/products/podlozka_buk_olej_01/podlozka_buk_olej_01_detail_02.jpg"
    },
    {
        id: "podlozka_dub_olej_01",
        title: "Dubová podložka pod hrnec - olej",
        description: "Rozebíratelná podložka nejen pod horké nádobí. Ochrání váš stůl i pracovní desku před poškozením horkým dnem. Ošetřena přírodním olejem na dřevo. Délka 18 cm. Výška 2,5 cm.",
        price: 135,
        amount: 4,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430251/truhlarslama.cz/products/podlozka_dub_olej_01/podlozka_dub_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430251/truhlarslama.cz/products/podlozka_dub_olej_01/podlozka_dub_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430251/truhlarslama.cz/products/podlozka_dub_olej_01/podlozka_dub_olej_01_detail_02.jpg"
    },
    {
        id: "podlozka_jilm_olej_01",
        title: "Jilmová podložka pod hrnec - olej",
        description: "Rozebíratelná podložka nejen pod horké nádobí. Ochrání váš stůl i pracovní desku před poškozením horkým dnem. Ošetřena přírodním olejem na dřevo. Délka 18 cm. Výška 2,5 cm.",
        price: 135,
        amount: 4,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430285/truhlarslama.cz/products/podlozka_jilm_olej_01/podlozka_jilm_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430285/truhlarslama.cz/products/podlozka_jilm_olej_01/podlozka_jilm_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430285/truhlarslama.cz/products/podlozka_jilm_olej_01/podlozka_jilm_olej_01_detail_02.jpg"
    },
    {
        id: "podtacky_natur_olej_01",
        title: "Podtácky z kulatiny - olej",
        description: "Podtácky z kulatiny v přírodním stylu. Ošetřeny přírodním olejem na dřevo. Průměr 7,5 cm. Sada 5 ks.",
        price: 150,
        amount: 1,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684431062/truhlarslama.cz/products/podtacky_natur_olej_01/podtacky_natur_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684431062/truhlarslama.cz/products/podtacky_natur_olej_01/podtacky_natur_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684431062/truhlarslama.cz/products/podtacky_natur_olej_01/podtacky_natur_olej_01_detail_02.jpg"
    },
    {
        id: "stolicka_dub_olej_01",
        title: "Dubová stolička - olej",
        description: "Trojnožka z dubového masivního dřeva se soustruženými nohami. Ošetřená přírodním olejem na dřevo. Určena k sezení Výška 36 cm. Průměr sedáku 31 cm.",
        price: 2150,
        amount: 1,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430364/truhlarslama.cz/products/stolicka_dub_olej_01/stolicka_dub_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430364/truhlarslama.cz/products/stolicka_dub_olej_01/stolicka_dub_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430364/truhlarslama.cz/products/stolicka_dub_olej_01/stolicka_dub_olej_01_detail_02.jpg"
    },
    {
        id: "stolicka_jasan_olej_01",
        title: "Jasanová stolička - olej",
        description: "Trojnožka z jasanového masivního dřeva se soustruženými nohami. Ošetřená přírodním olejem na dřevo. Určena k sezení. Výška 40 cm. Průměr sedáku 31 cm.",
        price: 2000,
        amount: 1,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430377/truhlarslama.cz/products/stolicka_jasan_olej_01/stolicka_jasan_olej_01_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430377/truhlarslama.cz/products/stolicka_jasan_olej_01/stolicka_jasan_olej_01_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430377/truhlarslama.cz/products/stolicka_jasan_olej_01/stolicka_jasan_olej_01_detail_02.jpg"
    },
    {
        id: "stolicka_jasan_olej_02",
        title: "Jasanová stolička - olej",
        description: "Trojnožka z jasanového masivního dřeva se soustruženými nohami. Ošetřená přírodním olejem na dřevo. Určena k sezení. Výška 40 cm. Průměr sedáku 31 cm.",
        price: 2000,
        amount: 1,
        thumbnail: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430406/truhlarslama.cz/products/stolicka_jasan_olej_02/stolicka_jasan_olej_02_thumbnail.jpg",
        detail_01: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430406/truhlarslama.cz/products/stolicka_jasan_olej_02/stolicka_jasan_olej_02_detail_01.jpg",
        detail_02: "https://res.cloudinary.com/dws5jjmgt/image/upload/v1684430406/truhlarslama.cz/products/stolicka_jasan_olej_02/stolicka_jasan_olej_02_detail_02.jpg"
    }
]

export default products;