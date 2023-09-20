export const products = [
    {
      id: 1,
      name: 'Zapatillas nike',
      stock: 2,
      price: '25',
      category: "zapatillas",
      desc: "Estas zapatillas Nike son ideales para el deporte y el estilo casual. Con un diseño elegante y cómodo, son perfectas para cualquier ocasión.",
      imageUrl: "https://nikearprod.vtexassets.com/arquivos/ids/700122/DD1503_801_A_PREM.jpg?v=638229717021670000"
    },
    {
      id: 2,
      name: 'Zapatillas Addidas',
      stock: 23,
      price: '225',
      category: "zapatillas",
      desc: "Estas zapatillas Adidas son conocidas por su durabilidad y estilo moderno. Son ideales para deportes y actividades al aire libre.",
      imageUrl: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw61693613/products/AD_FY7978/AD_FY7978-1.JPG",
    },
    {
      id: 3,
      name: 'Zapatillas vans',
      stock: 8,
      price: '2900',
      category: "zapatillas",
      desc: "Las zapatillas Vans son un clásico atemporal en el mundo de la moda urbana. Su diseño icónico las hace ideales para cualquier ocasión.",
      imageUrl: "https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2023/6/8/8463164.jpg",
    },
    {
      id: 4,
      name: 'Botines nike',
      stock: 12,
      price: '425',
      category: "botines",
      desc: " Estos botines Nike son perfectos para el fútbol y otros deportes de campo. Ofrecen comodidad y un gran rendimiento en el campo.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqj9KmdO2iS_bsQSaijVoEWHYnzK-WNO-QhD35pm_ryz_k7jSaHROp532cPQmCKHUSAI&usqp=CAU",
    },
    {
      id: 5,
      name: 'Botines adidas',
      stock: 3,
      price: '5',
      category: "botines",
      desc: "Estos botines Adidas son una opción asequible para el deporte. Ofrecen un buen agarre y son ideales para principiantes.",
      imageUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/002/333/280/products/img_49621-84ec1bc9d8b38dfd4716632610741773-640-0.jpg",
    },
    {
      id: 6,
      name: 'Chomba Nike',
      stock: 5,
      price: '523',
      category: "remeras",
      desc:" Esta chomba Nike es perfecta para un look deportivo y cómodo. Está diseñada con materiales de alta calidad y es ideal para el uso diario.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_881725-MLA69333519822_052023-O.webp",
    },
  ];
  
export const mFetch = (pid) => new Promise((res, rej) => {
        setTimeout(()=> {
            res(pid ? products.find(product => product.id === pid) : products)
        }, 1000)
    })

