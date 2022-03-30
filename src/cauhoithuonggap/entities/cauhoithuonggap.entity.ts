import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity('Cauhoithuonggap',{
  orderBy: {
      Ngaytao: "DESC",
  }
  })
export class CauhoithuonggapEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    Vitri : string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    NoidungCauhoi: string;
    @Column({type:"longtext",collation: "utf8_general_ci"})
    NoidungTraloi: string;
    @Column({type:"simple-array",default: () => "('[]')"})
    Cauhoituongtu: string;
    @CreateDateColumn()
    Ngaytao:Date;
    @Column()
    idTao:string;   
 }