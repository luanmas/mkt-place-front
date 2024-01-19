import ButtonOpenCart from './buttonOpenCart';
import ButtonSignOut from './buttonSignOut';
import Navigation from './Nav';

export default function Menu () {
    return (
        <header className='flex px-16 h-16 justify-between items-center'>
            <div className='flex items-center'>
                <h2 className='pr-3'>Logo</h2>
                <input type="text" className='py-1.5 px-5 rounded'/>
            </div>

            <div className='flex'>
                <Navigation />
                <ButtonOpenCart />
                <ButtonSignOut />
            </div>
        </header>
    );
}