const Appicon = () => {
    return (
      <div>
        <div className='social-login'>
        <button className='social-button'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s' alt='Google' className='social-icon'/>
          Google 
        </button>

        <button className='social-button'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcP0ZcWRME2hXax1sPPgNtutzs7H0ZQv2vw&s' alt='Facebook' className='social-icon'/>
        Facebook
        </button>
        
      </div>
         <div className='social-login'>

         <button className='social-button'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoGhnWW9wN-P9X7Ckt3y0snA59WDlcsjeHg&s' alt='Apple' className='social-icon'/>
          Apple
        </button>
        
        <button className='social-button'>
        <img src='https://cdn-icons-png.flaticon.com/512/732/732221.png' alt='Microsoft' className='social-icon'/>
        Microsoft
        </button>
        </div>
        </div>  
    );
};

export default Appicon;