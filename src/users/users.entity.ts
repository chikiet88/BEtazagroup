import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn } from 'typeorm';
@Entity("users")
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({collation: "utf8_general_ci"})
    name: string;
    @Column()
    SDT: string;
    @Column({collation: "utf8_general_ci"})
    email: string;
    @Column()
    password: string;
    @Column({collation: "utf8_general_ci",type:"simple-array"})
    profile: [];
    @CreateDateColumn()
    Ngaytao: Date;   
    
 }