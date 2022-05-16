import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

import {
  PlayerCreateInput,
  PlayerUpdateInput,
  PlayerDeleteInput,
} from '../../graphql/schema'
import { PrismaService } from '../../services'

@Injectable()
export class PlayerService {
  constructor(
    @Inject(forwardRef(() => PrismaService)) private readonly ps: PrismaService
  ) {}

  async create<T extends Prisma.PlayerEntityInclude>(
    createInput: PlayerCreateInput,
    include: Prisma.SelectSubset<T, Prisma.PlayerEntityInclude> = undefined
  ) {
    const Player = await this.ps.PlayerEntity.create({
      data: {
        ...createInput,
      },
    })

    return this.ps.PlayerEntity.findUnique({ where: { id: Player.id }, include })
  }

  async update<T extends Prisma.PlayerEntityInclude>(
    updateInput: PlayerUpdateInput,
    include: Prisma.SelectSubset<T, Prisma.PlayerEntityInclude> = undefined
  ) {
    const { uuid, ...updateInputRest } = updateInput

    const Player = await this.ps.PlayerEntity.findUnique({ where: { uuid }, rejectOnNotFound: true })

    await this.ps.PlayerEntity.update({
      where: { id: Player.id },
      data: {
        ...updateInputRest,
      },
    })

    return this.ps.PlayerEntity.findUnique({ where: { id: Player.id }, include })
  }

  async delete(deleteInput: PlayerDeleteInput): Promise<boolean> {
    const { uuid } = deleteInput

    await this.ps.PlayerEntity.delete({ where: { uuid } })

    return true
  }
}
