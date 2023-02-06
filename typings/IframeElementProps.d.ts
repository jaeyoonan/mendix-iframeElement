/**
 * This file was generated from IframeElement.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, FileValue } from "mendix";

export type SourceEnum = "fileDocument" | "static";

export interface IframeElementContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    source: SourceEnum;
    file: DynamicValue<FileValue>;
    url: string;
    src: string;
    width: string;
    height: string;
}

export interface IframeElementPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    source: SourceEnum;
    file: string;
    url: string;
    src: string;
    width: string;
    height: string;
}
