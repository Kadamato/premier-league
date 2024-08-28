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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helper/formatVietNamTimeV2 */ \"(app-pages-browser)/./src/helper/formatVietNamTimeV2.ts\");\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_4__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        const matches = data.matches;\n        return matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeek, setGameWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        let times = [];\n        let weeks = [];\n        for (const page of matches){\n            for (const match of page){\n                const time = match.kickoff.label;\n                const week = match.gameweek.gameweek;\n                if (times.find((t)=>t.includes((0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(time)))) continue;\n                times.push((0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(time));\n            // if (weeks.includes(week)) {\n            //   weeks.push(week);\n            // }\n            }\n        }\n        console.log(times);\n        setTimeLabel(times);\n        setGameWeek(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!inView) return;\n        setSize(size + 1);\n    }, [\n        inView\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 90,\n        columnNumber: 21\n    }, this);\n    console.log(matches);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            timeLabel.map((time, index)=>/*#__PURE__*/ {\n                var _matches_;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-2 px-2 sm:px-4 text-[16px] font-medium\",\n                            children: time\n                        }, void 0, false, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        ((_matches_ = matches === null || matches === void 0 ? void 0 : matches[0]) !== null && _matches_ !== void 0 ? _matches_ : []).filter((match)=>(0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(match.kickoff.label) === time).map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                match: match\n                            }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this);\n            }),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"zeS2VgN0tlZl3emToAr37Ne3IEM=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFJRTtBQUNPO0FBQ2E7QUFHSDtBQUVyQjtBQUNjO0FBRXhELE1BQU1RLFVBQVUsT0FBT0M7SUFDckIsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUMsTUFBTUYsS0FBS0wsMkVBQWFBO1FBRTNDLElBQUlNLEtBQUtFLE1BQU0sS0FBSyxLQUFLO1lBQ3ZCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosS0FBS0ssSUFBSTtRQUM1QixNQUFNQyxVQUFVRixLQUFLRSxPQUFPO1FBRTVCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQU87SUFDekMsT0FBTyw4QkFBd0MsT0FBVkY7QUFDdkM7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd6QiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ3BELE1BQU0sQ0FBQzBCLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFXLEVBQUU7SUFFckQsTUFBTSxFQUFFNEIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBR3RCLHNFQUFTQTtJQUVqQyxNQUFNLEVBQ0pPLE1BQU1FLE9BQU8sRUFDYkMsS0FBSyxFQUNMYSxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLE1BQU0sRUFDUCxHQUFHNUIsd0RBQWNBLENBQUNhLFFBQVFYO0lBRTNCUCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2UsU0FBUztRQUNkLElBQUltQixRQUFRLEVBQUU7UUFDZCxJQUFJQyxRQUFRLEVBQUU7UUFFZCxLQUFLLE1BQU1DLFFBQVFyQixRQUFTO1lBQzFCLEtBQUssTUFBTXNCLFNBQVNELEtBQU07Z0JBQ3hCLE1BQU1FLE9BQU9ELE1BQU1FLE9BQU8sQ0FBQ0MsS0FBSztnQkFDaEMsTUFBTUMsT0FBT0osTUFBTUssUUFBUSxDQUFDQSxRQUFRO2dCQUVwQyxJQUFJUixNQUFNUyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsUUFBUSxDQUFDekMsdUVBQW1CQSxDQUFDa0MsU0FBUztnQkFDOURKLE1BQU1ZLElBQUksQ0FBQzFDLHVFQUFtQkEsQ0FBQ2tDO1lBQy9CLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsSUFBSTtZQUNOO1FBQ0Y7UUFFQXJCLFFBQVE4QixHQUFHLENBQUNiO1FBRVpWLGFBQWFVO1FBQ2JSLFlBQVlTO0lBQ2QsR0FBRztRQUFDcEI7S0FBUTtJQUVaZixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQzRCLFFBQVE7UUFDYkksUUFBUUQsT0FBTztJQUNqQixHQUFHO1FBQUNIO0tBQU87SUFFWCxJQUFJQyxXQUNGLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQy9DLGlFQUFXQTs7Ozs7Ozs7OztJQUlsQixJQUFJYyxPQUFPLHFCQUFPLDhEQUFDZ0M7a0JBQUtoQzs7Ozs7O0lBRXhCQyxRQUFROEIsR0FBRyxDQUFDaEM7SUFFWixxQkFDRSw4REFBQ2lDO1FBQUlDLFdBQVU7O1lBT1oxQixVQUFVMkIsR0FBRyxDQUFDLENBQUNaLE1BQU1hO29CQVdoQnBDO3VCQVZKLDhEQUFDaUM7O3NDQUlDLDhEQUFDQTs0QkFBSUMsV0FBVTtzQ0FDWlg7Ozs7Ozt3QkFLRHZCLENBQUFBLENBQUFBLFlBQUFBLG9CQUFBQSw4QkFBQUEsT0FBUyxDQUFDLEVBQUUsY0FBWkEsdUJBQUFBLFlBQWdCLEVBQUUsRUFDakJxQyxNQUFNLENBQ0wsQ0FBQ2YsUUFDQ2pDLHVFQUFtQkEsQ0FBQ2lDLE1BQU1FLE9BQU8sQ0FBQ0MsS0FBSyxNQUFNRixNQUVoRFksR0FBRyxDQUFDLENBQUNiLHNCQUNKLDhEQUFDcEMsNERBQVNBO2dDQUFpQm9DLE9BQU9BOytCQUFsQkEsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsRUFBRTs7Ozs7O21CQWhCckJGOzs7OztZQWtCTDtZQUdOcEMseUJBQ0MsOERBQUNpQztnQkFBSXJCLEtBQUtBO2dCQUFLc0IsV0FBVTswQkFDdkIsNEVBQUMvQyxpRUFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0E3RndCb0I7O1FBSUVoQixrRUFBU0E7UUFVN0JELG9EQUFjQTs7O0tBZElpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hdGNoZXMvcGFnZS50c3g/ZTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tIFwiQC9jb21wb25lbnQvTWF0Y2hDYXJkXCI7XG5pbXBvcnQgTGluZUxvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50L3VpL0xpbmVMb2FkaW5nXCI7XG5pbXBvcnQgeyBjb25maWdSZXF1ZXN0IH0gZnJvbSBcIkAvY29uZmlnL2FwaS9wcmVtaWVyTGVhZ3VlL2NvbmZpZ1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoIH0gZnJvbSBcIkAvdHlwZVwiO1xuaW1wb3J0IGZvcm1hdFZpZXROYW1UaW1lVjIgZnJvbSBcIkAvaGVscGVyL2Zvcm1hdFZpZXROYW1UaW1lVjJcIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCJAL2hlbHBlci9mb3JtYXRUaW1lXCI7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSBcInN3ci9pbmZpbml0ZVwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnUmVxdWVzdCk7XG5cbiAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZvdW5kIGFueSBtYXRjaGVzXCIpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGRhdGEubWF0Y2hlcztcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRLZXkgPSAocGFnZUluZGV4OiBudW1iZXIsIHByZXZEYXRhOiBbXSkgPT4ge1xuICBpZiAocHJldkRhdGEgJiYgIXByZXZEYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBgL2FwaS9tYXRjaGVzL3NlYXNvbnYyP3BhZ2U9JHtwYWdlSW5kZXh9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hdGNoZXNQYWdlKCkge1xuICBjb25zdCBbdGltZUxhYmVsLCBzZXRUaW1lTGFiZWxdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2dhbWVXZWVrLCBzZXRHYW1lV2Vla10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtYXRjaGVzLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1ZhbGlkYXRpbmcsXG4gICAgc2l6ZSxcbiAgICBzZXRTaXplLFxuICAgIG11dGF0ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlKGdldEtleSwgZmV0Y2hlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1hdGNoZXMpIHJldHVybjtcbiAgICBsZXQgdGltZXMgPSBbXSBhcyBzdHJpbmdbXTtcbiAgICBsZXQgd2Vla3MgPSBbXSBhcyBudW1iZXJbXTtcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBtYXRjaGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIHBhZ2UpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IG1hdGNoLmtpY2tvZmYubGFiZWw7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBtYXRjaC5nYW1ld2Vlay5nYW1ld2VlaztcblxuICAgICAgICBpZiAodGltZXMuZmluZCgodCkgPT4gdC5pbmNsdWRlcyhmb3JtYXRWaWV0TmFtVGltZVYyKHRpbWUpKSkpIGNvbnRpbnVlO1xuICAgICAgICB0aW1lcy5wdXNoKGZvcm1hdFZpZXROYW1UaW1lVjIodGltZSkpO1xuICAgICAgICAvLyBpZiAod2Vla3MuaW5jbHVkZXMod2VlaykpIHtcbiAgICAgICAgLy8gICB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGltZXMpO1xuXG4gICAgc2V0VGltZUxhYmVsKHRpbWVzKTtcbiAgICBzZXRHYW1lV2Vlayh3ZWVrcyk7XG4gIH0sIFttYXRjaGVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWluVmlldykgcmV0dXJuO1xuICAgIHNldFNpemUoc2l6ZSArIDEpO1xuICB9LCBbaW5WaWV3XSk7XG5cbiAgaWYgKGlzTG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XG5cbiAgY29uc29sZS5sb2cobWF0Y2hlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnB4LTUgbWItNVwiPlxuICAgICAgey8qIHtnYW1lV2VlayAhPT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gbGc6dGV4dC1bMjBweF0gZm9udC1tZWRpdW0gcHgtMiBsZzpweC00ICBweS0yIHRleHQtdHJhbnNwYXJlbnQgZ3JhZGllbnQtdGV4dCBcIj5cbiAgICAgICAgICBNYXRjaHdlZWsge2dhbWVXZWVrfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuXG4gICAgICB7dGltZUxhYmVsLm1hcCgodGltZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyMHB4XSBmb250LW1lZGl1bSBweC0yIGxnOnB4LTQgIHB5LTIgdGV4dC10cmFuc3BhcmVudCBncmFkaWVudC10ZXh0IFwiPlxuICAgICAgICAgICAgTWF0Y2h3ZWVrIHtnYW1lV2Vla1tpbmRleF19XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBweC0yIHNtOnB4LTQgdGV4dC1bMTZweF0gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICBcbiAgICAgICAgICB7KG1hdGNoZXM/LlswXSA/PyBbXSlcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChtYXRjaDogTWF0Y2gpID0+XG4gICAgICAgICAgICAgICAgZm9ybWF0VmlldE5hbVRpbWVWMihtYXRjaC5raWNrb2ZmLmxhYmVsKSA9PT0gdGltZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgobWF0Y2g6IE1hdGNoKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXRjaENhcmQga2V5PXttYXRjaD8uaWR9IG1hdGNoPXttYXRjaH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICB7bWF0Y2hlcyAmJiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICA8TGluZUxvYWRpbmcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZm9ybWF0VmlldE5hbVRpbWVWMiIsInVzZVNXUkluZmluaXRlIiwidXNlSW5WaWV3IiwiZmV0Y2hlciIsInVybCIsInJlc3AiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXRjaGVzIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0S2V5IiwicGFnZUluZGV4IiwicHJldkRhdGEiLCJsZW5ndGgiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrIiwic2V0R2FtZVdlZWsiLCJyZWYiLCJpblZpZXciLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJzaXplIiwic2V0U2l6ZSIsIm11dGF0ZSIsInRpbWVzIiwid2Vla3MiLCJwYWdlIiwibWF0Y2giLCJ0aW1lIiwia2lja29mZiIsImxhYmVsIiwid2VlayIsImdhbWV3ZWVrIiwiZmluZCIsInQiLCJpbmNsdWRlcyIsInB1c2giLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImZpbHRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});