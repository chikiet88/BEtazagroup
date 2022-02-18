import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated } from 'typeorm';
@Entity('vetuyendungs')
export class VetuyendungsEntity {
    @PrimaryGeneratedColumn()
    id: string;
    //@Column({collation: "utf8_general_ci"})
    @Column()
    @Generated("uuid")
    uuid: string;
    @Column()
    Vitri: number;
  //  @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    @Column()
    SLHT:number;
    @Column()
    SLCT: number;
    @Column()
    LuongDK: number;
    @Column()
    TGThuviec: number;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    TNNS: number;
    @Column()
    Lydo: number;
    @Column({type:'longtext',collation:"utf8_general_ci"})
    Mota: string;
    @Column({type:'longtext',collation:"utf8_general_ci"})
    Yeucau: string;
    @Column({collation: "utf8_general_ci",type:"simple-json",default: () => "('{}')" })
    Pheduyet: {};
    @Column()
    Trangthai: number;
    @Column()
    published: number;
    @Column()
    ordering: number;
    @CreateDateColumn()
    Ngaytao: Date;   
    @Column()
    idTao: number; 
 }