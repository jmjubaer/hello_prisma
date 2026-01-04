import { prisma } from "../lib/prisma";

const main = async () => {
    // const result = await prisma.user.create({
    //     data: {
    //         name: "jubaer3",
    //         email: "jubaer@gmail.com",
    //         profilePhoto: "link",
    //     },
    // });
    // console.log(result);

    // insert data and return count
    //   const insertManyUser = await prisma.user.createMany({[{data..},{data..}]})

    
    // insert many data at a time and return data
    const insertUsers = await prisma.user.createManyAndReturn({
        data: [
            {
                name: "arif",
                email: "arif@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "jabed",
                email: "jabed@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "juel",
                email: "juel@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "pinik",
                email: "pinik@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "jaima",
                email: "jaima@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "zuma",
                email: "zuma@gmail.com",
                profilePhoto: "link",
            },
            {
                name: "noyon",
                email: "noyon@gmail.com",
                profilePhoto: "link",
            },
        ],
    });
    console.log(insertUsers);

    // Get all data
    // const findAll = await prisma.user.findMany();
    // console.log(findAll);
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
    // const updateMany = await prisma.user.updateManyAndReturn({
    //     where: {
    //         profilePhoto: "link",
    //     },
    //     data: {
    //         profilePhoto: "https://image.com",
    //     },
    // });
    // console.log(updateMany);
    // update many data at a time and return update data
    // const updateManyAndReturn = await prisma.user.updateManyAndReturn({
    //     where: {
    //         profilePhoto: "link",
    //     },
    //     data: {
    //         profilePhoto: "https://image.com",
    //     },
    // });
    // console.log(updateManyAndReturn);
    // Delete one and return the data
    // const deleteOne = await prisma.user.delete({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(deleteOne);
    // delete many data and rerun count
    // const deleteMany = await prisma.user.deleteMany({
    //     where: {
    //         id: {
    //             lt: 3
    //         },
    //     },
    // });
    // console.log(deleteMany);
};
main();
