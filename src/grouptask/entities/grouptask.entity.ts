export class Grouptask {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Grouptask',{
  orderBy: {
      Ngaytao: "ASC",
  }
  })
export class GrouptaskEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    pid : string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({default:0})
    Ordering:number;
    @Column({default:'0'})
    Trangthai:string;
    @Column({default:false})
    IsOpen:boolean;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }
 
