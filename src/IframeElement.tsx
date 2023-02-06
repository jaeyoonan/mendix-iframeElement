import { ReactElement, createElement, useState, useEffect } from "react";
import { IframeElementContainerProps } from "../typings/IframeElementProps";
import ClipLoader from "react-spinners/ClipLoader";
import Iframe from "react-iframe";
import "./ui/IframeElement.css";

export function IframeElement({
    file,
    width = "100%",
    height = "100%",
    url,
    src,
    source
}: IframeElementContainerProps): ReactElement {
    const [isLoading, setIsLoading] = useState(true);
    const [iframeUrl, setIframeUrl] = useState<string>(source === "fileDocument" ? "" : url);
    useEffect(() => {
        if (source === "fileDocument") {
            const convertBlob = async (uri: string) => {
                const res = await fetch(uri);
                const blob = await res.blob();
                const blobUrl = URL.createObjectURL(blob);
                setIframeUrl(blobUrl);
            };
            if (file?.value) {
                convertBlob(file.value.uri);
            }
        }
        setIsLoading(false);
    }, [file, source]);
    if (isLoading) {
        return (
            <ClipLoader
                color={"#000000"}
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        );
    } else {
        return (!iframeUrl || iframeUrl === null || iframeUrl === "") && !src ? (
            <div />
        ) : (
            <Iframe width={width} height={height} url={iframeUrl} src={src} />
        );
    }
}
