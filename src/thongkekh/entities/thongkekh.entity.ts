import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('Khachhang1',{
  orderBy: {
      Ngaytao: "DESC"
  }
  })
export class Khachhang1 {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    TenKH: string;
    @Column({collation: "utf8_general_ci"})
    Dichvu: string;
    @Column()
    SDT:string;
    @Column()
    SDT2:string;
    @Column()
    Doanhso: number;
    @Column()
    Tonglieutrinh: number;
    @Column()
    Dathu: number;
    @Column({type: 'datetime',nullable: true})
    NgayTaoDV: string;
    @Column({collation: "utf8_general_ci"})
    Ghichu: string;
    @Column({collation: "utf8_general_ci"})
    Chinhanh: string;
    @CreateDateColumn()
    Ngaytao: Date;   
 }
// export class Thongkekh {
//     @PrimaryGeneratedColumn("uuid")
//     id: string;
//     @Column({collation: "utf8_general_ci"})
//     TenKH: string;
//     @Column()
//     SDT:string;
//     @Column()
//     TDS: number;
//     @Column()
//     TTT: number;
//     @Column({type: 'datetime',nullable: true})
//     LMD: string;
//     @Column({collation: "utf8_general_ci"})
//     NMD: string;
//     @Column({type: 'datetime',nullable: true})
//     LMC: string;
//     @Column({collation: "utf8_general_ci"})
//     NMC: string;
//     @CreateDateColumn()
//     Ngaytao: Date;   
//  }