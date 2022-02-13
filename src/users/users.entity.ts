import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index } from 'typeorm';
@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    SDT: string;
    @Column()
    email: string;
    @Column()
    password: string;
    
 }