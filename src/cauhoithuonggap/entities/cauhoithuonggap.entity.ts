import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Cauhoithuonggap',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class CauhoithuonggapEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({type:"simple-array"})
    Vitri : string[];
    @Column({nullable: true})
    Danhmuc : string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    NoidungCauhoi: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    NoidungTraloi: string;
    @Column({type:"simple-array"})
    Cauhoituongtu: string[];
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }