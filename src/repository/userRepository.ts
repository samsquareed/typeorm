import { AppDataSource } from "../app"
import { User } from "../entities/User"


export const getUserFromRepository = (userId : number) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.findOneBy({id : userId})
    return user;
}

export const saveUserToRepository =  async(first_name : string, last_name : string, email : string) => {
    let user  = new User();
    user.firstName = first_name;
    user.lastName = last_name;
    user.email = email;

    const userRepository = AppDataSource.getRepository(User);
    const createdUser = await userRepository.save(user);

    return createdUser;
}