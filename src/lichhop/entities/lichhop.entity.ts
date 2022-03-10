import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('Lichhop',{
  orderBy: {
      Ngaytao: "DESC",
      Batdau: "ASC",
      Hoanthanh: "ASC",
      Review: "ASC",
  }
  })
export class Lichhop {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    Loaihinh : string;
    @Column({collation: "utf8_general_ci"})
    Tieude: string;
    @Column({collation: "utf8_general_ci"})
    Congty: string;
    @Column()
    Chutri: string;
    @Column({type:"simple-array",default: () => "('[]')"})
    Thamgia: string[];
    @Column()
    Ngansach: number;
    @Column({type: 'datetime',nullable: true})
    Batdau: Date;
    @Column({type: 'datetime',nullable: true})
    Ketthuc: Date;
    @Column({type: 'datetime',nullable: true})
    Review: Date;
    @Column({type: 'datetime',nullable: true})
    Hoanthanh: Date;
    @Column({collation: "utf8_general_ci",nullable: true})
    Noidung: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Trienkhai: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Ketqua: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Mongdoi: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Dieuchinh:string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Dieukienkhac: string;
    @Column({collation: "utf8_general_ci",nullable: true})
    Nguyennhan: string;
    @CreateDateColumn()
    //@Column({type: 'datetime',nullable: true})
    Ngaytao:Date;
    @Column()
    idTao:string;   
 }