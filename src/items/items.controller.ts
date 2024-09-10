import { Controller, Get, Query } from "@nestjs/common";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(
    @Query("name") name?: string,
    @Query("price") price?: string,
    @Query("float") float?: string,
    @Query("category") category?: string,
    @Query("orderBy") orderBy?: string, // Campo de ordenação: "price" ou "float"
    @Query("orderDirection") orderDirection?: "asc" | "desc", // Direção de ordenação
  ) {
    return this.itemsService.findAll({
      name,
      price: price ? this.parseArrayQuery(price) : undefined,
      float: float ? this.parseArrayQuery(float) : undefined,
      category,
      orderBy,
      orderDirection,
    });
  }

  private parseArrayQuery(param: string): number[] {
    return param.replace("[", "").replace("]", "").split(",").map(Number);
  }
}
