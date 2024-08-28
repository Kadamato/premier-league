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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helper/formatVietNamTimeV2 */ \"(app-pages-browser)/./src/helper/formatVietNamTimeV2.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        const matches = data.matches;\n        return matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeek, setGameWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data: matches, error, isLoading, isValidating, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/matches/seasonv2\", fetcher, {\n        onErrorRetry: (error, key, config, revalidate, param)=>{\n            let { retryCount } = param;\n            if (retryCount >= 3) return;\n            setTimeout(()=>revalidate({\n                    retryCount: retryCount + 1\n                }), 3000);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        let times = [];\n        let weeks = [];\n        for (const match of matches){\n            const time = match.kickoff.label;\n            const week = match.gameweek.gameweek;\n            if (times.find((t)=>t.includes(time.split(\",\")[0]))) continue;\n            times.push(time);\n        // if (weeks.includes(week)) {\n        //   weeks.push(week);\n        // }\n        }\n        setTimeLabel(times);\n        setGameWeek(weeks);\n    }, [\n        matches\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            timeLabel.map((time, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-2 px-2 sm:px-4 text-[16px] font-medium\",\n                            children: (0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(time)\n                        }, void 0, false, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        matches.filter((match)=>match.kickoff.label.split(\",\")[0] === time.split(\",\")[0]).map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                match: match\n                            }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"1+TSB5Aj66GpQwHdlGKR1VKe2Rw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVuQjtBQUVxQjtBQUNPO0FBQ2E7QUFHSDtBQUcvRCxNQUFNTyxVQUFVLE9BQU9DO0lBQ3JCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1DLE1BQU1GLEtBQUtILDJFQUFhQTtRQUUzQyxJQUFJSSxLQUFLRSxNQUFNLEtBQUssS0FBSztZQUN2QixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxPQUFPLE1BQU1KLEtBQUtLLElBQUk7UUFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTztRQUU1QixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2hCO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ3FCLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFXLEVBQUU7SUFFckQsTUFBTSxFQUNKYSxNQUFNRSxPQUFPLEVBQ2JDLEtBQUssRUFDTE8sU0FBUyxFQUNUQyxZQUFZLEVBQ1pDLE1BQU0sRUFDUCxHQUFHdkIsK0NBQU1BLENBQUUseUJBQXdCSyxTQUFTO1FBQzNDbUIsY0FBYyxDQUFDVixPQUFPVyxLQUFLQyxRQUFRQztnQkFBWSxFQUFFQyxVQUFVLEVBQUU7WUFDM0QsSUFBSUEsY0FBYyxHQUFHO1lBQ3JCQyxXQUFXLElBQU1GLFdBQVc7b0JBQUVDLFlBQVlBLGFBQWE7Z0JBQUUsSUFBSTtRQUMvRDtJQUNGO0lBRUE3QixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2MsU0FBUztRQUNkLElBQUlpQixRQUFRLEVBQUU7UUFDZCxJQUFJQyxRQUFRLEVBQUU7UUFFZCxLQUFLLE1BQU1DLFNBQVNuQixRQUFTO1lBQzNCLE1BQU1vQixPQUFPRCxNQUFNRSxPQUFPLENBQUNDLEtBQUs7WUFDaEMsTUFBTUMsT0FBT0osTUFBTUssUUFBUSxDQUFDQSxRQUFRO1lBRXBDLElBQUlQLE1BQU1RLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxRQUFRLENBQUNQLEtBQUtRLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJO1lBQ3ZEWCxNQUFNWSxJQUFJLENBQUNUO1FBQ1gsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixJQUFJO1FBQ047UUFFQWYsYUFBYVk7UUFDYlYsWUFBWVc7SUFDZCxHQUFHO1FBQUNsQjtLQUFRO0lBRVosSUFBSVEsV0FDRixxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUMxQyxpRUFBV0E7Ozs7Ozs7Ozs7SUFJbEIsSUFBSVksT0FBTyxxQkFBTyw4REFBQzZCO2tCQUFLN0I7Ozs7OztJQUV4QixxQkFDRSw4REFBQzZCO1FBQUlDLFdBQVU7O1lBT1ozQixVQUFVNEIsR0FBRyxDQUFDLENBQUNaLE1BQU1hLHNCQUNwQiw4REFBQ0g7O3NDQUlDLDhEQUFDQTs0QkFBSUMsV0FBVTtzQ0FDWnhDLHVFQUFtQkEsQ0FBQzZCOzs7Ozs7d0JBRXRCcEIsUUFDRWtDLE1BQU0sQ0FDTCxDQUFDZixRQUNDQSxNQUFNRSxPQUFPLENBQUNDLEtBQUssQ0FBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUtSLEtBQUtRLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUUzREksR0FBRyxDQUFDLENBQUNiLHNCQUNKLDhEQUFDL0IsNERBQVNBO2dDQUFpQitCLE9BQU9BOytCQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsRUFBRTs7Ozs7O21CQWJyQkY7Ozs7O1lBa0JYakMseUJBQ0MsOERBQUM4QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzFDLGlFQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQWhGd0JjOztRQVVsQmhCLDJDQUFNQTs7O0tBVllnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hdGNoZXMvcGFnZS50c3g/ZTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tIFwiQC9jb21wb25lbnQvTWF0Y2hDYXJkXCI7XG5pbXBvcnQgTGluZUxvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50L3VpL0xpbmVMb2FkaW5nXCI7XG5pbXBvcnQgeyBjb25maWdSZXF1ZXN0IH0gZnJvbSBcIkAvY29uZmlnL2FwaS9wcmVtaWVyTGVhZ3VlL2NvbmZpZ1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoIH0gZnJvbSBcIkAvdHlwZVwiO1xuaW1wb3J0IGZvcm1hdFZpZXROYW1UaW1lVjIgZnJvbSBcIkAvaGVscGVyL2Zvcm1hdFZpZXROYW1UaW1lVjJcIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCJAL2hlbHBlci9mb3JtYXRUaW1lXCI7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBjb25maWdSZXF1ZXN0KTtcblxuICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZm91bmQgYW55IG1hdGNoZXNcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICBjb25zdCBtYXRjaGVzID0gZGF0YS5tYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoZXNQYWdlKCkge1xuICBjb25zdCBbdGltZUxhYmVsLCBzZXRUaW1lTGFiZWxdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2dhbWVXZWVrLCBzZXRHYW1lV2Vla10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtYXRjaGVzLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1ZhbGlkYXRpbmcsXG4gICAgbXV0YXRlLFxuICB9ID0gdXNlU1dSKGAvYXBpL21hdGNoZXMvc2Vhc29udjJgLCBmZXRjaGVyLCB7XG4gICAgb25FcnJvclJldHJ5OiAoZXJyb3IsIGtleSwgY29uZmlnLCByZXZhbGlkYXRlLCB7IHJldHJ5Q291bnQgfSkgPT4ge1xuICAgICAgaWYgKHJldHJ5Q291bnQgPj0gMykgcmV0dXJuO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXZhbGlkYXRlKHsgcmV0cnlDb3VudDogcmV0cnlDb3VudCArIDEgfSksIDMwMDApO1xuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGVzKSByZXR1cm47XG4gICAgbGV0IHRpbWVzID0gW10gYXMgc3RyaW5nW107XG4gICAgbGV0IHdlZWtzID0gW10gYXMgbnVtYmVyW107XG5cbiAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBtYXRjaC5raWNrb2ZmLmxhYmVsO1xuICAgICAgY29uc3Qgd2VlayA9IG1hdGNoLmdhbWV3ZWVrLmdhbWV3ZWVrO1xuXG4gICAgICBpZiAodGltZXMuZmluZCgodCkgPT4gdC5pbmNsdWRlcyh0aW1lLnNwbGl0KFwiLFwiKVswXSkpKSBjb250aW51ZTtcbiAgICAgIHRpbWVzLnB1c2godGltZSk7XG4gICAgICAvLyBpZiAod2Vla3MuaW5jbHVkZXMod2VlaykpIHtcbiAgICAgIC8vICAgd2Vla3MucHVzaCh3ZWVrKTtcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lTGFiZWwodGltZXMpO1xuICAgIHNldEdhbWVXZWVrKHdlZWtzKTtcbiAgfSwgW21hdGNoZXNdKTtcblxuICBpZiAoaXNMb2FkaW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNSBtYi01XCI+XG4gICAgICB7Lyoge2dhbWVXZWVrICE9PSAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyMHB4XSBmb250LW1lZGl1bSBweC0yIGxnOnB4LTQgIHB5LTIgdGV4dC10cmFuc3BhcmVudCBncmFkaWVudC10ZXh0IFwiPlxuICAgICAgICAgIE1hdGNod2VlayB7Z2FtZVdlZWt9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG5cbiAgICAgIHt0aW1lTGFiZWwubWFwKCh0aW1lLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzIwcHhdIGZvbnQtbWVkaXVtIHB4LTIgbGc6cHgtNCAgcHktMiB0ZXh0LXRyYW5zcGFyZW50IGdyYWRpZW50LXRleHQgXCI+XG4gICAgICAgICAgICBNYXRjaHdlZWsge2dhbWVXZWVrW2luZGV4XX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIHB4LTIgc206cHgtNCB0ZXh0LVsxNnB4XSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAge2Zvcm1hdFZpZXROYW1UaW1lVjIodGltZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21hdGNoZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChtYXRjaDogTWF0Y2gpID0+XG4gICAgICAgICAgICAgICAgbWF0Y2gua2lja29mZi5sYWJlbC5zcGxpdChcIixcIilbMF0gPT09IHRpbWUuc3BsaXQoXCIsXCIpWzBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChtYXRjaDogTWF0Y2gpID0+IChcbiAgICAgICAgICAgICAgPE1hdGNoQ2FyZCBrZXk9e21hdGNoPy5pZH0gbWF0Y2g9e21hdGNofSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIHttYXRjaGVzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUiIsIk1hdGNoQ2FyZCIsIkxpbmVMb2FkaW5nIiwiY29uZmlnUmVxdWVzdCIsImZvcm1hdFZpZXROYW1UaW1lVjIiLCJmZXRjaGVyIiwidXJsIiwicmVzcCIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrIiwic2V0R2FtZVdlZWsiLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJvbkVycm9yUmV0cnkiLCJrZXkiLCJjb25maWciLCJyZXZhbGlkYXRlIiwicmV0cnlDb3VudCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsIndlZWtzIiwibWF0Y2giLCJ0aW1lIiwia2lja29mZiIsImxhYmVsIiwid2VlayIsImdhbWV3ZWVrIiwiZmluZCIsInQiLCJpbmNsdWRlcyIsInNwbGl0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiZmlsdGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});