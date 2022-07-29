import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
@Entity('Profile', {
  orderBy: {
    Ngaytao: 'DESC',
  },
})
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  idUser: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Hoten: string;
  @Column({ nullable: true })
  Ngaysinh: Date;
  @Column({ default: 0 })
  CMND: number;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  SDT: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Nguyenquan: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  HKTT: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Diachi: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Facebook: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Zalo: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Congty: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Khoi: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Phongban: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  Vitri: string;
  @Column({ type: 'text', collation: 'utf8_general_ci', nullable: true })
  MaNV: string;
  @Column({ nullable: true })
  Ngayvao: Date;
  @Column({ nullable: true })
  Ngaynghi: Date;
  @Column({ default: 1 })
  Gioitinh: number;
  @Column({ default: 1 })
  Trangthai: number;
  @CreateDateColumn()
  Ngaytao: Date;
  @Column({ nullable: true })
  idTao: string;
}
