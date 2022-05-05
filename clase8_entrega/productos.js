class Producto {
    constructor(){
        this.productos = []
        
    }

        listarProductos(){

            if (this.productos.length == 0) {
                return {error : 'producto no encontrado' }
                }   else    {
                return [...this.productos]
                }
        }

        productoPorId(id){
            let producto = this.productos.find (prod => prod.id == id)
            if (producto === undefined) { return {error : 'producto no encontrado' } }
                else 
            {return producto}
        }

        borrarProductoPorId(id){
            let producto = this.productos.find (prod => prod.id == id)
            if (producto === undefined) { return {error : 'producto no encontrado' } }
                else 
            { this.productos.splice (id - 1, 1)
                return { DELETED : `producto id: ${id} eliminado correctamente` }}

        }


        actualizarProductoPorId(id, productoActualizado){

            let producto = this.productos.find (prod => prod.id == id)
            if (producto === undefined) { return {error : 'producto no encontrado, no es posible actualizar' } }
                else 
            { 
                
            let productoN = productoActualizado

            producto.title = productoN.title
            producto.price = productoN.price
            producto.thumbnail = productoN.thumbnail

                return { UPDATE : `producto id: ${id} actualizado correctamente` }}
            }
        

        agregarProducto(prod){
            //const arrObj = this.productos
                
            let newId = 0

                if (this.productos.length == 0) {
                    newId = 1
                }   else    {
                    newId = this.productos[this.productos.length - 1].id + 1
                }
            
            const newProd = {...prod, id: newId}
            this.productos.push(newProd)  

            return newProd
        }

}

module.exports = Producto