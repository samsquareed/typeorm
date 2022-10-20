import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("user")  // even if user is not written in entity then also table created with name user(User => user)
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name : 'first_name',
    })
    firstName : string;

    @Column({
        name : 'last_name',
    })
    lastName : string;

    @Column()
    email : string;
}