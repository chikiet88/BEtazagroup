import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Changelog',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class ChangelogEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable: true})
    Version : string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Noidung: string;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }