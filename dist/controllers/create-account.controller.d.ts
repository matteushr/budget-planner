import { PrismaService } from 'src/prisma/prisma.service';
export declare class CreateAccountController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(body: any): Promise<void>;
}
