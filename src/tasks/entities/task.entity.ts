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
    sid: string;
    @Column({default:0})
    gid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({nullable: true})
    Batdau: Date;
    @Column({nullable: true})
    Ketthuc: Date;
    @Column({nullable: true})
    Deadline: Date;
    @Column()
    Thuchien: string;
    @Column({default:1})
    Uutien:number;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }

@Entity('TaskNote',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class TaskNoteEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    tid: string;
    @Column()
    gid: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({nullable: true})
    Batdau: Date;
    @Column({nullable: true})
    Ketthuc: Date;
    @Column({nullable: true})
    Deadline: Date;
    @Column()
    Thuchien: string;
    @Column({default:1})
    Uutien:number;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }