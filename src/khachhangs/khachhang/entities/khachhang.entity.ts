import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('Khachhang',{
  orderBy: {
      Ngaytao: "DESC"
  }
  })
export class KhachhangEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    TenKH: string;
    @Column()
    SDT:string;
    @Column()
    SDT2:string;
    @Column()
    Dathu: number;
    @Column({type: 'datetime',nullable: true})
    Ghichu: string;
    @Column({collation: "utf8_general_ci"})
    Chinhanh: string;
    @CreateDateColumn()
    Ngaytao: Date;   
 }