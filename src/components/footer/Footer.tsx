import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-orange-700 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        MeGusta Delivery | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
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
