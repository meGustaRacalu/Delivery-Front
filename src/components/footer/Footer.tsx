import { GithubLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-orange-700 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                         Delivery Rota 77 | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nosso GitHub</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/meGustaRacalu" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
