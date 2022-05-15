import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { UsersEntity } from './users.entity';
@Entity('Profile', {
    orderBy: {
        Ngaytao: "DESC",
    }
})

export class ProfileEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    idUser: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Congty: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Khoi: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Phongban: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Vitri: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    MaNV: string;
    @Column({ default: 0 })
    CMND: Number;
    @Column({ nullable: true })
    Ngayvao: Date;
    @Column({ nullable: true })
    Ngaynghi: Date;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Diachi: string;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Facebook: string;
    @Column({ nullable: true })
    Ngaysinh: Date;
    @Column({ type: "text", collation: "utf8_general_ci" })
    Zalo: string;
    @Column({ default: 1 })
    Trangthai: number;
    @CreateDateColumn()
    Ngaytao: Date;
    @Column({ nullable: true })
    idTao: string;

}
