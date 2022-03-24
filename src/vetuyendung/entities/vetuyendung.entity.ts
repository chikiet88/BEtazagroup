import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('vetuyendungs',{
  orderBy: {
      Ngaytao: "DESC"
  }
  })
export class VetuyendungsEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    //@Column({collation: "utf8_general_ci"})
    @Column()
    Vitri: string;
  //  @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    @Column()
    Nhansuhienco:number;
    @Column()
    Nhansucantuyen: number;
    @Column({type:'bigint'})
    Mucluongdukien: number;
    @Column({type:'bigint'})
    Tongthunhap: number;
    @Column()
    Thoigianthuviec: number;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    TNNS: string;
    @Column()
    Lydotuyen: string;
    @Column({type:'longtext',collation:"utf8_general_ci"})
    Mota: string;
    @Column({type:'longtext',collation:"utf8_general_ci"})
    Yeucau: string;
    @Column({collation: "utf8_general_ci",type:"simple-array",default: () => "('[]')" })
    Nguoipheduyet: string;
    @Column({type:'longtext',collation:"utf8_general_ci"})
    Ghichu: string;
    @Column()
    Step: number;
    @Column()
    Trangthai: number;
    @Column()
    published: number;
    @Column()
    ordering: number;
    @CreateDateColumn()
    Ngaytao: Date;   
    @Column()
    idTao: string; 
 }