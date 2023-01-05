import React from 'react'
import { useForm } from 'react-hook-form'
import './ProductForm.css'

const ProductForm = () => {

  const { register, formState: { errors } , handleSubmit } = useForm()

  const onSubmit = (data) => {
    //aca despues vamos a enviar los datos del formulario al servidor
    console.log(data)
  }

  return (
    <div>

    <h2>AGREGAR PRODUCTO</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre del producto:</label>
        <input
          type='text' 
          name='productName'
          placeholder='Nombre del producto'
          {...register('productName', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>

        {
          errors.productName &&
            <span>{errors.productName.message}</span>
        }
      </div>

      <div>
        <label>Descripcion del producto:</label>
        <input
          type='text' 
          name='productDescription'
          placeholder='Descripcion del producto'
          {...register('productDescription', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>

        {
          errors.productDescription &&
            <span>{errors.productDescription.message}</span>
        }
      </div>

      <div>
        <label>Precio del producto:</label>
        <input
          type='text' 
          name='productPrice'
          placeholder='Precio del producto'
          {...register('productPrice', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>

        {
          errors.productPrice &&
          <span>{errors.productPrice.message}</span>
        }

      </div>

      {/* <div>
        <label>Imagen del producto:</label>
        <input
          type='file' 
          name='productImage'
          {...register('productImage', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            }
          })}/>
      </div> */}

      <input type='submit' value='Enviar'/>
      
    </form>
    
    </div>
  )
}

export default ProductForm