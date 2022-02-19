import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn } from 'typeorm';
@Entity("users")
export class UsersEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    name: string;
    @Column()
    SDT: string;
    @Column({collation: "utf8_general_ci"})
    email: string;
    @Column()
    password: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    profile: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    Role: string;
    @CreateDateColumn()
    Ngaytao: Date;   
    
 }