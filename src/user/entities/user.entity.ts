import { Category } from "src/category/entities/category.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	email: string

	@Column()
	password: string

	@OneToMany(() => Category, (categoty) => categoty.user, { onDelete: 'CASCADE' })
	categories: Category[]

	@OneToMany(() => Transaction, (transaction) => transaction.user, {onDelete: 'CASCADE'})
	transaction: Transaction[]

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}