export default function NavBar() {

    type NavItemsProps = {
        label: string,
        href: string,
        lastItem?: boolean,
    };

    const navItem = ({ label, href, lastItem = false }: NavItemsProps) => <a href={href} className={`text-[var(--text_color)] ${!lastItem && 'pr-10'}`}>{label}</a>;

    // const navItem = (label:string) => <a href="" className="text-white">{label}</a>;

    var navColor1 = 'bg-gray-800';
    var navColor2 = 'bg-[var(--primary_color)]';

    return (
        <nav>
            <div className={`${navColor2} h-24 flex justify-between items-center`}>
                <div className="">logo</div>

                {/* Nav Items */}
                <div>
                    <ul>
                        <li>
                            {navItem({ label: 'About', href: '' })}
                            {navItem({ label: 'Skills', href: '' })}
                            {navItem({ label: 'Projects', href: '' })}
                            {navItem({ label: 'Contact', href: '', lastItem: true })}

                        </li>
                    </ul>
                </div>

                {/* Hire me btn */}
                <div >

                </div>
            </div>
        </nav>
    );
} 