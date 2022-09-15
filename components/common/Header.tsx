import { useEffect, useState } from 'react';

const Header = (props: any) => {
  return(
    <div className='mt-4 d-flex align-items-center justify-content-between'>
      <button className='btn btn-tab'>Berita</button>
      <button className='btn btn-tab'>Livestream</button>
      <button className='btn btn-tab'>Quiz</button>
    </div>
  )
}

export default Header;