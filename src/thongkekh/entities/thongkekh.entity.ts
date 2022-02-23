import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('thongkekh',{
  orderBy: {
      Ngaytao: "DESC"
  }
  })
export class Thongkekh {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    TenKH: string;
    @Column()
    SDT:string;
    @Column()
    TDS: number;
    @Column()
    TTT: number;
    @Column({type: 'datetime',nullable: true})
    LMD: string;
    @Column({collation: "utf8_general_ci"})
    NMD: string;
    @Column({type: 'datetime',nullable: true})
    LMC: string;
    @Column({collation: "utf8_general_ci"})
    NMC: string;
    @CreateDateColumn()
    Ngaytao: Date;   
 }