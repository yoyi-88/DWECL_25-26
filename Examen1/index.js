var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Contiene toda la lógica de nuestra aplicación.
var Articulos = /** @class */ (function () {
    function Articulos(boton) {
        var _this = this;
        console.log('inicio');
        this.boton = boton;
        var eventBoton = document.getElementById(boton);
        // Asigna el evento al botón
        eventBoton === null || eventBoton === void 0 ? void 0 : eventBoton.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault(); // Evita que el formulario recargue la pagina
                        return [4 /*yield*/, this.pushArticulo()];
                    case 1:
                        _a.sent(); // Guarda nuevo artículo 
                        this.getArticulos(); // Refresca la tabla
                        return [2 /*return*/];
                }
            });
        }); });
        // Llamamos al método para que se cargue nada mas empezar
        this.getArticulos();
    }
    // Envía los datos de los inputs al servidor
    Articulos.prototype.pushArticulo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cod, color, piel, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cod = document.getElementById('cod');
                        color = document.getElementById('color');
                        piel = document.getElementById('piel');
                        url = "http://localhost:3000/pushArticulos?cod=".concat(cod.value, "&color=").concat(color.value, "&piel=").concat(piel.value);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        _a.sent(); // Ejecuta la petición
                        return [2 /*return*/];
                }
            });
        });
    };
    // Obtiene la lista del servidor y la pinta en el HTML
    Articulos.prototype.getArticulos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, cuerpoTabla;
            return __generator(this, function (_a) {
                console.log('Entra en get');
                url = 'http://localhost:3000/getArticulos';
                cuerpoTabla = document.getElementById('carteras');
                fetch(url)
                    .then(function (conexion) { return conexion.json(); }) // Pasa la respuesta a json
                    // Definimos la interfaz para obligar a recibir los datos especificos
                    .then(function (datos) {
                    // Limpiamos la tabla
                    if (cuerpoTabla)
                        cuerpoTabla.innerHTML = "";
                    // Crea e inserta una fila por cada artículo recibido
                    for (var _i = 0, datos_1 = datos; _i < datos_1.length; _i++) {
                        var articulo = datos_1[_i];
                        var tr = document.createElement('tr');
                        tr.innerHTML = "\n                <td>".concat(articulo.id, "</td>\n                <td>").concat(articulo.cod, "</td>\n                <td>").concat(articulo.color, "</td>\n                <td>").concat(articulo.piel, "</td>\n            ");
                        cuerpoTabla === null || cuerpoTabla === void 0 ? void 0 : cuerpoTabla.appendChild(tr);
                    }
                })
                    .catch(function (e) {
                    console.log('Error', e);
                });
                return [2 /*return*/];
            });
        });
    };
    return Articulos;
}());
// Arranca la aplicación asociando la clase al botón 'bot'
var test = new Articulos('bot');
