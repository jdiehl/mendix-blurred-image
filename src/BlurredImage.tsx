import { ReactNode, createElement } from "react";
import { Image, ImageStyle, ImageURISource } from "react-native";

import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";

import { BlurredImageProps } from "../typings/BlurredImageProps";

export interface CustomStyle extends Style {
    image: ImageStyle;
}

// just for testing
const defaultStyle: CustomStyle = {
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    }
};

export function BlurredImage({ image, blurRadius, style }: BlurredImageProps<CustomStyle>): ReactNode {
    // wait for the image to be available
    if (image?.status !== "available") {
        return null;
    }

    // extract image source
    const imageSource = image.value as ImageURISource;
    // merge styles
    const styles = mergeNativeStyles(defaultStyle, style);

    // render the react native image
    return <Image source={imageSource} blurRadius={blurRadius} style={styles.image} />;
}
