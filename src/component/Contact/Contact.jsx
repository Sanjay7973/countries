import React, { useState } from 'react'

const Contact = () => {
  const [err, setErr] = useState({ name: '', email: '', textarea: '' });


  // form handler 
  const formSubmitHandler = (e) => {
    e.preventDefault()
    let formError = {
      name: '',
      email: '',
      textarea: ''
    }
    let isVaild = true;
    if (e.target.name.value === '') {
      formError.name = 'name field is requird'
      isVaild = false
    }
    if (e.target.email.value === '') {
      formError.email = 'email field is requird'
      isVaild = false
    }
    if (e.target.textarea.value === '') {
      formError.textarea = 'quary field is requird'
      isVaild = false
    }
    if (!isVaild) {
      setErr(formError)
      return
    }
    let userInquary = {
      name: e.target.name.value,
      email: e.target.email.value,
      quary: e.target.textarea.value
    }
    console.log(userInquary)
  }

  const handleChange = (field) =>{
     setErr((prvErr)=>({
       ...prvErr,
       [field]:''
     }))
  }
  return (
    <div>
      <div className='w-full h-auto  p-4 '>
        <div className='text-center text-3xl mb-1'>
          <h1>Feel Free To Contact Us</h1>
        </div>
        <div className='flex items-center ml-[3%]'>
          <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5393590645454!2d76.68982197548186!3d30.703234187057824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8e59f841c1%3A0xade0c251c2db47d7!2sEllocent%20Labs%20IT%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1ses!2sin!4v1743661354468!5m2!1ses!2sin" width="95%" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* form  */}
      <div className='flex justify-center mr-2 mb-4 mt-5'>
        <form action="" onSubmit={formSubmitHandler}>
          <div className=''>
            <input onChange={()=>handleChange('name')} name='name' className='w-[180%] mb-2 border border-gray-300 focus:border-2 rounded p-2' type="text" placeholder='Enter name....' />
          {err.name && <span style={{ color: 'red' }}>{err.name}</span>}
          </div>
          <div className=''>
            <input name='email' className='w-[180%] mb-2 border border-gray-300 focus:border-2 rounded p-2' type="email" placeholder='Enter email....' />
          </div>
          {err.email && <span style={{ color: 'red' }}>{err.email}</span>}
          <div className=''>
            <textarea name='textarea' className='w-[180%] border border-gray-300 focus:border-2 rounded p-2' type='textarea' placeholder='Send your Quary....' />
          </div>
          <div className=''>
            <button type='submit' className=" cursor-pointer mt-2 rounded w-[80%] p-2 text-center text-white bg-slate-500 hover:bg-blue-900">
              Send Your Quary
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
