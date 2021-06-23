import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    find(army1: number, army2: number): Promise<"Army 1" | "Army 2">;
    private battle;
}
