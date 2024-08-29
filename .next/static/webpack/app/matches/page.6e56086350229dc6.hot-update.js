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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        return data.matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    var _this;\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeeks, setGameWeeks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _matches_;\n        if (!matches || (matches === null || matches === void 0 ? void 0 : (_matches_ = matches[0]) === null || _matches_ === void 0 ? void 0 : _matches_.length)) return;\n        // const times: string[] = [];\n        const weeks = [];\n        for (const page of matches){\n            for (const match of page){\n                // const time = formatVietNamTimeV2(match.kickoff.label);\n                const week = match.gameweek.gameweek;\n                // if (!times.includes(time)) times.push(time);\n                if (!weeks.includes(week)) weeks.push(week);\n            }\n        }\n        // setTimeLabel(times);\n        setGameWeeks(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView && !isLoading) setSize(size + 1);\n    }, [\n        inView,\n        size,\n        setSize\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 21\n    }, this);\n    var _matches_;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            ((_this = (_matches_ = matches === null || matches === void 0 ? void 0 : matches[0]) !== null && _matches_ !== void 0 ? _matches_ : []) === null || _this === void 0 ? void 0 : _this.length) > 0 ? gameWeeks.map((week)=>{\n                return matches === null || matches === void 0 ? void 0 : matches.map((page)=>page.filter((match)=>match.gameweek.gameweek === week).map((match, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                i === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px] lg:text-[20px] font-medium px-2 lg:px-4 py-2 text-transparent animate-gradient gradient-text\",\n                                    children: [\n                                        \"Matchweek \",\n                                        week\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    match: match\n                                }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, this)));\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Cannot found any matches\"\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"pU8USnLWzqlR/a+NcvcafWC+XB8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVGO0FBQ2M7QUFFVjtBQUNPO0FBQ2E7QUFLbEUsTUFBTU8sVUFBVSxPQUFPQztJQUNyQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNRixLQUFLRiwyRUFBYUE7UUFFM0MsSUFBSUcsS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDdkIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixLQUFLSyxJQUFJO1FBQzVCLE9BQU9ELEtBQUtFLE9BQU87SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQU87SUFDekMsT0FBTyw4QkFBd0MsT0FBVkY7QUFDdkM7QUFFZSxTQUFTRztRQWtEaEJQOztJQWpETixNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQVcsRUFBRTtJQUV2RCxNQUFNLEVBQUUyQixHQUFHLEVBQUVDLE1BQU0sRUFBRSxHQUFHekIsc0VBQVNBO0lBRWpDLE1BQU0sRUFDSlUsTUFBTUUsT0FBTyxFQUNiQyxLQUFLLEVBQ0xhLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsTUFBTSxFQUNQLEdBQUcvQix3REFBY0EsQ0FBQ2dCLFFBQVFYO0lBRTNCTixnREFBU0EsQ0FBQztZQUNRYztRQUFoQixJQUFJLENBQUNBLFlBQVdBLG9CQUFBQSwrQkFBQUEsWUFBQUEsT0FBUyxDQUFDLEVBQUUsY0FBWkEsZ0NBQUFBLFVBQWNNLE1BQU0sR0FBRTtRQUN0Qyw4QkFBOEI7UUFDOUIsTUFBTWEsUUFBa0IsRUFBRTtRQUUxQixLQUFLLE1BQU1DLFFBQVFwQixRQUFTO1lBQzFCLEtBQUssTUFBTXFCLFNBQVNELEtBQU07Z0JBQ3hCLHlEQUF5RDtnQkFDekQsTUFBTUUsT0FBT0QsTUFBTUUsUUFBUSxDQUFDQSxRQUFRO2dCQUVwQywrQ0FBK0M7Z0JBQy9DLElBQUksQ0FBQ0osTUFBTUssUUFBUSxDQUFDRixPQUFPSCxNQUFNTSxJQUFJLENBQUNIO1lBQ3hDO1FBQ0Y7UUFFQSx1QkFBdUI7UUFDdkJYLGFBQWFRO0lBQ2YsR0FBRztRQUFDbkI7S0FBUTtJQUVaZCxnREFBU0EsQ0FBQztRQUNSLElBQUkyQixVQUFVLENBQUNDLFdBQVdHLFFBQVFELE9BQU87SUFDM0MsR0FBRztRQUFDSDtRQUFRRztRQUFNQztLQUFRO0lBRTFCLElBQUlILFdBQ0YscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNyQyxpRUFBV0E7Ozs7Ozs7Ozs7SUFJbEIsSUFBSVcsT0FBTyxxQkFBTyw4REFBQ3lCO2tCQUFLekI7Ozs7OztRQUlsQkQ7SUFGTixxQkFDRSw4REFBQzBCO1FBQUlDLFdBQVU7O1lBQ1osRUFBQzNCLFFBQUFBLENBQUFBLFlBQUFBLG9CQUFBQSw4QkFBQUEsT0FBUyxDQUFDLEVBQUUsY0FBWkEsdUJBQUFBLFlBQWdCLEVBQUUsY0FBbEJBLDRCQUFELE1BQXNCTSxNQUFNLElBQUcsSUFDOUJJLFVBQVVrQixHQUFHLENBQUMsQ0FBQ047Z0JBQ2IsT0FBT3RCLG9CQUFBQSw4QkFBQUEsUUFBUzRCLEdBQUcsQ0FBQyxDQUFDUixPQUNuQkEsS0FDR1MsTUFBTSxDQUFDLENBQUNSLFFBQWlCQSxNQUFNRSxRQUFRLENBQUNBLFFBQVEsS0FBS0QsTUFDckRNLEdBQUcsQ0FBQyxDQUFDUCxPQUFjUyxrQkFDbEIsOERBQUNKOztnQ0FDRUksTUFBTSxtQkFDTCw4REFBQ0o7b0NBQUlDLFdBQVU7O3dDQUEyRzt3Q0FDN0dMOzs7Ozs7OzhDQUdmLDhEQUFDakMsNERBQVNBO29DQUFpQmdDLE9BQU9BO21DQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPVSxFQUFFOzs7Ozs7MkJBTmpCRDs7Ozs7WUFVbEIsbUJBRUEsOERBQUNKOzBCQUFJOzs7Ozs7WUFHTjFCLHlCQUNDLDhEQUFDMEI7Z0JBQUlkLEtBQUtBO2dCQUFLZSxXQUFVOzBCQUN2Qiw0RUFBQ3JDLGlFQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQTlFd0JpQjs7UUFJRW5CLGtFQUFTQTtRQVU3QkQsb0RBQWNBOzs7S0FkSW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeD9lNzA0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB1c2VTV1JJbmZpbml0ZSBmcm9tIFwic3dyL2luZmluaXRlXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5cbmltcG9ydCBNYXRjaENhcmQgZnJvbSBcIkAvY29tcG9uZW50L01hdGNoQ2FyZFwiO1xuaW1wb3J0IExpbmVMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudC91aS9MaW5lTG9hZGluZ1wiO1xuaW1wb3J0IHsgY29uZmlnUmVxdWVzdCB9IGZyb20gXCJAL2NvbmZpZy9hcGkvcHJlbWllckxlYWd1ZS9jb25maWdcIjtcblxuaW1wb3J0IHR5cGUgeyBNYXRjaCB9IGZyb20gXCJAL3R5cGVcIjtcbmltcG9ydCBmb3JtYXRWaWV0TmFtVGltZVYyIGZyb20gXCJAL2hlbHBlci9mb3JtYXRWaWV0TmFtVGltZVYyXCI7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBjb25maWdSZXF1ZXN0KTtcblxuICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZm91bmQgYW55IG1hdGNoZXNcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5tYXRjaGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRLZXkgPSAocGFnZUluZGV4OiBudW1iZXIsIHByZXZEYXRhOiBbXSkgPT4ge1xuICBpZiAocHJldkRhdGEgJiYgIXByZXZEYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBgL2FwaS9tYXRjaGVzL3NlYXNvbnYyP3BhZ2U9JHtwYWdlSW5kZXh9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoZXNQYWdlKCkge1xuICBjb25zdCBbdGltZUxhYmVsLCBzZXRUaW1lTGFiZWxdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2dhbWVXZWVrcywgc2V0R2FtZVdlZWtzXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSk7XG5cbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IG1hdGNoZXMsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIGlzVmFsaWRhdGluZyxcbiAgICBzaXplLFxuICAgIHNldFNpemUsXG4gICAgbXV0YXRlLFxuICB9ID0gdXNlU1dSSW5maW5pdGUoZ2V0S2V5LCBmZXRjaGVyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzPy5bMF0/Lmxlbmd0aCkgcmV0dXJuO1xuICAgIC8vIGNvbnN0IHRpbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHdlZWtzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIG1hdGNoZXMpIHtcbiAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgcGFnZSkge1xuICAgICAgICAvLyBjb25zdCB0aW1lID0gZm9ybWF0VmlldE5hbVRpbWVWMihtYXRjaC5raWNrb2ZmLmxhYmVsKTtcbiAgICAgICAgY29uc3Qgd2VlayA9IG1hdGNoLmdhbWV3ZWVrLmdhbWV3ZWVrO1xuXG4gICAgICAgIC8vIGlmICghdGltZXMuaW5jbHVkZXModGltZSkpIHRpbWVzLnB1c2godGltZSk7XG4gICAgICAgIGlmICghd2Vla3MuaW5jbHVkZXMod2VlaykpIHdlZWtzLnB1c2god2Vlayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0VGltZUxhYmVsKHRpbWVzKTtcbiAgICBzZXRHYW1lV2Vla3Mod2Vla3MpO1xuICB9LCBbbWF0Y2hlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldyAmJiAhaXNMb2FkaW5nKSBzZXRTaXplKHNpemUgKyAxKTtcbiAgfSwgW2luVmlldywgc2l6ZSwgc2V0U2l6ZV0pO1xuXG4gIGlmIChpc0xvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC01IG1iLTVcIj5cbiAgICAgIHsobWF0Y2hlcz8uWzBdID8/IFtdKT8ubGVuZ3RoID4gMCA/IChcbiAgICAgICAgZ2FtZVdlZWtzLm1hcCgod2VlaykgPT4ge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzPy5tYXAoKHBhZ2U6IFtdKSA9PlxuICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAuZmlsdGVyKChtYXRjaDogTWF0Y2gpID0+IG1hdGNoLmdhbWV3ZWVrLmdhbWV3ZWVrID09PSB3ZWVrKVxuICAgICAgICAgICAgICAubWFwKChtYXRjaDogTWF0Y2gsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIHtpID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyMHB4XSBmb250LW1lZGl1bSBweC0yIGxnOnB4LTQgcHktMiB0ZXh0LXRyYW5zcGFyZW50IGFuaW1hdGUtZ3JhZGllbnQgZ3JhZGllbnQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE1hdGNod2VlayB7d2Vla31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPE1hdGNoQ2FyZCBrZXk9e21hdGNoPy5pZH0gbWF0Y2g9e21hdGNofSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PkNhbm5vdCBmb3VuZCBhbnkgbWF0Y2hlczwvZGl2PlxuICAgICAgKX1cblxuICAgICAge21hdGNoZXMgJiYgKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUkluZmluaXRlIiwidXNlSW5WaWV3IiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZmV0Y2hlciIsInVybCIsInJlc3AiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXRjaGVzIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0S2V5IiwicGFnZUluZGV4IiwicHJldkRhdGEiLCJsZW5ndGgiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrcyIsInNldEdhbWVXZWVrcyIsInJlZiIsImluVmlldyIsImlzTG9hZGluZyIsImlzVmFsaWRhdGluZyIsInNpemUiLCJzZXRTaXplIiwibXV0YXRlIiwid2Vla3MiLCJwYWdlIiwibWF0Y2giLCJ3ZWVrIiwiZ2FtZXdlZWsiLCJpbmNsdWRlcyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWx0ZXIiLCJpIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});