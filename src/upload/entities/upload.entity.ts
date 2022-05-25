export class Upload {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Upload',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class UploadEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    uuid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Lienket: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Exten: string;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }