"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	padding: 10px 35px 10px 35px;\n	line-height: 1;\n\n	background-color: white;\n	border: 1.5px solid lightgrey;\n	border-radius: 3px;\n\n	transition: 200ms;\n\n	@media (max-width: 768px) {\n		padding: 5px 17.5px 5px 17.5px;\n	}\n\n	&:hover {\n		background-color: ",
        ";\n		border: 1.5px solid\n			",
        ";\n		color: ",
        ";\n		cursor: ",
        ";\n	}\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	color: ",
        ";\n	",
        "\n\n	padding: 10px;\n\n	@media (max-width: 768px) {\n		padding: 5px;\n	}\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	color: ",
        ";\n	",
        "\n\n	",
        "\n\n	text-align: ",
        ";\n\n	padding: 10px;\n\n	@media (max-width: 768px) {\n		padding: 5px;\n	}\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n\n	color: ",
        ";\n	",
        "\n\n	border-collapse: separate;\n	border-spacing: 0;\n	border: 1.5px solid lightgrey;\n	border-radius: 3px;\n	overflow: hidden; /* required for border-radius work */\n\n	thead {\n		background-color: ",
        ";\n	}\n\n	td,\n	th {\n		padding: 10px;\n		border-right: 1.5px solid lightgrey;\n		border-bottom: 1.5px solid lightgrey;\n	}\n\n	/* remove borders on the far right and bottom edges */\n	tfoot tr:last-child td {\n		border-bottom: none;\n	}\n	td:last-child,\n	th:last-child {\n		border-right: none;\n	}\n\n	@media (max-width: 768px) {\n		padding: 5px;\n	}\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	padding: 10px 35px 10px 35px;\n\n	background-color: white;\n	border: 1.5px solid lightgrey;\n	border-radius: 3px;\n\n	@media (max-width: 768px) {\n		padding: 5px 17.5px 5px 17.5px;\n	}\n\n	&:hover {\n		cursor: ",
        ";\n	}\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	margin: 10px;\n\n	@media (max-width: 768px) {\n		margin: 15px;\n	}\n\n	&:hover {\n		cursor: ",
        ";\n	}\n	&:checked {\n		accent-color: ",
        ";\n	}\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n	max-width: ",
        ";\n\n	margin: 10px;\n\n	@media (max-width: 768px) {\n		max-width: ",
        ";\n	}\n\n	",
        "\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n	width: 100%;\n	font-family: sans-serif;\n	font-size: 1.5em;\n	color: ",
        ";\n	position: relative;\n\n	img {\n		display: block;\n		filter: brightness(",
        ");\n		width: 100%;\n		object-fit: cover;\n	}\n	div {\n		text-align: center;\n		position: absolute;\n		top: 50%;\n		left: 50%;\n		transform: translate(\n			-50%,\n			-50%\n		); /* displace element from having the top left corner centered */\n	}\n	@media (max-width: 768px) {\n		font-size: 0.5em;\n	}\n\n	",
        "\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n	font-size: 1em;\n	font-family: sans-serif;\n	text-align: ",
        ";\n\n	border: 1.5px solid lightgrey;\n	border-top: 5px solid ",
        ";\n	border-radius: 3px;\n	padding: 20px;\n	width: 25%;\n\n	img {\n		background-color: lightblue;\n		width: 100%;\n		height: 200px;\n		border-radius: 3px;\n		object-fit: cover;\n		opacity: ",
        ";\n	}\n\n	color: ",
        ";\n	",
        "\n\n	@media (max-width: 768px) {\n		width: 60%;\n		img {\n			height: 140px;\n		}\n	}\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from2, except, desc) {
    if (from2 && (typeof from2 === "undefined" ? "undefined" : _type_of(from2)) === "object" || typeof from2 === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from2[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
    "node_modules/shallowequal/index.js": function(exports2, module2) {
        "use strict";
        module2.exports = function shallowEqual(objA, objB, compare, compareContext) {
            var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
            if (ret !== void 0) {
                return !!ret;
            }
            if (objA === objB) {
                return true;
            }
            if ((typeof objA === "undefined" ? "undefined" : _type_of(objA)) !== "object" || !objA || (typeof objB === "undefined" ? "undefined" : _type_of(objB)) !== "object" || !objB) {
                return false;
            }
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) {
                return false;
            }
            var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
            for(var idx = 0; idx < keysA.length; idx++){
                var key = keysA[idx];
                if (!bHasOwnProperty(key)) {
                    return false;
                }
                var valueA = objA[key];
                var valueB = objB[key];
                ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
                if (ret === false || ret === void 0 && valueA !== valueB) {
                    return false;
                }
            }
            return true;
        };
    }
});
// src/index.ts
var index_exports = {};
__export(index_exports, {
    Button: function() {
        return Button_default;
    },
    Card: function() {
        return Card_default;
    },
    Dropdown: function() {
        return Dropdown_default;
    },
    HeroImage: function() {
        return HeroImage_default;
    },
    Image: function() {
        return Image_default;
    },
    Label: function() {
        return Label_default;
    },
    RadioButton: function() {
        return RadioButton_default;
    },
    Table: function() {
        return Table_default;
    },
    Text: function() {
        return Text_default;
    }
});
module.exports = __toCommonJS(index_exports);
// node_modules/tslib/tslib.es6.mjs
var __assign = function __assign1() {
    __assign = Object.assign || function __assign2(t) {
        for(var s2, i2 = 1, n = arguments.length; i2 < n; i2++){
            s2 = arguments[i2];
            for(var p2 in s2)if (Object.prototype.hasOwnProperty.call(s2, p2)) t[p2] = s2[p2];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2) for(var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++){
        if (ar || !(i2 in from2)) {
            if (!ar) ar = Array.prototype.slice.call(from2, 0, i2);
            ar[i2] = from2[i2];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from2));
}
// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
    };
}
// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
// node_modules/styled-components/dist/styled-components.esm.js
var import_react = __toESM(require("react"));
var import_shallowequal = __toESM(require_shallowequal());
// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
    return value.indexOf(search, position2);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join("");
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length2,
        return: "",
        siblings: siblings
    };
}
function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    append(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return charat(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return substr(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = "", value;
}
function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
    while(--count && next())if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
// node_modules/stylis/src/Parser.js
function compile(value) {
    return dealloc(parse("", null, null, null, [
        ""
    ], value = alloc(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while(scanning)switch(previous = character2, character2 = next()){
        // (
        case 40:
            if (previous != 108 && charat(characters2, length2 - 1) == 58) {
                if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters2 += delimit(character2);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters2 += whitespace(previous);
            break;
        // \
        case 92:
            characters2 += escaping(caret() - 1, 7);
            continue;
        // /
        case 47:
            switch(peek()){
                case 42:
                case 47:
                    append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
                    break;
                default:
                    characters2 += "/";
            }
            break;
        // {
        case 123 * variable:
            points[index++] = strlen(characters2) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character2){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
                    if (property > 0 && strlen(characters2) - length2) append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters2 += ";";
                // { rule/at-rule
                default:
                    append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
                    if (character2 === 123) if (offset === 0) parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                    else switch(atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                            break;
                        default:
                            parse(characters2, reference, reference, reference, [
                                ""
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
            break;
        // :
        case 58:
            length2 = 1 + strlen(characters2), property = previous;
        default:
            if (variable < 1) {
                if (character2 == 123) --variable;
                else if (character2 == 125 && variable++ == 0 && prev() == 125) continue;
            }
            switch(characters2 += from(character2), character2 * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
                    break;
                // ,
                case 44:
                    points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    if (peek() === 45) characters2 += delimit(next());
                    atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                    break;
                // -
                case 45:
                    if (previous === 45 && strlen(characters2) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ""
    ];
    var size = sizeof(rule);
    for(var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)for(var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2]))) props[k2++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
// node_modules/stylis/src/Prefixer.js
function prefix(value, length2, children) {
    switch(hash(value, length2)){
        // color-adjust
        case 5103:
            return WEBKIT + "print-" + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return WEBKIT + value + value;
        // tab-size
        case 4789:
            return MOZ + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return WEBKIT + value + MOZ + value + MS + value + value;
        // writing-mode
        case 5936:
            switch(charat(value, length2 + 11)){
                // vertical-l(r)
                case 114:
                    return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
                // vertical-r(l)
                case 108:
                    return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
                // horizontal(-)tb
                case 45:
                    return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return WEBKIT + value + MS + value + value;
        // order
        case 6165:
            return WEBKIT + value + MS + "flex-" + value + value;
        // align-items
        case 5187:
            return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
        // align-self
        case 5443:
            return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
        // align-content
        case 4675:
            return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
        // flex-shrink
        case 5548:
            return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
        // flex-basis
        case 5292:
            return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
        // flex-grow
        case 6060:
            return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
        // transition
        case 4554:
            return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
        // cursor
        case 6187:
            return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
        // background, background-image
        case 5495:
        case 3959:
            return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
        // justify-content
        case 4968:
            return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
        // justify-self
        case 4200:
            if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return MS + replace(value, "template-", "") + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length2 = index, match(element.props, /grid-\w+-end/);
            })) {
                return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
            }
            return MS + replace(value, "-start", "") + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return match(element.props, /grid-\w+-start/);
            }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (strlen(value) - 1 - length2 > 6) switch(charat(value, length2 + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    if (charat(value, length2 + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
                // (s)tretch
                case 115:
                    return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b, c2, d, e, f2) {
                return MS + a2 + ":" + b + f2 + (c2 ? MS + a2 + "-span:" + (d ? e : +e - +b) + f2 : "") + value;
            });
        // position: sticky
        case 4949:
            if (charat(value, length2 + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch(charat(value, charat(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
                // (inline-)?gri(d)
                case 100:
                    return replace(value, ":", ":" + MS) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return replace(value, "scroll-", "scroll-snap-") + value;
    }
    return value;
}
// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
    var output = "";
    for(var i2 = 0; i2 < children.length; i2++)output += callback(children[i2], i2, children, callback) || "";
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case LAYER:
            if (element.children.length) break;
        case IMPORT:
        case DECLARATION:
            return element.return = element.return || element.value;
        case COMMENT:
            return "";
        case KEYFRAMES:
            return element.return = element.value + "{" + serialize(element.children, callback) + "}";
        case RULESET:
            if (!strlen(element.value = element.props.join(","))) return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
// node_modules/stylis/src/Middleware.js
function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
        var output = "";
        for(var i2 = 0; i2 < length2; i2++)output += collection[i2](element, index, children, callback) || "";
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case DECLARATION:
                element.return = prefix(element.value, element.length, children);
                return;
            case KEYFRAMES:
                return serialize([
                    copy(element, {
                        value: replace(element.value, "@", "@" + WEBKIT)
                    })
                ], callback);
            case RULESET:
                if (element.length) return combine(children = element.props, function(value) {
                    switch(match(value, callback = /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ":read-only":
                        case ":read-write":
                            lift(copy(element, {
                                props: [
                                    replace(value, /:(read-\w+)/, ":" + MOZ + "$1")
                                ]
                            }));
                            lift(copy(element, {
                                props: [
                                    value
                                ]
                            }));
                            assign(element, {
                                props: filter(children, callback)
                            });
                            break;
                        // :placeholder
                        case "::placeholder":
                            lift(copy(element, {
                                props: [
                                    replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")
                                ]
                            }));
                            lift(copy(element, {
                                props: [
                                    replace(value, /:(plac\w+)/, ":" + MOZ + "$1")
                                ]
                            }));
                            lift(copy(element, {
                                props: [
                                    replace(value, /:(plac\w+)/, MS + "input-$1")
                                ]
                            }));
                            lift(copy(element, {
                                props: [
                                    value
                                ]
                            }));
                            assign(element, {
                                props: filter(children, callback)
                            });
                            break;
                    }
                    return "";
                });
        }
    }
}
// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
// node_modules/styled-components/dist/styled-components.esm.js
var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var m = "active";
var y = "data-styled-version";
var v = "6.1.15";
var g = "/*!sc*/\n";
var S = "undefined" != typeof window && "HTMLElement" in window;
var w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV);
var E = /invalid hook call/i;
var N = /* @__PURE__ */ new Set();
var P = function P(t, n) {
    if ("production" !== process.env.NODE_ENV) {
        var r2 = n ? ' with the id of "'.concat(n, '"') : "", s2 = "The component ".concat(t).concat(r2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i2 = console.error;
        try {
            var a2 = true;
            console.error = function(t2) {
                for(var n2 = [], r3 = 1; r3 < arguments.length; r3++)n2[r3 - 1] = arguments[r3];
                E.test(t2) ? (a2 = false, N.delete(s2)) : i2.apply(void 0, __spreadArray([
                    t2
                ], n2, false));
            }, (0, import_react.useRef)(), a2 && !N.has(s2) && (console.warn(s2), N.add(s2));
        } catch (e) {
            E.test(e.message) && N.delete(s2);
        } finally{
            console.error = i2;
        }
    }
};
var _ = Object.freeze([]);
var C = Object.freeze({});
function I(e, t, n) {
    return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = /* @__PURE__ */ new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
]);
var O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var D = /(^-|-$)/g;
function R(e) {
    return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi;
var k = 52;
var j = function j(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
    var t, n = "";
    for(t = Math.abs(e); t > k; t = t / k | 0)n = j(t % k) + n;
    return (j(t % k) + n).replace(T, "$1-$2");
}
var V;
var F = 5381;
var M = function M(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
};
var z = function z(e) {
    return M(F, e);
};
function $(e) {
    return x(z(e) >>> 0);
}
function B(e) {
    return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
    return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = "function" == typeof Symbol && Symbol.for;
var Y = G ? Symbol.for("react.memo") : 60115;
var q = G ? Symbol.for("react.forward_ref") : 60112;
var W = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var H = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var U = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var J = ((V = {})[q] = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
}, V[Y] = U, V);
function X(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : W;
    var t;
}
var Z = Object.defineProperty;
var K = Object.getOwnPropertyNames;
var Q = Object.getOwnPropertySymbols;
var ee = Object.getOwnPropertyDescriptor;
var te = Object.getPrototypeOf;
var ne = Object.prototype;
function re(e, t, n) {
    if ("string" != typeof t) {
        if (ne) {
            var r2 = te(t);
            r2 && r2 !== ne && re(e, r2, n);
        }
        var o2 = K(t);
        Q && (o2 = o2.concat(Q(t)));
        for(var s2 = X(e), i2 = X(t), a2 = 0; a2 < o2.length; ++a2){
            var c2 = o2[a2];
            if (!(c2 in H || n && n[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
                var l2 = ee(t, c2);
                try {
                    Z(e, c2, l2);
                } catch (e2) {}
            }
        }
    }
    return e;
}
function oe(e) {
    return "function" == typeof e;
}
function se(e) {
    return "object" == (typeof e === "undefined" ? "undefined" : _type_of(e)) && "styledComponentId" in e;
}
function ie(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
    if (0 === e.length) return "";
    for(var n = e[0], r2 = 1; r2 < e.length; r2++)n += t ? t + e[r2] : e[r2];
    return n;
}
function ce(e) {
    return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _type_of(e)) && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
    if (void 0 === n && (n = false), !n && !ce(e) && !Array.isArray(e)) return t;
    if (Array.isArray(t)) for(var r2 = 0; r2 < t.length; r2++)e[r2] = le(e[r2], t[r2]);
    else if (ce(t)) for(var r2 in t)e[r2] = le(e[r2], t[r2]);
    return e;
}
function ue(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    });
}
var pe = "production" !== process.env.NODE_ENV ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
    18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
} : {};
function de() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    for(var n = e[0], r2 = [], o2 = 1, s2 = e.length; o2 < s2; o2 += 1)r2.push(e[o2]);
    return r2.forEach(function(e2) {
        n = n.replace(/%[a-z]/, e2);
    }), n;
}
function he(t) {
    for(var n = [], r2 = 1; r2 < arguments.length; r2++)n[r2 - 1] = arguments[r2];
    return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(void 0, __spreadArray([
        pe[t]
    ], n, false)).trim());
}
var fe = function() {
    function e(e2) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
    }
    return e.prototype.indexOfGroup = function(e2) {
        for(var t = 0, n = 0; n < e2; n++)t += this.groupSizes[n];
        return t;
    }, e.prototype.insertRules = function(e2, t) {
        if (e2 >= this.groupSizes.length) {
            for(var n = this.groupSizes, r2 = n.length, o2 = r2; e2 >= o2;)if ((o2 <<= 1) < 0) throw he(16, "".concat(e2));
            this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n), this.length = o2;
            for(var s2 = r2; s2 < o2; s2++)this.groupSizes[s2] = 0;
        }
        for(var i2 = this.indexOfGroup(e2 + 1), a2 = (s2 = 0, t.length); s2 < a2; s2++)this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++);
    }, e.prototype.clearGroup = function(e2) {
        if (e2 < this.length) {
            var t = this.groupSizes[e2], n = this.indexOfGroup(e2), r2 = n + t;
            this.groupSizes[e2] = 0;
            for(var o2 = n; o2 < r2; o2++)this.tag.deleteRule(n);
        }
    }, e.prototype.getGroup = function(e2) {
        var t = "";
        if (e2 >= this.length || 0 === this.groupSizes[e2]) return t;
        for(var n = this.groupSizes[e2], r2 = this.indexOfGroup(e2), o2 = r2 + n, s2 = r2; s2 < o2; s2++)t += "".concat(this.tag.getRule(s2)).concat(g);
        return t;
    }, e;
}();
var me = 1 << 30;
var ye = /* @__PURE__ */ new Map();
var ve = /* @__PURE__ */ new Map();
var ge = 1;
var Se = function Se(e) {
    if (ye.has(e)) return ye.get(e);
    for(; ve.has(ge);)ge++;
    var t = ge++;
    if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > me)) throw he(16, "".concat(t));
    return ye.set(e, t), ve.set(t, e), t;
};
var we = function we(e, t) {
    ge = t + 1, ye.set(e, t), ve.set(t, e);
};
var be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]');
var Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var Ne = function Ne(e, t, n) {
    for(var r2, o2 = n.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)(r2 = o2[s2]) && e.registerName(t, r2);
};
var Pe = function Pe(e, t) {
    for(var n, r2 = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), o2 = [], s2 = 0, i2 = r2.length; s2 < i2; s2++){
        var a2 = r2[s2].trim();
        if (a2) {
            var c2 = a2.match(Ee);
            if (c2) {
                var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
                0 !== l2 && (we(u2, l2), Ne(e, u2, c2[3]), e.getTag().insertRules(l2, o2)), o2.length = 0;
            } else o2.push(a2);
        }
    }
};
var _e = function _e(e) {
    for(var t = document.querySelectorAll(be), n = 0, r2 = t.length; n < r2; n++){
        var o2 = t[n];
        o2 && o2.getAttribute(f) !== m && (Pe(e, o2), o2.parentNode && o2.parentNode.removeChild(o2));
    }
};
function Ce() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function Ie(e) {
    var t = document.head, n = e || t, r2 = document.createElement("style"), o2 = function(e2) {
        var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
        return t2[t2.length - 1];
    }(n), s2 = void 0 !== o2 ? o2.nextSibling : null;
    r2.setAttribute(f, m), r2.setAttribute(y, v);
    var i2 = Ce();
    return i2 && r2.setAttribute("nonce", i2), n.insertBefore(r2, s2), r2;
};
var Ae = function() {
    function e(e2) {
        this.element = Ie(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
            if (e3.sheet) return e3.sheet;
            for(var t = document.styleSheets, n = 0, r2 = t.length; n < r2; n++){
                var o2 = t[n];
                if (o2.ownerNode === e3) return o2;
            }
            throw he(17);
        }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
        try {
            return this.sheet.insertRule(t, e2), this.length++, true;
        } catch (e3) {
            return false;
        }
    }, e.prototype.deleteRule = function(e2) {
        this.sheet.deleteRule(e2), this.length--;
    }, e.prototype.getRule = function(e2) {
        var t = this.sheet.cssRules[e2];
        return t && t.cssText ? t.cssText : "";
    }, e;
}();
var Oe = function() {
    function e(e2) {
        this.element = Ie(e2), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
        if (e2 <= this.length && e2 >= 0) {
            var n = document.createTextNode(t);
            return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
        }
        return false;
    }, e.prototype.deleteRule = function(e2) {
        this.element.removeChild(this.nodes[e2]), this.length--;
    }, e.prototype.getRule = function(e2) {
        return e2 < this.length ? this.nodes[e2].textContent : "";
    }, e;
}();
var De = function() {
    function e(e2) {
        this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
        return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
    }, e.prototype.deleteRule = function(e2) {
        this.rules.splice(e2, 1), this.length--;
    }, e.prototype.getRule = function(e2) {
        return e2 < this.length ? this.rules[e2] : "";
    }, e;
}();
var Re = S;
var Te = {
    isServer: !S,
    useCSSOMInjection: !w
};
var ke = function() {
    function e(e2, n, r2) {
        void 0 === e2 && (e2 = C), void 0 === n && (n = {});
        var o2 = this;
        this.options = __assign(__assign({}, Te), e2), this.gs = n, this.names = new Map(r2), this.server = !!e2.isServer, !this.server && S && Re && (Re = false, _e(this)), ue(this, function() {
            return function(e3) {
                for(var t = e3.getTag(), n2 = t.length, r3 = "", o3 = function o3(n3) {
                    var o4 = function(e4) {
                        return ve.get(e4);
                    }(n3);
                    if (void 0 === o4) return "continue";
                    var s3 = e3.names.get(o4), i2 = t.getGroup(n3);
                    if (void 0 === s3 || !s3.size || 0 === i2.length) return "continue";
                    var a2 = "".concat(f, ".g").concat(n3, '[id="').concat(o4, '"]'), c2 = "";
                    void 0 !== s3 && s3.forEach(function(e4) {
                        e4.length > 0 && (c2 += "".concat(e4, ","));
                    }), r3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g);
                }, s2 = 0; s2 < n2; s2++)o3(s2);
                return r3;
            }(o2);
        });
    }
    return e.registerId = function(e2) {
        return Se(e2);
    }, e.prototype.rehydrate = function() {
        !this.server && S && _e(this);
    }, e.prototype.reconstructWithOptions = function(n, r2) {
        return void 0 === r2 && (r2 = true), new e(__assign(__assign({}, this.options), n), this.gs, r2 && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e2) {
        return this.gs[e2] = (this.gs[e2] || 0) + 1;
    }, e.prototype.getTag = function() {
        return this.tag || (this.tag = (e2 = function(e3) {
            var t = e3.useCSSOMInjection, n = e3.target;
            return e3.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
        }(this.options), new fe(e2)));
        var e2;
    }, e.prototype.hasNameForId = function(e2, t) {
        return this.names.has(e2) && this.names.get(e2).has(t);
    }, e.prototype.registerName = function(e2, t) {
        if (Se(e2), this.names.has(e2)) this.names.get(e2).add(t);
        else {
            var n = /* @__PURE__ */ new Set();
            n.add(t), this.names.set(e2, n);
        }
    }, e.prototype.insertRules = function(e2, t, n) {
        this.registerName(e2, t), this.getTag().insertRules(Se(e2), n);
    }, e.prototype.clearNames = function(e2) {
        this.names.has(e2) && this.names.get(e2).clear();
    }, e.prototype.clearRules = function(e2) {
        this.getTag().clearGroup(Se(e2)), this.clearNames(e2);
    }, e.prototype.clearTag = function() {
        this.tag = void 0;
    }, e;
}();
var je = /&/g;
var xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
    return e.map(function(e2) {
        return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
            return "".concat(t, " ").concat(e3);
        })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Ve(e2.children, t)), e2;
    });
}
function Fe(e) {
    var t, n, r2, o2 = void 0 === e ? C : e, s2 = o2.options, i2 = void 0 === s2 ? C : s2, a2 = o2.plugins, c2 = void 0 === a2 ? _ : a2, l2 = function l2(e2, r3, o3) {
        return o3.startsWith(n) && o3.endsWith(n) && o3.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
    }, u2 = c2.slice();
    u2.push(function(e2) {
        e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(je, n).replace(r2, l2));
    }), i2.prefix && u2.push(prefixer), u2.push(stringify);
    var p2 = function p2(e2, o3, s3, a3) {
        void 0 === o3 && (o3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t = a3, n = o3, r2 = new RegExp("\\".concat(n, "\\b"), "g");
        var c3 = e2.replace(xe, ""), l3 = compile(s3 || o3 ? "".concat(s3, " ").concat(o3, " { ").concat(c3, " }") : c3);
        i2.namespace && (l3 = Ve(l3, i2.namespace));
        var p3 = [];
        return serialize(l3, middleware(u2.concat(rulesheet(function(e3) {
            return p3.push(e3);
        })))), p3;
    };
    return p2.hash = c2.length ? c2.reduce(function(e2, t2) {
        return t2.name || he(15), M(e2, t2.name);
    }, F).toString() : "", p2;
}
var Me = new ke();
var ze = Fe();
var $e = import_react.default.createContext({
    shouldForwardProp: void 0,
    styleSheet: Me,
    stylis: ze
});
var Be = $e.Consumer;
var Le = import_react.default.createContext(void 0);
function Ge() {
    return (0, import_react.useContext)($e);
}
function Ye(e) {
    var t = (0, import_react.useState)(e.stylisPlugins), n = t[0], o2 = t[1], c2 = Ge().styleSheet, l2 = (0, import_react.useMemo)(function() {
        var t2 = c2;
        return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({
            target: e.target
        }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({
            useCSSOMInjection: false
        })), t2;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target,
        c2
    ]), u2 = (0, import_react.useMemo)(function() {
        return Fe({
            options: {
                namespace: e.namespace,
                prefix: e.enableVendorPrefixes
            },
            plugins: n
        });
    }, [
        e.enableVendorPrefixes,
        e.namespace,
        n
    ]);
    (0, import_react.useEffect)(function() {
        (0, import_shallowequal.default)(n, e.stylisPlugins) || o2(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]);
    var d = (0, import_react.useMemo)(function() {
        return {
            shouldForwardProp: e.shouldForwardProp,
            styleSheet: l2,
            stylis: u2
        };
    }, [
        e.shouldForwardProp,
        l2,
        u2
    ]);
    return import_react.default.createElement($e.Provider, {
        value: d
    }, import_react.default.createElement(Le.Provider, {
        value: u2
    }, e.children));
}
var qe = function() {
    function e(e2, t) {
        var n = this;
        this.inject = function(e3, t2) {
            void 0 === t2 && (t2 = ze);
            var r2 = n.name + t2.hash;
            e3.hasNameForId(n.id, r2) || e3.insertRules(n.id, r2, t2(n.rules, r2, "@keyframes"));
        }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, ue(this, function() {
            throw he(12, String(n.name));
        });
    }
    return e.prototype.getName = function(e2) {
        return void 0 === e2 && (e2 = ze), this.name + e2.hash;
    }, e;
}();
var We = function We(e) {
    return e >= "A" && e <= "Z";
};
function He(e) {
    for(var t = "", n = 0; n < e.length; n++){
        var r2 = e[n];
        if (1 === n && "-" === r2 && "-" === e[0]) return e;
        We(r2) ? t += "-" + r2.toLowerCase() : t += r2;
    }
    return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function Ue(e) {
    return null == e || false === e || "" === e;
};
var Je = function Je1(t) {
    var n, r2, o2 = [];
    for(var s2 in t){
        var i2 = t[s2];
        t.hasOwnProperty(s2) && !Ue(i2) && (Array.isArray(i2) && i2.isCss || oe(i2) ? o2.push("".concat(He(s2), ":"), i2, ";") : ce(i2) ? o2.push.apply(o2, __spreadArray(__spreadArray([
            "".concat(s2, " {")
        ], Je(i2), false), [
            "}"
        ], false)) : o2.push("".concat(He(s2), ": ").concat((n = s2, null == (r2 = i2) || "boolean" == typeof r2 || "" === r2 ? "" : "number" != typeof r2 || 0 === r2 || n in unitlessKeys || n.startsWith("--") ? String(r2).trim() : "".concat(r2, "px")), ";")));
    }
    return o2;
};
function Xe(e, t, n, r2) {
    if (Ue(e)) return [];
    if (se(e)) return [
        ".".concat(e.styledComponentId)
    ];
    if (oe(e)) {
        if (!oe(s2 = e) || s2.prototype && s2.prototype.isReactComponent || !t) return [
            e
        ];
        var o2 = e(t);
        return "production" === process.env.NODE_ENV || "object" != (typeof o2 === "undefined" ? "undefined" : _type_of(o2)) || Array.isArray(o2) || _instanceof(o2, qe) || ce(o2) || null === o2 || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(o2, t, n, r2);
    }
    var s2;
    return _instanceof(e, qe) ? n ? (e.inject(n, r2), [
        e.getName(r2)
    ]) : [
        e
    ] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e2) {
        return Xe(e2, t, n, r2);
    })) : [
        e.toString()
    ];
}
function Ze(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if (oe(n) && !se(n)) return false;
    }
    return true;
}
var Ke = z(v);
var Qe = function() {
    function e(e2, t, n) {
        this.rules = e2, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && Ze(e2), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e2, t, n) {
        var r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
        if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r2 = ie(r2, this.staticRulesId);
        else {
            var o2 = ae(Xe(this.rules, e2, t, n)), s2 = x(M(this.baseHash, o2) >>> 0);
            if (!t.hasNameForId(this.componentId, s2)) {
                var i2 = n(o2, ".".concat(s2), void 0, this.componentId);
                t.insertRules(this.componentId, s2, i2);
            }
            r2 = ie(r2, s2), this.staticRulesId = s2;
        }
        else {
            for(var a2 = M(this.baseHash, n.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++){
                var u2 = this.rules[l2];
                if ("string" == typeof u2) c2 += u2, "production" !== process.env.NODE_ENV && (a2 = M(a2, u2));
                else if (u2) {
                    var p2 = ae(Xe(u2, e2, t, n));
                    a2 = M(a2, p2 + l2), c2 += p2;
                }
            }
            if (c2) {
                var d = x(a2 >>> 0);
                t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c2, ".".concat(d), void 0, this.componentId)), r2 = ie(r2, d);
            }
        }
        return r2;
    }, e;
}();
var et = import_react.default.createContext(void 0);
var tt = et.Consumer;
var ot = {};
var st = /* @__PURE__ */ new Set();
function it(e, o2, s2) {
    var i2 = se(e), a2 = e, c2 = !L(e), p2 = o2.attrs, d = void 0 === p2 ? _ : p2, h = o2.componentId, f2 = void 0 === h ? function(e2, t) {
        var n = "string" != typeof e2 ? "sc" : R(e2);
        ot[n] = (ot[n] || 0) + 1;
        var r2 = "".concat(n, "-").concat($(v + n + ot[n]));
        return t ? "".concat(t, "-").concat(r2) : r2;
    }(o2.displayName, o2.parentComponentId) : h, m2 = o2.displayName, y2 = void 0 === m2 ? function(e2) {
        return L(e2) ? "styled.".concat(e2) : "Styled(".concat(B(e2), ")");
    }(e) : m2, g2 = o2.displayName && o2.componentId ? "".concat(R(o2.displayName), "-").concat(o2.componentId) : o2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d).filter(Boolean) : d, w2 = o2.shouldForwardProp;
    if (i2 && a2.shouldForwardProp) {
        var b = a2.shouldForwardProp;
        if (o2.shouldForwardProp) {
            var E2 = o2.shouldForwardProp;
            w2 = function w2(e2, t) {
                return b(e2, t) && E2(e2, t);
            };
        } else w2 = b;
    }
    var N2 = new Qe(s2, g2, i2 ? a2.componentStyle : void 0);
    function O2(e2, o3) {
        return function(e3, o4, s3) {
            var i3 = e3.attrs, a3 = e3.componentStyle, c3 = e3.defaultProps, p3 = e3.foldedComponentIds, d2 = e3.styledComponentId, h2 = e3.target, f3 = import_react.default.useContext(et), m3 = Ge(), y3 = e3.shouldForwardProp || m3.shouldForwardProp;
            "production" !== process.env.NODE_ENV && (0, import_react.useDebugValue)(d2);
            var v2 = I(o4, f3, c3) || C, g3 = function(e4, n, r2) {
                for(var o5, s4 = __assign(__assign({}, n), {
                    className: void 0,
                    theme: r2
                }), i4 = 0; i4 < e4.length; i4 += 1){
                    var a4 = oe(o5 = e4[i4]) ? o5(s4) : o5;
                    for(var c4 in a4)s4[c4] = "className" === c4 ? ie(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
                }
                return n.className && (s4.className = ie(s4.className, n.className)), s4;
            }(i3, o4, v2), S3 = g3.as || h2, w3 = {};
            for(var b2 in g3)void 0 === g3[b2] || "$" === b2[0] || "as" === b2 || "theme" === b2 && g3.theme === v2 || ("forwardedAs" === b2 ? w3.as = g3.forwardedAs : y3 && !y3(b2, S3) || (w3[b2] = g3[b2], y3 || "development" !== process.env.NODE_ENV || isPropValid(b2) || st.has(b2) || !A.has(S3) || (st.add(b2), console.warn('styled-components: it looks like an unknown prop "'.concat(b2, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
            var E3 = function(e4, t) {
                var n = Ge(), r2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
                return "production" !== process.env.NODE_ENV && (0, import_react.useDebugValue)(r2), r2;
            }(a3, g3);
            "production" !== process.env.NODE_ENV && e3.warnTooManyClasses && e3.warnTooManyClasses(E3);
            var N3 = ie(p3, d2);
            return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A.has(S3) ? "class" : "className"] = N3, s3 && (w3.ref = s3), (0, import_react.createElement)(S3, w3);
        }(D2, e2, o3);
    }
    O2.displayName = y2;
    var D2 = import_react.default.forwardRef(O2);
    return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i2 ? ie(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e, Object.defineProperty(D2, "defaultProps", {
        get: function get() {
            return this._foldedDefaultProps;
        },
        set: function set(e2) {
            this._foldedDefaultProps = i2 ? function(e3) {
                for(var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                for(var r2 = 0, o3 = t; r2 < o3.length; r2++)le(e3, o3[r2], true);
                return e3;
            }({}, a2.defaultProps, e2) : e2;
        }
    }), "production" !== process.env.NODE_ENV && (P(y2, g2), D2.warnTooManyClasses = /* @__PURE__ */ function(e2, t) {
        var n = {}, r2 = false;
        return function(o3) {
            if (!r2 && (n[o3] = true, Object.keys(n).length >= 200)) {
                var s3 = t ? ' with the id of "'.concat(t, '"') : "";
                console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s3, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n = {};
            }
        };
    }(y2, g2)), ue(D2, function() {
        return ".".concat(D2.styledComponentId);
    }), c2 && re(D2, e, {
        attrs: true,
        componentStyle: true,
        displayName: true,
        foldedComponentIds: true,
        shouldForwardProp: true,
        styledComponentId: true,
        target: true
    }), D2;
}
function at(e, t) {
    for(var n = [
        e[0]
    ], r2 = 0, o2 = t.length; r2 < o2; r2 += 1)n.push(t[r2], e[r2 + 1]);
    return n;
}
var ct = function ct(e) {
    return Object.assign(e, {
        isCss: true
    });
};
function lt(t) {
    for(var n = [], r2 = 1; r2 < arguments.length; r2++)n[r2 - 1] = arguments[r2];
    if (oe(t) || ce(t)) return ct(Xe(at(_, __spreadArray([
        t
    ], n, true))));
    var o2 = t;
    return 0 === n.length && 1 === o2.length && "string" == typeof o2[0] ? Xe(o2) : ct(Xe(at(o2, n)));
}
function ut(n, r2, o2) {
    if (void 0 === o2 && (o2 = C), !r2) throw he(1, r2);
    var s2 = function s2(t) {
        for(var s3 = [], i2 = 1; i2 < arguments.length; i2++)s3[i2 - 1] = arguments[i2];
        return n(r2, o2, lt.apply(void 0, __spreadArray([
            t
        ], s3, false)));
    };
    return s2.attrs = function(e) {
        return ut(n, r2, __assign(__assign({}, o2), {
            attrs: Array.prototype.concat(o2.attrs, e).filter(Boolean)
        }));
    }, s2.withConfig = function(e) {
        return ut(n, r2, __assign(__assign({}, o2), e));
    }, s2;
}
var pt = function pt(e) {
    return ut(it, e);
};
var dt = pt;
A.forEach(function(e) {
    dt[e] = pt(e);
});
var ht = function() {
    function e(e2, t) {
        this.rules = e2, this.componentId = t, this.isStatic = Ze(e2), ke.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e2, t, n, r2) {
        var o2 = r2(ae(Xe(this.rules, t, n, r2)), ""), s2 = this.componentId + e2;
        n.insertRules(s2, s2, o2);
    }, e.prototype.removeStyles = function(e2, t) {
        t.clearRules(this.componentId + e2);
    }, e.prototype.renderStyles = function(e2, t, n, r2) {
        e2 > 2 && ke.registerId(this.componentId + e2), this.removeStyles(e2, n), this.createStyles(e2, t, n, r2);
    }, e;
}();
var vt = /^\s*<\/[a-z]/i;
var gt = function() {
    function e() {
        var e2 = this;
        this._emitSheetCSS = function() {
            var t = e2.instance.toString();
            if (!t) return "";
            var n = Ce(), r2 = ae([
                n && 'nonce="'.concat(n, '"'),
                "".concat(f, '="true"'),
                "".concat(y, '="').concat(v, '"')
            ].filter(Boolean), " ");
            return "<style ".concat(r2, ">").concat(t, "</style>");
        }, this.getStyleTags = function() {
            if (e2.sealed) throw he(2);
            return e2._emitSheetCSS();
        }, this.getStyleElement = function() {
            var n;
            if (e2.sealed) throw he(2);
            var o2 = e2.instance.toString();
            if (!o2) return [];
            var s2 = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = {
                __html: o2
            }, n), i2 = Ce();
            return i2 && (s2.nonce = i2), [
                import_react.default.createElement("style", __assign({}, s2, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e2.sealed = true;
        }, this.instance = new ke({
            isServer: true
        }), this.sealed = false;
    }
    return e.prototype.collectStyles = function(e2) {
        if (this.sealed) throw he(2);
        return import_react.default.createElement(Ye, {
            sheet: this.instance
        }, e2);
    }, e.prototype.interleaveWithNodeStream = function(e2) {
        if (S) throw he(3);
        if (this.sealed) throw he(2);
        this.seal();
        var t = require("stream").Transform, n = e2, r2 = this.instance, o2 = this._emitSheetCSS, s2 = new t({
            transform: function transform(e3, t2, n2) {
                var s3 = e3.toString(), i2 = o2();
                if (r2.clearTag(), vt.test(s3)) {
                    var a2 = s3.indexOf(">") + 1, c2 = s3.slice(0, a2), l2 = s3.slice(a2);
                    this.push(c2 + i2 + l2);
                } else this.push(i2 + s3);
                n2();
            }
        });
        return n.on("error", function(e3) {
            s2.emit("error", e3);
        }), n.pipe(s2);
    }, e;
}();
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var wt = "__sc-".concat(f, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[wt] || (window[wt] = 0), 1 === window[wt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[wt] += 1);
// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var StyledButton = dt.button(_templateObject(), function(props) {
    return !props.disabled && (props.hoverBackgroundColor || "#3284ad");
}, function(props) {
    return !props.disabled && (props.hoverBackgroundColor || "#3284ad");
}, function(props) {
    return !props.disabled && "white";
}, function(props) {
    return !props.disabled && "pointer";
});
var Button = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, {
        className: props.className,
        id: props.id,
        type: props.type,
        onClick: props.onClick,
        disabled: props.disabled,
        hoverBackgroundColor: props.hoverBackgroundColor,
        children: props.text
    });
};
var Button_default = Button;
// src/components/Label/Label.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledLabel = dt.label(_templateObject1(), function(props) {
    return props.disabled ? "grey" : props.textColor || "#3284ad";
}, function(props) {
    return props.disabled && "background-color: lightgrey;";
});
var Label = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledLabel, {
        className: props.className,
        id: props.id,
        htmlFor: props.htmlFor,
        disabled: props.disabled,
        textColor: props.textColor,
        children: props.text
    });
};
var Label_default = Label;
// src/components/Text/Text.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var StyledText = dt.div(_templateObject2(), function(props) {
    return props.disabled ? "grey" : props.textColor || "inherit";
}, function(props) {
    return props.disabled && "background-color: lightgrey;";
}, function(props) {
    switch(props.type){
        case "heading":
            return "\n          font-size: 2em;\n          font-weight: 1000;\n        ";
        case "subheading":
            return "\n          font-size: 1.5em;\n          font-weight: 700;\n        ";
        case "body":
        default:
            return "\n          font-size: 1em;\n          line-height: 1.6;\n        ";
    }
}, function(props) {
    return props.align || "left";
});
var Text = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StyledText, {
        className: props.className,
        id: props.id,
        textColor: props.textColor,
        type: props.type,
        align: props.align,
        disabled: props.disabled,
        children: props.text
    });
};
var Text_default = Text;
// src/components/Table/Table.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var StyledTable = dt.table(_templateObject3(), function(props) {
    return props.disabled ? "grey" : "inherit";
}, function(props) {
    return props.disabled && "background-color: lightgrey;";
}, function(props) {
    return props.disabled ? "lightgrey" : props.headingBackgroundColor || "#b5d5e5";
});
var Table = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(StyledTable, {
        heading1: props.heading1,
        heading2: props.heading2,
        heading3: props.heading3,
        data1: props.data1,
        data2: props.data2,
        data3: props.data3,
        data4: props.data4,
        data5: props.data5,
        data6: props.data6,
        data7: props.data7,
        data8: props.data8,
        data9: props.data9,
        footer1: props.footer1,
        footer2: props.footer2,
        footer3: props.footer3,
        headingBackgroundColor: props.headingBackgroundColor,
        className: props.className,
        id: props.id,
        disabled: props.disabled,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", {
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", {
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", {
                            children: props.heading1
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", {
                            children: props.heading2
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", {
                            children: props.heading3
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tbody", {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data1
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data2
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data3
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data4
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data5
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data6
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data7
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data8
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                                children: props.data9
                            })
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tfoot", {
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", {
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                            children: props.footer1
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                            children: props.footer2
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", {
                            children: props.footer3
                        })
                    ]
                })
            })
        ]
    });
};
var Table_default = Table;
// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var StyledDropdown = dt.select(_templateObject4(), function(props) {
    return !props.disabled && "pointer";
});
var Dropdown = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(StyledDropdown, {
        name: props.name,
        option1: props.option1,
        option2: props.option2,
        option3: props.option3,
        value1: props.value1,
        value2: props.value2,
        value3: props.value3,
        id: props.id,
        disabled: props.disabled,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", {
                value: props.value1,
                children: props.option1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", {
                value: props.value2,
                children: props.option2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", {
                value: props.value3,
                children: props.option3
            })
        ]
    });
};
var Dropdown_default = Dropdown;
// src/components/RadioButton/RadioButton.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var StyledRadioButton = dt.input(_templateObject5(), function(props) {
    return !props.disabled && "pointer";
}, function(props) {
    return props.buttonColor || "#3284ad";
});
var RadioButton = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledRadioButton, {
        type: "radio",
        name: props.name,
        value: props.value,
        buttonColor: props.buttonColor,
        disabled: props.disabled,
        className: props.className,
        id: props.id
    });
};
var RadioButton_default = RadioButton;
// src/components/Image/Image.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var StyledImage = dt.img(_templateObject6(), function(props) {
    return props.maxWidth || "50%";
}, function(props) {
    return props.smallScreenMaxWidth || "75%";
}, function(props) {
    return props.disabled && "\n      opacity: 0.3;\n      pointer-events: none;\n      cursor: not-allowed;\n  ";
});
var Image = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(StyledImage, {
        alt: props.alt,
        src: props.src,
        maxWidth: props.maxWidth,
        smallScreenMaxWidth: props.smallScreenMaxWidth,
        className: props.className,
        id: props.id,
        disabled: props.disabled
    });
};
var Image_default = Image;
// src/components/HeroImage/HeroImage.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var StyledHeroImage = dt.div(_templateObject7(), function(props) {
    return props.textColor || "#3284ad";
}, function(props) {
    return props.imageBrightness || 1;
}, function(props) {
    return props.disabled && "\n      opacity: 0.3;\n      pointer-events: none;\n      cursor: not-allowed;\n      user-select: none;\n  ";
});
var HeroImage = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(StyledHeroImage, {
        imageAlt: props.imageAlt,
        imageSrc: props.imageSrc,
        imageBrightness: props.imageBrightness,
        heading: props.heading,
        subheading: props.subheading,
        textColor: props.textColor,
        buttonText: props.buttonText,
        className: props.className,
        id: props.id,
        disabled: props.disabled,
        role: "hero-image",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", {
                alt: props.imageAlt,
                src: props.imageSrc
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", {
                        children: props.heading
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
                        children: props.subheading
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button_default, {
                        type: "button",
                        text: props.buttonText,
                        hoverBackgroundColor: props.textColor
                    })
                ]
            })
        ]
    });
};
var HeroImage_default = HeroImage;
// src/components/Card/Card.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var StyledCard = dt.div(_templateObject8(), function(props) {
    return props.align || "left";
}, function(props) {
    return props.accentColor || "#3284ad";
}, function(props) {
    return props.disabled ? "0.3" : "1.0";
}, function(props) {
    return props.disabled ? "grey" : props.textColor || "inherit";
}, function(props) {
    return props.disabled && "background-color: lightgrey;";
});
var Card = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(StyledCard, {
        heading: props.heading,
        align: props.align,
        textColor: props.textColor,
        accentColor: props.accentColor,
        className: props.className,
        id: props.id,
        disabled: props.disabled,
        role: "card",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", {
                alt: "card image",
                src: props.imageSrc
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", {
                children: props.heading
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", {
                children: props.description
            })
        ]
    });
};
var Card_default = Card;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    Card: Card,
    Dropdown: Dropdown,
    HeroImage: HeroImage,
    Image: Image,
    Label: Label,
    RadioButton: RadioButton,
    Table: Table,
    Text: Text
});
