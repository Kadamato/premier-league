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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helper/formatVietNamTimeV2 */ \"(app-pages-browser)/./src/helper/formatVietNamTimeV2.ts\");\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_4__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        const matches = data.matches;\n        return matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return \"/api/matches/seasonv2\";\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeek, setGameWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();\n    const { data: matches, error, isLoading, isValidating, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        let times = [];\n        let weeks = [];\n        for (const match of matches === null || matches === void 0 ? void 0 : matches[0]){\n            const time = match.kickoff.label;\n            const week = match.gameweek.gameweek;\n            if (times.find((t)=>t.includes((0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(time)))) continue;\n            times.push((0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(time));\n        // if (weeks.includes(week)) {\n        //   weeks.push(week);\n        // }\n        }\n        console.log(times);\n        setTimeLabel(times);\n        setGameWeek(weeks);\n    }, [\n        matches,\n        inView\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 74,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 21\n    }, this);\n    console.log(matches);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            timeLabel.map((time, index)=>/*#__PURE__*/ {\n                var _matches_;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-2 px-2 sm:px-4 text-[16px] font-medium\",\n                            children: time\n                        }, void 0, false, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        ((_matches_ = matches === null || matches === void 0 ? void 0 : matches[0]) !== null && _matches_ !== void 0 ? _matches_ : []).filter((match)=>(0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(match.kickoff.label) === time).map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                match: match\n                            }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this);\n            }),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"P2CKZ7YaK1RRbLiAkOHfKgYBDwc=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFJRTtBQUNPO0FBQ2E7QUFHSDtBQUVyQjtBQUNjO0FBRXhELE1BQU1RLFVBQVUsT0FBT0M7SUFDckIsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUMsTUFBTUYsS0FBS0wsMkVBQWFBO1FBRTNDLElBQUlNLEtBQUtFLE1BQU0sS0FBSyxLQUFLO1lBQ3ZCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosS0FBS0ssSUFBSTtRQUM1QixNQUFNQyxVQUFVRixLQUFLRSxPQUFPO1FBRTVCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQVE7QUFDNUM7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd6QiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ3BELE1BQU0sQ0FBQzBCLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFXLEVBQUU7SUFFckQsTUFBTSxFQUFFNEIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBR3RCLHNFQUFTQTtJQUVqQyxNQUFNLEVBQ0pPLE1BQU1FLE9BQU8sRUFDYkMsS0FBSyxFQUNMYSxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsTUFBTSxFQUNQLEdBQUcxQix3REFBY0EsQ0FBQ2EsUUFBUVg7SUFFM0JQLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDZSxTQUFTO1FBQ2QsSUFBSWlCLFFBQVEsRUFBRTtRQUNkLElBQUlDLFFBQVEsRUFBRTtRQUVkLEtBQUssTUFBTUMsU0FBU25CLG9CQUFBQSw4QkFBQUEsT0FBUyxDQUFDLEVBQUUsQ0FBRTtZQUNoQyxNQUFNb0IsT0FBT0QsTUFBTUUsT0FBTyxDQUFDQyxLQUFLO1lBQ2hDLE1BQU1DLE9BQU9KLE1BQU1LLFFBQVEsQ0FBQ0EsUUFBUTtZQUVwQyxJQUFJUCxNQUFNUSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsUUFBUSxDQUFDdEMsdUVBQW1CQSxDQUFDK0IsU0FBUztZQUM5REgsTUFBTVcsSUFBSSxDQUFDdkMsdUVBQW1CQSxDQUFDK0I7UUFDL0IsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixJQUFJO1FBQ047UUFDQWxCLFFBQVEyQixHQUFHLENBQUNaO1FBRVpSLGFBQWFRO1FBQ2JOLFlBQVlPO0lBQ2QsR0FBRztRQUFDbEI7UUFBU2E7S0FBTztJQUVwQixJQUFJQyxXQUNGLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzVDLGlFQUFXQTs7Ozs7Ozs7OztJQUlsQixJQUFJYyxPQUFPLHFCQUFPLDhEQUFDNkI7a0JBQUs3Qjs7Ozs7O0lBRXhCQyxRQUFRMkIsR0FBRyxDQUFDN0I7SUFFWixxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7O1lBT1p2QixVQUFVd0IsR0FBRyxDQUFDLENBQUNaLE1BQU1hO29CQVFoQmpDO3VCQVBKLDhEQUFDOEI7O3NDQUlDLDhEQUFDQTs0QkFBSUMsV0FBVTtzQ0FDWlg7Ozs7Ozt3QkFFRHBCLENBQUFBLENBQUFBLFlBQUFBLG9CQUFBQSw4QkFBQUEsT0FBUyxDQUFDLEVBQUUsY0FBWkEsdUJBQUFBLFlBQWdCLEVBQUUsRUFDakJrQyxNQUFNLENBQ0wsQ0FBQ2YsUUFDQzlCLHVFQUFtQkEsQ0FBQzhCLE1BQU1FLE9BQU8sQ0FBQ0MsS0FBSyxNQUFNRixNQUVoRFksR0FBRyxDQUFDLENBQUNiLHNCQUNKLDhEQUFDakMsNERBQVNBO2dDQUFpQmlDLE9BQU9BOytCQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsRUFBRTs7Ozs7O21CQWJyQkY7Ozs7O1lBZUw7WUFHTmpDLHlCQUNDLDhEQUFDOEI7Z0JBQUlsQixLQUFLQTtnQkFBS21CLFdBQVU7MEJBQ3ZCLDRFQUFDNUMsaUVBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBaEZ3Qm9COztRQUlFaEIsa0VBQVNBO1FBUTdCRCxvREFBY0E7OztLQVpJaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYXRjaGVzL3BhZ2UudHN4P2U3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmltcG9ydCBNYXRjaENhcmQgZnJvbSBcIkAvY29tcG9uZW50L01hdGNoQ2FyZFwiO1xuaW1wb3J0IExpbmVMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudC91aS9MaW5lTG9hZGluZ1wiO1xuaW1wb3J0IHsgY29uZmlnUmVxdWVzdCB9IGZyb20gXCJAL2NvbmZpZy9hcGkvcHJlbWllckxlYWd1ZS9jb25maWdcIjtcblxuaW1wb3J0IHR5cGUgeyBNYXRjaCB9IGZyb20gXCJAL3R5cGVcIjtcbmltcG9ydCBmb3JtYXRWaWV0TmFtVGltZVYyIGZyb20gXCJAL2hlbHBlci9mb3JtYXRWaWV0TmFtVGltZVYyXCI7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiQC9oZWxwZXIvZm9ybWF0VGltZVwiO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gXCJzd3IvaW5maW5pdGVcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZ1JlcXVlc3QpO1xuXG4gICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmb3VuZCBhbnkgbWF0Y2hlc1wiKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoZXM7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0S2V5ID0gKHBhZ2VJbmRleDogbnVtYmVyLCBwcmV2RGF0YTogW10pID0+IHtcbiAgaWYgKHByZXZEYXRhICYmICFwcmV2RGF0YS5sZW5ndGgpIHJldHVybiBgL2FwaS9tYXRjaGVzL3NlYXNvbnYyYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoZXNQYWdlKCkge1xuICBjb25zdCBbdGltZUxhYmVsLCBzZXRUaW1lTGFiZWxdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2dhbWVXZWVrLCBzZXRHYW1lV2Vla10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtYXRjaGVzLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1ZhbGlkYXRpbmcsXG4gICAgbXV0YXRlLFxuICB9ID0gdXNlU1dSSW5maW5pdGUoZ2V0S2V5LCBmZXRjaGVyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWF0Y2hlcykgcmV0dXJuO1xuICAgIGxldCB0aW1lcyA9IFtdIGFzIHN0cmluZ1tdO1xuICAgIGxldCB3ZWVrcyA9IFtdIGFzIG51bWJlcltdO1xuXG4gICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzPy5bMF0pIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBtYXRjaC5raWNrb2ZmLmxhYmVsO1xuICAgICAgY29uc3Qgd2VlayA9IG1hdGNoLmdhbWV3ZWVrLmdhbWV3ZWVrO1xuXG4gICAgICBpZiAodGltZXMuZmluZCgodCkgPT4gdC5pbmNsdWRlcyhmb3JtYXRWaWV0TmFtVGltZVYyKHRpbWUpKSkpIGNvbnRpbnVlO1xuICAgICAgdGltZXMucHVzaChmb3JtYXRWaWV0TmFtVGltZVYyKHRpbWUpKTtcbiAgICAgIC8vIGlmICh3ZWVrcy5pbmNsdWRlcyh3ZWVrKSkge1xuICAgICAgLy8gICB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aW1lcyk7XG5cbiAgICBzZXRUaW1lTGFiZWwodGltZXMpO1xuICAgIHNldEdhbWVXZWVrKHdlZWtzKTtcbiAgfSwgW21hdGNoZXMsIGluVmlld10pO1xuXG4gIGlmIChpc0xvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuXG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC01IG1iLTVcIj5cbiAgICAgIHsvKiB7Z2FtZVdlZWsgIT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzIwcHhdIGZvbnQtbWVkaXVtIHB4LTIgbGc6cHgtNCAgcHktMiB0ZXh0LXRyYW5zcGFyZW50IGdyYWRpZW50LXRleHQgXCI+XG4gICAgICAgICAgTWF0Y2h3ZWVrIHtnYW1lV2Vla31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfSAqL31cblxuICAgICAge3RpbWVMYWJlbC5tYXAoKHRpbWUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gbGc6dGV4dC1bMjBweF0gZm9udC1tZWRpdW0gcHgtMiBsZzpweC00ICBweS0yIHRleHQtdHJhbnNwYXJlbnQgZ3JhZGllbnQtdGV4dCBcIj5cbiAgICAgICAgICAgIE1hdGNod2VlayB7Z2FtZVdlZWtbaW5kZXhdfVxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgcHgtMiBzbTpweC00IHRleHQtWzE2cHhdIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7KG1hdGNoZXM/LlswXSA/PyBbXSlcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChtYXRjaDogTWF0Y2gpID0+XG4gICAgICAgICAgICAgICAgZm9ybWF0VmlldE5hbVRpbWVWMihtYXRjaC5raWNrb2ZmLmxhYmVsKSA9PT0gdGltZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgobWF0Y2g6IE1hdGNoKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXRjaENhcmQga2V5PXttYXRjaD8uaWR9IG1hdGNoPXttYXRjaH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICB7bWF0Y2hlcyAmJiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZm9ybWF0VmlldE5hbVRpbWVWMiIsInVzZVNXUkluZmluaXRlIiwidXNlSW5WaWV3IiwiZmV0Y2hlciIsInVybCIsInJlc3AiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXRjaGVzIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0S2V5IiwicGFnZUluZGV4IiwicHJldkRhdGEiLCJsZW5ndGgiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrIiwic2V0R2FtZVdlZWsiLCJyZWYiLCJpblZpZXciLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJ0aW1lcyIsIndlZWtzIiwibWF0Y2giLCJ0aW1lIiwia2lja29mZiIsImxhYmVsIiwid2VlayIsImdhbWV3ZWVrIiwiZmluZCIsInQiLCJpbmNsdWRlcyIsInB1c2giLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImZpbHRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});