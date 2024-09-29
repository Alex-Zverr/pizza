import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'
import { prisma } from './prisma-client'

const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'admin',
				email: 'admin@test.com',
				password: hashSync('admin', 10),
				role: 'ADMIN',
				verified: new Date(),
			},
			{
				fullName: 'user',
				email: 'user@test.com',
				password: hashSync('user', 10),
				role: 'USER',
				verified: new Date(),
			},
		],
	})
	await prisma.category.createMany({
		data: categories,
	})
	await prisma.ingredient.createMany({
		data: ingredients,
	})
	await prisma.product.createMany({
		data: products,
	})

	const pizz1 = await prisma.product.create({
		data: {
			name: 'Овощи и грибы 🌱',
			categoryId: 1,
			imageUrl:
				'https://media.dodostatic.net/image/r:292x292/11EE7D61546D8483A61A0BBAA7ADCC78.avif',
			ingredients: {
				connect: ingredients.slice(0, 5),
			},
		},
	})
	const pizz2 = await prisma.product.create({
		data: {
			name: 'Диабло 🌶🌶',
			categoryId: 1,
			imageUrl:
				'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
			ingredients: {
				connect: ingredients.slice(5, 10),
			},
		},
	})
	const pizz3 = await prisma.product.create({
		data: {
			name: 'Цыпленок ранч',
			categoryId: 1,
			imageUrl:
				'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.avif',
			ingredients: {
				connect: ingredients.slice(10, 20),
			},
		},
	})

	await prisma.productVariant.createMany({
		data: [
			{
				productId: pizz1.id,
				pizzaType: 1,
				price: 399,
				size: 20,
			},
			{
				productId: pizz1.id,
				pizzaType: 1,
				price: 500,
				size: 30,
			},
			{
				productId: pizz1.id,
				pizzaType: 1,
				price: 700,
				size: 40,
			},
			{
				productId: pizz1.id,
				pizzaType: 2,
				price: 460,
				size: 20,
			},
			{
				productId: pizz1.id,
				pizzaType: 2,
				price: 560,
				size: 30,
			},
			{
				productId: pizz1.id,
				pizzaType: 2,
				price: 860,
				size: 40,
			},

			{
				productId: pizz2.id,
				pizzaType: 1,
				price: 450,
				size: 20,
			},
			{
				productId: pizz2.id,
				pizzaType: 1,
				price: 610,
				size: 30,
			},
			{
				productId: pizz2.id,
				pizzaType: 1,
				price: 730,
				size: 40,
			},
			{
				productId: pizz2.id,
				pizzaType: 2,
				price: 430,
				size: 20,
			},
			{
				productId: pizz2.id,
				pizzaType: 2,
				price: 590,
				size: 30,
			},
			{
				productId: pizz2.id,
				pizzaType: 2,
				price: 800,
				size: 40,
			},

			{
				productId: pizz3.id,
				pizzaType: 1,
				price: 540,
				size: 20,
			},
			{
				productId: pizz3.id,
				pizzaType: 2,
				price: 820,
				size: 30,
			},
			{
				productId: pizz3.id,
				pizzaType: 2,
				price: 1100,
				size: 40,
			},
		],
	})
}
async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
}
async function main() {
	try {
		await down()
		await up()
	} catch (error) {
		console.error(error)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
