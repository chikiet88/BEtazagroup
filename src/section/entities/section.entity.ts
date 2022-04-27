export class Section {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Section',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class SectionEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    projectid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({default:0})
    Ordering:number;
    @Column()
    Type:string;
    @Column({default:0})
    Trangthai:number;
    @Column({default:false})
    IsOpen:boolean;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }
 export enum Type {
  Project = 'project',
  Task = 'task',
}
