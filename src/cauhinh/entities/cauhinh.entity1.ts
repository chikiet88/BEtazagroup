import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Index, CreateDateColumn, Generated, OneToMany, ManyToOne } from 'typeorm';
// @Entity('cauhinhs')
// export class CauhinhsEntity {
//     @PrimaryGeneratedColumn()
//     id: number;
//     @Column({collation: "utf8_general_ci"})
//     title: string;
//     @Column({collation: "utf8_general_ci"})
//     detail: string;
//     @Column()
//     Trangthai: number;
//     @Column()
//     Ordering: number;
//     @CreateDateColumn()
//     Ngaytao: Date;   
//     @Column()
//     idTao: number; 
//  }

 @Entity('cauhinhs')
 export class Cauhinh {
   @PrimaryGeneratedColumn()
   id: number;
   @Column({collation: "utf8_general_ci"})
   title: string;
   @OneToMany(() => Detail, detail => detail.cauhinh)
   details: Detail[];
//    @OneToMany(type => Detail, Cauhinh => Cauhinh.detail, { cascade: true, eager: true, })
//    @Column({collation: "utf8_general_ci"})
//    detail: Detail[];
   @Column()
   Trangthai: number;
   @Column()
   Ordering: number;
   @CreateDateColumn()
   Ngaytao: Date;   
   @Column()
   idTao: number; 

 }
 
 @Entity('details')
 export class Detail {
   @PrimaryGeneratedColumn()
   id: number;
   @Column({collation: "utf8_general_ci"})
   Thuoctinh?:string
   @ManyToOne(() => Cauhinh, cauhinh => cauhinh.details)
   cauhinh: Cauhinh;
//    @ManyToOne(type => Role, role => role.roleLevels, { nullable: false, onDelete: 'CASCADE' })
//    cauhinh: Cauhinh;
 }

