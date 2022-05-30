export class Tailieunguon {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Tailieunguon',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class TailieunguonEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    idDM: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"simple-array"})
    Tags: string[];
    @Column({nullable: true})
    DKTK:Date;
    @Column({nullable: true})
    Deadline:Date;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Noidung: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    Ghichu: string;
    @Column({type:"simple-array"})
    Tacgia: string[]
    @Column({type:"simple-array"})
    Kiemduyet: string[]
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }