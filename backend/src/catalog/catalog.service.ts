import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(query?: string) {
    if (!query) {
      return this.prisma.content.findMany();
    }
    return this.prisma.content.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { author: { contains: query, mode: "insensitive" } },
        ],
      },
    });
  }

  getById(id: string) {
    return this.prisma.content.findUnique({ where: { id } });
  }
}
