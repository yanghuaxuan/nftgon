import { Canvas, JpegConfig, JPEGStream, NodeCanvasRenderingContext2DSettings, 
    PngConfig, PNGStream } from "canvas";

export declare class NFTGon {
    static nftify(path: string): Canvas;
    private static hexagonify(ctx: NodeCanvasRenderingContext2DSettings);
}