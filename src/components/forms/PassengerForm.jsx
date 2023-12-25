import React from 'react';

export const PassengerForm = ({ number }) => {

  let documentTypes = [
    { code: 'DNI', description: 'DNI' },
    { code: 'CE', description: 'Carné de extranjería' },
    { code: 'PAS', description: 'Pasaporte' }
  ];

  return (
    <div className='border rounded p-3'>
      <h6 className='fw-bold mb-3'>Pasajero {number}</h6>
      <form className='d-grid gap-3'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='form-floating'>
              <input type='text' className='form-control' name='firstname' required />
              <label htmlFor='firstname'>Nombres</label>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='form-floating'>
              <input type='text' className='form-control' name='lastname' required />
              <label htmlFor='lastnames'>Apellidos</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='form-floating'>
              <select name='documentType' className='form-select' required>
                <option key='' value=''>Seleccionar</option>
                {
                  documentTypes.map((documentType, index) => (
                    <option key={documentType.code} value={documentType.code}>{documentType.description}</option>
                  ))
                }
              </select>
              <label htmlFor='documentType'>Tipo de documento</label>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='form-floating'>
              <input type='text' className='form-control' name='documentNumber' required />
              <label htmlFor='documentNumber'>Número de documento</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}