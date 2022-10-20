import { AppDataSource } from "../app"
import { User } from "../entities/User"


export const getUserFromRepository = (userId : number) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.findOneBy({id : userId})
    return user;
}