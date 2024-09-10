import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    name?: string;
    price?: number[];
    float?: number[];
    category?: string;
    orderBy?: string;
    orderDirection?: "asc" | "desc"; // Ordenação por ascendente ou descendente
  }) {
    const { name, price, float, category, orderBy, orderDirection } = params;

    return this.prisma.item.findMany({
      where: {
        name: name ? { contains: name, mode: "insensitive" } : undefined,
        category: category ? { equals: category } : undefined,
        price: price
          ? {
              gte: price[0] ?? undefined,
              lte: price[1] ?? undefined,
            }
          : undefined,
        float: float
          ? {
              gte: float[0].toString(),
              lte: float[1].toString(),
            }
          : undefined,
      },
      // Adicionando a lógica de ordenação
      orderBy: orderBy
        ? {
            [orderBy]: orderDirection || "asc", // Ordena pelo campo especificado (ascendente por padrão)
          }
        : undefined,
    });
  }
}
