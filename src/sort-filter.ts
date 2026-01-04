import { prisma } from "../lib/prisma";

(async () => {
    const sortData = await prisma.user.findMany({
        where: {
            name: {
                contains: "ju",
                mode: "insensitive" // make case insensitive 
            }
        },
        orderBy: {
            // id: "asc",  //ascending --------
            id: "desc",
        },
    });
    console.log(sortData);
})();
