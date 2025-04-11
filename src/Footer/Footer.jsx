import React from 'react'

const Footer = () => {
  return (
    
      // {/* Footer */}
      <footer className="flex flex-col md:flex-row md:justify-around bg-gray-800 text-white p-5 mt-auto w-full">
  <div className="text-center md:text-left mb-4 md:mb-0">
    <p className="mb-2">Important Links: -</p>
    <p className="mb-2">Home</p>
    <p className="mb-2">Countries</p>
    <p>Log out</p>
  </div>
  
  <div className="text-center md:text-left mb-4 md:mb-0">
    <p>Address:</p>
    <p className="flex justify-center md:justify-start mb-1 mt-1">
      <iframe
        className="rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13752.98609732792!2d76.78969135542866!3d30.485772986636793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc7379ef69837%3A0xa8767aa7ef3f7933!2sLalru%2C%20Punyab!5e0!3m2!1ses!2sin!4v1743509023653!5m2!1ses!2sin"
        width="300"
        height="100"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </p>
    <p>© 2025 Your Company. All rights reserved.</p>
  </div>
  
  <div className="text-center md:text-left">
    <h1 className="mb-2">Newsletter</h1>
    <form action="">
      <div>
        <label className="flex justify-center md:justify-start" htmlFor="email">Email :</label>
        <input id="email" className="bg-white px-2 py-0.5 text-black mt-2 rounded-full" type="email" />
        <div className="cursor-pointer mt-5 rounded w-28 p-2 text-center text-white bg-slate-500 hover:bg-blue-900 mx-auto md:mx-0">
          <button>Submit</button>
        </div>
      </div>
    </form>
  </div>
</footer>



  )
}

export default Footer
