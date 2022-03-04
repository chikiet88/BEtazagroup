import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('Lichhop',{
  orderBy: {
      Ngaytao: "DESC"
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
    @Column({collation: "utf8_general_ci"})
    Noidung: string;
    @Column({collation: "utf8_general_ci"})
    Trienkhai: string;
    @Column({collation: "utf8_general_ci"})
    Ketqua: string;
    @Column({collation: "utf8_general_ci"})
    Mongdoi: string;
    @Column({collation: "utf8_general_ci"})
    Dieuchinh:string;
    @Column({collation: "utf8_general_ci"})
    Dieukienkhac: string;
    @Column({collation: "utf8_general_ci"})
    Nguyennhan: string;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column()
    idTao:string;   
 }