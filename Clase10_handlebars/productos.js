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