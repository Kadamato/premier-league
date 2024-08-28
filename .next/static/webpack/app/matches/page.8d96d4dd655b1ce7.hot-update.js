"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/matches/page",{

/***/ "(app-pages-browser)/./src/app/matches/page.tsx":
/*!**********************************!*\
  !*** ./src/app/matches/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helper/formatVietNamTimeV2 */ \"(app-pages-browser)/./src/helper/formatVietNamTimeV2.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        return data.matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeeks, setGameWeeks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        const times = [];\n        const weeks = [];\n        for (const page of matches){\n            for (const match of page){\n                const time = (0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(match.kickoff.label);\n                const week = match.gameweek.gameweek;\n                if (!times.includes(time)) times.push(time);\n                if (!weeks.includes(week)) weeks.push(week);\n            }\n        }\n        setTimeLabel(times);\n        setGameWeeks(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            setSize(size + 1);\n        }\n    }, [\n        inView\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 78,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            gameWeeks.map((week)=>matches === null || matches === void 0 ? void 0 : matches.filter((match)=>match.gameweek.gameweek === weke)),\n            timeLabel.map((time, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-2 px-2 sm:px-4 text-[16px] font-medium\",\n                            children: time\n                        }, void 0, false, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        matches === null || matches === void 0 ? void 0 : matches.map((page)=>(page !== null && page !== void 0 ? page : []).filter((match)=>(0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(match.kickoff.label) === time).map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    match: match\n                                }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, this)))\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"pU8USnLWzqlR/a+NcvcafWC+XB8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\n{\n/* <div className=\"text-[20px] lg:text-[20px] font-medium px-2 lg:px-4 py-2 text-transparent gradient-text\">\nMatchweek {week}\n</div> */ }var _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFFRjtBQUNjO0FBRVY7QUFDTztBQUNhO0FBR0g7QUFFL0QsTUFBTVEsVUFBVSxPQUFPQztJQUNyQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNRixLQUFLSCwyRUFBYUE7UUFFM0MsSUFBSUksS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDdkIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixLQUFLSyxJQUFJO1FBQzVCLE9BQU9ELEtBQUtFLE9BQU87SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQU87SUFDekMsT0FBTyw4QkFBd0MsT0FBVkY7QUFDdkM7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd6QiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQzBCLFdBQVdDLGFBQWEsR0FBRzNCLCtDQUFRQSxDQUFXLEVBQUU7SUFFdkQsTUFBTSxFQUFFNEIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBRzFCLHNFQUFTQTtJQUVqQyxNQUFNLEVBQ0pXLE1BQU1FLE9BQU8sRUFDYkMsS0FBSyxFQUNMYSxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLE1BQU0sRUFDUCxHQUFHaEMsd0RBQWNBLENBQUNpQixRQUFRWDtJQUUzQlAsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNlLFNBQVM7UUFDZCxNQUFNbUIsUUFBa0IsRUFBRTtRQUMxQixNQUFNQyxRQUFrQixFQUFFO1FBRTFCLEtBQUssTUFBTUMsUUFBUXJCLFFBQVM7WUFDMUIsS0FBSyxNQUFNc0IsU0FBU0QsS0FBTTtnQkFDeEIsTUFBTUUsT0FBT2hDLHVFQUFtQkEsQ0FBQytCLE1BQU1FLE9BQU8sQ0FBQ0MsS0FBSztnQkFDcEQsTUFBTUMsT0FBT0osTUFBTUssUUFBUSxDQUFDQSxRQUFRO2dCQUVwQyxJQUFJLENBQUNSLE1BQU1TLFFBQVEsQ0FBQ0wsT0FBT0osTUFBTVUsSUFBSSxDQUFDTjtnQkFDdEMsSUFBSSxDQUFDSCxNQUFNUSxRQUFRLENBQUNGLE9BQU9OLE1BQU1TLElBQUksQ0FBQ0g7WUFDeEM7UUFDRjtRQUVBakIsYUFBYVU7UUFDYlIsYUFBYVM7SUFDZixHQUFHO1FBQUNwQjtLQUFRO0lBRVpmLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSTRCLFFBQVE7WUFDVkksUUFBUUQsT0FBTztRQUNqQjtJQUNGLEdBQUc7UUFBQ0g7S0FBTztJQUVYLElBQUlDLFdBQ0YscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDMUMsaUVBQVdBOzs7Ozs7Ozs7O0lBSWxCLElBQUlZLE9BQU8scUJBQU8sOERBQUM2QjtrQkFBSzdCOzs7Ozs7SUFFeEIscUJBQ0UsOERBQUM2QjtRQUFJQyxXQUFVOztZQUdYckIsVUFBVXNCLEdBQUcsQ0FBQ04sQ0FBQUEsT0FDWjFCLG9CQUFBQSw4QkFBQUEsUUFBU2lDLE1BQU0sQ0FBQ1gsQ0FBQUEsUUFBVUEsTUFBTUssUUFBUSxDQUFDQSxRQUFRLEtBQUtPO1lBR3pEMUIsVUFBVXdCLEdBQUcsQ0FBQyxDQUFDVCxNQUFNWSxzQkFDcEIsOERBQUNMOztzQ0FDQyw4REFBQ0E7NEJBQUlDLFdBQVU7c0NBQ1pSOzs7Ozs7d0JBR0Z2QixvQkFBQUEsOEJBQUFBLFFBQVNnQyxHQUFHLENBQUMsQ0FBQ1gsT0FDYixDQUFDQSxpQkFBQUEsa0JBQUFBLE9BQVEsRUFBRSxFQUNSWSxNQUFNLENBQ0wsQ0FBQ1gsUUFDQy9CLHVFQUFtQkEsQ0FBQytCLE1BQU1FLE9BQU8sQ0FBQ0MsS0FBSyxNQUFNRixNQUVoRFMsR0FBRyxDQUFDLENBQUNWLHNCQUNKLDhEQUFDbEMsNERBQVNBO29DQUFpQmtDLE9BQU9BO21DQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPYyxFQUFFOzs7Ozs7bUJBWnZCRDs7Ozs7Ozs7Ozs7QUF5QmxCO0dBcEZ3QjVCOztRQUlFcEIsa0VBQVNBO1FBVTdCRCxvREFBY0E7OztLQWRJcUI7QUFzRnhCO0FBQ0U7O09BRUssR0FDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hdGNoZXMvcGFnZS50c3g/ZTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSBcInN3ci9pbmZpbml0ZVwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuXG5pbXBvcnQgTWF0Y2hDYXJkIGZyb20gXCJAL2NvbXBvbmVudC9NYXRjaENhcmRcIjtcbmltcG9ydCBMaW5lTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnQvdWkvTGluZUxvYWRpbmdcIjtcbmltcG9ydCB7IGNvbmZpZ1JlcXVlc3QgfSBmcm9tIFwiQC9jb25maWcvYXBpL3ByZW1pZXJMZWFndWUvY29uZmlnXCI7XG5cbmltcG9ydCB0eXBlIHsgTWF0Y2ggfSBmcm9tIFwiQC90eXBlXCI7XG5pbXBvcnQgZm9ybWF0VmlldE5hbVRpbWVWMiBmcm9tIFwiQC9oZWxwZXIvZm9ybWF0VmlldE5hbVRpbWVWMlwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnUmVxdWVzdCk7XG5cbiAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZvdW5kIGFueSBtYXRjaGVzXCIpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEubWF0Y2hlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0S2V5ID0gKHBhZ2VJbmRleDogbnVtYmVyLCBwcmV2RGF0YTogW10pID0+IHtcbiAgaWYgKHByZXZEYXRhICYmICFwcmV2RGF0YS5sZW5ndGgpIHJldHVybiBudWxsO1xuICByZXR1cm4gYC9hcGkvbWF0Y2hlcy9zZWFzb252Mj9wYWdlPSR7cGFnZUluZGV4fWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGVzUGFnZSgpIHtcbiAgY29uc3QgW3RpbWVMYWJlbCwgc2V0VGltZUxhYmVsXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtnYW1lV2Vla3MsIHNldEdhbWVXZWVrc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtYXRjaGVzLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1ZhbGlkYXRpbmcsXG4gICAgc2l6ZSxcbiAgICBzZXRTaXplLFxuICAgIG11dGF0ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlKGdldEtleSwgZmV0Y2hlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1hdGNoZXMpIHJldHVybjtcbiAgICBjb25zdCB0aW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCB3ZWVrczogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBtYXRjaGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIHBhZ2UpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IGZvcm1hdFZpZXROYW1UaW1lVjIobWF0Y2gua2lja29mZi5sYWJlbCk7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBtYXRjaC5nYW1ld2Vlay5nYW1ld2VlaztcblxuICAgICAgICBpZiAoIXRpbWVzLmluY2x1ZGVzKHRpbWUpKSB0aW1lcy5wdXNoKHRpbWUpO1xuICAgICAgICBpZiAoIXdlZWtzLmluY2x1ZGVzKHdlZWspKSB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbWVMYWJlbCh0aW1lcyk7XG4gICAgc2V0R2FtZVdlZWtzKHdlZWtzKTtcbiAgfSwgW21hdGNoZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIHNldFNpemUoc2l6ZSArIDEpO1xuICAgIH1cbiAgfSwgW2luVmlld10pO1xuXG4gIGlmIChpc0xvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC01IG1iLTVcIj5cblxuICAgICAge1xuICAgICAgICBnYW1lV2Vla3MubWFwKHdlZWsgPT4gKFxuICAgICAgICAgIG1hdGNoZXM/LmZpbHRlcihtYXRjaCAgPT4gbWF0Y2guZ2FtZXdlZWsuZ2FtZXdlZWsgPT09IHdla2UpXG4gICAgICAgICkpXG4gICAgICB9ICAgICAgXG4gICAgICB7dGltZUxhYmVsLm1hcCgodGltZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgcHgtMiBzbTpweC00IHRleHQtWzE2cHhdIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHttYXRjaGVzPy5tYXAoKHBhZ2U6IFtdKSA9PlxuICAgICAgICAgICAgKHBhZ2UgPz8gW10pXG4gICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKG1hdGNoOiBNYXRjaCkgPT5cbiAgICAgICAgICAgICAgICAgIGZvcm1hdFZpZXROYW1UaW1lVjIobWF0Y2gua2lja29mZi5sYWJlbCkgPT09IHRpbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubWFwKChtYXRjaDogTWF0Y2gpID0+IChcbiAgICAgICAgICAgICAgICA8TWF0Y2hDYXJkIGtleT17bWF0Y2g/LmlkfSBtYXRjaD17bWF0Y2h9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgey8qIHttYXRjaGVzICYmIChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG57XG4gIC8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gbGc6dGV4dC1bMjBweF0gZm9udC1tZWRpdW0gcHgtMiBsZzpweC00IHB5LTIgdGV4dC10cmFuc3BhcmVudCBncmFkaWVudC10ZXh0XCI+XG5NYXRjaHdlZWsge3dlZWt9XG48L2Rpdj4gKi9cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUkluZmluaXRlIiwidXNlSW5WaWV3IiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZm9ybWF0VmlldE5hbVRpbWVWMiIsImZldGNoZXIiLCJ1cmwiLCJyZXNwIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJqc29uIiwibWF0Y2hlcyIsImVycm9yIiwiY29uc29sZSIsImdldEtleSIsInBhZ2VJbmRleCIsInByZXZEYXRhIiwibGVuZ3RoIiwiTWF0Y2hlc1BhZ2UiLCJ0aW1lTGFiZWwiLCJzZXRUaW1lTGFiZWwiLCJnYW1lV2Vla3MiLCJzZXRHYW1lV2Vla3MiLCJyZWYiLCJpblZpZXciLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJzaXplIiwic2V0U2l6ZSIsIm11dGF0ZSIsInRpbWVzIiwid2Vla3MiLCJwYWdlIiwibWF0Y2giLCJ0aW1lIiwia2lja29mZiIsImxhYmVsIiwid2VlayIsImdhbWV3ZWVrIiwiaW5jbHVkZXMiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZmlsdGVyIiwid2VrZSIsImluZGV4IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});