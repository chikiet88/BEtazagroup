export class Project {}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Project',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class ProjectEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Tieude: string;
    @Column({type:"text",collation: "utf8_general_ci"})
    Mota: string;
    @Column({nullable: true})
    Deadline: Date;
    @Column({type:"simple-array"})
    Thamgia: string[];
    @Column({default:false})
    Noibat:boolean;
    @Column({default:0})
    Ordering:number;
    @Column({default:0})
    Trangthai:number;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({nullable: true})
    idTao:string;   
 }