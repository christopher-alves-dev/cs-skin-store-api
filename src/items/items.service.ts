import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
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
    orderDirection?: "asc" | "desc";
  }) {
    let priceFilter: Prisma.IntFilter<"Item"> = {};
    let floatFilter: Prisma.StringNullableFilter<"Item"> = {};

    if (params?.price && Array.isArray(params?.price)) {
      const [minPrice, maxPrice] = params?.price;
      priceFilter = {
        gte: minPrice || 0,
        ...(maxPrice && { lte: maxPrice }),
      };
    }

    if (params?.float && Array.isArray(params?.float)) {
      const [minFloat, maxFloat] = params?.float;
      floatFilter = {
        not: null,
        ...(minFloat !== undefined && { gte: String(minFloat) }),
        ...(maxFloat !== undefined && { lte: String(maxFloat) }),
      };
    }
    const conditionsToFilter: Prisma.ItemWhereInput = {
      ...(!!params?.name && {
        name: { contains: params?.name, mode: "insensitive" },
      }),
      ...(!!params?.category && {
        category: { equals: params?.category },
      }),
      price: priceFilter,
      float: floatFilter,
    };

    return this.prisma.item.findMany({
      where: conditionsToFilter,
      ...(!!params?.orderBy && {
        orderBy: {
          [params.orderBy]: params.orderDirection || "asc",
        },
      }),
    });
  }
}
