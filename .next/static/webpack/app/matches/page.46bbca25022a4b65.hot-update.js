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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr/infinite */ \"(app-pages-browser)/./node_modules/swr/dist/infinite/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        return data.matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst getKey = (pageIndex, prevData)=>{\n    if (prevData && !prevData.length) return null;\n    return \"/api/matches/seasonv2?page=\".concat(pageIndex);\n};\nfunction MatchesPage() {\n    var _this;\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeeks, setGameWeeks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();\n    const { data: matches, error, isLoading, isValidating, size, setSize, mutate } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getKey, fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches || match) return;\n        // const times: string[] = [];\n        const weeks = [];\n        for (const page of matches){\n            for (const match1 of page){\n                // const time = formatVietNamTimeV2(match.kickoff.label);\n                const week = match1.gameweek.gameweek;\n                // if (!times.includes(time)) times.push(time);\n                if (!weeks.includes(week)) weeks.push(week);\n            }\n        }\n        // setTimeLabel(times);\n        setGameWeeks(weeks);\n    }, [\n        matches\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView && !isLoading) setSize(size + 1);\n    }, [\n        inView,\n        size,\n        setSize\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 21\n    }, this);\n    var _matches_;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            ((_this = (_matches_ = matches === null || matches === void 0 ? void 0 : matches[0]) !== null && _matches_ !== void 0 ? _matches_ : []) === null || _this === void 0 ? void 0 : _this.length) > 0 ? gameWeeks.map((week)=>{\n                return matches === null || matches === void 0 ? void 0 : matches.map((page)=>page.filter((match1)=>match1.gameweek.gameweek === week).map((match1, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                i === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px] lg:text-[20px] font-medium px-2 lg:px-4 py-2 text-transparent animate-gradient gradient-text\",\n                                    children: [\n                                        \"Matchweek \",\n                                        week\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    match: match1\n                                }, match1 === null || match1 === void 0 ? void 0 : match1.id, false, {\n                                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, this)));\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Cannot found any matches\"\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"pU8USnLWzqlR/a+NcvcafWC+XB8=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView,\n        swr_infinite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVGO0FBQ2M7QUFFVjtBQUNPO0FBQ2E7QUFLbEUsTUFBTU8sVUFBVSxPQUFPQztJQUNyQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNRixLQUFLRiwyRUFBYUE7UUFFM0MsSUFBSUcsS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDdkIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixLQUFLSyxJQUFJO1FBQzVCLE9BQU9ELEtBQUtFLE9BQU87SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLE1BQU1FLFNBQVMsQ0FBQ0MsV0FBbUJDO0lBQ2pDLElBQUlBLFlBQVksQ0FBQ0EsU0FBU0MsTUFBTSxFQUFFLE9BQU87SUFDekMsT0FBTyw4QkFBd0MsT0FBVkY7QUFDdkM7QUFFZSxTQUFTRztRQWtEaEJQOztJQWpETixNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQVcsRUFBRTtJQUV2RCxNQUFNLEVBQUUyQixHQUFHLEVBQUVDLE1BQU0sRUFBRSxHQUFHekIsc0VBQVNBO0lBRWpDLE1BQU0sRUFDSlUsTUFBTUUsT0FBTyxFQUNiQyxLQUFLLEVBQ0xhLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsTUFBTSxFQUNQLEdBQUcvQix3REFBY0EsQ0FBQ2dCLFFBQVFYO0lBRTNCTixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2MsV0FBV21CLE9BQU87UUFDdkIsOEJBQThCO1FBQzlCLE1BQU1DLFFBQWtCLEVBQUU7UUFFMUIsS0FBSyxNQUFNQyxRQUFRckIsUUFBUztZQUMxQixLQUFLLE1BQU1tQixVQUFTRSxLQUFNO2dCQUN4Qix5REFBeUQ7Z0JBQ3pELE1BQU1DLE9BQU9ILE9BQU1JLFFBQVEsQ0FBQ0EsUUFBUTtnQkFFcEMsK0NBQStDO2dCQUMvQyxJQUFJLENBQUNILE1BQU1JLFFBQVEsQ0FBQ0YsT0FBT0YsTUFBTUssSUFBSSxDQUFDSDtZQUN4QztRQUNGO1FBRUEsdUJBQXVCO1FBQ3ZCWCxhQUFhUztJQUNmLEdBQUc7UUFBQ3BCO0tBQVE7SUFFWmQsZ0RBQVNBLENBQUM7UUFDUixJQUFJMkIsVUFBVSxDQUFDQyxXQUFXRyxRQUFRRCxPQUFPO0lBQzNDLEdBQUc7UUFBQ0g7UUFBUUc7UUFBTUM7S0FBUTtJQUUxQixJQUFJSCxXQUNGLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckMsaUVBQVdBOzs7Ozs7Ozs7O0lBSWxCLElBQUlXLE9BQU8scUJBQU8sOERBQUN5QjtrQkFBS3pCOzs7Ozs7UUFJbEJEO0lBRk4scUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOztZQUNaLEVBQUMzQixRQUFBQSxDQUFBQSxZQUFBQSxvQkFBQUEsOEJBQUFBLE9BQVMsQ0FBQyxFQUFFLGNBQVpBLHVCQUFBQSxZQUFnQixFQUFFLGNBQWxCQSw0QkFBRCxNQUFzQk0sTUFBTSxJQUFHLElBQzlCSSxVQUFVa0IsR0FBRyxDQUFDLENBQUNOO2dCQUNiLE9BQU90QixvQkFBQUEsOEJBQUFBLFFBQVM0QixHQUFHLENBQUMsQ0FBQ1AsT0FDbkJBLEtBQ0dRLE1BQU0sQ0FBQyxDQUFDVixTQUFpQkEsT0FBTUksUUFBUSxDQUFDQSxRQUFRLEtBQUtELE1BQ3JETSxHQUFHLENBQUMsQ0FBQ1QsUUFBY1csa0JBQ2xCLDhEQUFDSjs7Z0NBQ0VJLE1BQU0sbUJBQ0wsOERBQUNKO29DQUFJQyxXQUFVOzt3Q0FBMkc7d0NBQzdHTDs7Ozs7Ozs4Q0FHZiw4REFBQ2pDLDREQUFTQTtvQ0FBaUI4QixPQUFPQTttQ0FBbEJBLG1CQUFBQSw2QkFBQUEsT0FBT1ksRUFBRTs7Ozs7OzJCQU5qQkQ7Ozs7O1lBVWxCLG1CQUVBLDhEQUFDSjswQkFBSTs7Ozs7O1lBR04xQix5QkFDQyw4REFBQzBCO2dCQUFJZCxLQUFLQTtnQkFBS2UsV0FBVTswQkFDdkIsNEVBQUNyQyxpRUFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0E5RXdCaUI7O1FBSUVuQixrRUFBU0E7UUFVN0JELG9EQUFjQTs7O0tBZElvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hdGNoZXMvcGFnZS50c3g/ZTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSBcInN3ci9pbmZpbml0ZVwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuXG5pbXBvcnQgTWF0Y2hDYXJkIGZyb20gXCJAL2NvbXBvbmVudC9NYXRjaENhcmRcIjtcbmltcG9ydCBMaW5lTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnQvdWkvTGluZUxvYWRpbmdcIjtcbmltcG9ydCB7IGNvbmZpZ1JlcXVlc3QgfSBmcm9tIFwiQC9jb25maWcvYXBpL3ByZW1pZXJMZWFndWUvY29uZmlnXCI7XG5cbmltcG9ydCB0eXBlIHsgTWF0Y2ggfSBmcm9tIFwiQC90eXBlXCI7XG5pbXBvcnQgZm9ybWF0VmlldE5hbVRpbWVWMiBmcm9tIFwiQC9oZWxwZXIvZm9ybWF0VmlldE5hbVRpbWVWMlwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnUmVxdWVzdCk7XG5cbiAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZvdW5kIGFueSBtYXRjaGVzXCIpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEubWF0Y2hlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0S2V5ID0gKHBhZ2VJbmRleDogbnVtYmVyLCBwcmV2RGF0YTogW10pID0+IHtcbiAgaWYgKHByZXZEYXRhICYmICFwcmV2RGF0YS5sZW5ndGgpIHJldHVybiBudWxsO1xuICByZXR1cm4gYC9hcGkvbWF0Y2hlcy9zZWFzb252Mj9wYWdlPSR7cGFnZUluZGV4fWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGVzUGFnZSgpIHtcbiAgY29uc3QgW3RpbWVMYWJlbCwgc2V0VGltZUxhYmVsXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtnYW1lV2Vla3MsIHNldEdhbWVXZWVrc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBtYXRjaGVzLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc1ZhbGlkYXRpbmcsXG4gICAgc2l6ZSxcbiAgICBzZXRTaXplLFxuICAgIG11dGF0ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlKGdldEtleSwgZmV0Y2hlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2gpIHJldHVybjtcbiAgICAvLyBjb25zdCB0aW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCB3ZWVrczogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBtYXRjaGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIHBhZ2UpIHtcbiAgICAgICAgLy8gY29uc3QgdGltZSA9IGZvcm1hdFZpZXROYW1UaW1lVjIobWF0Y2gua2lja29mZi5sYWJlbCk7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBtYXRjaC5nYW1ld2Vlay5nYW1ld2VlaztcblxuICAgICAgICAvLyBpZiAoIXRpbWVzLmluY2x1ZGVzKHRpbWUpKSB0aW1lcy5wdXNoKHRpbWUpO1xuICAgICAgICBpZiAoIXdlZWtzLmluY2x1ZGVzKHdlZWspKSB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldFRpbWVMYWJlbCh0aW1lcyk7XG4gICAgc2V0R2FtZVdlZWtzKHdlZWtzKTtcbiAgfSwgW21hdGNoZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcgJiYgIWlzTG9hZGluZykgc2V0U2l6ZShzaXplICsgMSk7XG4gIH0sIFtpblZpZXcsIHNpemUsIHNldFNpemVdKTtcblxuICBpZiAoaXNMb2FkaW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNSBtYi01XCI+XG4gICAgICB7KG1hdGNoZXM/LlswXSA/PyBbXSk/Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIGdhbWVXZWVrcy5tYXAoKHdlZWspID0+IHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcz8ubWFwKChwYWdlOiBbXSkgPT5cbiAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgLmZpbHRlcigobWF0Y2g6IE1hdGNoKSA9PiBtYXRjaC5nYW1ld2Vlay5nYW1ld2VlayA9PT0gd2VlaylcbiAgICAgICAgICAgICAgLm1hcCgobWF0Y2g6IE1hdGNoLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gbGc6dGV4dC1bMjBweF0gZm9udC1tZWRpdW0gcHgtMiBsZzpweC00IHB5LTIgdGV4dC10cmFuc3BhcmVudCBhbmltYXRlLWdyYWRpZW50IGdyYWRpZW50LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNYXRjaHdlZWsge3dlZWt9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxNYXRjaENhcmQga2V5PXttYXRjaD8uaWR9IG1hdGNoPXttYXRjaH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5DYW5ub3QgZm91bmQgYW55IG1hdGNoZXM8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHttYXRjaGVzICYmIChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTV1JJbmZpbml0ZSIsInVzZUluVmlldyIsIk1hdGNoQ2FyZCIsIkxpbmVMb2FkaW5nIiwiY29uZmlnUmVxdWVzdCIsImZldGNoZXIiLCJ1cmwiLCJyZXNwIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJqc29uIiwibWF0Y2hlcyIsImVycm9yIiwiY29uc29sZSIsImdldEtleSIsInBhZ2VJbmRleCIsInByZXZEYXRhIiwibGVuZ3RoIiwiTWF0Y2hlc1BhZ2UiLCJ0aW1lTGFiZWwiLCJzZXRUaW1lTGFiZWwiLCJnYW1lV2Vla3MiLCJzZXRHYW1lV2Vla3MiLCJyZWYiLCJpblZpZXciLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJzaXplIiwic2V0U2l6ZSIsIm11dGF0ZSIsIm1hdGNoIiwid2Vla3MiLCJwYWdlIiwid2VlayIsImdhbWV3ZWVrIiwiaW5jbHVkZXMiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZmlsdGVyIiwiaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});