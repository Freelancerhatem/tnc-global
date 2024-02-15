

const Footer = () => {
    const date =  new Date();
    console.log(date);
    return (
        <div className="h-[30vh] relative bg-black text-white flex flex-col justify-center items-center">
            <div>
                <h1 className="text-center text-xl font-bold">Penguin</h1>
                <nav className="flex list-none gap-4 underline py-2">
                    <li>contacts</li>
                    <li>features</li>
                    <li>about</li>
                    <li>pages</li>
                </nav>
            </div>
            <p className="absolute bottom-1 text-gray-400">All rights reserved by TNC GLOBAL </p>
        </div>
    );
};

export default Footer;