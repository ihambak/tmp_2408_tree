// import { ReactElement, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
// import { MxWidgetSamplePreviewProps } from "../typings/MxWidgetSampleProps";

// export function preview({ sampleText }: MxWidgetSamplePreviewProps): ReactElement {
//     return <HelloWorldSample sampleText={sampleText} />;
// }

export function getPreviewCss(): string {
    return require("./ui/MxWidgetSample.css");
}
