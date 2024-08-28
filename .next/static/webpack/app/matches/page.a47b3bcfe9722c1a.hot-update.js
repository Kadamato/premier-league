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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MatchesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _component_MatchCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helper/formatVietNamTimeV2 */ \"(app-pages-browser)/./src/helper/formatVietNamTimeV2.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_5__.configRequest);\n        if (resp.status !== 200) {\n            throw new Error(\"Cannot found any matches\");\n        }\n        const data = await resp.json();\n        const matches = data.matches;\n        return matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nfunction MatchesPage() {\n    _s();\n    const [timeLabel, setTimeLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameWeek, setGameWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data: matches, error, isLoading, isValidating, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/matches/seasonv2\", fetcher, {\n        onErrorRetry: (error, key, config, revalidate, param)=>{\n            let { retryCount } = param;\n            if (error.status !== 200) return;\n            if (retryCount >= 3) return;\n            setTimeout(()=>revalidate({\n                    retryCount: retryCount + 1\n                }), 1000 * Math.pow(2, retryCount));\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!matches) return;\n        let times = [];\n        let weeks = [];\n        for (const match of matches){\n            const time = match.kickoff.label;\n            const week = match.gameweek.gameweek;\n            if (times.find((t)=>t.includes(time.split(\",\")[0]))) continue;\n            times.push(time);\n        // if (weeks.includes(week)) {\n        //   weeks.push(week);\n        // }\n        }\n        setTimeLabel(times);\n        setGameWeek(weeks);\n    }, [\n        matches\n    ]);\n    if (isLoading || isValidating) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 74,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            timeLabel.map((time, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-2 px-2 sm:px-4 text-[16px] font-medium\",\n                            children: (0,_helper_formatVietNamTimeV2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(time)\n                        }, void 0, false, {\n                            fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        matches.filter((match)=>match.kickoff.label.split(\",\")[0] === time.split(\",\")[0]).map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MatchCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                match: match\n                            }, match === null || match === void 0 ? void 0 : match.id, false, {\n                                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)),\n            matches && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ui_LineLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/app/matches/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(MatchesPage, \"1+TSB5Aj66GpQwHdlGKR1VKe2Rw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MatchesPage;\nvar _c;\n$RefreshReg$(_c, \"MatchesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWF0Y2hlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVuQjtBQUVxQjtBQUNPO0FBQ2E7QUFHSDtBQUcvRCxNQUFNTyxVQUFVLE9BQU9DO0lBQ3JCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1DLE1BQU1GLEtBQUtILDJFQUFhQTtRQUUzQyxJQUFJSSxLQUFLRSxNQUFNLEtBQUssS0FBSztZQUN2QixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxPQUFPLE1BQU1KLEtBQUtLLElBQUk7UUFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTztRQUU1QixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2hCO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ3FCLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFXLEVBQUU7SUFFckQsTUFBTSxFQUNKYSxNQUFNRSxPQUFPLEVBQ2JDLEtBQUssRUFDTE8sU0FBUyxFQUNUQyxZQUFZLEVBQ1pDLE1BQU0sRUFDUCxHQUFHdkIsK0NBQU1BLENBQUUseUJBQXdCSyxTQUFTO1FBQzNDbUIsY0FBYyxDQUFDVixPQUFPVyxLQUFLQyxRQUFRQztnQkFBWSxFQUFFQyxVQUFVLEVBQUU7WUFDM0QsSUFBSWQsTUFBTUwsTUFBTSxLQUFLLEtBQUs7WUFDMUIsSUFBSW1CLGNBQWMsR0FBRztZQUNyQkMsV0FDRSxJQUFNRixXQUFXO29CQUFFQyxZQUFZQSxhQUFhO2dCQUFFLElBQzlDLE9BQU9FLEtBQUtDLEdBQUcsQ0FBQyxHQUFHSDtRQUV2QjtJQUNGO0lBRUE3QixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2MsU0FBUztRQUNkLElBQUltQixRQUFRLEVBQUU7UUFDZCxJQUFJQyxRQUFRLEVBQUU7UUFFZCxLQUFLLE1BQU1DLFNBQVNyQixRQUFTO1lBQzNCLE1BQU1zQixPQUFPRCxNQUFNRSxPQUFPLENBQUNDLEtBQUs7WUFDaEMsTUFBTUMsT0FBT0osTUFBTUssUUFBUSxDQUFDQSxRQUFRO1lBRXBDLElBQUlQLE1BQU1RLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxRQUFRLENBQUNQLEtBQUtRLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJO1lBQ3ZEWCxNQUFNWSxJQUFJLENBQUNUO1FBQ1gsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixJQUFJO1FBQ047UUFFQWpCLGFBQWFjO1FBQ2JaLFlBQVlhO0lBQ2QsR0FBRztRQUFDcEI7S0FBUTtJQUVaLElBQUlRLGFBQWFDLGNBQ2YscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDNUMsaUVBQVdBOzs7Ozs7Ozs7O0lBSWxCLElBQUlZLE9BQU8scUJBQU8sOERBQUMrQjtrQkFBSy9COzs7Ozs7SUFFeEIscUJBQ0UsOERBQUMrQjtRQUFJQyxXQUFVOztZQU9aN0IsVUFBVThCLEdBQUcsQ0FBQyxDQUFDWixNQUFNYSxzQkFDcEIsOERBQUNIOztzQ0FJQyw4REFBQ0E7NEJBQUlDLFdBQVU7c0NBQ1oxQyx1RUFBbUJBLENBQUMrQjs7Ozs7O3dCQUV0QnRCLFFBQ0VvQyxNQUFNLENBQ0wsQ0FBQ2YsUUFDQ0EsTUFBTUUsT0FBTyxDQUFDQyxLQUFLLENBQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLUixLQUFLUSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFFM0RJLEdBQUcsQ0FBQyxDQUFDYixzQkFDSiw4REFBQ2pDLDREQUFTQTtnQ0FBaUJpQyxPQUFPQTsrQkFBbEJBLGtCQUFBQSw0QkFBQUEsTUFBT2dCLEVBQUU7Ozs7OzttQkFickJGOzs7OztZQWtCWG5DLHlCQUNDLDhEQUFDZ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM1QyxpRUFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0FwRndCYzs7UUFVbEJoQiwyQ0FBTUE7OztLQVZZZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYXRjaGVzL3BhZ2UudHN4P2U3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmltcG9ydCBNYXRjaENhcmQgZnJvbSBcIkAvY29tcG9uZW50L01hdGNoQ2FyZFwiO1xuaW1wb3J0IExpbmVMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudC91aS9MaW5lTG9hZGluZ1wiO1xuaW1wb3J0IHsgY29uZmlnUmVxdWVzdCB9IGZyb20gXCJAL2NvbmZpZy9hcGkvcHJlbWllckxlYWd1ZS9jb25maWdcIjtcblxuaW1wb3J0IHR5cGUgeyBNYXRjaCB9IGZyb20gXCJAL3R5cGVcIjtcbmltcG9ydCBmb3JtYXRWaWV0TmFtVGltZVYyIGZyb20gXCJAL2hlbHBlci9mb3JtYXRWaWV0TmFtVGltZVYyXCI7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiQC9oZWxwZXIvZm9ybWF0VGltZVwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnUmVxdWVzdCk7XG5cbiAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZvdW5kIGFueSBtYXRjaGVzXCIpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGRhdGEubWF0Y2hlcztcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGVzUGFnZSgpIHtcbiAgY29uc3QgW3RpbWVMYWJlbCwgc2V0VGltZUxhYmVsXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtnYW1lV2Vlaywgc2V0R2FtZVdlZWtdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogbWF0Y2hlcyxcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNWYWxpZGF0aW5nLFxuICAgIG11dGF0ZSxcbiAgfSA9IHVzZVNXUihgL2FwaS9tYXRjaGVzL3NlYXNvbnYyYCwgZmV0Y2hlciwge1xuICAgIG9uRXJyb3JSZXRyeTogKGVycm9yLCBrZXksIGNvbmZpZywgcmV2YWxpZGF0ZSwgeyByZXRyeUNvdW50IH0pID0+IHtcbiAgICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDIwMCkgcmV0dXJuO1xuICAgICAgaWYgKHJldHJ5Q291bnQgPj0gMykgcmV0dXJuO1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gcmV2YWxpZGF0ZSh7IHJldHJ5Q291bnQ6IHJldHJ5Q291bnQgKyAxIH0pLFxuICAgICAgICAxMDAwICogTWF0aC5wb3coMiwgcmV0cnlDb3VudClcbiAgICAgICk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1hdGNoZXMpIHJldHVybjtcbiAgICBsZXQgdGltZXMgPSBbXSBhcyBzdHJpbmdbXTtcbiAgICBsZXQgd2Vla3MgPSBbXSBhcyBudW1iZXJbXTtcblxuICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgY29uc3QgdGltZSA9IG1hdGNoLmtpY2tvZmYubGFiZWw7XG4gICAgICBjb25zdCB3ZWVrID0gbWF0Y2guZ2FtZXdlZWsuZ2FtZXdlZWs7XG5cbiAgICAgIGlmICh0aW1lcy5maW5kKCh0KSA9PiB0LmluY2x1ZGVzKHRpbWUuc3BsaXQoXCIsXCIpWzBdKSkpIGNvbnRpbnVlO1xuICAgICAgdGltZXMucHVzaCh0aW1lKTtcbiAgICAgIC8vIGlmICh3ZWVrcy5pbmNsdWRlcyh3ZWVrKSkge1xuICAgICAgLy8gICB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHNldFRpbWVMYWJlbCh0aW1lcyk7XG4gICAgc2V0R2FtZVdlZWsod2Vla3MpO1xuICB9LCBbbWF0Y2hlc10pO1xuXG4gIGlmIChpc0xvYWRpbmcgfHwgaXNWYWxpZGF0aW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNSBtYi01XCI+XG4gICAgICB7Lyoge2dhbWVXZWVrICE9PSAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyMHB4XSBmb250LW1lZGl1bSBweC0yIGxnOnB4LTQgIHB5LTIgdGV4dC10cmFuc3BhcmVudCBncmFkaWVudC10ZXh0IFwiPlxuICAgICAgICAgIE1hdGNod2VlayB7Z2FtZVdlZWt9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG5cbiAgICAgIHt0aW1lTGFiZWwubWFwKCh0aW1lLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzIwcHhdIGZvbnQtbWVkaXVtIHB4LTIgbGc6cHgtNCAgcHktMiB0ZXh0LXRyYW5zcGFyZW50IGdyYWRpZW50LXRleHQgXCI+XG4gICAgICAgICAgICBNYXRjaHdlZWsge2dhbWVXZWVrW2luZGV4XX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIHB4LTIgc206cHgtNCB0ZXh0LVsxNnB4XSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAge2Zvcm1hdFZpZXROYW1UaW1lVjIodGltZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21hdGNoZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChtYXRjaDogTWF0Y2gpID0+XG4gICAgICAgICAgICAgICAgbWF0Y2gua2lja29mZi5sYWJlbC5zcGxpdChcIixcIilbMF0gPT09IHRpbWUuc3BsaXQoXCIsXCIpWzBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChtYXRjaDogTWF0Y2gpID0+IChcbiAgICAgICAgICAgICAgPE1hdGNoQ2FyZCBrZXk9e21hdGNoPy5pZH0gbWF0Y2g9e21hdGNofSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIHttYXRjaGVzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgPExpbmVMb2FkaW5nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUiIsIk1hdGNoQ2FyZCIsIkxpbmVMb2FkaW5nIiwiY29uZmlnUmVxdWVzdCIsImZvcm1hdFZpZXROYW1UaW1lVjIiLCJmZXRjaGVyIiwidXJsIiwicmVzcCIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1hdGNoZXMiLCJlcnJvciIsImNvbnNvbGUiLCJNYXRjaGVzUGFnZSIsInRpbWVMYWJlbCIsInNldFRpbWVMYWJlbCIsImdhbWVXZWVrIiwic2V0R2FtZVdlZWsiLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJvbkVycm9yUmV0cnkiLCJrZXkiLCJjb25maWciLCJyZXZhbGlkYXRlIiwicmV0cnlDb3VudCIsInNldFRpbWVvdXQiLCJNYXRoIiwicG93IiwidGltZXMiLCJ3ZWVrcyIsIm1hdGNoIiwidGltZSIsImtpY2tvZmYiLCJsYWJlbCIsIndlZWsiLCJnYW1ld2VlayIsImZpbmQiLCJ0IiwiaW5jbHVkZXMiLCJzcGxpdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImZpbHRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/matches/page.tsx\n"));

/***/ })

});