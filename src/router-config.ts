import ComponenteActualizarCliente from "./cliente/ComponenteActualizarCliente";
import ComponenteListarCliente from "./cliente/ComponenteListarCliente";
import ComponenteRegistrarCliente from "./cliente/ComponenteRegistrarCliente";
import ComponenteLogin from "./login/ComponenteLogin";
import ComponenteActualizarProducto from "./producto/ComponenteActualizarProducto";
import ComponenteListarProducto from "./producto/ComponenteListarProducto";
import ComponenteRegistrarProducto from "./producto/ComponenteRegistrarProducto";
import ComponenteActualizarProveedor from "./proveedor/ComponenteActualizarProveedor";
import ComponenteListarProveedor from "./proveedor/ComponenteListarProveedor";
import ComponenteRegistrarProveedor from "./proveedor/ComponenteRegistrarProveedor";
import ComponenteActualizarUsuario from "./usuario/ComponenteActualizarUsuario";
import ComponenteListarUsuario from "./usuario/ComponenteListarUsuario";
import ComponenteRegistrarUsuario from "./usuario/ComponenteRegistrarUsuario";
import ComponenteDetalle from "./ventas/ComponenteDetalle";
import ComponenteNuevaVenta from "./ventas/ComponenteNuevaVenta";
import ComponenteVentas from "./ventas/ComponenteVentas";


const rutas =
    [
        {
            path: '/', componente: ComponenteLogin, exact: true
        },
        {
            path: '/usuario/registrar', componente: ComponenteRegistrarUsuario, exact: true
        },
        {
            path: '/usuario/listar', componente: ComponenteListarUsuario, exact: true
        },
        {
            path: '/usuario/actualizar', componente: ComponenteActualizarUsuario, exact: true
        },
        {
            path: '/producto/actualizar', componente: ComponenteActualizarProducto, exact: true
        },
        {
            path: '/producto/registrar', componente: ComponenteRegistrarProducto, exact: true
        },
        {
            path: '/producto/listar', componente: ComponenteListarProducto, exact: true
        },
        {
            path: '/cliente/actualizar', componente: ComponenteActualizarCliente, exact: true
        },
        {
            path: '/cliente/registrar', componente: ComponenteRegistrarCliente, exact: true
        },
        {
            path: '/cliente/listar', componente: ComponenteListarCliente, exact: true
        },
        {
            path: '/proveedor/listar', componente: ComponenteListarProveedor, exact: true
        },
        {
            path: '/proveedor/registrar', componente: ComponenteRegistrarProveedor, exact: true
        },
        {
            path: '/proveedor/actualizar', componente: ComponenteActualizarProveedor, exact: true
        },
        {
            path: '/venta/nuevaventa', componente: ComponenteNuevaVenta, exact: true
        },
        {
            path: '/venta/ventas', componente: ComponenteVentas, exact: true
        },
        {
            path: '/venta/detalle', componente: ComponenteDetalle, exact: true
        }
    ];

export default rutas;

