import { Controller, Get, Param, Query } from "@nestjs/common";
import { CatalogService } from "./catalog.service";

@Controller("catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  getAll(@Query("q") q?: string) {
    return this.catalogService.getAll(q);
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.catalogService.getById(id);
  }
}
