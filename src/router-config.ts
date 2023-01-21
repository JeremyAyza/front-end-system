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
				path: '/', element: ComponenteLogin
        },
        {
            path: '/usuario/registrar', element: ComponenteRegistrarUsuario
        },
        {
            path: '/usuario/listar', element: ComponenteListarUsuario
        },
        {
            path: '/usuario/actualizar', element: ComponenteActualizarUsuario
        },
        {
            path: '/producto/actualizar', element: ComponenteActualizarProducto
        },
        {
            path: '/producto/registrar', element: ComponenteRegistrarProducto
        },
        {
            path: '/producto/listar', element: ComponenteListarProducto
        },
        {
            path: '/cliente/actualizar', element: ComponenteActualizarCliente
        },
        {
            path: '/cliente/registrar', element: ComponenteRegistrarCliente
        },
        {
            path: '/cliente/listar', element: ComponenteListarCliente
        },
        {
            path: '/proveedor/listar', element: ComponenteListarProveedor
        },
        {
            path: '/proveedor/registrar', element: ComponenteRegistrarProveedor
        },
        {
            path: '/proveedor/actualizar', element: ComponenteActualizarProveedor
        },
        {
            path: '/venta/nuevaventa', element: ComponenteNuevaVenta
        },
        {
            path: '/venta/ventas', element: ComponenteVentas
        },
        {
            path: '/venta/detalle', element: ComponenteDetalle
        }
    ];

export default rutas;

