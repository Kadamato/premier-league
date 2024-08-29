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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        return data.matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeeks, setGameWeeks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        // const times: string[] = [];\n        const weeks = [];\n        for (const page of matches){\n            for (const match of page){\n                // const time = formatVietNamTimeV2(match.kickoff.label);\n                const week = match.gameweek.gameweek;\n                // if (!times.includes(time)) times.push(time);\n                if (!weeks.includes(week)) weeks.push(week);\n            }\n        }\n        // setTimeLabel(times);\n        setGameWeeks(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView && !isLoading) setSize(size + 1);\n    }, [\n        inView,\n        size,\n        setSize\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            gameWeeks.map((week)=>{\n                return matches === null || matches === void 0 ? void 0 : matches.map((page)=>page.filter((match)=>match.gameweek.gameweek === week).map((match, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                i === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px] lg:text-[20px] font-medium px-2 lg:px-4 py-2 text-transparent animate-gradient gradient-text\",\n                                    children: [\n                                        \"Matchweek \",\n                                        week\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    match: match\n                                }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, this)));\n            }),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"pU8USnLWzqlR/a+NcvcafWC+XB8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVGO0FBQ2M7QUFFVjtBQUNPO0FBQ2E7QUFLbEUsTUFBTU8sVUFBVSxPQUFPQztJQUNyQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNRixLQUFLRiwyRUFBYUE7UUFFM0MsSUFBSUcsS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDdkIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixLQUFLSyxJQUFJO1FBQzVCLE9BQU9ELEtBQUtFLE9BQU87SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQU87SUFDekMsT0FBTyw4QkFBd0MsT0FBVkY7QUFDdkM7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ3lCLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFXLEVBQUU7SUFFdkQsTUFBTSxFQUFFMkIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBR3pCLHNFQUFTQTtJQUVqQyxNQUFNLEVBQ0pVLE1BQU1FLE9BQU8sRUFDYkMsS0FBSyxFQUNMYSxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLE1BQU0sRUFDUCxHQUFHL0Isd0RBQWNBLENBQUNnQixRQUFRWDtJQUUzQk4sZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNjLFNBQVM7UUFDZCw4QkFBOEI7UUFDOUIsTUFBTW1CLFFBQWtCLEVBQUU7UUFFMUIsS0FBSyxNQUFNQyxRQUFRcEIsUUFBUztZQUMxQixLQUFLLE1BQU1xQixTQUFTRCxLQUFNO2dCQUN4Qix5REFBeUQ7Z0JBQ3pELE1BQU1FLE9BQU9ELE1BQU1FLFFBQVEsQ0FBQ0EsUUFBUTtnQkFFcEMsK0NBQStDO2dCQUMvQyxJQUFJLENBQUNKLE1BQU1LLFFBQVEsQ0FBQ0YsT0FBT0gsTUFBTU0sSUFBSSxDQUFDSDtZQUN4QztRQUNGO1FBRUEsdUJBQXVCO1FBQ3ZCWCxhQUFhUTtJQUNmLEdBQUc7UUFBQ25CO0tBQVE7SUFFWmQsZ0RBQVNBLENBQUM7UUFDUixJQUFJMkIsVUFBVSxDQUFDQyxXQUFXRyxRQUFRRCxPQUFPO0lBQzNDLEdBQUc7UUFBQ0g7UUFBUUc7UUFBTUM7S0FBUTtJQUUxQixJQUFJSCxXQUNGLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckMsaUVBQVdBOzs7Ozs7Ozs7O0lBSWxCLElBQUlXLE9BQU8scUJBQU8sOERBQUN5QjtrQkFBS3pCOzs7Ozs7SUFFeEIscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOztZQUliakIsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDTjtnQkFDYixPQUFPdEIsb0JBQUFBLDhCQUFBQSxRQUFTNEIsR0FBRyxDQUFDLENBQUNSLE9BQ25CQSxLQUNHUyxNQUFNLENBQUMsQ0FBQ1IsUUFBaUJBLE1BQU1FLFFBQVEsQ0FBQ0EsUUFBUSxLQUFLRCxNQUNyRE0sR0FBRyxDQUFDLENBQUNQLE9BQWNTLGtCQUNsQiw4REFBQ0o7O2dDQUNFSSxNQUFNLG1CQUNMLDhEQUFDSjtvQ0FBSUMsV0FBVTs7d0NBQTJHO3dDQUM3R0w7Ozs7Ozs7OENBR2YsOERBQUNqQyw0REFBU0E7b0NBQWlCZ0MsT0FBT0E7bUNBQWxCQSxrQkFBQUEsNEJBQUFBLE1BQU9VLEVBQUU7Ozs7OzsyQkFOakJEOzs7OztZQVVsQjtZQUVDOUIseUJBQ0MsOERBQUMwQjtnQkFBSWQsS0FBS0E7Z0JBQUtlLFdBQVU7MEJBQ3ZCLDRFQUFDckMsaUVBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBN0V3QmlCOztRQUlFbkIsa0VBQVNBO1FBVTdCRCxvREFBY0E7OztLQWRJb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYXRjaGVzL3BhZ2UudHN4P2U3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gXCJzd3IvaW5maW5pdGVcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcblxuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tIFwiQC9jb21wb25lbnQvTWF0Y2hDYXJkXCI7XG5pbXBvcnQgTGluZUxvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50L3VpL0xpbmVMb2FkaW5nXCI7XG5pbXBvcnQgeyBjb25maWdSZXF1ZXN0IH0gZnJvbSBcIkAvY29uZmlnL2FwaS9wcmVtaWVyTGVhZ3VlL2NvbmZpZ1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoIH0gZnJvbSBcIkAvdHlwZVwiO1xuaW1wb3J0IGZvcm1hdFZpZXROYW1UaW1lVjIgZnJvbSBcIkAvaGVscGVyL2Zvcm1hdFZpZXROYW1UaW1lVjJcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZ1JlcXVlc3QpO1xuXG4gICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmb3VuZCBhbnkgbWF0Y2hlc1wiKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIHJldHVybiBkYXRhLm1hdGNoZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEtleSA9IChwYWdlSW5kZXg6IG51bWJlciwgcHJldkRhdGE6IFtdKSA9PiB7XG4gIGlmIChwcmV2RGF0YSAmJiAhcHJldkRhdGEubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGAvYXBpL21hdGNoZXMvc2Vhc29udjI/cGFnZT0ke3BhZ2VJbmRleH1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hlc1BhZ2UoKSB7XG4gIGNvbnN0IFt0aW1lTGFiZWwsIHNldFRpbWVMYWJlbF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbZ2FtZVdlZWtzLCBzZXRHYW1lV2Vla3NdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcblxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogbWF0Y2hlcyxcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNWYWxpZGF0aW5nLFxuICAgIHNpemUsXG4gICAgc2V0U2l6ZSxcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1JJbmZpbml0ZShnZXRLZXksIGZldGNoZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGVzKSByZXR1cm47XG4gICAgLy8gY29uc3QgdGltZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgd2Vla3M6IG51bWJlcltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgbWF0Y2hlcykge1xuICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBwYWdlKSB7XG4gICAgICAgIC8vIGNvbnN0IHRpbWUgPSBmb3JtYXRWaWV0TmFtVGltZVYyKG1hdGNoLmtpY2tvZmYubGFiZWwpO1xuICAgICAgICBjb25zdCB3ZWVrID0gbWF0Y2guZ2FtZXdlZWsuZ2FtZXdlZWs7XG5cbiAgICAgICAgLy8gaWYgKCF0aW1lcy5pbmNsdWRlcyh0aW1lKSkgdGltZXMucHVzaCh0aW1lKTtcbiAgICAgICAgaWYgKCF3ZWVrcy5pbmNsdWRlcyh3ZWVrKSkgd2Vla3MucHVzaCh3ZWVrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXRUaW1lTGFiZWwodGltZXMpO1xuICAgIHNldEdhbWVXZWVrcyh3ZWVrcyk7XG4gIH0sIFttYXRjaGVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3ICYmICFpc0xvYWRpbmcpIHNldFNpemUoc2l6ZSArIDEpO1xuICB9LCBbaW5WaWV3LCBzaXplLCBzZXRTaXplXSk7XG5cbiAgaWYgKGlzTG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnB4LTUgbWItNVwiPlxuICAgICAge1xuICAgICAgXG4gICAgICBcbiAgICAgIGdhbWVXZWVrcy5tYXAoKHdlZWspID0+IHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM/Lm1hcCgocGFnZTogW10pID0+XG4gICAgICAgICAgcGFnZVxuICAgICAgICAgICAgLmZpbHRlcigobWF0Y2g6IE1hdGNoKSA9PiBtYXRjaC5nYW1ld2Vlay5nYW1ld2VlayA9PT0gd2VlaylcbiAgICAgICAgICAgIC5tYXAoKG1hdGNoOiBNYXRjaCwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzIwcHhdIGZvbnQtbWVkaXVtIHB4LTIgbGc6cHgtNCBweS0yIHRleHQtdHJhbnNwYXJlbnQgYW5pbWF0ZS1ncmFkaWVudCBncmFkaWVudC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIE1hdGNod2VlayB7d2Vla31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPE1hdGNoQ2FyZCBrZXk9e21hdGNoPy5pZH0gbWF0Y2g9e21hdGNofSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAge21hdGNoZXMgJiYgKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUkluZmluaXRlIiwidXNlSW5WaWV3IiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZmV0Y2hlciIsInVybCIsInJlc3AiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXRjaGVzIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0S2V5IiwicGFnZUluZGV4IiwicHJldkRhdGEiLCJsZW5ndGgiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrcyIsInNldEdhbWVXZWVrcyIsInJlZiIsImluVmlldyIsImlzTG9hZGluZyIsImlzVmFsaWRhdGluZyIsInNpemUiLCJzZXRTaXplIiwibXV0YXRlIiwid2Vla3MiLCJwYWdlIiwibWF0Y2giLCJ3ZWVrIiwiZ2FtZXdlZWsiLCJpbmNsdWRlcyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWx0ZXIiLCJpIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});