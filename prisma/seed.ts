import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const items = Array.from({ length: 100 }).map((_, i) => ({
    name: `Item ${i + 1}`,
    image: `https://via.placeholder.com/150?text=Item+${i + 1}`,
    category: [
      'Adesivo',
      'Agente',
      'Chave',
      'Colecionável',
      'Emblema',
      'Escopeta',
      'Faca',
      'Luvas',
      'Metralhadora',
      'Pistola',
      'Recipiente',
      'Rifle',
      'Rifle de Precisão',
      'Submetralhadora',
      'Trilha Sonora',
    ][i % 15],
    float: (Math.random() * (1.0 - 0.0) + 0.0).toFixed(4), // Gera um valor float entre 0 e 1
    price: Math.floor(Math.random() * 100000) + 1, // Gera um valor entre 100 e 1000
  }));

  await prisma.item.createMany({
    data: items,
  });

  console.log('Seed executada com sucesso, 40 items criados.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
