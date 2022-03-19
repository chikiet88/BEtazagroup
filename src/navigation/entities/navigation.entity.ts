import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated, ManyToOne, OneToMany, Tree, TreeChildren, TreeParent } from 'typeorm';
@Entity('Navigation',{orderBy: {Ngaytao: "ASC"}
  })
export class NavigationEntity {
    @PrimaryGeneratedColumn()
    uuid: number;    
    @Column()
    id: string;
    @Column({collation: "utf8_general_ci"})
    title: string;
    @Column()
    type: string;
    @Column()
    icon: string;
    @Column()
    link: string;
    @Column()
    parent: string
    @Column()
    level: number
    @CreateDateColumn()
    Ngaytao:Date;
    @Column({default: false})
    status:boolean; 
    @Column()
    idTao:string; 
 }