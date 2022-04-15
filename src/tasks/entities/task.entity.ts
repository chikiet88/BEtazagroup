export class Task {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Task',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class TaskEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    pid: string;
    @Column()
    gid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({nullable: true})
    Deadline: Date;
    @Column({type:"simple-array"})
    Thamgia: string[];
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }