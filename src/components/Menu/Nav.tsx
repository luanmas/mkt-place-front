import Link from 'next/link';

export default function Navigation () {
    return (
        <nav className='flex'>
            <ul className="flex items-center">
                <li className='px-2'>
                    <Link href={'/home'}>
                        Home
                    </Link>
                </li>
                <li className='px-2'>
                    <Link href={'/marketplace'}>
                        Marketplace
                    </Link>
                </li>
            </ul>
        </nav>
    );
}