import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Danhmuc',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class DanhmucEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    pid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Mota: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Slug: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Icon: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Image: string;
    @Column({default:0})
    Module:number;
    @Column({nullable:true})
    Type:string;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }