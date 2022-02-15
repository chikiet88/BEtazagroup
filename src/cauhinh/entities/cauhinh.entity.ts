import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('cauhinhs')
export class CauhinhsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({collation: "utf8_general_ci"})
    title: string;
    @Column({collation: "utf8_general_ci",type:"simple-array"})
    data: [];
    @Column()
    Trangthai: number;
    @Column()
    Ordering: number;
    @CreateDateColumn()
    Ngaytao: Date;   
    @Column()
    idTao: number; 
 }