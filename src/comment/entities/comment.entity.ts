import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Comment',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class CommentEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    idTask : string;
    @Column({collation: "utf8_general_ci"})
    Noidung: string;
    @Column({ default: true })
    Status: boolean;
    @Column({collation: "utf8_general_ci"})
    idTao: string;    
    @CreateDateColumn()
    Ngaytao:Date;
 }