import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('Notification',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class NotificatioEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({collation: "utf8_general_ci"})
    idFrom : string;
    @Column({collation: "utf8_general_ci"})
    idTo: string;
    @Column({collation: "utf8_general_ci"})
    Tieude: string;
    @Column({collation: "utf8_general_ci"})
    Noidung: string;
    @Column({ default: false })
    Status: boolean;
    @Column({collation: "utf8_general_ci"})
    Lienket: string;
    @Column({type: 'datetime',nullable: true})
    Ngaydoc: Date;    
    @CreateDateColumn()
    Ngaytao:Date;
 }