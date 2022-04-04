import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Danhmucauhoithuonggap',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class DanhmucauhoithuonggapEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    idparent: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    tieude: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    mota: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    slug: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    image: string;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }