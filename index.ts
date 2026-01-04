import { prisma } from "./lib/prisma";


const main = async () => {
    // const result = await prisma.user.create({
    //     data: {
    //         name: "jubaer",
    //         email: "jubaer@gmail.com",
    //         profilePhoto: "link",
    //     },
    // });
    // console.log(result);
    const findAll = await prisma.user.findMany();
    console.log(findAll);
};
main();
