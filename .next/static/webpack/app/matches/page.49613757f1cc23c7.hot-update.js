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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        var _data_matches;\n        return (_data_matches = data.matches) !== null && _data_matches !== void 0 ? _data_matches : [];\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeeks, setGameWeeks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches || matches.includes(undefined)) return;\n        // const times: string[] = [];\n        const weeks = [];\n        for (const page of matches){\n            for (const match of page){\n                // const time = formatVietNamTimeV2(match.kickoff.label);\n                const week = match.gameweek.gameweek;\n                // if (!times.includes(time)) times.push(time);\n                if (!weeks.includes(week)) weeks.push(week);\n            }\n        }\n        // setTimeLabel(times);\n        setGameWeeks(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView && !isLoading && !isValidating) setSize(size + 1);\n    }, [\n        inView,\n        size,\n        setSize\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 21\n    }, this);\n    console.log(matches);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            !(matches === null || matches === void 0 ? void 0 : matches.includes(undefined)) ? gameWeeks.map((week)=>{\n                return matches === null || matches === void 0 ? void 0 : matches.map((page)=>page.filter((match)=>match.gameweek.gameweek === week).map((match, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                i === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px] lg:text-[20px] font-semibold px-2 lg:px-4 py-2 text-transparent animate-gradient gradient-text\",\n                                    children: [\n                                        \"Matchweek \",\n                                        week\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    match: match\n                                }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, this)));\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Cannot found any matches\"\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this),\n            !(matches === null || matches === void 0 ? void 0 : matches.includes(undefined)) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"pU8USnLWzqlR/a+NcvcafWC+XB8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVGO0FBQ2M7QUFFVjtBQUNPO0FBQ2E7QUFLbEUsTUFBTU8sVUFBVSxPQUFPQztJQUNyQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNRixLQUFLRiwyRUFBYUE7UUFFM0MsSUFBSUcsS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDdkIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixLQUFLSyxJQUFJO1lBQ3JCRDtRQUFQLE9BQU9BLENBQUFBLGdCQUFBQSxLQUFLRSxPQUFPLGNBQVpGLDJCQUFBQSxnQkFBZ0IsRUFBRTtJQUMzQixFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtJQUNoQjtBQUNGO0FBRUEsTUFBTUUsU0FBUyxDQUFDQyxXQUFtQkM7SUFDakMsSUFBSUEsWUFBWSxDQUFDQSxTQUFTQyxNQUFNLEVBQUUsT0FBTztJQUN6QyxPQUFPLDhCQUF3QyxPQUFWRjtBQUN2QztBQUVlLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQVcsRUFBRTtJQUV2RCxNQUFNLEVBQUUyQixHQUFHLEVBQUVDLE1BQU0sRUFBRSxHQUFHekIsc0VBQVNBO0lBRWpDLE1BQU0sRUFDSlUsTUFBTUUsT0FBTyxFQUNiQyxLQUFLLEVBQ0xhLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsTUFBTSxFQUNQLEdBQUcvQix3REFBY0EsQ0FBQ2dCLFFBQVFYO0lBRTNCTixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2MsV0FBV0EsUUFBUW1CLFFBQVEsQ0FBQ0MsWUFBWTtRQUM3Qyw4QkFBOEI7UUFDOUIsTUFBTUMsUUFBa0IsRUFBRTtRQUUxQixLQUFLLE1BQU1DLFFBQVF0QixRQUFTO1lBQzFCLEtBQUssTUFBTXVCLFNBQVNELEtBQU07Z0JBQ3hCLHlEQUF5RDtnQkFDekQsTUFBTUUsT0FBT0QsTUFBTUUsUUFBUSxDQUFDQSxRQUFRO2dCQUVwQywrQ0FBK0M7Z0JBQy9DLElBQUksQ0FBQ0osTUFBTUYsUUFBUSxDQUFDSyxPQUFPSCxNQUFNSyxJQUFJLENBQUNGO1lBQ3hDO1FBQ0Y7UUFFQSx1QkFBdUI7UUFDdkJiLGFBQWFVO0lBQ2YsR0FBRztRQUFDckI7S0FBUTtJQUVaZCxnREFBU0EsQ0FBQztRQUNSLElBQUkyQixVQUFVLENBQUNDLGFBQWEsQ0FBQ0MsY0FBY0UsUUFBUUQsT0FBTztJQUM1RCxHQUFHO1FBQUNIO1FBQVFHO1FBQU1DO0tBQVE7SUFFMUIsSUFBSUgsV0FDRixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3RDLGlFQUFXQTs7Ozs7Ozs7OztJQUlsQixJQUFJVyxPQUFPLHFCQUFPLDhEQUFDMEI7a0JBQUsxQjs7Ozs7O0lBRXhCQyxRQUFRMkIsR0FBRyxDQUFDN0I7SUFFWixxQkFDRSw4REFBQzJCO1FBQUlDLFdBQVU7O1lBQ1osRUFBQzVCLG9CQUFBQSw4QkFBQUEsUUFBU21CLFFBQVEsQ0FBQ0MsY0FDbEJWLFVBQVVvQixHQUFHLENBQUMsQ0FBQ047Z0JBQ2IsT0FBT3hCLG9CQUFBQSw4QkFBQUEsUUFBUzhCLEdBQUcsQ0FBQyxDQUFDUixPQUNuQkEsS0FDR1MsTUFBTSxDQUFDLENBQUNSLFFBQWlCQSxNQUFNRSxRQUFRLENBQUNBLFFBQVEsS0FBS0QsTUFDckRNLEdBQUcsQ0FBQyxDQUFDUCxPQUFjUyxrQkFDbEIsOERBQUNMOztnQ0FDRUssTUFBTSxtQkFDTCw4REFBQ0w7b0NBQUlDLFdBQVU7O3dDQUE2Rzt3Q0FDL0dKOzs7Ozs7OzhDQUdmLDhEQUFDbkMsNERBQVNBO29DQUFpQmtDLE9BQU9BO21DQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPVSxFQUFFOzs7Ozs7MkJBTmpCRDs7Ozs7WUFVbEIsbUJBRUEsOERBQUNMOzBCQUFJOzs7Ozs7WUFHTixFQUFDM0Isb0JBQUFBLDhCQUFBQSxRQUFTbUIsUUFBUSxDQUFDQyw2QkFDbEIsOERBQUNPO2dCQUFJZixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3ZCLDRFQUFDdEMsaUVBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBaEZ3QmlCOztRQUlFbkIsa0VBQVNBO1FBVTdCRCxvREFBY0E7OztLQWRJb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYXRjaGVzL3BhZ2UudHN4P2U3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gXCJzd3IvaW5maW5pdGVcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcblxuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tIFwiQC9jb21wb25lbnQvTWF0Y2hDYXJkXCI7XG5pbXBvcnQgTGluZUxvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50L3VpL0xpbmVMb2FkaW5nXCI7XG5pbXBvcnQgeyBjb25maWdSZXF1ZXN0IH0gZnJvbSBcIkAvY29uZmlnL2FwaS9wcmVtaWVyTGVhZ3VlL2NvbmZpZ1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoIH0gZnJvbSBcIkAvdHlwZVwiO1xuaW1wb3J0IGZvcm1hdFZpZXROYW1UaW1lVjIgZnJvbSBcIkAvaGVscGVyL2Zvcm1hdFZpZXROYW1UaW1lVjJcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZ1JlcXVlc3QpO1xuXG4gICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmb3VuZCBhbnkgbWF0Y2hlc1wiKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIHJldHVybiBkYXRhLm1hdGNoZXMgPz8gW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEtleSA9IChwYWdlSW5kZXg6IG51bWJlciwgcHJldkRhdGE6IFtdKSA9PiB7XG4gIGlmIChwcmV2RGF0YSAmJiAhcHJldkRhdGEubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGAvYXBpL21hdGNoZXMvc2Vhc29udjI/cGFnZT0ke3BhZ2VJbmRleH1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hlc1BhZ2UoKSB7XG4gIGNvbnN0IFt0aW1lTGFiZWwsIHNldFRpbWVMYWJlbF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbZ2FtZVdlZWtzLCBzZXRHYW1lV2Vla3NdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcblxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogbWF0Y2hlcyxcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNWYWxpZGF0aW5nLFxuICAgIHNpemUsXG4gICAgc2V0U2l6ZSxcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1JJbmZpbml0ZShnZXRLZXksIGZldGNoZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMuaW5jbHVkZXModW5kZWZpbmVkKSkgcmV0dXJuO1xuICAgIC8vIGNvbnN0IHRpbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHdlZWtzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIG1hdGNoZXMpIHtcbiAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgcGFnZSkge1xuICAgICAgICAvLyBjb25zdCB0aW1lID0gZm9ybWF0VmlldE5hbVRpbWVWMihtYXRjaC5raWNrb2ZmLmxhYmVsKTtcbiAgICAgICAgY29uc3Qgd2VlayA9IG1hdGNoLmdhbWV3ZWVrLmdhbWV3ZWVrO1xuXG4gICAgICAgIC8vIGlmICghdGltZXMuaW5jbHVkZXModGltZSkpIHRpbWVzLnB1c2godGltZSk7XG4gICAgICAgIGlmICghd2Vla3MuaW5jbHVkZXMod2VlaykpIHdlZWtzLnB1c2god2Vlayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0VGltZUxhYmVsKHRpbWVzKTtcbiAgICBzZXRHYW1lV2Vla3Mod2Vla3MpO1xuICB9LCBbbWF0Y2hlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldyAmJiAhaXNMb2FkaW5nICYmICFpc1ZhbGlkYXRpbmcpIHNldFNpemUoc2l6ZSArIDEpO1xuICB9LCBbaW5WaWV3LCBzaXplLCBzZXRTaXplXSk7XG5cbiAgaWYgKGlzTG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XG5cbiAgY29uc29sZS5sb2cobWF0Y2hlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnB4LTUgbWItNVwiPlxuICAgICAgeyFtYXRjaGVzPy5pbmNsdWRlcyh1bmRlZmluZWQpID8gKFxuICAgICAgICBnYW1lV2Vla3MubWFwKCh3ZWVrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXM/Lm1hcCgocGFnZTogW10pID0+XG4gICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgIC5maWx0ZXIoKG1hdGNoOiBNYXRjaCkgPT4gbWF0Y2guZ2FtZXdlZWsuZ2FtZXdlZWsgPT09IHdlZWspXG4gICAgICAgICAgICAgIC5tYXAoKG1hdGNoOiBNYXRjaCwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAge2kgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzIwcHhdIGZvbnQtc2VtaWJvbGQgcHgtMiBsZzpweC00IHB5LTIgdGV4dC10cmFuc3BhcmVudCBhbmltYXRlLWdyYWRpZW50IGdyYWRpZW50LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNYXRjaHdlZWsge3dlZWt9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxNYXRjaENhcmQga2V5PXttYXRjaD8uaWR9IG1hdGNoPXttYXRjaH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5DYW5ub3QgZm91bmQgYW55IG1hdGNoZXM8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHshbWF0Y2hlcz8uaW5jbHVkZXModW5kZWZpbmVkKSAmJiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU1dSSW5maW5pdGUiLCJ1c2VJblZpZXciLCJNYXRjaENhcmQiLCJMaW5lTG9hZGluZyIsImNvbmZpZ1JlcXVlc3QiLCJmZXRjaGVyIiwidXJsIiwicmVzcCIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRLZXkiLCJwYWdlSW5kZXgiLCJwcmV2RGF0YSIsImxlbmd0aCIsIk1hdGNoZXNQYWdlIiwidGltZUxhYmVsIiwic2V0VGltZUxhYmVsIiwiZ2FtZVdlZWtzIiwic2V0R2FtZVdlZWtzIiwicmVmIiwiaW5WaWV3IiwiaXNMb2FkaW5nIiwiaXNWYWxpZGF0aW5nIiwic2l6ZSIsInNldFNpemUiLCJtdXRhdGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsIndlZWtzIiwicGFnZSIsIm1hdGNoIiwid2VlayIsImdhbWV3ZWVrIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImxvZyIsIm1hcCIsImZpbHRlciIsImkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});