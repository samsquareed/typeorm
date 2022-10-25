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

export const updateUserRepository = async (id : number, first_name : string, last_name : string, email : string) => {
    const userRepository = AppDataSource.getRepository(User);

    // await userRepository.update(id, {
    //     firstName: first_name,
    //     lastName: last_name,
    //     email : email
    // })

    await AppDataSource.manager.transaction("SERIALIZABLE",
        async (transactionalEntityManager)=> {
        await transactionalEntityManager.update(
            User,
            {id},
            {
                firstName: first_name,
                lastName: last_name,
                email: email
            }
        )
        return "user updated successfully!";

    })
    return "user updated successfully!";
}


export const deleteUserRepository = async (id : number) => {
    const userRepository = AppDataSource.getRepository(User);

    const userDelete = await userRepository.delete(id);
    console.log(userDelete);
    return userDelete;
}