import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('cauhinhs')
export class CauhinhsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    title: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    detail:string;
    @Column()
    Trangthai: number;
    @Column()
    Ordering: number;
    @CreateDateColumn()
    Ngaytao: Date;   
    @Column()
    idTao: number; 
 }