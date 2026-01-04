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

    // Get all data
    const findAll = await prisma.user.findMany();
    console.log(findAll);

    // // get all data with condition
    // const findAllWithCondition = await prisma.user.findMany({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(findAllWithCondition);// return in a array

    // // return single data in a object
    // const findOne = await prisma.user.findUnique({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(findOne);

    // // if get data return the data. if not get throw error
    // const findOneWithErrorHandle = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 3,
    //     },
    // });
    // console.log(findOneWithErrorHandle);

    // update one data
    // const updateUser = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "JM"
    //     }
    // })
    // console.log(updateUser);

    // update many data at a time and return update data count
    const updateMany = await prisma.user.updateManyAndReturn({
        where: {
            profilePhoto: "link",
        },
        data: {
            profilePhoto: "https://image.com",
        },
    });
    console.log(updateMany);

    // update many data at a time and return update data

    const updateManyAndReturn = await prisma.user.updateManyAndReturn({
        where: {
            profilePhoto: "link",
        },
        data: {
            profilePhoto: "https://image.com",
        },
    });
    console.log(updateManyAndReturn);
};
main();
