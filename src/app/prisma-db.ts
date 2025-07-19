import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const addProduct = async () =>{
    const productCount = await prisma.product.count()

    if(productCount == 0){
        await prisma.product.createMany({
            data:[
                {title : "Product 1", price : 100, description: "This is product desc 1"},
                {title : "Product 2", price : 200, description: "This is product desc 2"},
                {title : "Product 3", price : 300, description: "This is product desc 3"},
            ]
        })
    }
}

addProduct()