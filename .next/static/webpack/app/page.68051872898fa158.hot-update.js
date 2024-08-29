"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a71dc5b23c4d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/N2MzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImE3MWRjNWIyM2M0ZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/component/Matches/index.tsx":
/*!*****************************************!*\
  !*** ./src/component/Matches/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Matches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _helper_formatTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helper/formatTime */ \"(app-pages-browser)/./src/helper/formatTime.ts\");\n/* harmony import */ var _MatchCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MatchCard */ \"(app-pages-browser)/./src/component/MatchCard/index.tsx\");\n/* harmony import */ var _ui_LineLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/LineLoading */ \"(app-pages-browser)/./src/component/ui/LineLoading/index.tsx\");\n/* harmony import */ var _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/api/premierLeague/config */ \"(app-pages-browser)/./src/config/api/premierLeague/config.ts\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst fetcher = async (url)=>{\n    try {\n        const resp = await fetch(url, _config_api_premierLeague_config__WEBPACK_IMPORTED_MODULE_6__.configRequest);\n        const data = await resp.json();\n        const matches = data.matches;\n        return matches;\n    } catch (error) {\n        console.error(error);\n    }\n};\nfunction Matches() {\n    _s();\n    const [weekId, setWeekId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [startTime, setStartTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endTime, setEndTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameWeek, setGameWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { data: matches, error, isLoading, isValidating, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startTime && endTime ? \"/api/matches/weekv2/\".concat(weekId, \"?startDate=\").concat(startTime, \"&endDate=\").concat(endTime) : null, fetcher, {\n        onErrorRetry: (error, key, config, revalidate, param)=>{\n            let { retryCount } = param;\n            if (retryCount >= 3) return;\n            setTimeout(()=>revalidate({\n                    retryCount: retryCount + 1\n                }), 3000);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const resp = await fetch(\"/api/matches/season\");\n                const data = await resp.json();\n                const matches = data.matches;\n                const gameWeekId = matches[0].gameweek.id;\n                setWeekId(gameWeekId);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weekId === 0) return;\n        (async ()=>{\n            try {\n                const resp = await fetch(\"/api/matches/week/\".concat(weekId));\n                const data = await resp.json();\n                const matches = data.matches;\n                const startTime = matches[0].kickoff.label.split(\",\")[0];\n                const endTime = matches[matches.length - 1].kickoff.label.split(\",\")[0];\n                const gameWeek = matches[0].gameweek.gameweek;\n                setGameWeek(gameWeek);\n                setStartTime((0,_helper_formatTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(startTime));\n                setEndTime((0,_helper_formatTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(endTime));\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, [\n        weekId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_LineLoading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n            lineNumber: 96,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n        lineNumber: 95,\n        columnNumber: 7\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" Cannot found any matches\"\n    }, void 0, false, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:px-5 mb-5\",\n        children: [\n            gameWeek !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[20px] lg:text-[20px] font-medium px-2 lg:px-4  py-2 text-transparent gradient-text animate-gradient \",\n                children: [\n                    \"Matchweek \",\n                    gameWeek\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this),\n            !(matches === null || matches === void 0 ? void 0 : matches.length) && matches.map((match)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MatchCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    match: match\n                }, match === null || match === void 0 ? void 0 : match.id, false, {\n                    fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kadamato/Documents/projects/premier/src/component/Matches/index.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(Matches, \"IIv3Zk0eoT423NT+HI9E28nvDpw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Matches;\nvar _c;\n$RefreshReg$(_c, \"Matches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvTWF0Y2hlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBRW5CO0FBRW9CO0FBQ1I7QUFDTztBQUNzQjtBQUluQztBQUUvQixNQUFNTyxVQUFVLE9BQU9DO0lBQ3JCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1DLE1BQU1GLEtBQUtGLDJFQUFhQTtRQUUzQyxNQUFNSyxPQUFPLE1BQU1GLEtBQUtHLElBQUk7UUFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTztRQUU1QixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2hCO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNLENBQUNrQixXQUFXQyxhQUFhLEdBQUduQiwrQ0FBUUEsQ0FBUztJQUNuRCxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBUztJQUVqRCxNQUFNLEVBQ0pVLE1BQU1FLE9BQU8sRUFDYkMsS0FBSyxFQUNMVyxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsTUFBTSxFQUNQLEdBQUd6QiwrQ0FBTUEsQ0FDUmlCLGFBQWFFLFVBQ1QsdUJBQTJDRixPQUFwQkYsUUFBTyxlQUFrQ0ksT0FBckJGLFdBQVUsYUFBbUIsT0FBUkUsV0FDaEUsTUFDSmQsU0FDQTtRQUNFcUIsY0FBYyxDQUFDZCxPQUFPZSxLQUFLQyxRQUFRQztnQkFBWSxFQUFFQyxVQUFVLEVBQUU7WUFDM0QsSUFBSUEsY0FBYyxHQUFHO1lBQ3JCQyxXQUFXLElBQU1GLFdBQVc7b0JBQUVDLFlBQVlBLGFBQWE7Z0JBQUUsSUFBSTtRQUMvRDtJQUNGO0lBR0ZoQyxnREFBU0EsQ0FBQztRQUNQO1lBQ0MsSUFBSTtnQkFDRixNQUFNUyxPQUFPLE1BQU1DLE1BQU07Z0JBRXpCLE1BQU1DLE9BQU8sTUFBTUYsS0FBS0csSUFBSTtnQkFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTztnQkFFNUIsTUFBTXFCLGFBQWFyQixPQUFPLENBQUMsRUFBRSxDQUFDc0IsUUFBUSxDQUFDQyxFQUFFO2dCQUV6Q2xCLFVBQVVnQjtZQUNaLEVBQUUsT0FBT3BCLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMZCxnREFBU0EsQ0FBQztRQUNSLElBQUlpQixXQUFXLEdBQUc7UUFDakI7WUFDQyxJQUFJO2dCQUNGLE1BQU1SLE9BQU8sTUFBTUMsTUFBTSxxQkFBNEIsT0FBUE87Z0JBRTlDLE1BQU1OLE9BQU8sTUFBTUYsS0FBS0csSUFBSTtnQkFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTztnQkFFNUIsTUFBTU0sWUFBWU4sT0FBTyxDQUFDLEVBQUUsQ0FBQ3dCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hELE1BQU1sQixVQUFVUixPQUFPLENBQUNBLFFBQVEyQixNQUFNLEdBQUcsRUFBRSxDQUFDSCxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2RSxNQUFNaEIsV0FBV1YsT0FBTyxDQUFDLEVBQUUsQ0FBQ3NCLFFBQVEsQ0FBQ0EsUUFBUTtnQkFFN0NYLFlBQVlEO2dCQUNaSCxhQUFhakIsOERBQVVBLENBQUNnQjtnQkFDeEJHLFdBQVduQiw4REFBVUEsQ0FBQ2tCO1lBQ3hCLEVBQUUsT0FBT1AsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO0lBQ0YsR0FBRztRQUFDRztLQUFPO0lBRVgsSUFBSVEsV0FDRixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNyQyx1REFBV0E7Ozs7Ozs7Ozs7SUFJbEIsSUFBSVMsT0FBTyxxQkFBTyw4REFBQzJCO2tCQUFJOzs7Ozs7SUFFdkIscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7O1lBQ1puQixhQUFhLG1CQUNaLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O29CQUE2RztvQkFDL0duQjs7Ozs7OztZQUlkLEVBQUNWLG9CQUFBQSw4QkFBQUEsUUFBUzJCLE1BQU0sS0FDZjNCLFFBQVE4QixHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUN4QyxrREFBU0E7b0JBQWlCd0MsT0FBT0E7bUJBQWxCQSxrQkFBQUEsNEJBQUFBLE1BQU9SLEVBQUU7Ozs7Ozs7Ozs7O0FBSW5DO0dBdkZ3QnBCOztRQVlsQmQsMkNBQU1BOzs7S0FaWWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9NYXRjaGVzL2luZGV4LnRzeD8wYjU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiQC9oZWxwZXIvZm9ybWF0VGltZVwiO1xuaW1wb3J0IE1hdGNoQ2FyZCBmcm9tIFwiLi4vTWF0Y2hDYXJkXCI7XG5pbXBvcnQgTGluZUxvYWRpbmcgZnJvbSBcIi4uL3VpL0xpbmVMb2FkaW5nXCI7XG5pbXBvcnQgeyBjb25maWdSZXF1ZXN0IH0gZnJvbSBcIkAvY29uZmlnL2FwaS9wcmVtaWVyTGVhZ3VlL2NvbmZpZ1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1hdGNoIH0gZnJvbSBcIkAvdHlwZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi9hcHAvZ2xvYmFscy5jc3NcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZ1JlcXVlc3QpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoZXM7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWF0Y2hlcygpIHtcbiAgY29uc3QgW3dlZWtJZCwgc2V0V2Vla0lkXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzdGFydFRpbWUsIHNldFN0YXJ0VGltZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZ2FtZVdlZWssIHNldEdhbWVXZWVrXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IG1hdGNoZXMsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIGlzVmFsaWRhdGluZyxcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1IoXG4gICAgc3RhcnRUaW1lICYmIGVuZFRpbWVcbiAgICAgID8gYC9hcGkvbWF0Y2hlcy93ZWVrdjIvJHt3ZWVrSWR9P3N0YXJ0RGF0ZT0ke3N0YXJ0VGltZX0mZW5kRGF0ZT0ke2VuZFRpbWV9YFxuICAgICAgOiBudWxsLFxuICAgIGZldGNoZXIsXG4gICAge1xuICAgICAgb25FcnJvclJldHJ5OiAoZXJyb3IsIGtleSwgY29uZmlnLCByZXZhbGlkYXRlLCB7IHJldHJ5Q291bnQgfSkgPT4ge1xuICAgICAgICBpZiAocmV0cnlDb3VudCA+PSAzKSByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmV2YWxpZGF0ZSh7IHJldHJ5Q291bnQ6IHJldHJ5Q291bnQgKyAxIH0pLCAzMDAwKTtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcIi9hcGkvbWF0Y2hlcy9zZWFzb25cIik7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gZGF0YS5tYXRjaGVzO1xuXG4gICAgICAgIGNvbnN0IGdhbWVXZWVrSWQgPSBtYXRjaGVzWzBdLmdhbWV3ZWVrLmlkO1xuXG4gICAgICAgIHNldFdlZWtJZChnYW1lV2Vla0lkKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3ZWVrSWQgPT09IDApIHJldHVybjtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNoZXMvd2Vlay8ke3dlZWtJZH1gKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhLm1hdGNoZXM7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbWF0Y2hlc1swXS5raWNrb2ZmLmxhYmVsLnNwbGl0KFwiLFwiKVswXTtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5raWNrb2ZmLmxhYmVsLnNwbGl0KFwiLFwiKVswXTtcbiAgICAgICAgY29uc3QgZ2FtZVdlZWsgPSBtYXRjaGVzWzBdLmdhbWV3ZWVrLmdhbWV3ZWVrO1xuXG4gICAgICAgIHNldEdhbWVXZWVrKGdhbWVXZWVrKTtcbiAgICAgICAgc2V0U3RhcnRUaW1lKGZvcm1hdFRpbWUoc3RhcnRUaW1lKSk7XG4gICAgICAgIHNldEVuZFRpbWUoZm9ybWF0VGltZShlbmRUaW1lKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbd2Vla0lkXSk7XG5cbiAgaWYgKGlzTG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxMaW5lTG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PiBDYW5ub3QgZm91bmQgYW55IG1hdGNoZXM8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnB4LTUgbWItNVwiPlxuICAgICAge2dhbWVXZWVrICE9PSAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyMHB4XSBmb250LW1lZGl1bSBweC0yIGxnOnB4LTQgIHB5LTIgdGV4dC10cmFuc3BhcmVudCBncmFkaWVudC10ZXh0IGFuaW1hdGUtZ3JhZGllbnQgXCI+XG4gICAgICAgICAgTWF0Y2h3ZWVrIHtnYW1lV2Vla31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7IW1hdGNoZXM/Lmxlbmd0aCAgJiZcbiAgICAgICAgbWF0Y2hlcy5tYXAoKG1hdGNoOiBNYXRjaCkgPT4gKFxuICAgICAgICAgIDxNYXRjaENhcmQga2V5PXttYXRjaD8uaWR9IG1hdGNoPXttYXRjaH0gLz5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJmb3JtYXRUaW1lIiwiTWF0Y2hDYXJkIiwiTGluZUxvYWRpbmciLCJjb25maWdSZXF1ZXN0IiwiZmV0Y2hlciIsInVybCIsInJlc3AiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWF0Y2hlcyIsImVycm9yIiwiY29uc29sZSIsIk1hdGNoZXMiLCJ3ZWVrSWQiLCJzZXRXZWVrSWQiLCJzdGFydFRpbWUiLCJzZXRTdGFydFRpbWUiLCJlbmRUaW1lIiwic2V0RW5kVGltZSIsImdhbWVXZWVrIiwic2V0R2FtZVdlZWsiLCJpc0xvYWRpbmciLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJvbkVycm9yUmV0cnkiLCJrZXkiLCJjb25maWciLCJyZXZhbGlkYXRlIiwicmV0cnlDb3VudCIsInNldFRpbWVvdXQiLCJnYW1lV2Vla0lkIiwiZ2FtZXdlZWsiLCJpZCIsImtpY2tvZmYiLCJsYWJlbCIsInNwbGl0IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/Matches/index.tsx\n"));

/***/ })

});