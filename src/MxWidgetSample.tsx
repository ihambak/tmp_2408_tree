import { useRef, useEffect, useState, ReactElement, createElement } from "react";
import JqxButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons";
import JqxTree, { jqx, ITreeItem } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtree";

import { MxWidgetSampleContainerProps } from "../typings/MxWidgetSampleProps";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.light.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material.css";

import "./ui/MxWidgetSample.css";

interface CustomTreeItem extends ITreeItem {
    id: number;
    parentId: number;
    value?: string;
}

export function MxWidgetSample(props: MxWidgetSampleContainerProps): ReactElement {
    const myTree = useRef<JqxTree>(null);
    const [buttonSize] = useState({ width: 100, height: 20 });
    const [source, setSource] = useState<any[]>([]);
    const [selectedItemInfo, setSelectedItemInfo] = useState<any | null>(null); // 선택된 항목 정보를 저장하기 위한 상태

    // const treeData = [
    //     { id: "home", label: "Home" },
    //     {
    //         id: "solutions",
    //         label: "Solutions",
    //         items: [
    //             { label: "Education" },
    //             { label: "Financial services" },
    //             { label: "Government" },
    //             { label: "Manufacturing" },
    //             {
    //                 label: "Solutions",
    //                 items: [
    //                     { label: "Consumer photo and video" },
    //                     { label: "Mobile" },
    //                     { label: "Rich Internet applications" },
    //                     { label: "Technical communication" },
    //                     { label: "Training and eLearning" },
    //                     { label: "Web conferencing" }
    //                 ]
    //             },
    //             { label: "All industries and solutions" }
    //         ]
    //     },
    //     {
    //         label: "Products",
    //         items: [{ label: "PC products" }, { label: "Mobile products" }, { label: "All products" }]
    //     },
    //     {
    //         label: "Support",
    //         items: [
    //             { label: "Support home" },
    //             { label: "Customer Service" },
    //             { label: "Knowledge base" },
    //             { label: "Books" },
    //             { label: "Training and certification" },
    //             { label: "Support programs" },
    //             { label: "Forums" },
    //             { label: "Documentation" },
    //             { label: "Updates" }
    //         ]
    //     },
    //     {
    //         label: "Communities",
    //         items: [
    //             { label: "Designers" },
    //             { label: "Developers" },
    //             { label: "Educators and students" },
    //             { label: "Partners" },
    //             {
    //                 label: "By resource",
    //                 items: [
    //                     { label: "Labs" },
    //                     { label: "TV" },
    //                     { label: "Forums" },
    //                     { label: "Exchange" },
    //                     { label: "Blogs" },
    //                     { label: "Experience Design" }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: "Company",
    //         items: [
    //             { label: "About Us" },
    //             { label: "Press" },
    //             { label: "Investor Relations" },
    //             { label: "Corporate Affairs" },
    //             { label: "Careers" },
    //             { label: "Showcase" },
    //             { label: "Events" },
    //             { label: "Contact Us" },
    //             { label: "Become an affiliate" }
    //         ]
    //     }
    // ];

    useEffect(() => {
        // const home = document.querySelector("#home");
        // const solutions = document.querySelector("#solutions");
        //
        // if (myTree.current) {
        //     myTree.current.selectItem(home);
        //     myTree.current.expandItem(solutions);
        // }

        const data = [
            { id: 3, parentid: 1, text: "Peppermint Hot Chocolate", value: "$2.3" },
            { id: 4, parentid: 1, text: "Salted Caramel Hot Chocolate", value: "$2.3" },
            { id: 5, parentid: 1, text: "White Hot Chocolate", value: "$2.3" },
            { id: 1, parentid: -1, text: "Chocolate Beverage", value: "$2.3" },
            { id: 6, parentid: -1, text: "Espresso Beverage", value: "$2.3" },
            { id: 7, parentid: 6, text: "Caffe Americano", value: "$2.3" },
            { id: 8, parentid: 6, text: "Caffe Latte", value: "$2.3" },
            { id: 9, parentid: 6, text: "Caffe Mocha", value: "$2.3" },
            { id: 10, parentid: 6, text: "Cappuccino", value: "$2.3" },
            { id: 11, parentid: 6, text: "Pumpkin Spice Latte", value: "$2.3" },
            { id: 12, parentid: -1, text: "Frappuccino" },
            { id: 13, parentid: 12, text: "Caffe Vanilla Frappuccino", value: "$2.3" },
            { id: 15, parentid: 13, text: "450 calories", value: "$2.3" },
            { id: 16, parentid: 13, text: "16g fat", value: "$2.3" },
            { id: 17, parentid: 13, text: "13g protein", value: "$2.3" },
            { id: 2, parentid: 1, text: "Hot Chocolate", value: "$2.3" },
            { id: 18, parentid: 2, text: "Hot Chocolate2", value: "$1.2" },
            { id: 19, parentid: 2, text: "Hot Chocolate3", value: "$1.3" },
            { id: 14, parentid: 12, text: "Caffe Vanilla Frappuccino Light", value: "$2.3" }
        ];

        const source = {
            datafields: [{ name: "id" }, { name: "parentid" }, { name: "text" }, { name: "value" }],
            datatype: "json",
            id: "id",
            localdata: data
        };

        data.sort((a, b) => a.id - b.id);

        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        // const records = dataAdapter.getRecordsHierarchy("id", "parentid", "items", [{ name: "text", map: "label" }]);
        const records = dataAdapter.getRecordsHierarchy("id", "parentid", "items", [
            { name: "text", map: "label" }, // Corrected from label to text
            // { name: "id", map: "id" },
            // { name: "parentid", map: "parentid" },
            { name: "value", map: "value" }
        ]);

        setSource(records);

        // 초기 선택 및 확장 로직
        // const selectAndExpand = () => {
        //     if (myTree.current) {
        //         const items = myTree.current.getItems() as CustomTreeItem[];
        //         const chocolateBeverageItem = items.find(item => item.id === 1);
        //
        //         if (chocolateBeverageItem) {
        //             myTree.current!.selectItem(chocolateBeverageItem.element);
        //             myTree.current!.expandItem(chocolateBeverageItem.element);
        //         }
        //     }
        // };
        //
        // // setTimeout을 사용하여 렌더링 후 선택 및 확장 수행
        // setTimeout(selectAndExpand, 100);

        const selectAndExpand = () => {
            if (myTree.current) {
                const items = myTree.current.getItems() as CustomTreeItem[];
                const espressoBeverageItem = items.find(item => item.label === "Espresso Beverage");

                if (espressoBeverageItem) {
                    myTree.current!.selectItem(espressoBeverageItem.element);
                    myTree.current!.expandItem(espressoBeverageItem.element);
                }
            }
        };

        // Using setTimeout to ensure the tree is fully rendered before selecting and expanding
        setTimeout(selectAndExpand, 100);
    }, []);

    // const handleSelect = (event: any) => {
    //     const itemElement = event.args.element;
    //     const itemData = myTree.current!.getItem(itemElement) as CustomTreeItem;
    //
    //     // Check if itemData is defined and has the expected properties
    //     if (itemData) {
    //         const idx = (myTree.current!.getItems() as CustomTreeItem[]).findIndex(i => i.id === itemData.id);
    //
    //         setSelectedItemInfo({
    //             id: itemData.id,
    //             parentId: itemData.parentid,
    //             text: itemData.label,
    //             value: itemData.value,
    //             index: idx
    //         });
    //     }
    // };

    const handleSelect = (event: any) => {
        const itemElement = event.args.element;
        const itemData = myTree.current!.getItem(itemElement) as CustomTreeItem;

        console.log("아이템", itemData);

        if (itemData) {
            const idx = (myTree.current!.getItems() as CustomTreeItem[]).findIndex(i => i.id === itemData.id);

            setSelectedItemInfo({
                id: itemData.id,
                parentId: itemData.parentId, // Ensure this is correctly assigned
                text: itemData.label, // Make sure to use 'text' if 'label' isn't correct
                value: itemData.value,
                index: idx
            });
        }
    };

    const handleAddOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.addTo({ label: "Item" }, selectedItem.element);
            myTree.current!.render();
        }
    };

    const handleAddAfterOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.addAfter({ label: "Item" }, selectedItem.element);
            myTree.current!.render();
        }
    };

    const handleAddBeforeOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.addBefore({ label: "Item" }, selectedItem.element);
            myTree.current!.render();
        }
    };

    const handleUpdateOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.updateItem({ label: "Item" }, selectedItem.element);
            myTree.current!.render();
        }
    };

    const handleRemoveOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.removeItem(selectedItem.element);
            myTree.current!.render();
        }
    };

    const handleDisableOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.disableItem(selectedItem.element);
        }
    };

    const handleExpandOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.expandItem(selectedItem.element);
        }
    };

    const handleCollapseOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            myTree.current!.collapseItem(selectedItem.element);
        }
    };

    const handleExpandAllOnClick = () => {
        myTree.current!.expandAll();
    };

    const handleCollapseAllOnClick = () => {
        myTree.current!.collapseAll();
    };

    const handleEnableAllOnClick = () => {
        myTree.current!.enableAll();
    };

    const handleNextOnClick = () => {
        const selectedItem: ITreeItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            const nextItem = selectedItem.element.nextElementSibling;
            if (nextItem != null) {
                myTree.current!.selectItem(nextItem);
                myTree.current!.ensureVisible(nextItem);
            }
        }
    };

    const handlePreviousOnClick = () => {
        const selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem) {
            const previousItem = selectedItem.element.previousElementSibling;
            if (previousItem != null) {
                myTree.current!.selectItem(previousItem);
                myTree.current!.ensureVisible(previousItem);
            }
        }
    };

    return (
        <div>
            <JqxTree
                ref={myTree}
                style={{ marginLeft: "20px", float: "left" }}
                width={props.width}
                height={props.height}
                source={source}
                onSelect={handleSelect}
            />
            <JqxButton value="Add" onClick={handleAddOnClick} width={buttonSize.width} height={buttonSize.height} />
            <JqxButton
                value="Add After"
                onClick={handleAddAfterOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Add Before"
                onClick={handleAddBeforeOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Update"
                onClick={handleUpdateOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Remove"
                onClick={handleRemoveOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Disable"
                onClick={handleDisableOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Expand"
                onClick={handleExpandOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Collapse"
                onClick={handleCollapseOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Expand All"
                onClick={handleExpandAllOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Collapse All"
                onClick={handleCollapseAllOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Enable All"
                onClick={handleEnableAllOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Next Item"
                onClick={handleNextOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />
            <JqxButton
                value="Previous Item"
                onClick={handlePreviousOnClick}
                width={buttonSize.width}
                height={buttonSize.height}
            />

            <div style={{ marginLeft: "220px" }}>
                {selectedItemInfo ? (
                    <div>
                        <h5>선택된 항목 정보</h5>
                        <p>ID: {selectedItemInfo.id}</p>
                        <p>Parent ID: {selectedItemInfo.parentId}</p>
                        <p>Label: {selectedItemInfo.text}</p>
                        <p>Value: {selectedItemInfo.value}</p>
                        <p>Index: {selectedItemInfo.index}</p>
                    </div>
                ) : (
                    <h5>항목을 선택하세요.</h5>
                )}
            </div>
        </div>
    );
}
