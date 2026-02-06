import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  receita: number;

  @Column({ type: 'varchar', length: 255 })
  origem: string;

  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'responsavel' })
  responsavel: Pessoa;

  @CreateDateColumn()
  data: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
