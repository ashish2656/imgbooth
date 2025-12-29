module.exports = [
"[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorProvider",
    ()=>EditorProvider,
    "useEditor",
    ()=>useEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const EditorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function useEditor() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EditorContext);
    if (!context) {
        throw new Error("useEditor must be used within EditorProvider");
    }
    return context;
}
function EditorProvider({ children }) {
    const [template, setTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userPhoto, setUserPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [textFields, setTextFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [photoPosition, setPhotoPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0
    });
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("upload");
    const fabricCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fabricImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updateTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fieldId, value)=>{
        setTextFields((prev)=>({
                ...prev,
                [fieldId]: value
            }));
    }, []);
    const updatePhotoPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((position)=>{
        setPhotoPosition((prev)=>({
                ...prev,
                ...position
            }));
        // Update Fabric.js image if it exists
        if (fabricImageRef.current) {
            const img = fabricImageRef.current;
            if (position.x !== undefined) img.set('left', position.x);
            if (position.y !== undefined) img.set('top', position.y);
            if (position.scale !== undefined) img.set('scaleX', position.scale);
            if (position.scale !== undefined) img.set('scaleY', position.scale);
            if (position.rotation !== undefined) img.set('angle', position.rotation);
            if (fabricCanvasRef.current) {
                fabricCanvasRef.current.renderAll();
            }
        }
    }, []);
    const setFabricCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((canvas)=>{
        fabricCanvasRef.current = canvas;
    }, []);
    const setFabricImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((image)=>{
        fabricImageRef.current = image;
    }, []);
    const resetEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTemplate(null);
        setUserPhoto(null);
        setTextFields({});
        setPhotoPosition({
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        });
        setActiveTool("upload");
        if (fabricCanvasRef.current) {
            fabricCanvasRef.current.clear();
        }
        fabricImageRef.current = null;
    }, []);
    const value = {
        template,
        setTemplate,
        userPhoto,
        setUserPhoto,
        textFields,
        updateTextField,
        photoPosition,
        updatePhotoPosition,
        activeTool,
        setActiveTool,
        resetEditor,
        fabricCanvasRef,
        fabricImageRef,
        setFabricCanvas,
        setFabricImage
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/College/Rule 100/photo-frame-editor/data/templates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certificateTemplates",
    ()=>certificateTemplates
]);
const certificateTemplates = [
    {
        id: "classic",
        name: "Classic Certificate",
        preview: "/templates/classic-preview.jpg",
        background: "/templates/classic-bg.jpg",
        photoArea: {
            x: 50,
            y: 80,
            width: 120,
            height: 150
        },
        textFields: [
            {
                id: "title",
                label: "Certificate Title",
                defaultValue: "Certificate of Achievement",
                x: 50,
                y: 30,
                fontSize: 24,
                fontWeight: "bold",
                color: "#1a1a1a"
            },
            {
                id: "recipient",
                label: "Recipient Name",
                defaultValue: "John Doe",
                x: 50,
                y: 250,
                fontSize: 20,
                fontWeight: "normal",
                color: "#333333"
            },
            {
                id: "description",
                label: "Description",
                defaultValue: "Has successfully completed the course",
                x: 50,
                y: 290,
                fontSize: 16,
                fontWeight: "normal",
                color: "#666666"
            },
            {
                id: "date",
                label: "Date",
                defaultValue: new Date().toLocaleDateString(),
                x: 50,
                y: 350,
                fontSize: 14,
                fontWeight: "normal",
                color: "#666666"
            }
        ]
    },
    {
        id: "modern",
        name: "Modern Certificate",
        preview: "/templates/modern-preview.jpg",
        background: "/templates/modern-bg.jpg",
        photoArea: {
            x: 200,
            y: 100,
            width: 100,
            height: 120
        },
        textFields: [
            {
                id: "title",
                label: "Certificate Title",
                defaultValue: "Certificate of Completion",
                x: 50,
                y: 50,
                fontSize: 28,
                fontWeight: "bold",
                color: "#2c3e50"
            },
            {
                id: "recipient",
                label: "Recipient Name",
                defaultValue: "Jane Smith",
                x: 50,
                y: 250,
                fontSize: 22,
                fontWeight: "normal",
                color: "#34495e"
            },
            {
                id: "course",
                label: "Course Name",
                defaultValue: "Advanced Web Development",
                x: 50,
                y: 290,
                fontSize: 18,
                fontWeight: "normal",
                color: "#7f8c8d"
            },
            {
                id: "date",
                label: "Date",
                defaultValue: new Date().toLocaleDateString(),
                x: 50,
                y: 350,
                fontSize: 14,
                fontWeight: "normal",
                color: "#95a5a6"
            }
        ]
    },
    {
        id: "elegant",
        name: "Elegant Certificate",
        preview: "/templates/elegant-preview.jpg",
        background: "/templates/elegant-bg.jpg",
        photoArea: {
            x: 250,
            y: 120,
            width: 90,
            height: 110
        },
        textFields: [
            {
                id: "title",
                label: "Certificate Title",
                defaultValue: "Certificate of Excellence",
                x: 50,
                y: 40,
                fontSize: 26,
                fontWeight: "bold",
                color: "#8b4513"
            },
            {
                id: "recipient",
                label: "Recipient Name",
                defaultValue: "Michael Johnson",
                x: 50,
                y: 260,
                fontSize: 20,
                fontWeight: "normal",
                color: "#654321"
            },
            {
                id: "achievement",
                label: "Achievement",
                defaultValue: "Outstanding Performance",
                x: 50,
                y: 300,
                fontSize: 16,
                fontWeight: "italic",
                color: "#8b4513"
            },
            {
                id: "date",
                label: "Date",
                defaultValue: new Date().toLocaleDateString(),
                x: 50,
                y: 360,
                fontSize: 14,
                fontWeight: "normal",
                color: "#8b4513"
            }
        ]
    }
];
}),
"[project]/College/Rule 100/photo-frame-editor/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/College/Rule 100/photo-frame-editor/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/button.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/College/Rule 100/photo-frame-editor/components/ui/input.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/input.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/College/Rule 100/photo-frame-editor/components/ui/label.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/lib/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/label.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/lib/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.isArray(value) ? value : defaultValue || [
            min,
            max
        ], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"], {
                "data-slot": "slider-track",
                className: 'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"], {
                    "data-slot": "slider-range",
                    className: 'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
                }, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            (_values || []).map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
                    "data-slot": "slider-thumb",
                    className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:bg-gray-100"
                }, index, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crop$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/crop.js [app-ssr] (ecmascript) <export default as Crop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sticker$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/sticker.js [app-ssr] (ecmascript) <export default as Sticker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-ssr] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$data$2f$templates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/data/templates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$slider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/slider.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Sidebar() {
    const { activeTool, setActiveTool, template, setTemplate, userPhoto, setUserPhoto, photoPosition, updatePhotoPosition, fabricCanvasRef, fabricImageRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    const tools = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
            label: "Upload Photo",
            tool: "upload"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"],
            label: "Choose Template",
            tool: "template"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
            label: "Edit Text",
            tool: "text"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crop$3e$__["Crop"],
            label: "Position Photo",
            tool: "crop"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            label: "Filters",
            tool: "filters"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sticker$3e$__["Sticker"],
            label: "Stickers",
            tool: "stickers"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"],
            label: "Auto Fit",
            tool: "autofit",
            badge: "AI"
        }
    ];
    function handlePhotoUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        setUserPhoto(URL.createObjectURL(file));
    }
    function handleTemplateSelect(templateData) {
        setTemplate(templateData);
        setActiveTool("text");
    }
    function autoFit() {
        const targetX = template?.photoArea?.x || 0;
        const targetY = template?.photoArea?.y || 0;
        const targetScale = 1;
        const targetRotation = 0;
        // Update state
        updatePhotoPosition({
            x: targetX,
            y: targetY,
            scale: targetScale,
            rotation: targetRotation
        });
        // Update Fabric.js image directly if it exists
        if (fabricImageRef.current && fabricCanvasRef.current) {
            const img = fabricImageRef.current;
            const canvas = fabricCanvasRef.current;
            img.set({
                left: targetX,
                top: targetY,
                scaleX: targetScale,
                scaleY: targetScale,
                angle: targetRotation
            });
            canvas.setActiveObject(img);
            canvas.renderAll();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
            initial: {
                x: -20,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            className: "w-64 border-r border-border bg-sidebar p-4 overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-semibold mb-4",
                    children: "Tools"
                }, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 mb-6",
                    children: tools.map((tool, index)=>{
                        const isActive = activeTool === tool.tool;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: index * 0.05
                            },
                            whileHover: {
                                x: 4
                            },
                            onClick: ()=>setActiveTool(tool.tool),
                            className: `flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-medium transition-colors
                  ${isActive ? "bg-primary text-primary-foreground" : "border bg-background hover:bg-sidebar-accent"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tool.icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex-1",
                                    children: tool.label
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this),
                                tool.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-sm bg-primary px-2 py-0.5 text-xs text-primary-foreground",
                                    children: tool.badge
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, tool.label, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        activeTool === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "photo-upload",
                                    className: "text-sm font-medium",
                                    children: "Upload Photo"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "photo-upload",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handlePhotoUpload,
                                    className: "cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                userPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: userPhoto,
                                        alt: "Uploaded",
                                        className: "w-full h-32 object-cover rounded-sm border"
                                    }, void 0, false, {
                                        fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        activeTool === "template" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm font-medium",
                                    children: "Choose Template"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$data$2f$templates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificateTemplates"].map((tmpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTemplateSelect(tmpl),
                                            className: `w-full text-left p-3 rounded-sm border transition-colors ${template?.id === tmpl.id ? "border-primary bg-primary/10" : "border-border hover:bg-muted"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-sm",
                                                children: tmpl.name
                                            }, void 0, false, {
                                                fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                        }, tmpl.id, false, {
                                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        activeTool === "crop" && template && userPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm font-medium",
                                    children: "Position Photo"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs",
                                                    children: "X Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$slider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        photoPosition.x
                                                    ],
                                                    onValueChange: ([value])=>updatePhotoPosition({
                                                            x: value
                                                        }),
                                                    max: 400,
                                                    step: 1,
                                                    className: "mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs",
                                                    children: "Y Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$slider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        photoPosition.y
                                                    ],
                                                    onValueChange: ([value])=>updatePhotoPosition({
                                                            y: value
                                                        }),
                                                    max: 300,
                                                    step: 1,
                                                    className: "mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs",
                                                    children: "Scale"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$slider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        photoPosition.scale
                                                    ],
                                                    onValueChange: ([value])=>updatePhotoPosition({
                                                            scale: value
                                                        }),
                                                    min: 0.5,
                                                    max: 2,
                                                    step: 0.1,
                                                    className: "mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs",
                                                    children: "Rotation"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$slider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        photoPosition.rotation
                                                    ],
                                                    onValueChange: ([value])=>updatePhotoPosition({
                                                            rotation: value
                                                        }),
                                                    min: -180,
                                                    max: 180,
                                                    step: 1,
                                                    className: "mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        activeTool === "autofit" && template && userPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: autoFit,
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this),
                                    "Apply Auto Fit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this),
                        activeTool === "filters" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm font-medium",
                                    children: "Filters"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Filter options coming soon..."
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        activeTool === "stickers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm font-medium",
                                    children: "Stickers & Elements"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Sticker options coming soon..."
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/undo.js [app-ssr] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/redo.js [app-ssr] (ecmascript) <export default as Redo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Toolbar() {
    const { template, userPhoto, resetEditor, fabricCanvasRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    const exportCertificate = ()=>{
        if (!fabricCanvasRef.current) {
            alert('Canvas not ready. Please try again.');
            return;
        }
        // Export the Fabric.js canvas as PNG
        const dataURL = fabricCanvasRef.current.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2 // Higher resolution
        });
        // Download the certificate
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const tools = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"],
            label: "Undo",
            disabled: true
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"],
            label: "Redo",
            disabled: true
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
            label: "Save",
            disabled: true
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
            label: "Export",
            disabled: !template,
            onClick: exportCertificate
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        className: "flex items-center justify-between border-b border-border bg-card px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: tools.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: index * 0.05
                        },
                        whileHover: {
                            scale: tool.disabled ? 1 : 1.05
                        },
                        whileTap: {
                            scale: tool.disabled ? 1 : 0.95
                        },
                        onClick: tool.onClick,
                        disabled: tool.disabled,
                        className: `flex h-9 w-9 items-center justify-center rounded-sm border transition-colors ${tool.disabled ? "border-border text-muted-foreground cursor-not-allowed" : "border-border hover:bg-muted cursor-pointer"}`,
                        "aria-label": tool.label,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tool.icon, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, tool.label, false, {
                        fileName: "[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-medium text-muted-foreground",
                children: template ? template.name : "No Template Selected"
            }, void 0, false, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CanvasArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/fabric/dist/index.min.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CanvasArea() {
    const { template, userPhoto, textFields, photoPosition, setFabricCanvas, setFabricImage, updatePhotoPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fabricCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasRef.current) return;
        // Initialize Fabric.js canvas
        const canvas = new __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Canvas"](canvasRef.current, {
            width: 600,
            height: 400,
            backgroundColor: '#ffffff',
            selection: true
        });
        fabricCanvasRef.current = canvas;
        setFabricCanvas(canvas);
        // Add template background if exists
        if (template) {
            __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].fromURL(template.background, (img)=>{
                // Scale image to fit canvas
                const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                img.scale(scale);
                img.set({
                    left: canvas.width / 2,
                    top: canvas.height / 2,
                    originX: 'center',
                    originY: 'center',
                    selectable: false,
                    evented: false
                });
                canvas.add(img);
                canvas.sendToBack(img);
            }).catch(()=>{
                // If image fails to load, create a placeholder
                const rect = new __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rect"]({
                    left: 20,
                    top: 20,
                    width: 560,
                    height: 360,
                    fill: '#f8f9fa',
                    stroke: '#dee2e6',
                    strokeWidth: 2,
                    selectable: false,
                    evented: false
                });
                canvas.add(rect);
                canvas.sendToBack(rect);
            });
            // Add photo area indicator
            if (template.photoArea) {
                const photoRect = new __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rect"]({
                    left: template.photoArea.x,
                    top: template.photoArea.y,
                    width: template.photoArea.width,
                    height: template.photoArea.height,
                    fill: 'rgba(59, 130, 246, 0.1)',
                    stroke: '#3b82f6',
                    strokeWidth: 2,
                    strokeDashArray: [
                        5,
                        5
                    ],
                    selectable: false,
                    evented: false
                });
                canvas.add(photoRect);
            }
        }
        return ()=>{
            canvas.dispose();
        };
    }, [
        template,
        setFabricCanvas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fabricCanvasRef.current || !userPhoto) return;
        const canvas = fabricCanvasRef.current;
        // Remove existing image if any
        const existingImage = canvas.getObjects().find((obj)=>obj.userPhoto === true);
        if (existingImage) {
            canvas.remove(existingImage);
        }
        // Add new user photo
        __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].fromURL(userPhoto, (img)=>{
            // Set initial position and size based on template or defaults
            const initialX = template?.photoArea?.x || 50;
            const initialY = template?.photoArea?.y || 50;
            const initialWidth = template?.photoArea?.width || 120;
            const initialHeight = template?.photoArea?.height || 150;
            // Scale image to fit the photo area
            const scale = Math.min(initialWidth / img.width, initialHeight / img.height);
            img.scale(scale);
            img.set({
                left: initialX,
                top: initialY,
                selectable: true,
                evented: true,
                hasControls: true,
                hasBorders: true,
                lockScalingFlip: true,
                userPhoto: true // Mark as user photo
            });
            // Add event listeners for real-time updates
            img.on('moving', function() {
                updatePhotoPosition({
                    x: Math.round(this.left),
                    y: Math.round(this.top)
                });
            });
            img.on('scaling', function() {
                updatePhotoPosition({
                    scale: this.scaleX
                });
            });
            img.on('rotating', function() {
                updatePhotoPosition({
                    rotation: this.angle
                });
            });
            canvas.add(img);
            setFabricImage(img);
            canvas.setActiveObject(img);
            canvas.renderAll();
        });
    }, [
        userPhoto,
        template,
        updatePhotoPosition,
        setFabricImage
    ]);
    // Add text fields to canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fabricCanvasRef.current || !template) return;
        const canvas = fabricCanvasRef.current;
        // Remove existing text objects
        canvas.getObjects().forEach((obj)=>{
            if (obj.isTextField === true) {
                canvas.remove(obj);
            }
        });
        // Add text fields
        template.textFields.forEach((field)=>{
            const text = new __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$fabric$2f$dist$2f$index$2e$min$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"](textFields[field.id] || field.defaultValue, {
                left: field.x,
                top: field.y,
                fontSize: field.fontSize,
                fontWeight: field.fontWeight,
                fill: field.color,
                fontFamily: field.fontFamily || 'serif',
                selectable: false,
                evented: false,
                isTextField: true
            });
            canvas.add(text);
        });
        canvas.renderAll();
    }, [
        template,
        textFields
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 items-center justify-center bg-muted p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.95,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                duration: 0.4
            },
            className: "relative flex h-full max-h-[600px] w-full max-w-[600px] items-center justify-center rounded-sm border-2 border-border bg-background shadow-lg overflow-hidden",
            children: !template ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-4 p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.05,
                                1
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        },
                        className: "h-32 w-32 rounded-sm border-2 border-dashed border-border flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-12 w-12 text-muted-foreground",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.5,
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-serif font-semibold text-foreground mb-2",
                                children: "Your Canvas"
                            }, void 0, false, {
                                fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Choose a template and upload a photo to get started"
                            }, void 0, false, {
                                fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                lineNumber: 201,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef
                }, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                    lineNumber: 229,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
                lineNumber: 228,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
}),
"[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextEditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
"use client";
;
;
;
;
;
;
;
function TextEditorPanel() {
    const { template, textFields, updateTextField, resetEditor, fabricCanvasRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    const exportCertificate = ()=>{
        if (!fabricCanvasRef.current) {
            alert('Canvas not ready. Please try again.');
            return;
        }
        // Export the Fabric.js canvas as PNG
        const dataURL = fabricCanvasRef.current.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2 // Higher resolution
        });
        // Download the certificate
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    if (!template) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                x: 20,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            className: "w-80 border-l border-border bg-background p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "Text Editor"
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "Choose a template to start editing text"
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: 20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        className: "w-80 border-l border-border bg-background p-6 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Edit Text"
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "Customize the text fields for your certificate"
                        }, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: template.textFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: field.id,
                                    className: "text-sm font-medium",
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: field.id,
                                    value: textFields[field.id] || field.defaultValue,
                                    onChange: (e)=>updateTextField(field.id, e.target.value),
                                    placeholder: field.defaultValue,
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, field.id, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 pt-6 border-t",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: exportCertificate,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                "Export Certificate"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: resetEditor,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                "Reset All"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-muted-foreground pt-4 border-t",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: [
                                "Template: ",
                                template.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Photo area: ",
                                template.photoArea.width,
                                "×",
                                template.photoArea.height,
                                "px"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/contexts/editor-context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$toolbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/toolbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$canvas$2d$area$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/canvas-area.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$text$2d$editor$2d$panel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/College/Rule 100/photo-frame-editor/components/text-editor-panel.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function EditorPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$contexts$2f$editor$2d$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[calc(100vh-8rem)] flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$toolbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$canvas$2d$area$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$College$2f$Rule__100$2f$photo$2d$frame$2d$editor$2f$components$2f$text$2d$editor$2d$panel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/College/Rule 100/photo-frame-editor/app/editor/page.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=College_Rule%20100_photo-frame-editor_215d6a77._.js.map