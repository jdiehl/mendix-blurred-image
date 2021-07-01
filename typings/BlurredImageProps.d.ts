/**
 * This file was generated from BlurredImage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { DynamicValue, NativeImage } from "mendix";

export interface BlurredImageProps<Style> {
    name: string;
    style: Style[];
    image: DynamicValue<NativeImage>;
    width: number;
    height: number;
    blurRadius: number;
}

export interface BlurredImagePreviewProps {
    class: string;
    style: string;
    image: string;
    width: number | null;
    height: number | null;
    blurRadius: number | null;
}
