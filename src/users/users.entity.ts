import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn } from 'typeorm';
import { Role } from './users.dto';
@Entity("users",{orderBy: {Ngaytao: "DESC"}})
export class UsersEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    name: string;
    @Column()
    SDT: string;
    @Column({collation: "utf8_general_ci"})
    email: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    avatar: string;
    @Column()
    password: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    profile: string;
    @Column({type: 'enum', enum: Role, default: Role.User})
    Role: string;
    //@Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{Chinhanh:[],Menu:[]}')" })
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    Phanquyen: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    Menu: string;
    @CreateDateColumn()
    Ngaytao: Date;   
    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
 }