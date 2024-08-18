/**
 * This file was generated from MxWidgetSample.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface MxWidgetSampleContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    width: number;
    height: number;
}

export interface MxWidgetSamplePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    width: number | null;
    height: number | null;
}
