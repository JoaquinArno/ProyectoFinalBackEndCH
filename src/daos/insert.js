import database from "../db/index.js";

const insertProducts = async () => {

    try {
        const products = [

            {
                title: "Compass",
                price: 200,
                thumbnail: "https://gerady.com.ar/wp-content/uploads/2019/06/CA25662.jpg",
                id: 1
            },
            {
                title: "Pen",
                price: 120,
                thumbnail: "https://argentinapilotshop.com.ar/1762-large_default/lapicera-boeing.jpg",
                id: 2
            },
            {
                title: "Ruler",
                price: 85,
                thumbnail: "https://vinifan.com/wp-content/uploads/2020/01/Premium.png",
                id: 3
            },
            {
                title: "Angel Protractor",
                price: 750,
                thumbnail: "https://d1avenlh0i1xmr.cloudfront.net/04e39f11-adae-4d91-8c42-559556f30f54/1.jpg",
                id: 4
            },
            {
                title: "Notebook",
                price: 900,
                thumbnail: "https://cdn.shopify.com/s/files/1/0485/1810/3193/products/wirebounddot_1200x1200.jpg?v=1618681594",
                id: 5
            }
        ];

        await database("products").insert(products);

        console.log("products inserted!");
        database.destroy();

    } catch (error) {
        
        console.log(error);
        database.destroy();
    }
};

insertProducts();